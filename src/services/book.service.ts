import { Book, Prisma, User } from '@/prisma/generated/client';
import ApiError from '../utils/ApiError';
import prisma from '../client';
import httpStatus from 'http-status';
import { BookCreateDto } from '../types/response';
import OpenAiService from './openai.service';
import * as fs from 'fs';
import handlebars from 'handlebars';
import path from 'path';
import * as cheerio from 'cheerio';

const generateBook = async (book: BookCreateDto): Promise<any[]> => {
  // generate book
  const personalMessage = book.personalMsg;
  // const res = await OpenAiService.generateAIBook(book);
  const res =
    '<section class="chapter">\n' +
    '    <h1>Introduction</h1>\n' +
    '    <h2 class="chapter-title">Chapter 1: The Beginning of an Adventure</h2>\n' +
    `    <p class="chapter-paragraph">Once upon a time, in a quaint little town nestled between rolling hills and lush greenery, lived a bright and spirited girl named John Doe. John, a seven-year-old with blonde hair, blue eyes, and a heart as pure as gold, was known for his infectious laughter and boundless curiosity. Growing up in a close-knit family that included his parents, Jane Doe and Jacob Doe, along with his loving grandparents, Helen Smith and Jane Doe, John's days were filled with love, laughter, and endless possibilities.</p>\n` +
    `    <p class="chapter-paragraph">Despite his young age, John possessed a wisdom and maturity that set him apart from his peers. His kind and compassionate nature endeared him to everyone he met, earning him the reputation of being a beacon of light in the community. Whether it was helping a neighbor carry groceries, comforting a friend in need, or simply spreading joy with his infectious smile, John's presence never failed to brighten the lives of those around him.</p>\n` +
    '    <p class="chapter-paragraph">As the sun rose over the horizon, casting a warm glow over the sleepy town, John knew that each new day brought with it the promise of exciting adventures and new opportunities to make a difference in the world. Little did he know that the greatest adventure of all was about to unfold, one that would test his courage, strength, and unwavering belief in the power of kindness.</p>\n' +
    '</section>\n' +
    '<section class="chapter">\n' +
    '    <h2 class="chapter-title">Chapter 2: The Mysterious Invitation</h2>\n' +
    '    <p class="chapter-paragraph">One crisp autumn morning, as John was playing in the backyard, a fluttering of white caught his eye. Curious, he approached the source of the movement and discovered a delicate envelope lying on the ground. Picking it up, he noticed that it was sealed with a wax stamp bearing an intricate emblem of a golden phoenix.</p>\n' +
    '    <p class="chapter-paragraph">Excitement bubbling within him, John carefully opened the envelope and read the elegant script inside. It was an invitation to a grand masquerade ball at the mysterious Enchanted Manor, nestled deep within the enchanted forest on the outskirts of town. The invitation urged the recipient to attend in their most exquisite costume and promised an evening of magic, mystery, and wonder.</p>\n' +
    '    <p class="chapter-paragraph">Eyes wide with wonder, John knew that this was an opportunity not to be missed. Eager to unravel the mysteries of the Enchanted Manor and experience the magic that awaited him, he made up his mind to attend the ball. With a twinkle in his eyes and a smile on his face, John set off on his grand adventure, his heart brimming with excitement and anticipation.</p>\n' +
    '</section>\n' +
    '<section class="chapter">\n' +
    '    <h2 class="chapter-title">Chapter 3: The Enchanted Manor</h2>\n' +
    '    <p class="chapter-paragraph">As John made his way through the winding paths of the enchanted forest, the tall trees whispered secrets of centuries past, their leaves rustling in anticipation of his arrival. The air was thick with magic, and a sense of otherworldly serenity enveloped him as he approached the grand gates of the Enchanted Manor.</p>\n' +
    '    <p class="chapter-paragraph">The manor itself was a sight to behold, its towering spires and ivy-covered walls exuding an aura of enchantment and mystery. As he entered the grand ballroom, John was met with a dazzling display of colors, lights, and music that filled the air with an electric energy.</p>\n' +
    '    <p class="chapter-paragraph">Donning a shimmering mask adorned with intricate designs, John mingled with the other guests, each one more fantastical than the last. There were fairies flitting about, elves dancing merrily, and creatures of myth and legend swirling in a mesmerizing dance of magic and wonder.</p>\n' +
    '</section>\n' +
    '<section class="chapter">\n' +
    '    <h2 class="chapter-title">Chapter 4: The Dance of Dreams</h2>\n' +
    '    <p class="chapter-paragraph">As the evening wore on, John found himself swept up in the whirlwind of the masquerade ball, his heart filled with joy and wonder. The music swirled around him, beckoning him to join the dancers on the floor in a mesmerizing display of grace and beauty.</p>\n' +
    '    <p class="chapter-paragraph">With a leap of faith, John took to the dance floor, his feet moving in perfect harmony with the enchanting melody. As he twirled and spun, his eyes met those of a mysterious figure across the room – a masked stranger whose gaze held a hint of familiarity and warmth.</p>\n' +
    '    <p class="chapter-paragraph">Drawn to the stranger as if by an invisible thread, John found himself dancing closer and closer, their movements mirroring each other in a dance of dreams. In that moment, surrounded by the magic of the Enchanted Manor, John felt a connection unlike any he had ever known, a bond that transcended time and space.</p>\n' +
    '</section>\n' +
    '<section class="chapter">\n' +
    '    <h2 class="chapter-title">Chapter 5: The Revelation</h2>\n' +
    `    <p class="chapter-paragraph">As the night drew to a close and the last notes of music faded into the ether, John's mysterious dance partner led him to a secluded corner of the ballroom, away from the prying eyes of the other guests. With a flick of their mask, the stranger revealed their true identity – it was none other than a lost soul seeking solace and understanding.</p>\n` +
    `    <p class="chapter-paragraph">Moved by the stranger's story of longing and sorrow, John listened with compassion and empathy, his kind heart reaching out to offer comfort and reassurance. In that moment of vulnerability and truth, a bond was forged between them that transcended words and gestures, a bond that would forever link their souls in a tapestry of light and love.</p>\n` +
    '    <p class="chapter-paragraph">As dawn broke over the horizon, painting the sky in hues of pink and gold, John bid farewell to the Enchanted Manor and the mysterious stranger who had touched his life in ways he could never have imagined. With a heart full of gratitude and a spirit renewed by the magic of the masquerade ball, John set off on his journey back home, his soul forever changed by the power of kindness and connection.</p>\n' +
    '</section>\n' +
    '<section class="chapter">\n' +
    '    <h2 class="chapter-title">Chapter 6: The Power of Kindness</h2>\n' +
    '    <p class="chapter-paragraph">Back in the embrace of his family, John shared the tale of his adventures at the Enchanted Manor, recounting the magic, mystery, and wonder that had touched his heart and soul. His eyes shone with a newfound wisdom and understanding, his spirit uplifted by the realization that even the smallest acts of kindness could ignite a spark of hope and joy in the darkest of places.</p>\n' +
    `    <p class="chapter-paragraph">Inspired by his experiences, John embarked on a mission to spread kindness and compassion wherever he went. Whether it was helping a friend in need, comforting a stranger in distress, or simply sharing a smile with someone who needed it most, John's presence brought light and warmth to all who crossed his path.</p>\n` +
    `    <p class="chapter-paragraph">As the days turned into weeks and the weeks into months, John's reputation as a beacon of kindness and integrity spread far and wide, touching the lives of countless souls along the way. His compassionate heart and selfless deeds became a guiding light in the community, inspiring others to follow in his footsteps and make the world a better place, one act of kindness at a time.</p>\n` +
    '</section>\n' +
    '<section class="chapter">\n' +
    '    <h2 class="chapter-title">Chapter 7: The Ripple Effect</h2>\n' +
    '    <p class="chapter-paragraph">One day, as John was walking home from school, he noticed a group of children gathered around a tree, their faces etched with worry and concern. Curious, he approached them and discovered a small bird lying injured at the base of the tree, its wing broken and its eyes filled with fear.</p>\n' +
    `    <p class="chapter-paragraph">Without hesitation, John knelt down beside the bird and gently cradled it in his hands, whispering words of comfort and reassurance. With a tender touch, he fashioned a small splint for the bird's wing from twigs and leaves, creating a makeshift home for it in the safety of his backpack.</p>\n` +
    `    <p class="chapter-paragraph">As the sun began to set and the world grew quiet around them, John stayed by the bird's side, watching over it with a sense of peace and serenity. Slowly but surely, the bird's wing healed, and with a joyful chirp, it took to the skies once more, soaring free and strong on the wings of John's kindness and compassion.</p>\n` +
    '</section>\n' +
    '<section class="chapter">\n' +
    '    <h2 class="chapter-title">Chapter 8: The Gift of Friendship</h2>\n' +
    `    <p class="chapter-paragraph">One afternoon, as John was playing in the park, he noticed a shy and lonely boy sitting alone on a bench, his eyes downcast and his shoulders slumped with sadness. Sensing the boy's need for a friend, John approached him with a warm smile and an outstretched hand, offering the gift of companionship and understanding.</p>\n` +
    `    <p class="chapter-paragraph">At first, the boy was hesitant and withdrawn, unsure of John's intentions and wary of opening his heart to another. But John's gentle persistence and unwavering kindness soon broke down the walls around the boy's heart, revealing a soul as bright and beautiful as his own.</p>\n` +
    '    <p class="chapter-paragraph">As the days turned into weeks and the weeks into months, John and the boy forged a bond of friendship that was unbreakable and true. They explored the wonders of the world together, sharing laughter, tears, and dreams under the watchful gaze of the stars.</p>\n' +
    '</section>\n';

  // convert book to pdf
  // console.log({ res });
  const $ = cheerio.load(res);
  const sections: any[] = [];
  $('section.chapter').each((index, element) => {
    sections.push($(element).html());
  });
  // const sections = res.split(Constants.SectionSeparator);

  // sections.map((x) => console.log(x, 'yo!'));
  // console.log({ sections, len: sections.length });

  handlebars.registerHelper('evenIndex', function (index: number) {
    return index % 2 === 0;
  });

  const templateHtml = fs.readFileSync(path.join(process.cwd(), 'html/index.hbs'), 'utf8');
  const template = handlebars.compile(templateHtml);

  const htmlSections = sections.map((x, index) => {
    const htmlContent = template({ isEven: index % 2 === 0, content: x });
    fs.writeFileSync(`page_${index}.html`, htmlContent);
    return htmlContent;
  });

  // const firstPage = `<section><p class="chapter-paragraph">${personalMessage}</p></section>`;

  // const html = template({
  //   sections: sections
  // });

  return htmlSections;
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
