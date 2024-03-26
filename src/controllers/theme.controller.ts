import httpStatus from 'http-status';
import catchAsync from '../utils/catchAsync';
import themeService from '../services/theme.service';
import pick from '../utils/pick';
import { Theme } from '@/prisma/generated/client';
import ApiError from '../utils/ApiError';

const createTheme = catchAsync(async (req, res) => {
  const data: Theme = req.body;
  const result = await themeService.createTheme(data);
  res
    .status(httpStatus.CREATED)
    .send({ success: true, message: 'theme created successfully', data: result });
});

const getThemes = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await themeService.queryThemes(filter, options);
  res.send({ success: true, message: 'theme fetched successfully', data: result });
});

const getThemeById = catchAsync(async (req, res) => {
  const data = await themeService.getThemeById(req.params.id);
  if (!data) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Theme not found');
  }
  res.send({ success: true, message: 'theme fetched successfully', data });
});

const updateThemeById = catchAsync(async (req, res) => {
  const result = await themeService.updateThemeById(req.params.id, req.body);
  res.send({ success: true, message: 'theme updated successfully', data: result });
});

const deleteThemeById = catchAsync(async (req, res) => {
  await themeService.deleteThemeById(req.params.id);
  res.status(httpStatus.NO_CONTENT).send({ success: true, message: 'theme deleted successfully' });
});

export default {
  createTheme,
  getThemes,
  updateThemeById,
  deleteThemeById,
  getThemeById
};
