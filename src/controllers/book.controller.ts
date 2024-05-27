import httpStatus from 'http-status';
import catchAsync from '../utils/catchAsync';
import bookService from '../services/book.service';
import pdfService from '../services/pdf.service';
import pick from '../utils/pick';
import { BookCreateDto, CreateBookDto } from '../types/response';
import OpenAiService from '../services/openai.service';

const generateBook = catchAsync(async (req, res) => {
  try {
    const body: BookCreateDto = req.body;
    const aiBookPlain = await OpenAiService.generateAIBook(body);

    const characterName = body.firstName;
    // const aiBookPlain =
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

    const book_title = bookService.findBookTitle(aiBookPlain); //<h1 class="our book title">
    // generate main character
    // const mainCharacter = await OpenAiService.generateMainCharacter(body);

    const generatedBook = await bookService.generateBook(aiBookPlain, body);
    const pdf = await pdfService.generatePDFfromHTML(generatedBook, 'src/public/ai-story-book.pdf');

    // console.log({ mainCharacter });
    // res.send({ success: true, message: 'Book generated successfully', data: mainCharacter });

    const generatedCover = await bookService.generateBookCover(book_title, body);
    const cover = await pdfService.generatePDFCoverFromHTML(
      generatedCover,
      'src/public/ai-story-book-cover.pdf'
    );

    res.send({ success: true, message: 'Book generated successfully', data: { book: pdf, cover } });
  } catch (error: any) {
    console.log({ error });
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ success: false, message: error.message });
  }
});

const createBook = catchAsync(async (req, res) => {
  try {
    const data: CreateBookDto = req.body;
    const user = req.user;
    const book = null;
    res
      .status(httpStatus.CREATED)
      .send({ success: true, message: 'Book created successfully', data: book });
  } catch (error: any) {
    console.log({ error });
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ success: false, message: error.message });
  }
});

const getBooks = catchAsync(async (req, res) => {
  try {
    const filter = pick(req.query, ['name', 'amount']);
    const options = pick(req.query, ['sortBy', 'limit', 'page']);
    const result = await bookService.queryBooks(filter, options);
    res.send({ success: true, message: 'Books fetched successfully', data: result });
  } catch (error: any) {
    console.log({ error });
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ success: false, message: error.message });
  }
});

export default {
  createBook,
  getBooks,
  generateBook
};
