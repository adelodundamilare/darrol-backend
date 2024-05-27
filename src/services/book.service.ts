import { Book, Prisma, User } from '@/prisma/generated/client';
import ApiError from '../utils/ApiError';
import prisma from '../client';
import httpStatus from 'http-status';
import { BookCreateDto, CreateAvatarDto } from '../types/response';
import OpenAiService from './openai.service';
import * as fs from 'fs';
import handlebars from 'handlebars';
import path from 'path';

const generateBook = async (bookPlain: string, book: BookCreateDto): Promise<string[]> => {
  // generate book
  const personalMessage = book.personalMsg;

  const chapters = _getChapters(bookPlain);
  const chapterSections = _getSectionsFromChapters(chapters);
  const chapterSectionsWithImage = await _addSectionImage(chapterSections, book);

  const firstPage = `<section class="special-chapter"><p class="chapter-paragraph">${personalMessage}</p></section>`;
  const lastPage = `<section class="last-chapter"></section>`;
  const sections = [firstPage, ...chapterSectionsWithImage.flat(), lastPage];

  const templateHtml = fs.readFileSync(path.join(process.cwd(), 'html/index.hbs'), 'utf8');
  const template = handlebars.compile(templateHtml);

  const htmlSections = sections.map((x, index) => {
    const htmlContent = template({
      hasSpecialBg: hasSpecialBg(x),
      content: x,
      // isImage: x.startsWith('https'),
      isImage: isBase64(x),
      isLastPage: isLastPage(x),
      name: book.firstName
    });
    return htmlContent;
  });
  // const html = template({
  //   sections: sections
  // });

  return htmlSections;
};

function isBase64(str: any) {
  // Check the length of the string is a multiple of 4
  if (str.includes('data:image/png;base64,')) {
    return true;
  }

  return false;
}

function hasSpecialBg(x: any) {
  if (isBase64(x)) {
    return false;
  }

  return (
    x.startsWith('<section class="special-chapter">') ||
    x.startsWith('<section class="last-chapter">')
  );
}

function isLastPage(x: any) {
  if (isBase64(x)) {
    return false;
  }

  return x.startsWith('<section class="last-chapter"></section>');
}

const generateBookCover = async (bookPlain: string, book: BookCreateDto): Promise<string> => {
  const templateHtml = fs.readFileSync(path.join(process.cwd(), 'html/index.hbs'), 'utf8');
  const template = handlebars.compile(templateHtml);
  const regexPattern = /<h1[^>]*>([^<]+)<\/h1>/;
  const match = bookPlain.match(regexPattern);
  let textContent = bookPlain;
  if (match && match.length > 1) {
    textContent = match[1];
  }
  const prompt = `
  Main Character Description:
  ${OpenAiService.mainCharacterPrompt(book)}

  Instruction:
  Generate an high quality 3D Pixar like image of the main character whose name is '${
    book.firstName
  }'

  acting out this scene ${textContent} in a ${book.theme} theme
  `;
  // let imageUrl = await OpenAiService.generateImageFromSummary(textContent);
  let imageUrl = await OpenAiService.generateImage(prompt);
  imageUrl = decodeEntities(imageUrl);

  console.log({ textContent });

  const htmlContent = template({
    content: imageUrl,
    isCoverPage: true,
    isImage: true,
    title: textContent ?? 'Kids Book',
    name: book.firstName
  });

  console.log('>>>>>>>>>>>> success::: generateBookCover');

  return htmlContent;
};

const decodeEntities = (str: string): string => {
  if (isBase64(str)) {
    return str;
  }
  return str
    .replace(/&#x([\da-fA-F]+);/g, function (match, hex) {
      return String.fromCharCode(parseInt(hex, 16));
    })
    .replace(/&amp;/g, '&');
};

const findBookTitle = (rawHtml: string): string => {
  const sectionRegex = /<h1 class="our-book-title">([\s\S]*?)<\/h1>/g;
  const res = rawHtml.match(sectionRegex);
  if (res && res.length > 0) {
    return res[0];
  }
  return '';
};

const _getChapters = (rawHtml: string): string[] => {
  const sectionRegex = /<section class="chapter">([\s\S]*?)<\/section>/g;
  return rawHtml.match(sectionRegex) ?? [];
};

const _computeLastPage = (name: string): string => {
  return `<h1>Het Einde</h1>
  <p class="chapter-paragraph">Jouw magische avontuur zit erop, ${name}! Hopelijk heb je veel leesplezier gehad en genoten van alle spannende avonturen.</p>
  <p class="chapter-paragraph">Bewaar dit boek als een schat, deze is met veel liefde speciaal voor jou gemaakt. </p>
  <p class="chapter-paragraph">Magische groet, team Whispery</p>
  `;
};

const _getSectionsFromChapters = (chapters: string[]): string[] => {
  const sectionsArray = chapters.map((section) => {
    const children = [];
    // Use regular expression to match each child element within the section
    const childRegex = /(<.*?>[\s\S]*?<\/.*?>)/g;
    let match;
    while ((match = childRegex.exec(section)) !== null) {
      children.push(match[1]);
    }
    return children;
  });

  const data = sectionsArray.flat();

  const cleanedData = [];

  for (const page of data) {
    if (page.includes('class="chapter-title"') || page.includes('<h1>')) {
      // console.log(`filter this::: ${page}`);
      continue;
    }
    cleanedData.push(page);
  }

  return cleanedData;
};

const _addSectionImage = async (
  chapterSections: string[],
  book: BookCreateDto
): Promise<string[]> => {
  // firstName using this gen_id acting out this scene x
  const prompt = (x: string) => `
  Main Character Description:
  ${OpenAiService.mainCharacterPrompt(book)}

  Instruction:
  Generate an high quality 3D Pixar like image of the main character whose name is '${
    book.firstName
  }'

  acting out this scene ${x} in a ${book.theme} theme
  `;
  const images = await Promise.all(
    chapterSections.map((x) => OpenAiService.generateImage(prompt(x)))
  );
  // const imageUrl = await OpenAiService.generateImage(item);
  // res.push([item, imageUrl]);
  const combinedArray = [];

  for (let i = 0; i < chapterSections.length; i++) {
    combinedArray.push(chapterSections[i]);
    combinedArray.push(images[i]);
  }

  console.log('>>>>>>>>>>>> success: _addSectionImage:: add image to all section');

  return combinedArray;
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

function generateDescriptions(chapters: string[], name: string): string[] {
  return chapters.map((x) => `${name} acting this scene ${x}`);
}

export default {
  generateBook,
  queryBooks,
  getBookById,
  updateBookById,
  findBookTitle,
  generateBookCover
};
