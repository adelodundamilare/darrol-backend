import { Book, Prisma, User } from '@/prisma/generated/client';
import ApiError from '../utils/ApiError';
import prisma from '../client';
import httpStatus from 'http-status';
import { BookCreateDto, CreateBookDto } from '../types/response';
import OpenAiService from './openai.service';
import * as fs from 'fs';
import handlebars from 'handlebars';
import path from 'path';
import Constants from '../utils/constants';

const generateBook = async (book: BookCreateDto) => {
  // generate book
  const res = await OpenAiService.generateAIBook(book);
  // convert book to pdf
  const sections = res.split(Constants.SectionSeparator);

  sections.map((x) => console.log(x, 'yo!'));
  console.log({ len: sections.length });

  const templateHtml = fs.readFileSync(path.join(process.cwd(), 'html/index.hbs'), 'utf8');
  const template = handlebars.compile(templateHtml);
  const html = template({
    sections: sections
  });

  return html;
};

const updateBookById = async (
  bookId: number,
  updateBody: Prisma.BookUpdateInput
): Promise<Book> => {
  const book = await getBookById(bookId);
  if (!book) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Book with id does not exist');
  }
  if (updateBody.name && (await getBookByName(updateBody.name as string))) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Book with name already exist');
  }
  if (updateBody.name) {
    book.slug = _createSlug(book.name);
  }

  const res = prisma.book.update({
    where: { id: bookId },
    data: updateBody
  });

  return res;
};

const getBookByName = async <Key extends keyof Book>(
  name: string
): Promise<Pick<Book, Key> | null> => {
  return prisma.book.findFirst({
    where: { name: name }
  }) as Promise<Pick<Book, Key> | null>;
};

const getBookById = async <Key extends keyof Book>(id: number): Promise<Pick<Book, Key> | null> => {
  return prisma.book.findUnique({
    where: { id }
  }) as Promise<Pick<Book, Key> | null>;
};

const queryBooks = async <Key extends keyof Book>(
  filter: object,
  options: {
    limit?: number;
    page?: number;
    sortBy?: string;
    sortType?: 'asc' | 'desc';
  }
): Promise<Pick<Book, Key>[]> => {
  const page = options.page ?? 1;
  const limit = options.limit ?? 10;
  const sortBy = options.sortBy;
  const sortType = options.sortType ?? 'desc';
  const books = await prisma.book.findMany({
    where: filter,
    skip: page * limit,
    take: limit,
    orderBy: sortBy ? { [sortBy]: sortType } : undefined
  });
  return books as Pick<Book, Key>[];
};

function _createSlug(name: string): string {
  let slug = name.toLowerCase().replace(/[^\w\s-]/g, '');
  slug = slug.replace(/\s+/g, '-');
  slug = slug.replace(/^-+|-+$/g, '');
  return slug;
}

export default {
  generateBook,
  queryBooks,
  getBookById,
  updateBookById
};
