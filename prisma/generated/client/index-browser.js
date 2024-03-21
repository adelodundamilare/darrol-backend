
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.7.1
 * Query Engine version: 9035a1b3236277185290a05f5f4ca9afd179d699
 */
Prisma.prismaVersion = {
  client: "4.7.1",
  engine: "9035a1b3236277185290a05f5f4ca9afd179d699"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  email: 'email',
  phone: 'phone',
  password: 'password',
  gender: 'gender',
  age: 'age',
  role: 'role',
  isEmailVerified: 'isEmailVerified',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  hairStyle: 'hairStyle'
});

exports.Prisma.FamilyMemberScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  userId: 'userId'
});

exports.Prisma.TokenScalarFieldEnum = makeEnum({
  id: 'id',
  token: 'token',
  type: 'type',
  expires: 'expires',
  blacklisted: 'blacklisted',
  createdAt: 'createdAt',
  userId: 'userId'
});

exports.Prisma.EventScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  date: 'date',
  createdById: 'createdById'
});

exports.Prisma.BookScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  price: 'price',
  description: 'description',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  userId: 'userId'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.NullsOrder = makeEnum({
  first: 'first',
  last: 'last'
});
exports.EnumGender = makeEnum({
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHER: 'OTHER'
});

exports.EnumRole = makeEnum({
  USER: 'USER',
  ADMIN: 'ADMIN'
});

exports.EnumHairStyle = makeEnum({
  LIGHT: 'LIGHT',
  DARK: 'DARK'
});

exports.TokenType = makeEnum({
  ACCESS: 'ACCESS',
  REFRESH: 'REFRESH',
  RESET_PASSWORD: 'RESET_PASSWORD',
  VERIFY_EMAIL: 'VERIFY_EMAIL'
});

exports.Prisma.ModelName = makeEnum({
  User: 'User',
  FamilyMember: 'FamilyMember',
  Token: 'Token',
  Event: 'Event',
  Book: 'Book'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
