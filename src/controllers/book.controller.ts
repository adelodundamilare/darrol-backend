import httpStatus from 'http-status';
import catchAsync from '../utils/catchAsync';
import bookService from '../services/book.service';
import pdfService from '../services/pdf.service';
import pick from '../utils/pick';
import { BookCreateDto, CreateBookDto } from '../types/response';

const generateBook = catchAsync(async (req, res) => {
  try {
    const body: BookCreateDto = req.body;
    const aiBook = await bookService.generateBook(body);
    const pdf = await pdfService.generatePDFfromHTML(aiBook, 'src/public/ai-story-book.pdf');
    res.send({ success: true, message: 'Book generated successfully', data: pdf });
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
