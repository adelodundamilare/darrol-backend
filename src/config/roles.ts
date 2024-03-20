import { EnumRole } from '@/prisma/generated/client';

const allRoles = {
  [EnumRole.USER]: [],
  [EnumRole.ADMIN]: ['getUsers', 'manageUsers']
};

export const roles = Object.keys(allRoles);
export const roleRights = new Map(Object.entries(allRoles));
