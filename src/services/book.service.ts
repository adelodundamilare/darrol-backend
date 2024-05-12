import { Book, Prisma, User } from '@/prisma/generated/client';
import ApiError from '../utils/ApiError';
import prisma from '../client';
import httpStatus from 'http-status';
import { BookCreateDto } from '../types/response';
import OpenAiService from './openai.service';
import * as fs from 'fs';
import handlebars from 'handlebars';
import path from 'path';

const generateBook = async (bookPlain: string, book: BookCreateDto): Promise<string[]> => {
  // generate book
  const personalMessage = book.personalMsg;
  // const res =
  //   '<section class="chapter">\n' +
  //   '    <h1>Introduction</h1>\n' +
  //   '    <h2 class="chapter-title">Chapter 1: The Beginning of an Adventure</h2>\n' +
  //   `    <p class="chapter-paragraph">Once upon a time, in a quaint little town nestled between rolling hills and lush greenery, lived a bright and spirited girl named John Doe. John, a seven-year-old with blonde hair, blue eyes, and a heart as pure as gold, was known for his infectious laughter and boundless curiosity. Growing up in a close-knit family that included his parents, Jane Doe and Jacob Doe, along with his loving grandparents, Helen Smith and Jane Doe, John's days were filled with love, laughter, and endless possibilities.</p>\n` +
  //   `    <p class="chapter-paragraph">Despite his young age, John possessed a wisdom and maturity that set him apart from his peers. His kind and compassionate nature endeared him to everyone he met, earning him the reputation of being a beacon of light in the community. Whether it was helping a neighbor carry groceries, comforting a friend in need, or simply spreading joy with his infectious smile, John's presence never failed to brighten the lives of those around him.</p>\n` +
  //   '    <p class="chapter-paragraph">As the sun rose over the horizon, casting a warm glow over the sleepy town, John knew that each new day brought with it the promise of exciting adventures and new opportunities to make a difference in the world. Little did he know that the greatest adventure of all was about to unfold, one that would test his courage, strength, and unwavering belief in the power of kindness.</p>\n' +
  //   '</section>\n' +
  //   '<section class="chapter">\n' +
  //   '    <h2 class="chapter-title">Chapter 2: The Mysterious Invitation</h2>\n' +
  //   '    <p class="chapter-paragraph">One crisp autumn morning, as John was playing in the backyard, a fluttering of white caught his eye. Curious, he approached the source of the movement and discovered a delicate envelope lying on the ground. Picking it up, he noticed that it was sealed with a wax stamp bearing an intricate emblem of a golden phoenix.</p>\n' +
  //   '    <p class="chapter-paragraph">Excitement bubbling within him, John carefully opened the envelope and read the elegant script inside. It was an invitation to a grand masquerade ball at the mysterious Enchanted Manor, nestled deep within the enchanted forest on the outskirts of town. The invitation urged the recipient to attend in their most exquisite costume and promised an evening of magic, mystery, and wonder.</p>\n' +
  //   '    <p class="chapter-paragraph">Eyes wide with wonder, John knew that this was an opportunity not to be missed. Eager to unravel the mysteries of the Enchanted Manor and experience the magic that awaited him, he made up his mind to attend the ball. With a twinkle in his eyes and a smile on his face, John set off on his grand adventure, his heart brimming with excitement and anticipation.</p>\n' +
  //   '</section>\n' +
  //   '<section class="chapter">\n' +
  //   '    <h2 class="chapter-title">Chapter 3: The Enchanted Manor</h2>\n' +
  //   '    <p class="chapter-paragraph">As John made his way through the winding paths of the enchanted forest, the tall trees whispered secrets of centuries past, their leaves rustling in anticipation of his arrival. The air was thick with magic, and a sense of otherworldly serenity enveloped him as he approached the grand gates of the Enchanted Manor.</p>\n' +
  //   '    <p class="chapter-paragraph">The manor itself was a sight to behold, its towering spires and ivy-covered walls exuding an aura of enchantment and mystery. As he entered the grand ballroom, John was met with a dazzling display of colors, lights, and music that filled the air with an electric energy.</p>\n' +
  //   '    <p class="chapter-paragraph">Donning a shimmering mask adorned with intricate designs, John mingled with the other guests, each one more fantastical than the last. There were fairies flitting about, elves dancing merrily, and creatures of myth and legend swirling in a mesmerizing dance of magic and wonder.</p>\n' +
  //   '</section>\n';

  const chapters = _getChapters(bookPlain);
  const chapterSections = _getSectionsFromChapters(chapters);
  const chapterSectionsWithImage = await _addSectionImage(chapterSections);

  const firstPage = `<section class="special-chapter"><p class="chapter-paragraph">${personalMessage}</p></section>`;
  const lastPage = `<section class="special-chapter">${_computeLastPage(book.firstName)}</section>`;
  const sections = [firstPage, ...chapterSectionsWithImage.flat(), lastPage];

  const templateHtml = fs.readFileSync(path.join(process.cwd(), 'html/index.hbs'), 'utf8');
  const template = handlebars.compile(templateHtml);

  const htmlSections = sections.map((x, index) => {
    const htmlContent = template({
      hasSpecialBg: x.startsWith('<section class="special-chapter">'),
      content: x,
      isImage: x.startsWith('https'),
      // isCoverPage: x == coverPageImageUrl,
      name: book.firstName
    });
    return htmlContent;
  });

  console.log('>>>>>>>>>>>> success::: generateBook');
  // const html = template({
  //   sections: sections
  // });

  return htmlSections;
};

const generateBookCover = async (bookPlain: string, book: BookCreateDto): Promise<string> => {
  const templateHtml = fs.readFileSync(path.join(process.cwd(), 'html/index.hbs'), 'utf8');
  const template = handlebars.compile(templateHtml);
  const regexPattern = /<h1[^>]*>([^<]+)<\/h1>/;
  const match = bookPlain.match(regexPattern);
  let textContent = bookPlain;
  if (match && match.length > 1) {
    textContent = match[1];
  }
  // let imageUrl = await OpenAiService.generateImageFromSummary(textContent);
  let imageUrl = await OpenAiService.generateCoverPageImage(textContent);
  imageUrl = decodeEntities(imageUrl);

  // console.log({ textContent, imageUrl });

  const htmlContent = template({
    content: imageUrl,
    isCoverPage: true,
    isImage: true,
    name: book.firstName
  });

  console.log('>>>>>>>>>>>> success::: generateBookCover');

  return htmlContent;
};

const decodeEntities = (str: string): string => {
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

const _getSectionsFromChapters = (chapters: string[]): string[][] => {
  const sectionsArray = chapters.map((section) => {
    // Use regular expression to match each child element within the section
    const childRegex = /(<.*?>[\s\S]*?<\/.*?>)/g;
    const children = [];
    let match;
    while ((match = childRegex.exec(section)) !== null) {
      children.push(match[1]);
    }
    return children;
  });

  return sectionsArray;
};

const _addSectionImage = async (chapterSections: string[][]): Promise<string[][]> => {
  let res = [];

  // for (const item of chapterSections) {
  //   const combinedSection = item.join('\n');
  //   const imageUrl = await OpenAiService.generateImageFromSummary(combinedSection);
  //   item.shift(); // remove first item from section and replace with generated image
  //   res.push([imageUrl, ...item]);
  // }
  // for (const item of chapterSections) {
  //   let resInner = [];
  //   for (const page of item) {
  //     // const combinedSection = item.join('\n');
  //     const imageUrl = await OpenAiService.generateImageFromSummary(page);
  //     resInner.push([imageUrl, page]);
  //   }
  //   res.push(resInner)
  //   // item.shift(); // remove first item from section and replace with generated image
  // }

  for (const item of chapterSections) {
    for (const page of item) {
      if (page.includes('<h2 class="chapter-title">')) {
        continue;
      }
      const imageUrl = await OpenAiService.generateImageFromSummary(page);
      res.push([page, imageUrl]);
    }
  }

  console.log('>>>>>>>>>>>> success: _addSectionImage:: add image to all section');

  return res;
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
  updateBookById,
  findBookTitle,
  generateBookCover
};
