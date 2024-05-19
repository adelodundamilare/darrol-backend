import ApiError from '../utils/ApiError';
import httpStatus from 'http-status';
import { CreateAvatarDto } from '../types/response';
import OpenAiService from './openai.service';

const createAvatar = async (avatar: CreateAvatarDto): Promise<any> => {
  // if (!avatar) {
  //   throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid Avatar data');
  // }
  // const response = await OpenAiService.generateImage(avatar);
  // return response;
};

const regenerateAvatar = async (imageUrl: string): Promise<any> => {
  if (!imageUrl) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid Image Url');
  }
  const response = await OpenAiService.reGenerateImage(imageUrl);
  return response;
};

export default {
  createAvatar,
  regenerateAvatar
};
