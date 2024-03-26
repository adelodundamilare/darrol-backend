import bookController from '@/src/controllers/book.controller';
import auth from '@/src/middlewares/auth';
import validate from '@/src/middlewares/validate';
import bookValidation from '@/src/validations/book.validation';
import express from 'express';

const router = express.Router();

router
  .route('/')
  .post(auth('manageUsers'), validate(bookValidation.createBook), bookController.createBook)
  .get(auth('getUsers'), validate(bookValidation.getBooks), bookController.getBooks);

export default router;

/**
 * @swagger
 * tags:
 *   name: Books
 *   description: Book management and retrieval
 */

/**
 * @swagger
 * /books:
 *   post:
 *     summary: Create a book
 *     description: Only admins can create books.
 *     tags: [Books]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - price
 *               - description
 *               - imageUrl
 *             example:
 *               name: Scooby Doo
 *               price: 2400
 *               description: A book about Scooby doo
 *               imageUrl: https://nice-dog-pic.jpg
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/User'
 *       "400":
 *         $ref: '#/components/responses/DuplicateEmail'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all books
 *     description: Only admins can retrieve all books.
 *     tags: [Books]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Book name
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *         description: sort by query in the form of field:desc/asc (ex. name:asc)
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *         default: 10
 *         description: Maximum number of books
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number
 *     responses:
 *       "200":
 *       "401":
 *       "403":
 */
