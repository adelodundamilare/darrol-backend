import controller from '../../controllers/theme.controller';
import auth from '../../middlewares/auth';
import validate from '../../middlewares/validate';
import validation from '../../validations/theme.validation';
import express from 'express';

const router = express.Router();

router
  .route('/')
  .post(auth('createTheme'), validate(validation.createTheme), controller.createTheme)
  .get(validate(validation.getThemes), controller.getThemes);

router
  .route('/:id')
  .get(validate(validation.getTheme), controller.getThemeById)
  .patch(auth('manageTheme'), validate(validation.updateTheme), controller.updateThemeById)
  .delete(auth('manageTheme'), validate(validation.deleteTheme), controller.deleteThemeById);

export default router;

/**
 * @swagger
 * tags:
 *   name: Themes
 *   description: Theme management and retrieval
 */

/**
 * @swagger
 * /themes:
 *   post:
 *     summary: Create a Theme
 *     description: Only admins can create theme.
 *     tags: [Themes]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example:
 *               name: Purchasing a pet
 *               coverImageUrl: https://nice-dog-pic.jpg
 *     responses:
 *       "201":
 *         description: OK
 *
 *   get:
 *     summary: Get all themes
 *     description: All users can retrieve all themes.
 *     tags: [Themes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
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
 *     responses:
 *       "200":
 *         description: OK
 */

/**
 * @swagger
 * /themes/{id}:
 *   get:
 *     summary: Get a theme
 *     description: Any logged in user can fetch a theme.
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
