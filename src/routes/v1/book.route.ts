import bookController from '../../controllers/book.controller';
import auth from '../../middlewares/auth';
import validate from '../../middlewares/validate';
import bookValidation from '../../validations/book.validation';
import express from 'express';

const router = express.Router();

router
  .route('/')
  .post(auth(), validate(bookValidation.createBook), bookController.createBook)
  .get(auth(), validate(bookValidation.getBooks), bookController.getBooks);

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
 *             example:
 *               name: Scooby Doo
 *               price: 2400
 *               description: A book about Scooby doo
 *               imageUrl: https://nice-dog-pic.jpg
 *     responses:
 *       "201":
 *         description: Created
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
 *         description: Created
 */

/**
 * @swagger
 * /books/{id}:
 *   get:
 *     summary: Get a book
 *     description: Any logged in user can fetch a book.
 *     tags: [Books]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: OK
 *
 *   patch:
 *     summary: Update a theme
 *     description: Only admins can update a theme.
 *     tags: [Themes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example:
 *               name: new theme name
 *               coverImageUrl: https://new-nice-dog-pic.jpg
 *     responses:
 *       "200":
 *         description: OK
 *
 *   delete:
 *     summary: Delete a theme
 *     description: Only admins can delete a theme.
 *     tags: [Themes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: No content
 */
