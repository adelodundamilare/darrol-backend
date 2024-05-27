import httpStatus from 'http-status';
import catchAsync from '../utils/catchAsync';
import { CreateAvatarDto } from '../types/response';
import avatarService from '../services/avatar.service';

const createAvatar = catchAsync(async (req, res) => {
  try {
    const body: CreateAvatarDto = req.body;
    const data = await avatarService.createAvatar(body);
    res
      .status(httpStatus.CREATED)
      .send({ success: true, message: 'Avatar created successfully', data: data });
  } catch (error: any) {
    console.log({ error });
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ success: false, message: error.message });
  }
});

export default {
  createAvatar
};
