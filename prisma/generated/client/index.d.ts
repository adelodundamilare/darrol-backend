
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model User
 * 
 */
export type User = {
  id: number
  name: string
  email: string
  phone: string | null
  password: string
  gender: EnumGender | null
  age: number | null
  role: EnumRole
  isEmailVerified: boolean
  createdAt: Date
  updatedAt: Date
  hairStyle: EnumHairStyle | null
}

/**
 * Model FamilyMember
 * 
 */
export type FamilyMember = {
  id: number
  name: string
  createdAt: Date
  updatedAt: Date
  userId: number | null
}

/**
 * Model Token
 * 
 */
export type Token = {
  id: number
  token: string
  type: TokenType
  expires: Date
  blacklisted: boolean
  createdAt: Date
  userId: number
}

/**
 * Model Event
 * 
 */
export type Event = {
  id: number
  name: string
  date: Date
  createdById: number | null
}

/**
 * Model Book
 * 
 */
export type Book = {
  id: number
  name: string
  price: Date
  description: string
  createdAt: Date
  updatedAt: Date
  userId: number | null
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const EnumGender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHER: 'OTHER'
};

export type EnumGender = (typeof EnumGender)[keyof typeof EnumGender]


export const EnumRole: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type EnumRole = (typeof EnumRole)[keyof typeof EnumRole]


export const EnumHairStyle: {
  LIGHT: 'LIGHT',
  DARK: 'DARK'
};

export type EnumHairStyle = (typeof EnumHairStyle)[keyof typeof EnumHairStyle]


export const TokenType: {
  ACCESS: 'ACCESS',
  REFRESH: 'REFRESH',
  RESET_PASSWORD: 'RESET_PASSWORD',
  VERIFY_EMAIL: 'VERIFY_EMAIL'
};

export type TokenType = (typeof TokenType)[keyof typeof TokenType]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>;

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: {maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel}): Promise<R>;

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.familyMember`: Exposes CRUD operations for the **FamilyMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FamilyMembers
    * const familyMembers = await prisma.familyMember.findMany()
    * ```
    */
  get familyMember(): Prisma.FamilyMemberDelegate<GlobalReject>;

  /**
   * `prisma.token`: Exposes CRUD operations for the **Token** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokens
    * const tokens = await prisma.token.findMany()
    * ```
    */
  get token(): Prisma.TokenDelegate<GlobalReject>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<GlobalReject>;

  /**
   * `prisma.book`: Exposes CRUD operations for the **Book** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Books
    * const books = await prisma.book.findMany()
    * ```
    */
  get book(): Prisma.BookDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.7.1
   * Query Engine version: 9035a1b3236277185290a05f5f4ca9afd179d699
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    User: 'User',
    FamilyMember: 'FamilyMember',
    Token: 'Token',
    Event: 'Event',
    Book: 'Book'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<PrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    Token: number
    familyMembers: number
    books: number
    events: number
  }

  export type UserCountOutputTypeSelect = {
    Token?: boolean | UserCountOutputTypeCountTokenArgs
    familyMembers?: boolean | UserCountOutputTypeCountFamilyMembersArgs
    books?: boolean | UserCountOutputTypeCountBooksArgs
    events?: boolean | UserCountOutputTypeCountEventsArgs
  }

  export type UserCountOutputTypeGetPayload<S extends boolean | null | undefined | UserCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserCountOutputTypeArgs)
    ? UserCountOutputType 
    : S extends { select: any } & (UserCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
      : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTokenArgs = {
    where?: TokenWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFamilyMembersArgs = {
    where?: FamilyMemberWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBooksArgs = {
    where?: BookWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEventsArgs = {
    where?: EventWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    age: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    age: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    password: string | null
    gender: EnumGender | null
    age: number | null
    role: EnumRole | null
    isEmailVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    hairStyle: EnumHairStyle | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    password: string | null
    gender: EnumGender | null
    age: number | null
    role: EnumRole | null
    isEmailVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    hairStyle: EnumHairStyle | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    password: number
    gender: number
    age: number
    role: number
    isEmailVerified: number
    createdAt: number
    updatedAt: number
    hairStyle: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    age?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    age?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    password?: true
    gender?: true
    age?: true
    role?: true
    isEmailVerified?: true
    createdAt?: true
    updatedAt?: true
    hairStyle?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    password?: true
    gender?: true
    age?: true
    role?: true
    isEmailVerified?: true
    createdAt?: true
    updatedAt?: true
    hairStyle?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    password?: true
    gender?: true
    age?: true
    role?: true
    isEmailVerified?: true
    createdAt?: true
    updatedAt?: true
    hairStyle?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    phone: string | null
    password: string
    gender: EnumGender | null
    age: number | null
    role: EnumRole
    isEmailVerified: boolean
    createdAt: Date
    updatedAt: Date
    hairStyle: EnumHairStyle | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    gender?: boolean
    age?: boolean
    role?: boolean
    isEmailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hairStyle?: boolean
    Token?: boolean | TokenFindManyArgs
    familyMembers?: boolean | FamilyMemberFindManyArgs
    books?: boolean | BookFindManyArgs
    events?: boolean | EventFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }


  export type UserInclude = {
    Token?: boolean | TokenFindManyArgs
    familyMembers?: boolean | FamilyMemberFindManyArgs
    books?: boolean | BookFindManyArgs
    events?: boolean | EventFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  } 

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Token' ? Array < TokenGetPayload<S['include'][P]>>  :
        P extends 'familyMembers' ? Array < FamilyMemberGetPayload<S['include'][P]>>  :
        P extends 'books' ? Array < BookGetPayload<S['include'][P]>>  :
        P extends 'events' ? Array < EventGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Token' ? Array < TokenGetPayload<S['select'][P]>>  :
        P extends 'familyMembers' ? Array < FamilyMemberGetPayload<S['select'][P]>>  :
        P extends 'books' ? Array < BookGetPayload<S['select'][P]>>  :
        P extends 'events' ? Array < EventGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
      : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): PrismaPromise<Array<UserGetPayload<T>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Token<T extends TokenFindManyArgs= {}>(args?: Subset<T, TokenFindManyArgs>): PrismaPromise<Array<TokenGetPayload<T>>| Null>;

    familyMembers<T extends FamilyMemberFindManyArgs= {}>(args?: Subset<T, FamilyMemberFindManyArgs>): PrismaPromise<Array<FamilyMemberGetPayload<T>>| Null>;

    books<T extends BookFindManyArgs= {}>(args?: Subset<T, BookFindManyArgs>): PrismaPromise<Array<BookGetPayload<T>>| Null>;

    events<T extends EventFindManyArgs= {}>(args?: Subset<T, EventFindManyArgs>): PrismaPromise<Array<EventGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }

  /**
   * User: findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User: findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     * 
    **/
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model FamilyMember
   */


  export type AggregateFamilyMember = {
    _count: FamilyMemberCountAggregateOutputType | null
    _avg: FamilyMemberAvgAggregateOutputType | null
    _sum: FamilyMemberSumAggregateOutputType | null
    _min: FamilyMemberMinAggregateOutputType | null
    _max: FamilyMemberMaxAggregateOutputType | null
  }

  export type FamilyMemberAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type FamilyMemberSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type FamilyMemberMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type FamilyMemberMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type FamilyMemberCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type FamilyMemberAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type FamilyMemberSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type FamilyMemberMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type FamilyMemberMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type FamilyMemberCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type FamilyMemberAggregateArgs = {
    /**
     * Filter which FamilyMember to aggregate.
     * 
    **/
    where?: FamilyMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FamilyMembers to fetch.
     * 
    **/
    orderBy?: Enumerable<FamilyMemberOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: FamilyMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FamilyMembers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FamilyMembers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FamilyMembers
    **/
    _count?: true | FamilyMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FamilyMemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FamilyMemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FamilyMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FamilyMemberMaxAggregateInputType
  }

  export type GetFamilyMemberAggregateType<T extends FamilyMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateFamilyMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFamilyMember[P]>
      : GetScalarType<T[P], AggregateFamilyMember[P]>
  }




  export type FamilyMemberGroupByArgs = {
    where?: FamilyMemberWhereInput
    orderBy?: Enumerable<FamilyMemberOrderByWithAggregationInput>
    by: Array<FamilyMemberScalarFieldEnum>
    having?: FamilyMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FamilyMemberCountAggregateInputType | true
    _avg?: FamilyMemberAvgAggregateInputType
    _sum?: FamilyMemberSumAggregateInputType
    _min?: FamilyMemberMinAggregateInputType
    _max?: FamilyMemberMaxAggregateInputType
  }


  export type FamilyMemberGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    userId: number | null
    _count: FamilyMemberCountAggregateOutputType | null
    _avg: FamilyMemberAvgAggregateOutputType | null
    _sum: FamilyMemberSumAggregateOutputType | null
    _min: FamilyMemberMinAggregateOutputType | null
    _max: FamilyMemberMaxAggregateOutputType | null
  }

  type GetFamilyMemberGroupByPayload<T extends FamilyMemberGroupByArgs> = PrismaPromise<
    Array<
      PickArray<FamilyMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FamilyMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FamilyMemberGroupByOutputType[P]>
            : GetScalarType<T[P], FamilyMemberGroupByOutputType[P]>
        }
      >
    >


  export type FamilyMemberSelect = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserArgs
  }


  export type FamilyMemberInclude = {
    user?: boolean | UserArgs
  } 

  export type FamilyMemberGetPayload<S extends boolean | null | undefined | FamilyMemberArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? FamilyMember :
    S extends undefined ? never :
    S extends { include: any } & (FamilyMemberArgs | FamilyMemberFindManyArgs)
    ? FamilyMember  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (FamilyMemberArgs | FamilyMemberFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> | null :  P extends keyof FamilyMember ? FamilyMember[P] : never
  } 
      : FamilyMember


  type FamilyMemberCountArgs = Merge<
    Omit<FamilyMemberFindManyArgs, 'select' | 'include'> & {
      select?: FamilyMemberCountAggregateInputType | true
    }
  >

  export interface FamilyMemberDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one FamilyMember that matches the filter.
     * @param {FamilyMemberFindUniqueArgs} args - Arguments to find a FamilyMember
     * @example
     * // Get one FamilyMember
     * const familyMember = await prisma.familyMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FamilyMemberFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FamilyMemberFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'FamilyMember'> extends True ? Prisma__FamilyMemberClient<FamilyMemberGetPayload<T>> : Prisma__FamilyMemberClient<FamilyMemberGetPayload<T> | null, null>

    /**
     * Find one FamilyMember that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FamilyMemberFindUniqueOrThrowArgs} args - Arguments to find a FamilyMember
     * @example
     * // Get one FamilyMember
     * const familyMember = await prisma.familyMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FamilyMemberFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, FamilyMemberFindUniqueOrThrowArgs>
    ): Prisma__FamilyMemberClient<FamilyMemberGetPayload<T>>

    /**
     * Find the first FamilyMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyMemberFindFirstArgs} args - Arguments to find a FamilyMember
     * @example
     * // Get one FamilyMember
     * const familyMember = await prisma.familyMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FamilyMemberFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FamilyMemberFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'FamilyMember'> extends True ? Prisma__FamilyMemberClient<FamilyMemberGetPayload<T>> : Prisma__FamilyMemberClient<FamilyMemberGetPayload<T> | null, null>

    /**
     * Find the first FamilyMember that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyMemberFindFirstOrThrowArgs} args - Arguments to find a FamilyMember
     * @example
     * // Get one FamilyMember
     * const familyMember = await prisma.familyMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FamilyMemberFindFirstOrThrowArgs>(
      args?: SelectSubset<T, FamilyMemberFindFirstOrThrowArgs>
    ): Prisma__FamilyMemberClient<FamilyMemberGetPayload<T>>

    /**
     * Find zero or more FamilyMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyMemberFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FamilyMembers
     * const familyMembers = await prisma.familyMember.findMany()
     * 
     * // Get first 10 FamilyMembers
     * const familyMembers = await prisma.familyMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const familyMemberWithIdOnly = await prisma.familyMember.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FamilyMemberFindManyArgs>(
      args?: SelectSubset<T, FamilyMemberFindManyArgs>
    ): PrismaPromise<Array<FamilyMemberGetPayload<T>>>

    /**
     * Create a FamilyMember.
     * @param {FamilyMemberCreateArgs} args - Arguments to create a FamilyMember.
     * @example
     * // Create one FamilyMember
     * const FamilyMember = await prisma.familyMember.create({
     *   data: {
     *     // ... data to create a FamilyMember
     *   }
     * })
     * 
    **/
    create<T extends FamilyMemberCreateArgs>(
      args: SelectSubset<T, FamilyMemberCreateArgs>
    ): Prisma__FamilyMemberClient<FamilyMemberGetPayload<T>>

    /**
     * Create many FamilyMembers.
     *     @param {FamilyMemberCreateManyArgs} args - Arguments to create many FamilyMembers.
     *     @example
     *     // Create many FamilyMembers
     *     const familyMember = await prisma.familyMember.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FamilyMemberCreateManyArgs>(
      args?: SelectSubset<T, FamilyMemberCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a FamilyMember.
     * @param {FamilyMemberDeleteArgs} args - Arguments to delete one FamilyMember.
     * @example
     * // Delete one FamilyMember
     * const FamilyMember = await prisma.familyMember.delete({
     *   where: {
     *     // ... filter to delete one FamilyMember
     *   }
     * })
     * 
    **/
    delete<T extends FamilyMemberDeleteArgs>(
      args: SelectSubset<T, FamilyMemberDeleteArgs>
    ): Prisma__FamilyMemberClient<FamilyMemberGetPayload<T>>

    /**
     * Update one FamilyMember.
     * @param {FamilyMemberUpdateArgs} args - Arguments to update one FamilyMember.
     * @example
     * // Update one FamilyMember
     * const familyMember = await prisma.familyMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FamilyMemberUpdateArgs>(
      args: SelectSubset<T, FamilyMemberUpdateArgs>
    ): Prisma__FamilyMemberClient<FamilyMemberGetPayload<T>>

    /**
     * Delete zero or more FamilyMembers.
     * @param {FamilyMemberDeleteManyArgs} args - Arguments to filter FamilyMembers to delete.
     * @example
     * // Delete a few FamilyMembers
     * const { count } = await prisma.familyMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FamilyMemberDeleteManyArgs>(
      args?: SelectSubset<T, FamilyMemberDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more FamilyMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FamilyMembers
     * const familyMember = await prisma.familyMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FamilyMemberUpdateManyArgs>(
      args: SelectSubset<T, FamilyMemberUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one FamilyMember.
     * @param {FamilyMemberUpsertArgs} args - Arguments to update or create a FamilyMember.
     * @example
     * // Update or create a FamilyMember
     * const familyMember = await prisma.familyMember.upsert({
     *   create: {
     *     // ... data to create a FamilyMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FamilyMember we want to update
     *   }
     * })
    **/
    upsert<T extends FamilyMemberUpsertArgs>(
      args: SelectSubset<T, FamilyMemberUpsertArgs>
    ): Prisma__FamilyMemberClient<FamilyMemberGetPayload<T>>

    /**
     * Count the number of FamilyMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyMemberCountArgs} args - Arguments to filter FamilyMembers to count.
     * @example
     * // Count the number of FamilyMembers
     * const count = await prisma.familyMember.count({
     *   where: {
     *     // ... the filter for the FamilyMembers we want to count
     *   }
     * })
    **/
    count<T extends FamilyMemberCountArgs>(
      args?: Subset<T, FamilyMemberCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FamilyMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FamilyMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FamilyMemberAggregateArgs>(args: Subset<T, FamilyMemberAggregateArgs>): PrismaPromise<GetFamilyMemberAggregateType<T>>

    /**
     * Group by FamilyMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FamilyMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FamilyMemberGroupByArgs['orderBy'] }
        : { orderBy?: FamilyMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FamilyMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFamilyMemberGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for FamilyMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FamilyMemberClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * FamilyMember base type for findUnique actions
   */
  export type FamilyMemberFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the FamilyMember
     * 
    **/
    select?: FamilyMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FamilyMemberInclude | null
    /**
     * Filter, which FamilyMember to fetch.
     * 
    **/
    where: FamilyMemberWhereUniqueInput
  }

  /**
   * FamilyMember: findUnique
   */
  export interface FamilyMemberFindUniqueArgs extends FamilyMemberFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * FamilyMember findUniqueOrThrow
   */
  export type FamilyMemberFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the FamilyMember
     * 
    **/
    select?: FamilyMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FamilyMemberInclude | null
    /**
     * Filter, which FamilyMember to fetch.
     * 
    **/
    where: FamilyMemberWhereUniqueInput
  }


  /**
   * FamilyMember base type for findFirst actions
   */
  export type FamilyMemberFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the FamilyMember
     * 
    **/
    select?: FamilyMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FamilyMemberInclude | null
    /**
     * Filter, which FamilyMember to fetch.
     * 
    **/
    where?: FamilyMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FamilyMembers to fetch.
     * 
    **/
    orderBy?: Enumerable<FamilyMemberOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FamilyMembers.
     * 
    **/
    cursor?: FamilyMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FamilyMembers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FamilyMembers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FamilyMembers.
     * 
    **/
    distinct?: Enumerable<FamilyMemberScalarFieldEnum>
  }

  /**
   * FamilyMember: findFirst
   */
  export interface FamilyMemberFindFirstArgs extends FamilyMemberFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * FamilyMember findFirstOrThrow
   */
  export type FamilyMemberFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the FamilyMember
     * 
    **/
    select?: FamilyMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FamilyMemberInclude | null
    /**
     * Filter, which FamilyMember to fetch.
     * 
    **/
    where?: FamilyMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FamilyMembers to fetch.
     * 
    **/
    orderBy?: Enumerable<FamilyMemberOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FamilyMembers.
     * 
    **/
    cursor?: FamilyMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FamilyMembers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FamilyMembers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FamilyMembers.
     * 
    **/
    distinct?: Enumerable<FamilyMemberScalarFieldEnum>
  }


  /**
   * FamilyMember findMany
   */
  export type FamilyMemberFindManyArgs = {
    /**
     * Select specific fields to fetch from the FamilyMember
     * 
    **/
    select?: FamilyMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FamilyMemberInclude | null
    /**
     * Filter, which FamilyMembers to fetch.
     * 
    **/
    where?: FamilyMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FamilyMembers to fetch.
     * 
    **/
    orderBy?: Enumerable<FamilyMemberOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FamilyMembers.
     * 
    **/
    cursor?: FamilyMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FamilyMembers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FamilyMembers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<FamilyMemberScalarFieldEnum>
  }


  /**
   * FamilyMember create
   */
  export type FamilyMemberCreateArgs = {
    /**
     * Select specific fields to fetch from the FamilyMember
     * 
    **/
    select?: FamilyMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FamilyMemberInclude | null
    /**
     * The data needed to create a FamilyMember.
     * 
    **/
    data: XOR<FamilyMemberCreateInput, FamilyMemberUncheckedCreateInput>
  }


  /**
   * FamilyMember createMany
   */
  export type FamilyMemberCreateManyArgs = {
    /**
     * The data used to create many FamilyMembers.
     * 
    **/
    data: Enumerable<FamilyMemberCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * FamilyMember update
   */
  export type FamilyMemberUpdateArgs = {
    /**
     * Select specific fields to fetch from the FamilyMember
     * 
    **/
    select?: FamilyMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FamilyMemberInclude | null
    /**
     * The data needed to update a FamilyMember.
     * 
    **/
    data: XOR<FamilyMemberUpdateInput, FamilyMemberUncheckedUpdateInput>
    /**
     * Choose, which FamilyMember to update.
     * 
    **/
    where: FamilyMemberWhereUniqueInput
  }


  /**
   * FamilyMember updateMany
   */
  export type FamilyMemberUpdateManyArgs = {
    /**
     * The data used to update FamilyMembers.
     * 
    **/
    data: XOR<FamilyMemberUpdateManyMutationInput, FamilyMemberUncheckedUpdateManyInput>
    /**
     * Filter which FamilyMembers to update
     * 
    **/
    where?: FamilyMemberWhereInput
  }


  /**
   * FamilyMember upsert
   */
  export type FamilyMemberUpsertArgs = {
    /**
     * Select specific fields to fetch from the FamilyMember
     * 
    **/
    select?: FamilyMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FamilyMemberInclude | null
    /**
     * The filter to search for the FamilyMember to update in case it exists.
     * 
    **/
    where: FamilyMemberWhereUniqueInput
    /**
     * In case the FamilyMember found by the `where` argument doesn't exist, create a new FamilyMember with this data.
     * 
    **/
    create: XOR<FamilyMemberCreateInput, FamilyMemberUncheckedCreateInput>
    /**
     * In case the FamilyMember was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<FamilyMemberUpdateInput, FamilyMemberUncheckedUpdateInput>
  }


  /**
   * FamilyMember delete
   */
  export type FamilyMemberDeleteArgs = {
    /**
     * Select specific fields to fetch from the FamilyMember
     * 
    **/
    select?: FamilyMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FamilyMemberInclude | null
    /**
     * Filter which FamilyMember to delete.
     * 
    **/
    where: FamilyMemberWhereUniqueInput
  }


  /**
   * FamilyMember deleteMany
   */
  export type FamilyMemberDeleteManyArgs = {
    /**
     * Filter which FamilyMembers to delete
     * 
    **/
    where?: FamilyMemberWhereInput
  }


  /**
   * FamilyMember without action
   */
  export type FamilyMemberArgs = {
    /**
     * Select specific fields to fetch from the FamilyMember
     * 
    **/
    select?: FamilyMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FamilyMemberInclude | null
  }



  /**
   * Model Token
   */


  export type AggregateToken = {
    _count: TokenCountAggregateOutputType | null
    _avg: TokenAvgAggregateOutputType | null
    _sum: TokenSumAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  export type TokenAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TokenSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TokenMinAggregateOutputType = {
    id: number | null
    token: string | null
    type: TokenType | null
    expires: Date | null
    blacklisted: boolean | null
    createdAt: Date | null
    userId: number | null
  }

  export type TokenMaxAggregateOutputType = {
    id: number | null
    token: string | null
    type: TokenType | null
    expires: Date | null
    blacklisted: boolean | null
    createdAt: Date | null
    userId: number | null
  }

  export type TokenCountAggregateOutputType = {
    id: number
    token: number
    type: number
    expires: number
    blacklisted: number
    createdAt: number
    userId: number
    _all: number
  }


  export type TokenAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TokenSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TokenMinAggregateInputType = {
    id?: true
    token?: true
    type?: true
    expires?: true
    blacklisted?: true
    createdAt?: true
    userId?: true
  }

  export type TokenMaxAggregateInputType = {
    id?: true
    token?: true
    type?: true
    expires?: true
    blacklisted?: true
    createdAt?: true
    userId?: true
  }

  export type TokenCountAggregateInputType = {
    id?: true
    token?: true
    type?: true
    expires?: true
    blacklisted?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type TokenAggregateArgs = {
    /**
     * Filter which Token to aggregate.
     * 
    **/
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     * 
    **/
    orderBy?: Enumerable<TokenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tokens
    **/
    _count?: true | TokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenMaxAggregateInputType
  }

  export type GetTokenAggregateType<T extends TokenAggregateArgs> = {
        [P in keyof T & keyof AggregateToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToken[P]>
      : GetScalarType<T[P], AggregateToken[P]>
  }




  export type TokenGroupByArgs = {
    where?: TokenWhereInput
    orderBy?: Enumerable<TokenOrderByWithAggregationInput>
    by: Array<TokenScalarFieldEnum>
    having?: TokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenCountAggregateInputType | true
    _avg?: TokenAvgAggregateInputType
    _sum?: TokenSumAggregateInputType
    _min?: TokenMinAggregateInputType
    _max?: TokenMaxAggregateInputType
  }


  export type TokenGroupByOutputType = {
    id: number
    token: string
    type: TokenType
    expires: Date
    blacklisted: boolean
    createdAt: Date
    userId: number
    _count: TokenCountAggregateOutputType | null
    _avg: TokenAvgAggregateOutputType | null
    _sum: TokenSumAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  type GetTokenGroupByPayload<T extends TokenGroupByArgs> = PrismaPromise<
    Array<
      PickArray<TokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenGroupByOutputType[P]>
            : GetScalarType<T[P], TokenGroupByOutputType[P]>
        }
      >
    >


  export type TokenSelect = {
    id?: boolean
    token?: boolean
    type?: boolean
    expires?: boolean
    blacklisted?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserArgs
  }


  export type TokenInclude = {
    user?: boolean | UserArgs
  } 

  export type TokenGetPayload<S extends boolean | null | undefined | TokenArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Token :
    S extends undefined ? never :
    S extends { include: any } & (TokenArgs | TokenFindManyArgs)
    ? Token  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TokenArgs | TokenFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof Token ? Token[P] : never
  } 
      : Token


  type TokenCountArgs = Merge<
    Omit<TokenFindManyArgs, 'select' | 'include'> & {
      select?: TokenCountAggregateInputType | true
    }
  >

  export interface TokenDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Token that matches the filter.
     * @param {TokenFindUniqueArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TokenFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TokenFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Token'> extends True ? Prisma__TokenClient<TokenGetPayload<T>> : Prisma__TokenClient<TokenGetPayload<T> | null, null>

    /**
     * Find one Token that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TokenFindUniqueOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TokenFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TokenFindUniqueOrThrowArgs>
    ): Prisma__TokenClient<TokenGetPayload<T>>

    /**
     * Find the first Token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TokenFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TokenFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Token'> extends True ? Prisma__TokenClient<TokenGetPayload<T>> : Prisma__TokenClient<TokenGetPayload<T> | null, null>

    /**
     * Find the first Token that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TokenFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TokenFindFirstOrThrowArgs>
    ): Prisma__TokenClient<TokenGetPayload<T>>

    /**
     * Find zero or more Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokens
     * const tokens = await prisma.token.findMany()
     * 
     * // Get first 10 Tokens
     * const tokens = await prisma.token.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokenWithIdOnly = await prisma.token.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TokenFindManyArgs>(
      args?: SelectSubset<T, TokenFindManyArgs>
    ): PrismaPromise<Array<TokenGetPayload<T>>>

    /**
     * Create a Token.
     * @param {TokenCreateArgs} args - Arguments to create a Token.
     * @example
     * // Create one Token
     * const Token = await prisma.token.create({
     *   data: {
     *     // ... data to create a Token
     *   }
     * })
     * 
    **/
    create<T extends TokenCreateArgs>(
      args: SelectSubset<T, TokenCreateArgs>
    ): Prisma__TokenClient<TokenGetPayload<T>>

    /**
     * Create many Tokens.
     *     @param {TokenCreateManyArgs} args - Arguments to create many Tokens.
     *     @example
     *     // Create many Tokens
     *     const token = await prisma.token.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TokenCreateManyArgs>(
      args?: SelectSubset<T, TokenCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Token.
     * @param {TokenDeleteArgs} args - Arguments to delete one Token.
     * @example
     * // Delete one Token
     * const Token = await prisma.token.delete({
     *   where: {
     *     // ... filter to delete one Token
     *   }
     * })
     * 
    **/
    delete<T extends TokenDeleteArgs>(
      args: SelectSubset<T, TokenDeleteArgs>
    ): Prisma__TokenClient<TokenGetPayload<T>>

    /**
     * Update one Token.
     * @param {TokenUpdateArgs} args - Arguments to update one Token.
     * @example
     * // Update one Token
     * const token = await prisma.token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TokenUpdateArgs>(
      args: SelectSubset<T, TokenUpdateArgs>
    ): Prisma__TokenClient<TokenGetPayload<T>>

    /**
     * Delete zero or more Tokens.
     * @param {TokenDeleteManyArgs} args - Arguments to filter Tokens to delete.
     * @example
     * // Delete a few Tokens
     * const { count } = await prisma.token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TokenDeleteManyArgs>(
      args?: SelectSubset<T, TokenDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TokenUpdateManyArgs>(
      args: SelectSubset<T, TokenUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Token.
     * @param {TokenUpsertArgs} args - Arguments to update or create a Token.
     * @example
     * // Update or create a Token
     * const token = await prisma.token.upsert({
     *   create: {
     *     // ... data to create a Token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Token we want to update
     *   }
     * })
    **/
    upsert<T extends TokenUpsertArgs>(
      args: SelectSubset<T, TokenUpsertArgs>
    ): Prisma__TokenClient<TokenGetPayload<T>>

    /**
     * Count the number of Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenCountArgs} args - Arguments to filter Tokens to count.
     * @example
     * // Count the number of Tokens
     * const count = await prisma.token.count({
     *   where: {
     *     // ... the filter for the Tokens we want to count
     *   }
     * })
    **/
    count<T extends TokenCountArgs>(
      args?: Subset<T, TokenCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TokenAggregateArgs>(args: Subset<T, TokenAggregateArgs>): PrismaPromise<GetTokenAggregateType<T>>

    /**
     * Group by Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenGroupByArgs['orderBy'] }
        : { orderBy?: TokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TokenClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Token base type for findUnique actions
   */
  export type TokenFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Token
     * 
    **/
    select?: TokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TokenInclude | null
    /**
     * Filter, which Token to fetch.
     * 
    **/
    where: TokenWhereUniqueInput
  }

  /**
   * Token: findUnique
   */
  export interface TokenFindUniqueArgs extends TokenFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Token findUniqueOrThrow
   */
  export type TokenFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Token
     * 
    **/
    select?: TokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TokenInclude | null
    /**
     * Filter, which Token to fetch.
     * 
    **/
    where: TokenWhereUniqueInput
  }


  /**
   * Token base type for findFirst actions
   */
  export type TokenFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Token
     * 
    **/
    select?: TokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TokenInclude | null
    /**
     * Filter, which Token to fetch.
     * 
    **/
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     * 
    **/
    orderBy?: Enumerable<TokenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     * 
    **/
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     * 
    **/
    distinct?: Enumerable<TokenScalarFieldEnum>
  }

  /**
   * Token: findFirst
   */
  export interface TokenFindFirstArgs extends TokenFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Token findFirstOrThrow
   */
  export type TokenFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Token
     * 
    **/
    select?: TokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TokenInclude | null
    /**
     * Filter, which Token to fetch.
     * 
    **/
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     * 
    **/
    orderBy?: Enumerable<TokenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     * 
    **/
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     * 
    **/
    distinct?: Enumerable<TokenScalarFieldEnum>
  }


  /**
   * Token findMany
   */
  export type TokenFindManyArgs = {
    /**
     * Select specific fields to fetch from the Token
     * 
    **/
    select?: TokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TokenInclude | null
    /**
     * Filter, which Tokens to fetch.
     * 
    **/
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     * 
    **/
    orderBy?: Enumerable<TokenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tokens.
     * 
    **/
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     * 
    **/
    skip?: number
    distinct?: Enumerable<TokenScalarFieldEnum>
  }


  /**
   * Token create
   */
  export type TokenCreateArgs = {
    /**
     * Select specific fields to fetch from the Token
     * 
    **/
    select?: TokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TokenInclude | null
    /**
     * The data needed to create a Token.
     * 
    **/
    data: XOR<TokenCreateInput, TokenUncheckedCreateInput>
  }


  /**
   * Token createMany
   */
  export type TokenCreateManyArgs = {
    /**
     * The data used to create many Tokens.
     * 
    **/
    data: Enumerable<TokenCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Token update
   */
  export type TokenUpdateArgs = {
    /**
     * Select specific fields to fetch from the Token
     * 
    **/
    select?: TokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TokenInclude | null
    /**
     * The data needed to update a Token.
     * 
    **/
    data: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
    /**
     * Choose, which Token to update.
     * 
    **/
    where: TokenWhereUniqueInput
  }


  /**
   * Token updateMany
   */
  export type TokenUpdateManyArgs = {
    /**
     * The data used to update Tokens.
     * 
    **/
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     * 
    **/
    where?: TokenWhereInput
  }


  /**
   * Token upsert
   */
  export type TokenUpsertArgs = {
    /**
     * Select specific fields to fetch from the Token
     * 
    **/
    select?: TokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TokenInclude | null
    /**
     * The filter to search for the Token to update in case it exists.
     * 
    **/
    where: TokenWhereUniqueInput
    /**
     * In case the Token found by the `where` argument doesn't exist, create a new Token with this data.
     * 
    **/
    create: XOR<TokenCreateInput, TokenUncheckedCreateInput>
    /**
     * In case the Token was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
  }


  /**
   * Token delete
   */
  export type TokenDeleteArgs = {
    /**
     * Select specific fields to fetch from the Token
     * 
    **/
    select?: TokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TokenInclude | null
    /**
     * Filter which Token to delete.
     * 
    **/
    where: TokenWhereUniqueInput
  }


  /**
   * Token deleteMany
   */
  export type TokenDeleteManyArgs = {
    /**
     * Filter which Tokens to delete
     * 
    **/
    where?: TokenWhereInput
  }


  /**
   * Token without action
   */
  export type TokenArgs = {
    /**
     * Select specific fields to fetch from the Token
     * 
    **/
    select?: TokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TokenInclude | null
  }



  /**
   * Model Event
   */


  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventAvgAggregateOutputType = {
    id: number | null
    createdById: number | null
  }

  export type EventSumAggregateOutputType = {
    id: number | null
    createdById: number | null
  }

  export type EventMinAggregateOutputType = {
    id: number | null
    name: string | null
    date: Date | null
    createdById: number | null
  }

  export type EventMaxAggregateOutputType = {
    id: number | null
    name: string | null
    date: Date | null
    createdById: number | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    name: number
    date: number
    createdById: number
    _all: number
  }


  export type EventAvgAggregateInputType = {
    id?: true
    createdById?: true
  }

  export type EventSumAggregateInputType = {
    id?: true
    createdById?: true
  }

  export type EventMinAggregateInputType = {
    id?: true
    name?: true
    date?: true
    createdById?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    name?: true
    date?: true
    createdById?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    name?: true
    date?: true
    createdById?: true
    _all?: true
  }

  export type EventAggregateArgs = {
    /**
     * Filter which Event to aggregate.
     * 
    **/
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     * 
    **/
    orderBy?: Enumerable<EventOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs = {
    where?: EventWhereInput
    orderBy?: Enumerable<EventOrderByWithAggregationInput>
    by: Array<EventScalarFieldEnum>
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _avg?: EventAvgAggregateInputType
    _sum?: EventSumAggregateInputType
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }


  export type EventGroupByOutputType = {
    id: number
    name: string
    date: Date
    createdById: number | null
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = PrismaPromise<
    Array<
      PickArray<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect = {
    id?: boolean
    name?: boolean
    date?: boolean
    createdById?: boolean
    createdBy?: boolean | UserArgs
  }


  export type EventInclude = {
    createdBy?: boolean | UserArgs
  } 

  export type EventGetPayload<S extends boolean | null | undefined | EventArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Event :
    S extends undefined ? never :
    S extends { include: any } & (EventArgs | EventFindManyArgs)
    ? Event  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'createdBy' ? UserGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (EventArgs | EventFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'createdBy' ? UserGetPayload<S['select'][P]> | null :  P extends keyof Event ? Event[P] : never
  } 
      : Event


  type EventCountArgs = Merge<
    Omit<EventFindManyArgs, 'select' | 'include'> & {
      select?: EventCountAggregateInputType | true
    }
  >

  export interface EventDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EventFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, EventFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Event'> extends True ? Prisma__EventClient<EventGetPayload<T>> : Prisma__EventClient<EventGetPayload<T> | null, null>

    /**
     * Find one Event that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, EventFindUniqueOrThrowArgs>
    ): Prisma__EventClient<EventGetPayload<T>>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EventFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, EventFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Event'> extends True ? Prisma__EventClient<EventGetPayload<T>> : Prisma__EventClient<EventGetPayload<T> | null, null>

    /**
     * Find the first Event that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(
      args?: SelectSubset<T, EventFindFirstOrThrowArgs>
    ): Prisma__EventClient<EventGetPayload<T>>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EventFindManyArgs>(
      args?: SelectSubset<T, EventFindManyArgs>
    ): PrismaPromise<Array<EventGetPayload<T>>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
    **/
    create<T extends EventCreateArgs>(
      args: SelectSubset<T, EventCreateArgs>
    ): Prisma__EventClient<EventGetPayload<T>>

    /**
     * Create many Events.
     *     @param {EventCreateManyArgs} args - Arguments to create many Events.
     *     @example
     *     // Create many Events
     *     const event = await prisma.event.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EventCreateManyArgs>(
      args?: SelectSubset<T, EventCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
    **/
    delete<T extends EventDeleteArgs>(
      args: SelectSubset<T, EventDeleteArgs>
    ): Prisma__EventClient<EventGetPayload<T>>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EventUpdateArgs>(
      args: SelectSubset<T, EventUpdateArgs>
    ): Prisma__EventClient<EventGetPayload<T>>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EventDeleteManyArgs>(
      args?: SelectSubset<T, EventDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EventUpdateManyArgs>(
      args: SelectSubset<T, EventUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
    **/
    upsert<T extends EventUpsertArgs>(
      args: SelectSubset<T, EventUpsertArgs>
    ): Prisma__EventClient<EventGetPayload<T>>

    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__EventClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    createdBy<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Event base type for findUnique actions
   */
  export type EventFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Event
     * 
    **/
    select?: EventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EventInclude | null
    /**
     * Filter, which Event to fetch.
     * 
    **/
    where: EventWhereUniqueInput
  }

  /**
   * Event: findUnique
   */
  export interface EventFindUniqueArgs extends EventFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Event
     * 
    **/
    select?: EventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EventInclude | null
    /**
     * Filter, which Event to fetch.
     * 
    **/
    where: EventWhereUniqueInput
  }


  /**
   * Event base type for findFirst actions
   */
  export type EventFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Event
     * 
    **/
    select?: EventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EventInclude | null
    /**
     * Filter, which Event to fetch.
     * 
    **/
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     * 
    **/
    orderBy?: Enumerable<EventOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     * 
    **/
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     * 
    **/
    distinct?: Enumerable<EventScalarFieldEnum>
  }

  /**
   * Event: findFirst
   */
  export interface EventFindFirstArgs extends EventFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Event
     * 
    **/
    select?: EventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EventInclude | null
    /**
     * Filter, which Event to fetch.
     * 
    **/
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     * 
    **/
    orderBy?: Enumerable<EventOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     * 
    **/
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     * 
    **/
    distinct?: Enumerable<EventScalarFieldEnum>
  }


  /**
   * Event findMany
   */
  export type EventFindManyArgs = {
    /**
     * Select specific fields to fetch from the Event
     * 
    **/
    select?: EventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EventInclude | null
    /**
     * Filter, which Events to fetch.
     * 
    **/
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     * 
    **/
    orderBy?: Enumerable<EventOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     * 
    **/
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     * 
    **/
    skip?: number
    distinct?: Enumerable<EventScalarFieldEnum>
  }


  /**
   * Event create
   */
  export type EventCreateArgs = {
    /**
     * Select specific fields to fetch from the Event
     * 
    **/
    select?: EventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EventInclude | null
    /**
     * The data needed to create a Event.
     * 
    **/
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }


  /**
   * Event createMany
   */
  export type EventCreateManyArgs = {
    /**
     * The data used to create many Events.
     * 
    **/
    data: Enumerable<EventCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Event update
   */
  export type EventUpdateArgs = {
    /**
     * Select specific fields to fetch from the Event
     * 
    **/
    select?: EventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EventInclude | null
    /**
     * The data needed to update a Event.
     * 
    **/
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     * 
    **/
    where: EventWhereUniqueInput
  }


  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs = {
    /**
     * The data used to update Events.
     * 
    **/
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     * 
    **/
    where?: EventWhereInput
  }


  /**
   * Event upsert
   */
  export type EventUpsertArgs = {
    /**
     * Select specific fields to fetch from the Event
     * 
    **/
    select?: EventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EventInclude | null
    /**
     * The filter to search for the Event to update in case it exists.
     * 
    **/
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     * 
    **/
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }


  /**
   * Event delete
   */
  export type EventDeleteArgs = {
    /**
     * Select specific fields to fetch from the Event
     * 
    **/
    select?: EventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EventInclude | null
    /**
     * Filter which Event to delete.
     * 
    **/
    where: EventWhereUniqueInput
  }


  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs = {
    /**
     * Filter which Events to delete
     * 
    **/
    where?: EventWhereInput
  }


  /**
   * Event without action
   */
  export type EventArgs = {
    /**
     * Select specific fields to fetch from the Event
     * 
    **/
    select?: EventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EventInclude | null
  }



  /**
   * Model Book
   */


  export type AggregateBook = {
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  export type BookAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type BookSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type BookMinAggregateOutputType = {
    id: number | null
    name: string | null
    price: Date | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type BookMaxAggregateOutputType = {
    id: number | null
    name: string | null
    price: Date | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type BookCountAggregateOutputType = {
    id: number
    name: number
    price: number
    description: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type BookAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type BookSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type BookMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type BookMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type BookCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type BookAggregateArgs = {
    /**
     * Filter which Book to aggregate.
     * 
    **/
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     * 
    **/
    orderBy?: Enumerable<BookOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Books
    **/
    _count?: true | BookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookMaxAggregateInputType
  }

  export type GetBookAggregateType<T extends BookAggregateArgs> = {
        [P in keyof T & keyof AggregateBook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBook[P]>
      : GetScalarType<T[P], AggregateBook[P]>
  }




  export type BookGroupByArgs = {
    where?: BookWhereInput
    orderBy?: Enumerable<BookOrderByWithAggregationInput>
    by: Array<BookScalarFieldEnum>
    having?: BookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookCountAggregateInputType | true
    _avg?: BookAvgAggregateInputType
    _sum?: BookSumAggregateInputType
    _min?: BookMinAggregateInputType
    _max?: BookMaxAggregateInputType
  }


  export type BookGroupByOutputType = {
    id: number
    name: string
    price: Date
    description: string
    createdAt: Date
    updatedAt: Date
    userId: number | null
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  type GetBookGroupByPayload<T extends BookGroupByArgs> = PrismaPromise<
    Array<
      PickArray<BookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookGroupByOutputType[P]>
            : GetScalarType<T[P], BookGroupByOutputType[P]>
        }
      >
    >


  export type BookSelect = {
    id?: boolean
    name?: boolean
    price?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    User?: boolean | UserArgs
  }


  export type BookInclude = {
    User?: boolean | UserArgs
  } 

  export type BookGetPayload<S extends boolean | null | undefined | BookArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Book :
    S extends undefined ? never :
    S extends { include: any } & (BookArgs | BookFindManyArgs)
    ? Book  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'User' ? UserGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (BookArgs | BookFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'User' ? UserGetPayload<S['select'][P]> | null :  P extends keyof Book ? Book[P] : never
  } 
      : Book


  type BookCountArgs = Merge<
    Omit<BookFindManyArgs, 'select' | 'include'> & {
      select?: BookCountAggregateInputType | true
    }
  >

  export interface BookDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Book that matches the filter.
     * @param {BookFindUniqueArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BookFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BookFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Book'> extends True ? Prisma__BookClient<BookGetPayload<T>> : Prisma__BookClient<BookGetPayload<T> | null, null>

    /**
     * Find one Book that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BookFindUniqueOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BookFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, BookFindUniqueOrThrowArgs>
    ): Prisma__BookClient<BookGetPayload<T>>

    /**
     * Find the first Book that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BookFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BookFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Book'> extends True ? Prisma__BookClient<BookGetPayload<T>> : Prisma__BookClient<BookGetPayload<T> | null, null>

    /**
     * Find the first Book that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BookFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BookFindFirstOrThrowArgs>
    ): Prisma__BookClient<BookGetPayload<T>>

    /**
     * Find zero or more Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Books
     * const books = await prisma.book.findMany()
     * 
     * // Get first 10 Books
     * const books = await prisma.book.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookWithIdOnly = await prisma.book.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BookFindManyArgs>(
      args?: SelectSubset<T, BookFindManyArgs>
    ): PrismaPromise<Array<BookGetPayload<T>>>

    /**
     * Create a Book.
     * @param {BookCreateArgs} args - Arguments to create a Book.
     * @example
     * // Create one Book
     * const Book = await prisma.book.create({
     *   data: {
     *     // ... data to create a Book
     *   }
     * })
     * 
    **/
    create<T extends BookCreateArgs>(
      args: SelectSubset<T, BookCreateArgs>
    ): Prisma__BookClient<BookGetPayload<T>>

    /**
     * Create many Books.
     *     @param {BookCreateManyArgs} args - Arguments to create many Books.
     *     @example
     *     // Create many Books
     *     const book = await prisma.book.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BookCreateManyArgs>(
      args?: SelectSubset<T, BookCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Book.
     * @param {BookDeleteArgs} args - Arguments to delete one Book.
     * @example
     * // Delete one Book
     * const Book = await prisma.book.delete({
     *   where: {
     *     // ... filter to delete one Book
     *   }
     * })
     * 
    **/
    delete<T extends BookDeleteArgs>(
      args: SelectSubset<T, BookDeleteArgs>
    ): Prisma__BookClient<BookGetPayload<T>>

    /**
     * Update one Book.
     * @param {BookUpdateArgs} args - Arguments to update one Book.
     * @example
     * // Update one Book
     * const book = await prisma.book.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BookUpdateArgs>(
      args: SelectSubset<T, BookUpdateArgs>
    ): Prisma__BookClient<BookGetPayload<T>>

    /**
     * Delete zero or more Books.
     * @param {BookDeleteManyArgs} args - Arguments to filter Books to delete.
     * @example
     * // Delete a few Books
     * const { count } = await prisma.book.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BookDeleteManyArgs>(
      args?: SelectSubset<T, BookDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BookUpdateManyArgs>(
      args: SelectSubset<T, BookUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Book.
     * @param {BookUpsertArgs} args - Arguments to update or create a Book.
     * @example
     * // Update or create a Book
     * const book = await prisma.book.upsert({
     *   create: {
     *     // ... data to create a Book
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Book we want to update
     *   }
     * })
    **/
    upsert<T extends BookUpsertArgs>(
      args: SelectSubset<T, BookUpsertArgs>
    ): Prisma__BookClient<BookGetPayload<T>>

    /**
     * Count the number of Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookCountArgs} args - Arguments to filter Books to count.
     * @example
     * // Count the number of Books
     * const count = await prisma.book.count({
     *   where: {
     *     // ... the filter for the Books we want to count
     *   }
     * })
    **/
    count<T extends BookCountArgs>(
      args?: Subset<T, BookCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookAggregateArgs>(args: Subset<T, BookAggregateArgs>): PrismaPromise<GetBookAggregateType<T>>

    /**
     * Group by Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookGroupByArgs['orderBy'] }
        : { orderBy?: BookGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Book.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BookClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    User<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Book base type for findUnique actions
   */
  export type BookFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Book
     * 
    **/
    select?: BookSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BookInclude | null
    /**
     * Filter, which Book to fetch.
     * 
    **/
    where: BookWhereUniqueInput
  }

  /**
   * Book: findUnique
   */
  export interface BookFindUniqueArgs extends BookFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Book findUniqueOrThrow
   */
  export type BookFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Book
     * 
    **/
    select?: BookSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BookInclude | null
    /**
     * Filter, which Book to fetch.
     * 
    **/
    where: BookWhereUniqueInput
  }


  /**
   * Book base type for findFirst actions
   */
  export type BookFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Book
     * 
    **/
    select?: BookSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BookInclude | null
    /**
     * Filter, which Book to fetch.
     * 
    **/
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     * 
    **/
    orderBy?: Enumerable<BookOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     * 
    **/
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     * 
    **/
    distinct?: Enumerable<BookScalarFieldEnum>
  }

  /**
   * Book: findFirst
   */
  export interface BookFindFirstArgs extends BookFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Book findFirstOrThrow
   */
  export type BookFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Book
     * 
    **/
    select?: BookSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BookInclude | null
    /**
     * Filter, which Book to fetch.
     * 
    **/
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     * 
    **/
    orderBy?: Enumerable<BookOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     * 
    **/
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     * 
    **/
    distinct?: Enumerable<BookScalarFieldEnum>
  }


  /**
   * Book findMany
   */
  export type BookFindManyArgs = {
    /**
     * Select specific fields to fetch from the Book
     * 
    **/
    select?: BookSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BookInclude | null
    /**
     * Filter, which Books to fetch.
     * 
    **/
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     * 
    **/
    orderBy?: Enumerable<BookOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Books.
     * 
    **/
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     * 
    **/
    skip?: number
    distinct?: Enumerable<BookScalarFieldEnum>
  }


  /**
   * Book create
   */
  export type BookCreateArgs = {
    /**
     * Select specific fields to fetch from the Book
     * 
    **/
    select?: BookSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BookInclude | null
    /**
     * The data needed to create a Book.
     * 
    **/
    data: XOR<BookCreateInput, BookUncheckedCreateInput>
  }


  /**
   * Book createMany
   */
  export type BookCreateManyArgs = {
    /**
     * The data used to create many Books.
     * 
    **/
    data: Enumerable<BookCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Book update
   */
  export type BookUpdateArgs = {
    /**
     * Select specific fields to fetch from the Book
     * 
    **/
    select?: BookSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BookInclude | null
    /**
     * The data needed to update a Book.
     * 
    **/
    data: XOR<BookUpdateInput, BookUncheckedUpdateInput>
    /**
     * Choose, which Book to update.
     * 
    **/
    where: BookWhereUniqueInput
  }


  /**
   * Book updateMany
   */
  export type BookUpdateManyArgs = {
    /**
     * The data used to update Books.
     * 
    **/
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     * 
    **/
    where?: BookWhereInput
  }


  /**
   * Book upsert
   */
  export type BookUpsertArgs = {
    /**
     * Select specific fields to fetch from the Book
     * 
    **/
    select?: BookSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BookInclude | null
    /**
     * The filter to search for the Book to update in case it exists.
     * 
    **/
    where: BookWhereUniqueInput
    /**
     * In case the Book found by the `where` argument doesn't exist, create a new Book with this data.
     * 
    **/
    create: XOR<BookCreateInput, BookUncheckedCreateInput>
    /**
     * In case the Book was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<BookUpdateInput, BookUncheckedUpdateInput>
  }


  /**
   * Book delete
   */
  export type BookDeleteArgs = {
    /**
     * Select specific fields to fetch from the Book
     * 
    **/
    select?: BookSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BookInclude | null
    /**
     * Filter which Book to delete.
     * 
    **/
    where: BookWhereUniqueInput
  }


  /**
   * Book deleteMany
   */
  export type BookDeleteManyArgs = {
    /**
     * Filter which Books to delete
     * 
    **/
    where?: BookWhereInput
  }


  /**
   * Book without action
   */
  export type BookArgs = {
    /**
     * Select specific fields to fetch from the Book
     * 
    **/
    select?: BookSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BookInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
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
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FamilyMemberScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type FamilyMemberScalarFieldEnum = (typeof FamilyMemberScalarFieldEnum)[keyof typeof FamilyMemberScalarFieldEnum]


  export const TokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    type: 'type',
    expires: 'expires',
    blacklisted: 'blacklisted',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type TokenScalarFieldEnum = (typeof TokenScalarFieldEnum)[keyof typeof TokenScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    name: 'name',
    date: 'date',
    createdById: 'createdById'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const BookScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type BookScalarFieldEnum = (typeof BookScalarFieldEnum)[keyof typeof BookScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'EnumGender'
   */
  export type EnumEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EnumGender'>
    


  /**
   * Reference to a field of type 'EnumGender[]'
   */
  export type ListEnumEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EnumGender[]'>
    


  /**
   * Reference to a field of type 'EnumRole'
   */
  export type EnumEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EnumRole'>
    


  /**
   * Reference to a field of type 'EnumRole[]'
   */
  export type ListEnumEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EnumRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'EnumHairStyle'
   */
  export type EnumEnumHairStyleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EnumHairStyle'>
    


  /**
   * Reference to a field of type 'EnumHairStyle[]'
   */
  export type ListEnumEnumHairStyleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EnumHairStyle[]'>
    


  /**
   * Reference to a field of type 'TokenType'
   */
  export type EnumTokenTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TokenType'>
    


  /**
   * Reference to a field of type 'TokenType[]'
   */
  export type ListEnumTokenTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TokenType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    gender?: EnumEnumGenderNullableFilter<"User"> | EnumGender | null
    age?: IntNullableFilter<"User"> | number | null
    role?: EnumEnumRoleFilter<"User"> | EnumRole
    isEmailVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    hairStyle?: EnumEnumHairStyleNullableFilter<"User"> | EnumHairStyle | null
    Token?: TokenListRelationFilter
    familyMembers?: FamilyMemberListRelationFilter
    books?: BookListRelationFilter
    events?: EventListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrder
    gender?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    role?: SortOrder
    isEmailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hairStyle?: SortOrderInput | SortOrder
    Token?: TokenOrderByRelationAggregateInput
    familyMembers?: FamilyMemberOrderByRelationAggregateInput
    books?: BookOrderByRelationAggregateInput
    events?: EventOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    name?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    gender?: EnumEnumGenderNullableFilter<"User"> | EnumGender | null
    age?: IntNullableFilter<"User"> | number | null
    role?: EnumEnumRoleFilter<"User"> | EnumRole
    isEmailVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    hairStyle?: EnumEnumHairStyleNullableFilter<"User"> | EnumHairStyle | null
    Token?: TokenListRelationFilter
    familyMembers?: FamilyMemberListRelationFilter
    books?: BookListRelationFilter
    events?: EventListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrder
    gender?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    role?: SortOrder
    isEmailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hairStyle?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    gender?: EnumEnumGenderNullableWithAggregatesFilter<"User"> | EnumGender | null
    age?: IntNullableWithAggregatesFilter<"User"> | number | null
    role?: EnumEnumRoleWithAggregatesFilter<"User"> | EnumRole
    isEmailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    hairStyle?: EnumEnumHairStyleNullableWithAggregatesFilter<"User"> | EnumHairStyle | null
  }

  export type FamilyMemberWhereInput = {
    AND?: Enumerable<FamilyMemberWhereInput>
    OR?: Enumerable<FamilyMemberWhereInput>
    NOT?: Enumerable<FamilyMemberWhereInput>
    id?: IntFilter<"FamilyMember"> | number
    name?: StringFilter<"FamilyMember"> | string
    createdAt?: DateTimeFilter<"FamilyMember"> | Date | string
    updatedAt?: DateTimeFilter<"FamilyMember"> | Date | string
    userId?: IntNullableFilter<"FamilyMember"> | number | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type FamilyMemberOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type FamilyMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: Enumerable<FamilyMemberWhereInput>
    OR?: Enumerable<FamilyMemberWhereInput>
    NOT?: Enumerable<FamilyMemberWhereInput>
    name?: StringFilter<"FamilyMember"> | string
    createdAt?: DateTimeFilter<"FamilyMember"> | Date | string
    updatedAt?: DateTimeFilter<"FamilyMember"> | Date | string
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id" | "userId">

  export type FamilyMemberOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: FamilyMemberCountOrderByAggregateInput
    _avg?: FamilyMemberAvgOrderByAggregateInput
    _max?: FamilyMemberMaxOrderByAggregateInput
    _min?: FamilyMemberMinOrderByAggregateInput
    _sum?: FamilyMemberSumOrderByAggregateInput
  }

  export type FamilyMemberScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FamilyMemberScalarWhereWithAggregatesInput>
    OR?: Enumerable<FamilyMemberScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FamilyMemberScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter<"FamilyMember"> | number
    name?: StringWithAggregatesFilter<"FamilyMember"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FamilyMember"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FamilyMember"> | Date | string
    userId?: IntNullableWithAggregatesFilter<"FamilyMember"> | number | null
  }

  export type TokenWhereInput = {
    AND?: Enumerable<TokenWhereInput>
    OR?: Enumerable<TokenWhereInput>
    NOT?: Enumerable<TokenWhereInput>
    id?: IntFilter<"Token"> | number
    token?: StringFilter<"Token"> | string
    type?: EnumTokenTypeFilter<"Token"> | TokenType
    expires?: DateTimeFilter<"Token"> | Date | string
    blacklisted?: BoolFilter<"Token"> | boolean
    createdAt?: DateTimeFilter<"Token"> | Date | string
    userId?: IntFilter<"Token"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type TokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expires?: SortOrder
    blacklisted?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TokenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Enumerable<TokenWhereInput>
    OR?: Enumerable<TokenWhereInput>
    NOT?: Enumerable<TokenWhereInput>
    token?: StringFilter<"Token"> | string
    type?: EnumTokenTypeFilter<"Token"> | TokenType
    expires?: DateTimeFilter<"Token"> | Date | string
    blacklisted?: BoolFilter<"Token"> | boolean
    createdAt?: DateTimeFilter<"Token"> | Date | string
    userId?: IntFilter<"Token"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type TokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expires?: SortOrder
    blacklisted?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    _count?: TokenCountOrderByAggregateInput
    _avg?: TokenAvgOrderByAggregateInput
    _max?: TokenMaxOrderByAggregateInput
    _min?: TokenMinOrderByAggregateInput
    _sum?: TokenSumOrderByAggregateInput
  }

  export type TokenScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TokenScalarWhereWithAggregatesInput>
    OR?: Enumerable<TokenScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TokenScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter<"Token"> | number
    token?: StringWithAggregatesFilter<"Token"> | string
    type?: EnumTokenTypeWithAggregatesFilter<"Token"> | TokenType
    expires?: DateTimeWithAggregatesFilter<"Token"> | Date | string
    blacklisted?: BoolWithAggregatesFilter<"Token"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Token"> | Date | string
    userId?: IntWithAggregatesFilter<"Token"> | number
  }

  export type EventWhereInput = {
    AND?: Enumerable<EventWhereInput>
    OR?: Enumerable<EventWhereInput>
    NOT?: Enumerable<EventWhereInput>
    id?: IntFilter<"Event"> | number
    name?: StringFilter<"Event"> | string
    date?: DateTimeFilter<"Event"> | Date | string
    createdById?: IntNullableFilter<"Event"> | number | null
    createdBy?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    createdById?: SortOrderInput | SortOrder
    createdBy?: UserOrderByWithRelationInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Enumerable<EventWhereInput>
    OR?: Enumerable<EventWhereInput>
    NOT?: Enumerable<EventWhereInput>
    name?: StringFilter<"Event"> | string
    date?: DateTimeFilter<"Event"> | Date | string
    createdById?: IntNullableFilter<"Event"> | number | null
    createdBy?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    createdById?: SortOrderInput | SortOrder
    _count?: EventCountOrderByAggregateInput
    _avg?: EventAvgOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
    _sum?: EventSumOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: Enumerable<EventScalarWhereWithAggregatesInput>
    OR?: Enumerable<EventScalarWhereWithAggregatesInput>
    NOT?: Enumerable<EventScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter<"Event"> | number
    name?: StringWithAggregatesFilter<"Event"> | string
    date?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    createdById?: IntNullableWithAggregatesFilter<"Event"> | number | null
  }

  export type BookWhereInput = {
    AND?: Enumerable<BookWhereInput>
    OR?: Enumerable<BookWhereInput>
    NOT?: Enumerable<BookWhereInput>
    id?: IntFilter<"Book"> | number
    name?: StringFilter<"Book"> | string
    price?: DateTimeFilter<"Book"> | Date | string
    description?: StringFilter<"Book"> | string
    createdAt?: DateTimeFilter<"Book"> | Date | string
    updatedAt?: DateTimeFilter<"Book"> | Date | string
    userId?: IntNullableFilter<"Book"> | number | null
    User?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type BookOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type BookWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Enumerable<BookWhereInput>
    OR?: Enumerable<BookWhereInput>
    NOT?: Enumerable<BookWhereInput>
    name?: StringFilter<"Book"> | string
    price?: DateTimeFilter<"Book"> | Date | string
    description?: StringFilter<"Book"> | string
    createdAt?: DateTimeFilter<"Book"> | Date | string
    updatedAt?: DateTimeFilter<"Book"> | Date | string
    userId?: IntNullableFilter<"Book"> | number | null
    User?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type BookOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: BookCountOrderByAggregateInput
    _avg?: BookAvgOrderByAggregateInput
    _max?: BookMaxOrderByAggregateInput
    _min?: BookMinOrderByAggregateInput
    _sum?: BookSumOrderByAggregateInput
  }

  export type BookScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BookScalarWhereWithAggregatesInput>
    OR?: Enumerable<BookScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BookScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter<"Book"> | number
    name?: StringWithAggregatesFilter<"Book"> | string
    price?: DateTimeWithAggregatesFilter<"Book"> | Date | string
    description?: StringWithAggregatesFilter<"Book"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Book"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Book"> | Date | string
    userId?: IntNullableWithAggregatesFilter<"Book"> | number | null
  }

  export type UserCreateInput = {
    name: string
    email: string
    phone?: string | null
    password: string
    gender?: EnumGender | null
    age?: number | null
    role?: EnumRole
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    hairStyle?: EnumHairStyle | null
    Token?: TokenCreateNestedManyWithoutUserInput
    familyMembers?: FamilyMemberCreateNestedManyWithoutUserInput
    books?: BookCreateNestedManyWithoutUserInput
    events?: EventCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    phone?: string | null
    password: string
    gender?: EnumGender | null
    age?: number | null
    role?: EnumRole
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    hairStyle?: EnumHairStyle | null
    Token?: TokenUncheckedCreateNestedManyWithoutUserInput
    familyMembers?: FamilyMemberUncheckedCreateNestedManyWithoutUserInput
    books?: BookUncheckedCreateNestedManyWithoutUserInput
    events?: EventUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumEnumGenderFieldUpdateOperationsInput | EnumGender | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    role?: EnumEnumRoleFieldUpdateOperationsInput | EnumRole
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hairStyle?: NullableEnumEnumHairStyleFieldUpdateOperationsInput | EnumHairStyle | null
    Token?: TokenUpdateManyWithoutUserNestedInput
    familyMembers?: FamilyMemberUpdateManyWithoutUserNestedInput
    books?: BookUpdateManyWithoutUserNestedInput
    events?: EventUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumEnumGenderFieldUpdateOperationsInput | EnumGender | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    role?: EnumEnumRoleFieldUpdateOperationsInput | EnumRole
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hairStyle?: NullableEnumEnumHairStyleFieldUpdateOperationsInput | EnumHairStyle | null
    Token?: TokenUncheckedUpdateManyWithoutUserNestedInput
    familyMembers?: FamilyMemberUncheckedUpdateManyWithoutUserNestedInput
    books?: BookUncheckedUpdateManyWithoutUserNestedInput
    events?: EventUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    phone?: string | null
    password: string
    gender?: EnumGender | null
    age?: number | null
    role?: EnumRole
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    hairStyle?: EnumHairStyle | null
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumEnumGenderFieldUpdateOperationsInput | EnumGender | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    role?: EnumEnumRoleFieldUpdateOperationsInput | EnumRole
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hairStyle?: NullableEnumEnumHairStyleFieldUpdateOperationsInput | EnumHairStyle | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumEnumGenderFieldUpdateOperationsInput | EnumGender | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    role?: EnumEnumRoleFieldUpdateOperationsInput | EnumRole
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hairStyle?: NullableEnumEnumHairStyleFieldUpdateOperationsInput | EnumHairStyle | null
  }

  export type FamilyMemberCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutFamilyMembersInput
  }

  export type FamilyMemberUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: number | null
  }

  export type FamilyMemberUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutFamilyMembersNestedInput
  }

  export type FamilyMemberUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FamilyMemberCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: number | null
  }

  export type FamilyMemberUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FamilyMemberUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TokenCreateInput = {
    token: string
    type: TokenType
    expires: Date | string
    blacklisted: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTokenInput
  }

  export type TokenUncheckedCreateInput = {
    id?: number
    token: string
    type: TokenType
    expires: Date | string
    blacklisted: boolean
    createdAt?: Date | string
    userId: number
  }

  export type TokenUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | TokenType
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    blacklisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTokenNestedInput
  }

  export type TokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | TokenType
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    blacklisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type TokenCreateManyInput = {
    id?: number
    token: string
    type: TokenType
    expires: Date | string
    blacklisted: boolean
    createdAt?: Date | string
    userId: number
  }

  export type TokenUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | TokenType
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    blacklisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | TokenType
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    blacklisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type EventCreateInput = {
    name: string
    date: Date | string
    createdBy?: UserCreateNestedOneWithoutEventsInput
  }

  export type EventUncheckedCreateInput = {
    id?: number
    name: string
    date: Date | string
    createdById?: number | null
  }

  export type EventUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EventCreateManyInput = {
    id?: number
    name: string
    date: Date | string
    createdById?: number | null
  }

  export type EventUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BookCreateInput = {
    name: string
    price: Date | string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    User?: UserCreateNestedOneWithoutBooksInput
  }

  export type BookUncheckedCreateInput = {
    id?: number
    name: string
    price: Date | string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: number | null
  }

  export type BookUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneWithoutBooksNestedInput
  }

  export type BookUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BookCreateManyInput = {
    id?: number
    name: string
    price: Date | string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: number | null
  }

  export type BookUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel>
    notIn?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel>
    notIn?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumEnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: EnumGender | EnumEnumGenderFieldRefInput<$PrismaModel> | null
    in?: Enumerable<EnumGender> | ListEnumEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<EnumGender> | ListEnumEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEnumGenderNullableFilter<$PrismaModel> | EnumGender | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumEnumRoleFilter<$PrismaModel = never> = {
    equals?: EnumRole | EnumEnumRoleFieldRefInput<$PrismaModel>
    in?: Enumerable<EnumRole> | ListEnumEnumRoleFieldRefInput<$PrismaModel>
    notIn?: Enumerable<EnumRole> | ListEnumEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumEnumRoleFilter<$PrismaModel> | EnumRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumEnumHairStyleNullableFilter<$PrismaModel = never> = {
    equals?: EnumHairStyle | EnumEnumHairStyleFieldRefInput<$PrismaModel> | null
    in?: Enumerable<EnumHairStyle> | ListEnumEnumHairStyleFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<EnumHairStyle> | ListEnumEnumHairStyleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEnumHairStyleNullableFilter<$PrismaModel> | EnumHairStyle | null
  }

  export type TokenListRelationFilter = {
    every?: TokenWhereInput
    some?: TokenWhereInput
    none?: TokenWhereInput
  }

  export type FamilyMemberListRelationFilter = {
    every?: FamilyMemberWhereInput
    some?: FamilyMemberWhereInput
    none?: FamilyMemberWhereInput
  }

  export type BookListRelationFilter = {
    every?: BookWhereInput
    some?: BookWhereInput
    none?: BookWhereInput
  }

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FamilyMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    gender?: SortOrder
    age?: SortOrder
    role?: SortOrder
    isEmailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hairStyle?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    gender?: SortOrder
    age?: SortOrder
    role?: SortOrder
    isEmailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hairStyle?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    gender?: SortOrder
    age?: SortOrder
    role?: SortOrder
    isEmailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hairStyle?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel>
    notIn?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel>
    notIn?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumEnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: EnumGender | EnumEnumGenderFieldRefInput<$PrismaModel> | null
    in?: Enumerable<EnumGender> | ListEnumEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<EnumGender> | ListEnumEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEnumGenderNullableWithAggregatesFilter<$PrismaModel> | EnumGender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumEnumGenderNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: EnumRole | EnumEnumRoleFieldRefInput<$PrismaModel>
    in?: Enumerable<EnumRole> | ListEnumEnumRoleFieldRefInput<$PrismaModel>
    notIn?: Enumerable<EnumRole> | ListEnumEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumEnumRoleWithAggregatesFilter<$PrismaModel> | EnumRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumEnumHairStyleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: EnumHairStyle | EnumEnumHairStyleFieldRefInput<$PrismaModel> | null
    in?: Enumerable<EnumHairStyle> | ListEnumEnumHairStyleFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<EnumHairStyle> | ListEnumEnumHairStyleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEnumHairStyleNullableWithAggregatesFilter<$PrismaModel> | EnumHairStyle | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumEnumHairStyleNullableFilter<$PrismaModel>
    _max?: NestedEnumEnumHairStyleNullableFilter<$PrismaModel>
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type FamilyMemberCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type FamilyMemberAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type FamilyMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type FamilyMemberMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type FamilyMemberSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumTokenTypeFilter<$PrismaModel = never> = {
    equals?: TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: Enumerable<TokenType> | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    notIn?: Enumerable<TokenType> | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeFilter<$PrismaModel> | TokenType
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expires?: SortOrder
    blacklisted?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type TokenAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type TokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expires?: SortOrder
    blacklisted?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type TokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expires?: SortOrder
    blacklisted?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type TokenSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumTokenTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: Enumerable<TokenType> | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    notIn?: Enumerable<TokenType> | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeWithAggregatesFilter<$PrismaModel> | TokenType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTokenTypeFilter<$PrismaModel>
    _max?: NestedEnumTokenTypeFilter<$PrismaModel>
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    createdById?: SortOrder
  }

  export type EventAvgOrderByAggregateInput = {
    id?: SortOrder
    createdById?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    createdById?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    createdById?: SortOrder
  }

  export type EventSumOrderByAggregateInput = {
    id?: SortOrder
    createdById?: SortOrder
  }

  export type BookCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type BookAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type BookMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type BookMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type BookSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type TokenCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<TokenCreateWithoutUserInput>, Enumerable<TokenUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<TokenCreateOrConnectWithoutUserInput>
    createMany?: TokenCreateManyUserInputEnvelope
    connect?: Enumerable<TokenWhereUniqueInput>
  }

  export type FamilyMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<FamilyMemberCreateWithoutUserInput>, Enumerable<FamilyMemberUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<FamilyMemberCreateOrConnectWithoutUserInput>
    createMany?: FamilyMemberCreateManyUserInputEnvelope
    connect?: Enumerable<FamilyMemberWhereUniqueInput>
  }

  export type BookCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<BookCreateWithoutUserInput>, Enumerable<BookUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<BookCreateOrConnectWithoutUserInput>
    createMany?: BookCreateManyUserInputEnvelope
    connect?: Enumerable<BookWhereUniqueInput>
  }

  export type EventCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<Enumerable<EventCreateWithoutCreatedByInput>, Enumerable<EventUncheckedCreateWithoutCreatedByInput>>
    connectOrCreate?: Enumerable<EventCreateOrConnectWithoutCreatedByInput>
    createMany?: EventCreateManyCreatedByInputEnvelope
    connect?: Enumerable<EventWhereUniqueInput>
  }

  export type TokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<TokenCreateWithoutUserInput>, Enumerable<TokenUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<TokenCreateOrConnectWithoutUserInput>
    createMany?: TokenCreateManyUserInputEnvelope
    connect?: Enumerable<TokenWhereUniqueInput>
  }

  export type FamilyMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<FamilyMemberCreateWithoutUserInput>, Enumerable<FamilyMemberUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<FamilyMemberCreateOrConnectWithoutUserInput>
    createMany?: FamilyMemberCreateManyUserInputEnvelope
    connect?: Enumerable<FamilyMemberWhereUniqueInput>
  }

  export type BookUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<BookCreateWithoutUserInput>, Enumerable<BookUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<BookCreateOrConnectWithoutUserInput>
    createMany?: BookCreateManyUserInputEnvelope
    connect?: Enumerable<BookWhereUniqueInput>
  }

  export type EventUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<Enumerable<EventCreateWithoutCreatedByInput>, Enumerable<EventUncheckedCreateWithoutCreatedByInput>>
    connectOrCreate?: Enumerable<EventCreateOrConnectWithoutCreatedByInput>
    createMany?: EventCreateManyCreatedByInputEnvelope
    connect?: Enumerable<EventWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableEnumEnumGenderFieldUpdateOperationsInput = {
    set?: EnumGender | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumEnumRoleFieldUpdateOperationsInput = {
    set?: EnumRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableEnumEnumHairStyleFieldUpdateOperationsInput = {
    set?: EnumHairStyle | null
  }

  export type TokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<TokenCreateWithoutUserInput>, Enumerable<TokenUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<TokenCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<TokenUpsertWithWhereUniqueWithoutUserInput>
    createMany?: TokenCreateManyUserInputEnvelope
    set?: Enumerable<TokenWhereUniqueInput>
    disconnect?: Enumerable<TokenWhereUniqueInput>
    delete?: Enumerable<TokenWhereUniqueInput>
    connect?: Enumerable<TokenWhereUniqueInput>
    update?: Enumerable<TokenUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<TokenUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<TokenScalarWhereInput>
  }

  export type FamilyMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<FamilyMemberCreateWithoutUserInput>, Enumerable<FamilyMemberUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<FamilyMemberCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<FamilyMemberUpsertWithWhereUniqueWithoutUserInput>
    createMany?: FamilyMemberCreateManyUserInputEnvelope
    set?: Enumerable<FamilyMemberWhereUniqueInput>
    disconnect?: Enumerable<FamilyMemberWhereUniqueInput>
    delete?: Enumerable<FamilyMemberWhereUniqueInput>
    connect?: Enumerable<FamilyMemberWhereUniqueInput>
    update?: Enumerable<FamilyMemberUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<FamilyMemberUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<FamilyMemberScalarWhereInput>
  }

  export type BookUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<BookCreateWithoutUserInput>, Enumerable<BookUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<BookCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<BookUpsertWithWhereUniqueWithoutUserInput>
    createMany?: BookCreateManyUserInputEnvelope
    set?: Enumerable<BookWhereUniqueInput>
    disconnect?: Enumerable<BookWhereUniqueInput>
    delete?: Enumerable<BookWhereUniqueInput>
    connect?: Enumerable<BookWhereUniqueInput>
    update?: Enumerable<BookUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<BookUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<BookScalarWhereInput>
  }

  export type EventUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<Enumerable<EventCreateWithoutCreatedByInput>, Enumerable<EventUncheckedCreateWithoutCreatedByInput>>
    connectOrCreate?: Enumerable<EventCreateOrConnectWithoutCreatedByInput>
    upsert?: Enumerable<EventUpsertWithWhereUniqueWithoutCreatedByInput>
    createMany?: EventCreateManyCreatedByInputEnvelope
    set?: Enumerable<EventWhereUniqueInput>
    disconnect?: Enumerable<EventWhereUniqueInput>
    delete?: Enumerable<EventWhereUniqueInput>
    connect?: Enumerable<EventWhereUniqueInput>
    update?: Enumerable<EventUpdateWithWhereUniqueWithoutCreatedByInput>
    updateMany?: Enumerable<EventUpdateManyWithWhereWithoutCreatedByInput>
    deleteMany?: Enumerable<EventScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<TokenCreateWithoutUserInput>, Enumerable<TokenUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<TokenCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<TokenUpsertWithWhereUniqueWithoutUserInput>
    createMany?: TokenCreateManyUserInputEnvelope
    set?: Enumerable<TokenWhereUniqueInput>
    disconnect?: Enumerable<TokenWhereUniqueInput>
    delete?: Enumerable<TokenWhereUniqueInput>
    connect?: Enumerable<TokenWhereUniqueInput>
    update?: Enumerable<TokenUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<TokenUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<TokenScalarWhereInput>
  }

  export type FamilyMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<FamilyMemberCreateWithoutUserInput>, Enumerable<FamilyMemberUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<FamilyMemberCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<FamilyMemberUpsertWithWhereUniqueWithoutUserInput>
    createMany?: FamilyMemberCreateManyUserInputEnvelope
    set?: Enumerable<FamilyMemberWhereUniqueInput>
    disconnect?: Enumerable<FamilyMemberWhereUniqueInput>
    delete?: Enumerable<FamilyMemberWhereUniqueInput>
    connect?: Enumerable<FamilyMemberWhereUniqueInput>
    update?: Enumerable<FamilyMemberUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<FamilyMemberUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<FamilyMemberScalarWhereInput>
  }

  export type BookUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<BookCreateWithoutUserInput>, Enumerable<BookUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<BookCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<BookUpsertWithWhereUniqueWithoutUserInput>
    createMany?: BookCreateManyUserInputEnvelope
    set?: Enumerable<BookWhereUniqueInput>
    disconnect?: Enumerable<BookWhereUniqueInput>
    delete?: Enumerable<BookWhereUniqueInput>
    connect?: Enumerable<BookWhereUniqueInput>
    update?: Enumerable<BookUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<BookUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<BookScalarWhereInput>
  }

  export type EventUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<Enumerable<EventCreateWithoutCreatedByInput>, Enumerable<EventUncheckedCreateWithoutCreatedByInput>>
    connectOrCreate?: Enumerable<EventCreateOrConnectWithoutCreatedByInput>
    upsert?: Enumerable<EventUpsertWithWhereUniqueWithoutCreatedByInput>
    createMany?: EventCreateManyCreatedByInputEnvelope
    set?: Enumerable<EventWhereUniqueInput>
    disconnect?: Enumerable<EventWhereUniqueInput>
    delete?: Enumerable<EventWhereUniqueInput>
    connect?: Enumerable<EventWhereUniqueInput>
    update?: Enumerable<EventUpdateWithWhereUniqueWithoutCreatedByInput>
    updateMany?: Enumerable<EventUpdateManyWithWhereWithoutCreatedByInput>
    deleteMany?: Enumerable<EventScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutFamilyMembersInput = {
    create?: XOR<UserCreateWithoutFamilyMembersInput, UserUncheckedCreateWithoutFamilyMembersInput>
    connectOrCreate?: UserCreateOrConnectWithoutFamilyMembersInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutFamilyMembersNestedInput = {
    create?: XOR<UserCreateWithoutFamilyMembersInput, UserUncheckedCreateWithoutFamilyMembersInput>
    connectOrCreate?: UserCreateOrConnectWithoutFamilyMembersInput
    upsert?: UserUpsertWithoutFamilyMembersInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFamilyMembersInput, UserUpdateWithoutFamilyMembersInput>, UserUncheckedUpdateWithoutFamilyMembersInput>
  }

  export type UserCreateNestedOneWithoutTokenInput = {
    create?: XOR<UserCreateWithoutTokenInput, UserUncheckedCreateWithoutTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokenInput
    connect?: UserWhereUniqueInput
  }

  export type EnumTokenTypeFieldUpdateOperationsInput = {
    set?: TokenType
  }

  export type UserUpdateOneRequiredWithoutTokenNestedInput = {
    create?: XOR<UserCreateWithoutTokenInput, UserUncheckedCreateWithoutTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokenInput
    upsert?: UserUpsertWithoutTokenInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTokenInput, UserUpdateWithoutTokenInput>, UserUncheckedUpdateWithoutTokenInput>
  }

  export type UserCreateNestedOneWithoutEventsInput = {
    create?: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutEventsNestedInput = {
    create?: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventsInput
    upsert?: UserUpsertWithoutEventsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEventsInput, UserUpdateWithoutEventsInput>, UserUncheckedUpdateWithoutEventsInput>
  }

  export type UserCreateNestedOneWithoutBooksInput = {
    create?: XOR<UserCreateWithoutBooksInput, UserUncheckedCreateWithoutBooksInput>
    connectOrCreate?: UserCreateOrConnectWithoutBooksInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutBooksNestedInput = {
    create?: XOR<UserCreateWithoutBooksInput, UserUncheckedCreateWithoutBooksInput>
    connectOrCreate?: UserCreateOrConnectWithoutBooksInput
    upsert?: UserUpsertWithoutBooksInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBooksInput, UserUpdateWithoutBooksInput>, UserUncheckedUpdateWithoutBooksInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel>
    notIn?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel>
    notIn?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumEnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: EnumGender | EnumEnumGenderFieldRefInput<$PrismaModel> | null
    in?: Enumerable<EnumGender> | ListEnumEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<EnumGender> | ListEnumEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEnumGenderNullableFilter<$PrismaModel> | EnumGender | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumEnumRoleFilter<$PrismaModel = never> = {
    equals?: EnumRole | EnumEnumRoleFieldRefInput<$PrismaModel>
    in?: Enumerable<EnumRole> | ListEnumEnumRoleFieldRefInput<$PrismaModel>
    notIn?: Enumerable<EnumRole> | ListEnumEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumEnumRoleFilter<$PrismaModel> | EnumRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumEnumHairStyleNullableFilter<$PrismaModel = never> = {
    equals?: EnumHairStyle | EnumEnumHairStyleFieldRefInput<$PrismaModel> | null
    in?: Enumerable<EnumHairStyle> | ListEnumEnumHairStyleFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<EnumHairStyle> | ListEnumEnumHairStyleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEnumHairStyleNullableFilter<$PrismaModel> | EnumHairStyle | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel>
    notIn?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: Enumerable<number> | ListFloatFieldRefInput<$PrismaModel>
    notIn?: Enumerable<number> | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel>
    notIn?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumEnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: EnumGender | EnumEnumGenderFieldRefInput<$PrismaModel> | null
    in?: Enumerable<EnumGender> | ListEnumEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<EnumGender> | ListEnumEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEnumGenderNullableWithAggregatesFilter<$PrismaModel> | EnumGender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumEnumGenderNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: Enumerable<number> | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<number> | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: EnumRole | EnumEnumRoleFieldRefInput<$PrismaModel>
    in?: Enumerable<EnumRole> | ListEnumEnumRoleFieldRefInput<$PrismaModel>
    notIn?: Enumerable<EnumRole> | ListEnumEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumEnumRoleWithAggregatesFilter<$PrismaModel> | EnumRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumEnumHairStyleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: EnumHairStyle | EnumEnumHairStyleFieldRefInput<$PrismaModel> | null
    in?: Enumerable<EnumHairStyle> | ListEnumEnumHairStyleFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<EnumHairStyle> | ListEnumEnumHairStyleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEnumHairStyleNullableWithAggregatesFilter<$PrismaModel> | EnumHairStyle | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumEnumHairStyleNullableFilter<$PrismaModel>
    _max?: NestedEnumEnumHairStyleNullableFilter<$PrismaModel>
  }

  export type NestedEnumTokenTypeFilter<$PrismaModel = never> = {
    equals?: TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: Enumerable<TokenType> | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    notIn?: Enumerable<TokenType> | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeFilter<$PrismaModel> | TokenType
  }

  export type NestedEnumTokenTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: Enumerable<TokenType> | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    notIn?: Enumerable<TokenType> | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeWithAggregatesFilter<$PrismaModel> | TokenType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTokenTypeFilter<$PrismaModel>
    _max?: NestedEnumTokenTypeFilter<$PrismaModel>
  }

  export type TokenCreateWithoutUserInput = {
    token: string
    type: TokenType
    expires: Date | string
    blacklisted: boolean
    createdAt?: Date | string
  }

  export type TokenUncheckedCreateWithoutUserInput = {
    id?: number
    token: string
    type: TokenType
    expires: Date | string
    blacklisted: boolean
    createdAt?: Date | string
  }

  export type TokenCreateOrConnectWithoutUserInput = {
    where: TokenWhereUniqueInput
    create: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
  }

  export type TokenCreateManyUserInputEnvelope = {
    data: Enumerable<TokenCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type FamilyMemberCreateWithoutUserInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FamilyMemberUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FamilyMemberCreateOrConnectWithoutUserInput = {
    where: FamilyMemberWhereUniqueInput
    create: XOR<FamilyMemberCreateWithoutUserInput, FamilyMemberUncheckedCreateWithoutUserInput>
  }

  export type FamilyMemberCreateManyUserInputEnvelope = {
    data: Enumerable<FamilyMemberCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type BookCreateWithoutUserInput = {
    name: string
    price: Date | string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    price: Date | string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookCreateOrConnectWithoutUserInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutUserInput, BookUncheckedCreateWithoutUserInput>
  }

  export type BookCreateManyUserInputEnvelope = {
    data: Enumerable<BookCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type EventCreateWithoutCreatedByInput = {
    name: string
    date: Date | string
  }

  export type EventUncheckedCreateWithoutCreatedByInput = {
    id?: number
    name: string
    date: Date | string
  }

  export type EventCreateOrConnectWithoutCreatedByInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutCreatedByInput, EventUncheckedCreateWithoutCreatedByInput>
  }

  export type EventCreateManyCreatedByInputEnvelope = {
    data: Enumerable<EventCreateManyCreatedByInput>
    skipDuplicates?: boolean
  }

  export type TokenUpsertWithWhereUniqueWithoutUserInput = {
    where: TokenWhereUniqueInput
    update: XOR<TokenUpdateWithoutUserInput, TokenUncheckedUpdateWithoutUserInput>
    create: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
  }

  export type TokenUpdateWithWhereUniqueWithoutUserInput = {
    where: TokenWhereUniqueInput
    data: XOR<TokenUpdateWithoutUserInput, TokenUncheckedUpdateWithoutUserInput>
  }

  export type TokenUpdateManyWithWhereWithoutUserInput = {
    where: TokenScalarWhereInput
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyWithoutUserInput>
  }

  export type TokenScalarWhereInput = {
    AND?: Enumerable<TokenScalarWhereInput>
    OR?: Enumerable<TokenScalarWhereInput>
    NOT?: Enumerable<TokenScalarWhereInput>
    id?: IntFilter<"Token"> | number
    token?: StringFilter<"Token"> | string
    type?: EnumTokenTypeFilter<"Token"> | TokenType
    expires?: DateTimeFilter<"Token"> | Date | string
    blacklisted?: BoolFilter<"Token"> | boolean
    createdAt?: DateTimeFilter<"Token"> | Date | string
    userId?: IntFilter<"Token"> | number
  }

  export type FamilyMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: FamilyMemberWhereUniqueInput
    update: XOR<FamilyMemberUpdateWithoutUserInput, FamilyMemberUncheckedUpdateWithoutUserInput>
    create: XOR<FamilyMemberCreateWithoutUserInput, FamilyMemberUncheckedCreateWithoutUserInput>
  }

  export type FamilyMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: FamilyMemberWhereUniqueInput
    data: XOR<FamilyMemberUpdateWithoutUserInput, FamilyMemberUncheckedUpdateWithoutUserInput>
  }

  export type FamilyMemberUpdateManyWithWhereWithoutUserInput = {
    where: FamilyMemberScalarWhereInput
    data: XOR<FamilyMemberUpdateManyMutationInput, FamilyMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type FamilyMemberScalarWhereInput = {
    AND?: Enumerable<FamilyMemberScalarWhereInput>
    OR?: Enumerable<FamilyMemberScalarWhereInput>
    NOT?: Enumerable<FamilyMemberScalarWhereInput>
    id?: IntFilter<"FamilyMember"> | number
    name?: StringFilter<"FamilyMember"> | string
    createdAt?: DateTimeFilter<"FamilyMember"> | Date | string
    updatedAt?: DateTimeFilter<"FamilyMember"> | Date | string
    userId?: IntNullableFilter<"FamilyMember"> | number | null
  }

  export type BookUpsertWithWhereUniqueWithoutUserInput = {
    where: BookWhereUniqueInput
    update: XOR<BookUpdateWithoutUserInput, BookUncheckedUpdateWithoutUserInput>
    create: XOR<BookCreateWithoutUserInput, BookUncheckedCreateWithoutUserInput>
  }

  export type BookUpdateWithWhereUniqueWithoutUserInput = {
    where: BookWhereUniqueInput
    data: XOR<BookUpdateWithoutUserInput, BookUncheckedUpdateWithoutUserInput>
  }

  export type BookUpdateManyWithWhereWithoutUserInput = {
    where: BookScalarWhereInput
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyWithoutUserInput>
  }

  export type BookScalarWhereInput = {
    AND?: Enumerable<BookScalarWhereInput>
    OR?: Enumerable<BookScalarWhereInput>
    NOT?: Enumerable<BookScalarWhereInput>
    id?: IntFilter<"Book"> | number
    name?: StringFilter<"Book"> | string
    price?: DateTimeFilter<"Book"> | Date | string
    description?: StringFilter<"Book"> | string
    createdAt?: DateTimeFilter<"Book"> | Date | string
    updatedAt?: DateTimeFilter<"Book"> | Date | string
    userId?: IntNullableFilter<"Book"> | number | null
  }

  export type EventUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutCreatedByInput, EventUncheckedUpdateWithoutCreatedByInput>
    create: XOR<EventCreateWithoutCreatedByInput, EventUncheckedCreateWithoutCreatedByInput>
  }

  export type EventUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutCreatedByInput, EventUncheckedUpdateWithoutCreatedByInput>
  }

  export type EventUpdateManyWithWhereWithoutCreatedByInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type EventScalarWhereInput = {
    AND?: Enumerable<EventScalarWhereInput>
    OR?: Enumerable<EventScalarWhereInput>
    NOT?: Enumerable<EventScalarWhereInput>
    id?: IntFilter<"Event"> | number
    name?: StringFilter<"Event"> | string
    date?: DateTimeFilter<"Event"> | Date | string
    createdById?: IntNullableFilter<"Event"> | number | null
  }

  export type UserCreateWithoutFamilyMembersInput = {
    name: string
    email: string
    phone?: string | null
    password: string
    gender?: EnumGender | null
    age?: number | null
    role?: EnumRole
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    hairStyle?: EnumHairStyle | null
    Token?: TokenCreateNestedManyWithoutUserInput
    books?: BookCreateNestedManyWithoutUserInput
    events?: EventCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutFamilyMembersInput = {
    id?: number
    name: string
    email: string
    phone?: string | null
    password: string
    gender?: EnumGender | null
    age?: number | null
    role?: EnumRole
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    hairStyle?: EnumHairStyle | null
    Token?: TokenUncheckedCreateNestedManyWithoutUserInput
    books?: BookUncheckedCreateNestedManyWithoutUserInput
    events?: EventUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutFamilyMembersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFamilyMembersInput, UserUncheckedCreateWithoutFamilyMembersInput>
  }

  export type UserUpsertWithoutFamilyMembersInput = {
    update: XOR<UserUpdateWithoutFamilyMembersInput, UserUncheckedUpdateWithoutFamilyMembersInput>
    create: XOR<UserCreateWithoutFamilyMembersInput, UserUncheckedCreateWithoutFamilyMembersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFamilyMembersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFamilyMembersInput, UserUncheckedUpdateWithoutFamilyMembersInput>
  }

  export type UserUpdateWithoutFamilyMembersInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumEnumGenderFieldUpdateOperationsInput | EnumGender | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    role?: EnumEnumRoleFieldUpdateOperationsInput | EnumRole
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hairStyle?: NullableEnumEnumHairStyleFieldUpdateOperationsInput | EnumHairStyle | null
    Token?: TokenUpdateManyWithoutUserNestedInput
    books?: BookUpdateManyWithoutUserNestedInput
    events?: EventUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutFamilyMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumEnumGenderFieldUpdateOperationsInput | EnumGender | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    role?: EnumEnumRoleFieldUpdateOperationsInput | EnumRole
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hairStyle?: NullableEnumEnumHairStyleFieldUpdateOperationsInput | EnumHairStyle | null
    Token?: TokenUncheckedUpdateManyWithoutUserNestedInput
    books?: BookUncheckedUpdateManyWithoutUserNestedInput
    events?: EventUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateWithoutTokenInput = {
    name: string
    email: string
    phone?: string | null
    password: string
    gender?: EnumGender | null
    age?: number | null
    role?: EnumRole
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    hairStyle?: EnumHairStyle | null
    familyMembers?: FamilyMemberCreateNestedManyWithoutUserInput
    books?: BookCreateNestedManyWithoutUserInput
    events?: EventCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutTokenInput = {
    id?: number
    name: string
    email: string
    phone?: string | null
    password: string
    gender?: EnumGender | null
    age?: number | null
    role?: EnumRole
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    hairStyle?: EnumHairStyle | null
    familyMembers?: FamilyMemberUncheckedCreateNestedManyWithoutUserInput
    books?: BookUncheckedCreateNestedManyWithoutUserInput
    events?: EventUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutTokenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTokenInput, UserUncheckedCreateWithoutTokenInput>
  }

  export type UserUpsertWithoutTokenInput = {
    update: XOR<UserUpdateWithoutTokenInput, UserUncheckedUpdateWithoutTokenInput>
    create: XOR<UserCreateWithoutTokenInput, UserUncheckedCreateWithoutTokenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTokenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTokenInput, UserUncheckedUpdateWithoutTokenInput>
  }

  export type UserUpdateWithoutTokenInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumEnumGenderFieldUpdateOperationsInput | EnumGender | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    role?: EnumEnumRoleFieldUpdateOperationsInput | EnumRole
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hairStyle?: NullableEnumEnumHairStyleFieldUpdateOperationsInput | EnumHairStyle | null
    familyMembers?: FamilyMemberUpdateManyWithoutUserNestedInput
    books?: BookUpdateManyWithoutUserNestedInput
    events?: EventUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutTokenInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumEnumGenderFieldUpdateOperationsInput | EnumGender | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    role?: EnumEnumRoleFieldUpdateOperationsInput | EnumRole
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hairStyle?: NullableEnumEnumHairStyleFieldUpdateOperationsInput | EnumHairStyle | null
    familyMembers?: FamilyMemberUncheckedUpdateManyWithoutUserNestedInput
    books?: BookUncheckedUpdateManyWithoutUserNestedInput
    events?: EventUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateWithoutEventsInput = {
    name: string
    email: string
    phone?: string | null
    password: string
    gender?: EnumGender | null
    age?: number | null
    role?: EnumRole
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    hairStyle?: EnumHairStyle | null
    Token?: TokenCreateNestedManyWithoutUserInput
    familyMembers?: FamilyMemberCreateNestedManyWithoutUserInput
    books?: BookCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEventsInput = {
    id?: number
    name: string
    email: string
    phone?: string | null
    password: string
    gender?: EnumGender | null
    age?: number | null
    role?: EnumRole
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    hairStyle?: EnumHairStyle | null
    Token?: TokenUncheckedCreateNestedManyWithoutUserInput
    familyMembers?: FamilyMemberUncheckedCreateNestedManyWithoutUserInput
    books?: BookUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
  }

  export type UserUpsertWithoutEventsInput = {
    update: XOR<UserUpdateWithoutEventsInput, UserUncheckedUpdateWithoutEventsInput>
    create: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEventsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEventsInput, UserUncheckedUpdateWithoutEventsInput>
  }

  export type UserUpdateWithoutEventsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumEnumGenderFieldUpdateOperationsInput | EnumGender | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    role?: EnumEnumRoleFieldUpdateOperationsInput | EnumRole
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hairStyle?: NullableEnumEnumHairStyleFieldUpdateOperationsInput | EnumHairStyle | null
    Token?: TokenUpdateManyWithoutUserNestedInput
    familyMembers?: FamilyMemberUpdateManyWithoutUserNestedInput
    books?: BookUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumEnumGenderFieldUpdateOperationsInput | EnumGender | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    role?: EnumEnumRoleFieldUpdateOperationsInput | EnumRole
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hairStyle?: NullableEnumEnumHairStyleFieldUpdateOperationsInput | EnumHairStyle | null
    Token?: TokenUncheckedUpdateManyWithoutUserNestedInput
    familyMembers?: FamilyMemberUncheckedUpdateManyWithoutUserNestedInput
    books?: BookUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutBooksInput = {
    name: string
    email: string
    phone?: string | null
    password: string
    gender?: EnumGender | null
    age?: number | null
    role?: EnumRole
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    hairStyle?: EnumHairStyle | null
    Token?: TokenCreateNestedManyWithoutUserInput
    familyMembers?: FamilyMemberCreateNestedManyWithoutUserInput
    events?: EventCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutBooksInput = {
    id?: number
    name: string
    email: string
    phone?: string | null
    password: string
    gender?: EnumGender | null
    age?: number | null
    role?: EnumRole
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    hairStyle?: EnumHairStyle | null
    Token?: TokenUncheckedCreateNestedManyWithoutUserInput
    familyMembers?: FamilyMemberUncheckedCreateNestedManyWithoutUserInput
    events?: EventUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutBooksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBooksInput, UserUncheckedCreateWithoutBooksInput>
  }

  export type UserUpsertWithoutBooksInput = {
    update: XOR<UserUpdateWithoutBooksInput, UserUncheckedUpdateWithoutBooksInput>
    create: XOR<UserCreateWithoutBooksInput, UserUncheckedCreateWithoutBooksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBooksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBooksInput, UserUncheckedUpdateWithoutBooksInput>
  }

  export type UserUpdateWithoutBooksInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumEnumGenderFieldUpdateOperationsInput | EnumGender | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    role?: EnumEnumRoleFieldUpdateOperationsInput | EnumRole
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hairStyle?: NullableEnumEnumHairStyleFieldUpdateOperationsInput | EnumHairStyle | null
    Token?: TokenUpdateManyWithoutUserNestedInput
    familyMembers?: FamilyMemberUpdateManyWithoutUserNestedInput
    events?: EventUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutBooksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumEnumGenderFieldUpdateOperationsInput | EnumGender | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    role?: EnumEnumRoleFieldUpdateOperationsInput | EnumRole
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hairStyle?: NullableEnumEnumHairStyleFieldUpdateOperationsInput | EnumHairStyle | null
    Token?: TokenUncheckedUpdateManyWithoutUserNestedInput
    familyMembers?: FamilyMemberUncheckedUpdateManyWithoutUserNestedInput
    events?: EventUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type TokenCreateManyUserInput = {
    id?: number
    token: string
    type: TokenType
    expires: Date | string
    blacklisted: boolean
    createdAt?: Date | string
  }

  export type FamilyMemberCreateManyUserInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookCreateManyUserInput = {
    id?: number
    name: string
    price: Date | string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventCreateManyCreatedByInput = {
    id?: number
    name: string
    date: Date | string
  }

  export type TokenUpdateWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | TokenType
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    blacklisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | TokenType
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    blacklisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | TokenType
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    blacklisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FamilyMemberUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FamilyMemberUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FamilyMemberUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUpdateWithoutCreatedByInput = {
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}