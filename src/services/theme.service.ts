import { Theme, Prisma } from '@/prisma/generated/client';
import ApiError from '../utils/ApiError';
import prisma from '../client';
import httpStatus from 'http-status';

const createTheme = async (data: Theme): Promise<Theme> => {
  if (await getThemeByName(data.name)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Theme with name already exist');
  }

  return prisma.theme.create({
    data: data
  });
};

const updateThemeById = async (
  itemId: number,
  updateBody: Prisma.ThemeUpdateInput
): Promise<Theme> => {
  const data = await getThemeById(itemId);
  if (!data) {
    throw new ApiError(httpStatus.NOT_FOUND, 'theme with id does not exist');
  }
  if (updateBody.name && (await getThemeByName(updateBody.name as string))) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'theme with name already exist');
  }

  const res = prisma.theme.update({
    where: { id: itemId },
    data: updateBody
  });

  return res;
};

const getThemeByName = async <Key extends keyof Theme>(
  name: string
): Promise<Pick<Theme, Key> | null> => {
  return prisma.theme.findFirst({
    where: { name: name }
  }) as Promise<Pick<Theme, Key> | null>;
};

const getThemeById = async <Key extends keyof Theme>(
  id: number
): Promise<Pick<Theme, Key> | null> => {
  return prisma.theme.findUnique({
    where: { id }
  }) as Promise<Pick<Theme, Key> | null>;
};

const queryThemes = async <Key extends keyof Theme>(
  filter: object,
  options: {
    limit?: number;
    page?: number;
    sortBy?: string;
    sortType?: 'asc' | 'desc';
  }
): Promise<Pick<Theme, Key>[]> => {
  const page = options.page ?? 1;
  const limit = options.limit ?? 10;
  const sortBy = options.sortBy;
  const sortType = options.sortType ?? 'desc';
  const res = await prisma.theme.findMany({
    where: filter,
    skip: page == 1 ? 0 : (page - 1) * limit,
    take: limit,
    orderBy: sortBy ? { [sortBy]: sortType } : undefined
  });
  return res as Pick<Theme, Key>[];
};

const deleteThemeById = async (dataId: number): Promise<Theme> => {
  const data = await getThemeById(dataId);
  if (!data) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  await prisma.theme.delete({ where: { id: data.id } });
  return data;
};

export default {
  createTheme,
  queryThemes,
  getThemeById,
  updateThemeById,
  deleteThemeById
};
