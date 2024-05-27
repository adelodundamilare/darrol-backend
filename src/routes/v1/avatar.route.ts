import avatarValidation from '../../validations/avatar.validation';
import validate from '../../middlewares/validate';
import express from 'express';
import avatarController from '../../controllers/avatar.controller';

const router = express.Router();

router.route('/').post(validate(avatarValidation.createAvatar), avatarController.createAvatar);

export default router;

/**
 * @swagger
 * tags:
 *   name: Avatars
 *   description: Avatar management and retrieval
 */

/**
 * @swagger
 * /avatars:
 *   post:
 *     summary: Create an avatar
 *     description: Anyone can create an avatar.
 *     tags: [Avatars]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example:
 *               gender: girl | boy
 *               skinColor: light | medium | dark
 *               hairStyle: very short bald | short straight | short curly | medium length straight | medium length curly | long straight | long curly
 *               hairColor: blonde | brown | dark | red
 *               eyeColor: blue | green | brown
 *               glasses: true | false
 *     responses:
 *       "200":
 *         description: Success
 * */
