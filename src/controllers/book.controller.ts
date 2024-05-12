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
    const book_title = bookService.findBookTitle(aiBookPlain);

    const [aiBook, bookCover] = await Promise.all([
      bookService.generateBook(aiBookPlain, body),
      bookService.generateBookCover(book_title, body)
    ]);

    // console.log({ bookCover });

    const [pdf, cover] = await Promise.all([
      pdfService.generatePDFfromHTML(aiBook, 'src/public/ai-story-book.pdf'),
      pdfService.generatePDFCoverFromHTML(bookCover, 'src/public/ai-story-book-cover.pdf')
    ]);

    console.log('>>>>>>>>>>>> success::: generateBook controller');

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
