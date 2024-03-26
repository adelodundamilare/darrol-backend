import { Book, Prisma, User } from '@/prisma/generated/client';
import ApiError from '../utils/ApiError';
import prisma from '../client';
import httpStatus from 'http-status';
import { CreateBookDto } from '../types/response';

const createBook = async (book: CreateBookDto, user: User): Promise<Book> => {
  const oldBook = await getBookByName(book.name);
  if (oldBook) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Book with name already exist');
  }

  return prisma.book.create({
    data: { ...book, slug: _createSlug(book.name), user: { connect: { id: user.id } } }
  });
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
  createBook,
  queryBooks,
  getBookById,
  updateBookById
};
