import httpStatus from 'http-status';
import catchAsync from '../utils/catchAsync';
import bookService from '../services/book.service';
import pick from '../utils/pick';
import { Book } from '@/prisma/generated/client';

const createBook = catchAsync(async (req, res) => {
  const book: Book = req.body;
  const user = await bookService.createBook(book);
  res.status(httpStatus.CREATED).send(user);
});

const getBooks = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'amount']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await bookService.queryBooks(filter, options);
  res.send(result);
});

export default {
  createBook,
  getBooks
};
