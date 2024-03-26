import httpStatus from 'http-status';
import catchAsync from '../utils/catchAsync';
import bookService from '../services/book.service';
import pick from '../utils/pick';
import { Book, User } from '@/prisma/generated/client';
import { CreateBookDto } from '../types/response';

const createBook = catchAsync(async (req, res) => {
  try {
    const data: CreateBookDto = req.body;
    const user = req.user;
    const book = await bookService.createBook(data, user as User);
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
  getBooks
};
