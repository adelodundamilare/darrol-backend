import avatarValidation from '@/src/validations/avatar.validation';
import validate from '../../middlewares/validate';
import express from 'express';
import avatarController from '@/src/controllers/avatar.controller';

const router = express.Router();

router.route('/').post(validate(avatarValidation.createAvatar), avatarController.createAvatar);
router.post(
  '/regenerate',
  validate(avatarValidation.regenerateAvatar),
  avatarController.regenerateAvatar
);

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
 * /avatars/regenerate:
 *   post:
 *     summary: Regenerate an avatar
 *     description: Anyone can regenerate an avatar.
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
 *               imageUrl: https://oaidalleapiprodscus.blob.core.windows.net/private/org-gXSCaR9uJMmlamPGlrK4RTZn/user-jcseZEzJtoLu6DiQIoubsBxt/img-ULLMsh4CzxyOhR0SsYpsttwc.png?st=2024-04-20T06%3A27%3A05Z&se=2024-04-20T08%3A27%3A05Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-04-19T22%3A39%3A27Z&ske=2024-04-20T22%3A39%3A27Z&sks=b&skv=2021-08-06&sig=OZfBMxY%2BIxTu%2BnzDFXd2yPTfXwAtV5qxkdvuu5AagZM%3D
 *     responses:
 *       "200":
 *         description: Success
 * */
