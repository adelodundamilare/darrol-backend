
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model FamilyMember
 * 
 */
export type FamilyMember = $Result.DefaultSelection<Prisma.$FamilyMemberPayload>
/**
 * Model Token
 * 
 */
export type Token = $Result.DefaultSelection<Prisma.$TokenPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model Book
 * 
 */
export type Book = $Result.DefaultSelection<Prisma.$BookPayload>
/**
 * Model BookOwner
 * 
 */
export type BookOwner = $Result.DefaultSelection<Prisma.$BookOwnerPayload>
/**
 * Model Theme
 * 
 */
export type Theme = $Result.DefaultSelection<Prisma.$ThemePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const EnumRole: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type EnumRole = (typeof EnumRole)[keyof typeof EnumRole]


export const TokenType: {
  ACCESS: 'ACCESS',
  REFRESH: 'REFRESH',
  RESET_PASSWORD: 'RESET_PASSWORD',
  VERIFY_EMAIL: 'VERIFY_EMAIL'
};

export type TokenType = (typeof TokenType)[keyof typeof TokenType]


export const EnumGender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHER: 'OTHER'
};

export type EnumGender = (typeof EnumGender)[keyof typeof EnumGender]


export const EnumHairStyle: {
  LIGHT: 'LIGHT',
  DARK: 'DARK',
  MEDIUM: 'MEDIUM'
};

export type EnumHairStyle = (typeof EnumHairStyle)[keyof typeof EnumHairStyle]

}

export type EnumRole = $Enums.EnumRole

export const EnumRole: typeof $Enums.EnumRole

export type TokenType = $Enums.TokenType

export const TokenType: typeof $Enums.TokenType

export type EnumGender = $Enums.EnumGender

export const EnumGender: typeof $Enums.EnumGender

export type EnumHairStyle = $Enums.EnumHairStyle

export const EnumHairStyle: typeof $Enums.EnumHairStyle

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
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

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
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.familyMember`: Exposes CRUD operations for the **FamilyMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FamilyMembers
    * const familyMembers = await prisma.familyMember.findMany()
    * ```
    */
  get familyMember(): Prisma.FamilyMemberDelegate<ExtArgs>;

  /**
   * `prisma.token`: Exposes CRUD operations for the **Token** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokens
    * const tokens = await prisma.token.findMany()
    * ```
    */
  get token(): Prisma.TokenDelegate<ExtArgs>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs>;

  /**
   * `prisma.book`: Exposes CRUD operations for the **Book** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Books
    * const books = await prisma.book.findMany()
    * ```
    */
  get book(): Prisma.BookDelegate<ExtArgs>;

  /**
   * `prisma.bookOwner`: Exposes CRUD operations for the **BookOwner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookOwners
    * const bookOwners = await prisma.bookOwner.findMany()
    * ```
    */
  get bookOwner(): Prisma.BookOwnerDelegate<ExtArgs>;

  /**
   * `prisma.theme`: Exposes CRUD operations for the **Theme** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Themes
    * const themes = await prisma.theme.findMany()
    * ```
    */
  get theme(): Prisma.ThemeDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.9.0-integration-engines-5-9-0-3-fix-5-8-0-timeout-9035a1b3236277185290a05f5f4ca9afd179d699.1
   * Query Engine version: 0a83d8541752d7582de2ebc1ece46519ce72a848
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
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    FamilyMember: 'FamilyMember',
    Token: 'Token',
    Event: 'Event',
    Book: 'Book',
    BookOwner: 'BookOwner',
    Theme: 'Theme'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'familyMember' | 'token' | 'event' | 'book' | 'bookOwner' | 'theme'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      FamilyMember: {
        payload: Prisma.$FamilyMemberPayload<ExtArgs>
        fields: Prisma.FamilyMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FamilyMemberFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FamilyMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FamilyMemberFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FamilyMemberPayload>
          }
          findFirst: {
            args: Prisma.FamilyMemberFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FamilyMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FamilyMemberFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FamilyMemberPayload>
          }
          findMany: {
            args: Prisma.FamilyMemberFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FamilyMemberPayload>[]
          }
          create: {
            args: Prisma.FamilyMemberCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FamilyMemberPayload>
          }
          createMany: {
            args: Prisma.FamilyMemberCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FamilyMemberDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FamilyMemberPayload>
          }
          update: {
            args: Prisma.FamilyMemberUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FamilyMemberPayload>
          }
          deleteMany: {
            args: Prisma.FamilyMemberDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FamilyMemberUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FamilyMemberUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FamilyMemberPayload>
          }
          aggregate: {
            args: Prisma.FamilyMemberAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFamilyMember>
          }
          groupBy: {
            args: Prisma.FamilyMemberGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FamilyMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.FamilyMemberCountArgs<ExtArgs>,
            result: $Utils.Optional<FamilyMemberCountAggregateOutputType> | number
          }
        }
      }
      Token: {
        payload: Prisma.$TokenPayload<ExtArgs>
        fields: Prisma.TokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokenFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokenFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findFirst: {
            args: Prisma.TokenFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokenFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findMany: {
            args: Prisma.TokenFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          create: {
            args: Prisma.TokenCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          createMany: {
            args: Prisma.TokenCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TokenDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          update: {
            args: Prisma.TokenUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          deleteMany: {
            args: Prisma.TokenDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TokenUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TokenUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          aggregate: {
            args: Prisma.TokenAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateToken>
          }
          groupBy: {
            args: Prisma.TokenGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokenCountArgs<ExtArgs>,
            result: $Utils.Optional<TokenCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>,
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      Book: {
        payload: Prisma.$BookPayload<ExtArgs>
        fields: Prisma.BookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          findFirst: {
            args: Prisma.BookFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          findMany: {
            args: Prisma.BookFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          create: {
            args: Prisma.BookCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          createMany: {
            args: Prisma.BookCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BookDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          update: {
            args: Prisma.BookUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          deleteMany: {
            args: Prisma.BookDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BookUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BookUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          aggregate: {
            args: Prisma.BookAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBook>
          }
          groupBy: {
            args: Prisma.BookGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BookGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookCountArgs<ExtArgs>,
            result: $Utils.Optional<BookCountAggregateOutputType> | number
          }
        }
      }
      BookOwner: {
        payload: Prisma.$BookOwnerPayload<ExtArgs>
        fields: Prisma.BookOwnerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookOwnerFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookOwnerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookOwnerFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookOwnerPayload>
          }
          findFirst: {
            args: Prisma.BookOwnerFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookOwnerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookOwnerFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookOwnerPayload>
          }
          findMany: {
            args: Prisma.BookOwnerFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookOwnerPayload>[]
          }
          create: {
            args: Prisma.BookOwnerCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookOwnerPayload>
          }
          createMany: {
            args: Prisma.BookOwnerCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BookOwnerDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookOwnerPayload>
          }
          update: {
            args: Prisma.BookOwnerUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookOwnerPayload>
          }
          deleteMany: {
            args: Prisma.BookOwnerDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BookOwnerUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BookOwnerUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookOwnerPayload>
          }
          aggregate: {
            args: Prisma.BookOwnerAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBookOwner>
          }
          groupBy: {
            args: Prisma.BookOwnerGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BookOwnerGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookOwnerCountArgs<ExtArgs>,
            result: $Utils.Optional<BookOwnerCountAggregateOutputType> | number
          }
        }
      }
      Theme: {
        payload: Prisma.$ThemePayload<ExtArgs>
        fields: Prisma.ThemeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ThemeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ThemePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ThemeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>
          }
          findFirst: {
            args: Prisma.ThemeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ThemePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ThemeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>
          }
          findMany: {
            args: Prisma.ThemeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>[]
          }
          create: {
            args: Prisma.ThemeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>
          }
          createMany: {
            args: Prisma.ThemeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ThemeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>
          }
          update: {
            args: Prisma.ThemeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>
          }
          deleteMany: {
            args: Prisma.ThemeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ThemeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ThemeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>
          }
          aggregate: {
            args: Prisma.ThemeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTheme>
          }
          groupBy: {
            args: Prisma.ThemeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ThemeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ThemeCountArgs<ExtArgs>,
            result: $Utils.Optional<ThemeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
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
    | 'groupBy'

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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

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
    Book: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Token?: boolean | UserCountOutputTypeCountTokenArgs
    Book?: boolean | UserCountOutputTypeCountBookArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookWhereInput
  }



  /**
   * Count Type BookOwnerCountOutputType
   */

  export type BookOwnerCountOutputType = {
    familyMembers: number
    events: number
  }

  export type BookOwnerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    familyMembers?: boolean | BookOwnerCountOutputTypeCountFamilyMembersArgs
    events?: boolean | BookOwnerCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes

  /**
   * BookOwnerCountOutputType without action
   */
  export type BookOwnerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookOwnerCountOutputType
     */
    select?: BookOwnerCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * BookOwnerCountOutputType without action
   */
  export type BookOwnerCountOutputTypeCountFamilyMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FamilyMemberWhereInput
  }


  /**
   * BookOwnerCountOutputType without action
   */
  export type BookOwnerCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }



  /**
   * Count Type ThemeCountOutputType
   */

  export type ThemeCountOutputType = {
    Book: number
  }

  export type ThemeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Book?: boolean | ThemeCountOutputTypeCountBookArgs
  }

  // Custom InputTypes

  /**
   * ThemeCountOutputType without action
   */
  export type ThemeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThemeCountOutputType
     */
    select?: ThemeCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ThemeCountOutputType without action
   */
  export type ThemeCountOutputTypeCountBookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookWhereInput
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
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.EnumRole | null
    isEmailVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.EnumRole | null
    isEmailVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    isEmailVerified: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    isEmailVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    isEmailVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    isEmailVerified?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
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
    password: string
    role: $Enums.EnumRole
    isEmailVerified: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    isEmailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Token?: boolean | User$TokenArgs<ExtArgs>
    Book?: boolean | User$BookArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    isEmailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Token?: boolean | User$TokenArgs<ExtArgs>
    Book?: boolean | User$BookArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Token: Prisma.$TokenPayload<ExtArgs>[]
      Book: Prisma.$BookPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      role: $Enums.EnumRole
      isEmailVerified: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
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
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

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
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

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
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

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
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

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
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Token<T extends User$TokenArgs<ExtArgs> = {}>(args?: Subset<T, User$TokenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, 'findMany'> | Null>;

    Book<T extends User$BookArgs<ExtArgs> = {}>(args?: Subset<T, User$BookArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'EnumRole'>
    readonly isEmailVerified: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.Token
   */
  export type User$TokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TokenInclude<ExtArgs> | null
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    cursor?: TokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }


  /**
   * User.Book
   */
  export type User$BookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookInclude<ExtArgs> | null
    where?: BookWhereInput
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    cursor?: BookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
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
    bookOwnerId: number | null
  }

  export type FamilyMemberSumAggregateOutputType = {
    id: number | null
    bookOwnerId: number | null
  }

  export type FamilyMemberMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    bookOwnerId: number | null
  }

  export type FamilyMemberMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    bookOwnerId: number | null
  }

  export type FamilyMemberCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    bookOwnerId: number
    _all: number
  }


  export type FamilyMemberAvgAggregateInputType = {
    id?: true
    bookOwnerId?: true
  }

  export type FamilyMemberSumAggregateInputType = {
    id?: true
    bookOwnerId?: true
  }

  export type FamilyMemberMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    bookOwnerId?: true
  }

  export type FamilyMemberMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    bookOwnerId?: true
  }

  export type FamilyMemberCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    bookOwnerId?: true
    _all?: true
  }

  export type FamilyMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FamilyMember to aggregate.
     */
    where?: FamilyMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FamilyMembers to fetch.
     */
    orderBy?: FamilyMemberOrderByWithRelationInput | FamilyMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FamilyMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FamilyMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FamilyMembers.
     */
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




  export type FamilyMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FamilyMemberWhereInput
    orderBy?: FamilyMemberOrderByWithAggregationInput | FamilyMemberOrderByWithAggregationInput[]
    by: FamilyMemberScalarFieldEnum[] | FamilyMemberScalarFieldEnum
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
    bookOwnerId: number | null
    _count: FamilyMemberCountAggregateOutputType | null
    _avg: FamilyMemberAvgAggregateOutputType | null
    _sum: FamilyMemberSumAggregateOutputType | null
    _min: FamilyMemberMinAggregateOutputType | null
    _max: FamilyMemberMaxAggregateOutputType | null
  }

  type GetFamilyMemberGroupByPayload<T extends FamilyMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FamilyMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FamilyMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FamilyMemberGroupByOutputType[P]>
            : GetScalarType<T[P], FamilyMemberGroupByOutputType[P]>
        }
      >
    >


  export type FamilyMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bookOwnerId?: boolean
    BookOwner?: boolean | FamilyMember$BookOwnerArgs<ExtArgs>
  }, ExtArgs["result"]["familyMember"]>

  export type FamilyMemberSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bookOwnerId?: boolean
  }

  export type FamilyMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    BookOwner?: boolean | FamilyMember$BookOwnerArgs<ExtArgs>
  }


  export type $FamilyMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FamilyMember"
    objects: {
      BookOwner: Prisma.$BookOwnerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
      bookOwnerId: number | null
    }, ExtArgs["result"]["familyMember"]>
    composites: {}
  }


  type FamilyMemberGetPayload<S extends boolean | null | undefined | FamilyMemberDefaultArgs> = $Result.GetResult<Prisma.$FamilyMemberPayload, S>

  type FamilyMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FamilyMemberFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FamilyMemberCountAggregateInputType | true
    }

  export interface FamilyMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FamilyMember'], meta: { name: 'FamilyMember' } }
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
    findUnique<T extends FamilyMemberFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FamilyMemberFindUniqueArgs<ExtArgs>>
    ): Prisma__FamilyMemberClient<$Result.GetResult<Prisma.$FamilyMemberPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends FamilyMemberFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FamilyMemberFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FamilyMemberClient<$Result.GetResult<Prisma.$FamilyMemberPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    findFirst<T extends FamilyMemberFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FamilyMemberFindFirstArgs<ExtArgs>>
    ): Prisma__FamilyMemberClient<$Result.GetResult<Prisma.$FamilyMemberPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first FamilyMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
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
    findFirstOrThrow<T extends FamilyMemberFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FamilyMemberFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FamilyMemberClient<$Result.GetResult<Prisma.$FamilyMemberPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

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
    findMany<T extends FamilyMemberFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FamilyMemberFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FamilyMemberPayload<ExtArgs>, T, 'findMany'>>

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
    create<T extends FamilyMemberCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FamilyMemberCreateArgs<ExtArgs>>
    ): Prisma__FamilyMemberClient<$Result.GetResult<Prisma.$FamilyMemberPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

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
    createMany<T extends FamilyMemberCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FamilyMemberCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    delete<T extends FamilyMemberDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FamilyMemberDeleteArgs<ExtArgs>>
    ): Prisma__FamilyMemberClient<$Result.GetResult<Prisma.$FamilyMemberPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    update<T extends FamilyMemberUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FamilyMemberUpdateArgs<ExtArgs>>
    ): Prisma__FamilyMemberClient<$Result.GetResult<Prisma.$FamilyMemberPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    deleteMany<T extends FamilyMemberDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FamilyMemberDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    updateMany<T extends FamilyMemberUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FamilyMemberUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    upsert<T extends FamilyMemberUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FamilyMemberUpsertArgs<ExtArgs>>
    ): Prisma__FamilyMemberClient<$Result.GetResult<Prisma.$FamilyMemberPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
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
    aggregate<T extends FamilyMemberAggregateArgs>(args: Subset<T, FamilyMemberAggregateArgs>): Prisma.PrismaPromise<GetFamilyMemberAggregateType<T>>

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
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, FamilyMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFamilyMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FamilyMember model
   */
  readonly fields: FamilyMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FamilyMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FamilyMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    BookOwner<T extends FamilyMember$BookOwnerArgs<ExtArgs> = {}>(args?: Subset<T, FamilyMember$BookOwnerArgs<ExtArgs>>): Prisma__BookOwnerClient<$Result.GetResult<Prisma.$BookOwnerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the FamilyMember model
   */ 
  interface FamilyMemberFieldRefs {
    readonly id: FieldRef<"FamilyMember", 'Int'>
    readonly name: FieldRef<"FamilyMember", 'String'>
    readonly createdAt: FieldRef<"FamilyMember", 'DateTime'>
    readonly updatedAt: FieldRef<"FamilyMember", 'DateTime'>
    readonly bookOwnerId: FieldRef<"FamilyMember", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * FamilyMember findUnique
   */
  export type FamilyMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyMember
     */
    select?: FamilyMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FamilyMemberInclude<ExtArgs> | null
    /**
     * Filter, which FamilyMember to fetch.
     */
    where: FamilyMemberWhereUniqueInput
  }


  /**
   * FamilyMember findUniqueOrThrow
   */
  export type FamilyMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyMember
     */
    select?: FamilyMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FamilyMemberInclude<ExtArgs> | null
    /**
     * Filter, which FamilyMember to fetch.
     */
    where: FamilyMemberWhereUniqueInput
  }


  /**
   * FamilyMember findFirst
   */
  export type FamilyMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyMember
     */
    select?: FamilyMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FamilyMemberInclude<ExtArgs> | null
    /**
     * Filter, which FamilyMember to fetch.
     */
    where?: FamilyMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FamilyMembers to fetch.
     */
    orderBy?: FamilyMemberOrderByWithRelationInput | FamilyMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FamilyMembers.
     */
    cursor?: FamilyMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FamilyMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FamilyMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FamilyMembers.
     */
    distinct?: FamilyMemberScalarFieldEnum | FamilyMemberScalarFieldEnum[]
  }


  /**
   * FamilyMember findFirstOrThrow
   */
  export type FamilyMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyMember
     */
    select?: FamilyMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FamilyMemberInclude<ExtArgs> | null
    /**
     * Filter, which FamilyMember to fetch.
     */
    where?: FamilyMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FamilyMembers to fetch.
     */
    orderBy?: FamilyMemberOrderByWithRelationInput | FamilyMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FamilyMembers.
     */
    cursor?: FamilyMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FamilyMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FamilyMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FamilyMembers.
     */
    distinct?: FamilyMemberScalarFieldEnum | FamilyMemberScalarFieldEnum[]
  }


  /**
   * FamilyMember findMany
   */
  export type FamilyMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyMember
     */
    select?: FamilyMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FamilyMemberInclude<ExtArgs> | null
    /**
     * Filter, which FamilyMembers to fetch.
     */
    where?: FamilyMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FamilyMembers to fetch.
     */
    orderBy?: FamilyMemberOrderByWithRelationInput | FamilyMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FamilyMembers.
     */
    cursor?: FamilyMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FamilyMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FamilyMembers.
     */
    skip?: number
    distinct?: FamilyMemberScalarFieldEnum | FamilyMemberScalarFieldEnum[]
  }


  /**
   * FamilyMember create
   */
  export type FamilyMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyMember
     */
    select?: FamilyMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FamilyMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a FamilyMember.
     */
    data: XOR<FamilyMemberCreateInput, FamilyMemberUncheckedCreateInput>
  }


  /**
   * FamilyMember createMany
   */
  export type FamilyMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FamilyMembers.
     */
    data: FamilyMemberCreateManyInput | FamilyMemberCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * FamilyMember update
   */
  export type FamilyMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyMember
     */
    select?: FamilyMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FamilyMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a FamilyMember.
     */
    data: XOR<FamilyMemberUpdateInput, FamilyMemberUncheckedUpdateInput>
    /**
     * Choose, which FamilyMember to update.
     */
    where: FamilyMemberWhereUniqueInput
  }


  /**
   * FamilyMember updateMany
   */
  export type FamilyMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FamilyMembers.
     */
    data: XOR<FamilyMemberUpdateManyMutationInput, FamilyMemberUncheckedUpdateManyInput>
    /**
     * Filter which FamilyMembers to update
     */
    where?: FamilyMemberWhereInput
  }


  /**
   * FamilyMember upsert
   */
  export type FamilyMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyMember
     */
    select?: FamilyMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FamilyMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the FamilyMember to update in case it exists.
     */
    where: FamilyMemberWhereUniqueInput
    /**
     * In case the FamilyMember found by the `where` argument doesn't exist, create a new FamilyMember with this data.
     */
    create: XOR<FamilyMemberCreateInput, FamilyMemberUncheckedCreateInput>
    /**
     * In case the FamilyMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FamilyMemberUpdateInput, FamilyMemberUncheckedUpdateInput>
  }


  /**
   * FamilyMember delete
   */
  export type FamilyMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyMember
     */
    select?: FamilyMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FamilyMemberInclude<ExtArgs> | null
    /**
     * Filter which FamilyMember to delete.
     */
    where: FamilyMemberWhereUniqueInput
  }


  /**
   * FamilyMember deleteMany
   */
  export type FamilyMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FamilyMembers to delete
     */
    where?: FamilyMemberWhereInput
  }


  /**
   * FamilyMember.BookOwner
   */
  export type FamilyMember$BookOwnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookOwner
     */
    select?: BookOwnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookOwnerInclude<ExtArgs> | null
    where?: BookOwnerWhereInput
  }


  /**
   * FamilyMember without action
   */
  export type FamilyMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyMember
     */
    select?: FamilyMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FamilyMemberInclude<ExtArgs> | null
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
    type: $Enums.TokenType | null
    expires: Date | null
    blacklisted: boolean | null
    createdAt: Date | null
    userId: number | null
  }

  export type TokenMaxAggregateOutputType = {
    id: number | null
    token: string | null
    type: $Enums.TokenType | null
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

  export type TokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Token to aggregate.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
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




  export type TokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithAggregationInput | TokenOrderByWithAggregationInput[]
    by: TokenScalarFieldEnum[] | TokenScalarFieldEnum
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
    type: $Enums.TokenType
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

  type GetTokenGroupByPayload<T extends TokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenGroupByOutputType[P]>
            : GetScalarType<T[P], TokenGroupByOutputType[P]>
        }
      >
    >


  export type TokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    type?: boolean
    expires?: boolean
    blacklisted?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectScalar = {
    id?: boolean
    token?: boolean
    type?: boolean
    expires?: boolean
    blacklisted?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type TokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $TokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Token"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      token: string
      type: $Enums.TokenType
      expires: Date
      blacklisted: boolean
      createdAt: Date
      userId: number
    }, ExtArgs["result"]["token"]>
    composites: {}
  }


  type TokenGetPayload<S extends boolean | null | undefined | TokenDefaultArgs> = $Result.GetResult<Prisma.$TokenPayload, S>

  type TokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TokenFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TokenCountAggregateInputType | true
    }

  export interface TokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Token'], meta: { name: 'Token' } }
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
    findUnique<T extends TokenFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TokenFindUniqueArgs<ExtArgs>>
    ): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends TokenFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TokenFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    findFirst<T extends TokenFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TokenFindFirstArgs<ExtArgs>>
    ): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Token that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
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
    findFirstOrThrow<T extends TokenFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TokenFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

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
    findMany<T extends TokenFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TokenFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, 'findMany'>>

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
    create<T extends TokenCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TokenCreateArgs<ExtArgs>>
    ): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

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
    createMany<T extends TokenCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TokenCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    delete<T extends TokenDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TokenDeleteArgs<ExtArgs>>
    ): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    update<T extends TokenUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TokenUpdateArgs<ExtArgs>>
    ): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    deleteMany<T extends TokenDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TokenDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    updateMany<T extends TokenUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TokenUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    upsert<T extends TokenUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TokenUpsertArgs<ExtArgs>>
    ): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
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
    aggregate<T extends TokenAggregateArgs>(args: Subset<T, TokenAggregateArgs>): Prisma.PrismaPromise<GetTokenAggregateType<T>>

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
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Token model
   */
  readonly fields: TokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Token model
   */ 
  interface TokenFieldRefs {
    readonly id: FieldRef<"Token", 'Int'>
    readonly token: FieldRef<"Token", 'String'>
    readonly type: FieldRef<"Token", 'TokenType'>
    readonly expires: FieldRef<"Token", 'DateTime'>
    readonly blacklisted: FieldRef<"Token", 'Boolean'>
    readonly createdAt: FieldRef<"Token", 'DateTime'>
    readonly userId: FieldRef<"Token", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Token findUnique
   */
  export type TokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }


  /**
   * Token findUniqueOrThrow
   */
  export type TokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }


  /**
   * Token findFirst
   */
  export type TokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }


  /**
   * Token findFirstOrThrow
   */
  export type TokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }


  /**
   * Token findMany
   */
  export type TokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }


  /**
   * Token create
   */
  export type TokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The data needed to create a Token.
     */
    data: XOR<TokenCreateInput, TokenUncheckedCreateInput>
  }


  /**
   * Token createMany
   */
  export type TokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Token update
   */
  export type TokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The data needed to update a Token.
     */
    data: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
    /**
     * Choose, which Token to update.
     */
    where: TokenWhereUniqueInput
  }


  /**
   * Token updateMany
   */
  export type TokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
  }


  /**
   * Token upsert
   */
  export type TokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The filter to search for the Token to update in case it exists.
     */
    where: TokenWhereUniqueInput
    /**
     * In case the Token found by the `where` argument doesn't exist, create a new Token with this data.
     */
    create: XOR<TokenCreateInput, TokenUncheckedCreateInput>
    /**
     * In case the Token was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
  }


  /**
   * Token delete
   */
  export type TokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter which Token to delete.
     */
    where: TokenWhereUniqueInput
  }


  /**
   * Token deleteMany
   */
  export type TokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tokens to delete
     */
    where?: TokenWhereInput
  }


  /**
   * Token without action
   */
  export type TokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TokenInclude<ExtArgs> | null
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
    bookOwnerId: number | null
  }

  export type EventSumAggregateOutputType = {
    id: number | null
    createdById: number | null
    bookOwnerId: number | null
  }

  export type EventMinAggregateOutputType = {
    id: number | null
    name: string | null
    date: Date | null
    createdById: number | null
    bookOwnerId: number | null
  }

  export type EventMaxAggregateOutputType = {
    id: number | null
    name: string | null
    date: Date | null
    createdById: number | null
    bookOwnerId: number | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    name: number
    date: number
    createdById: number
    bookOwnerId: number
    _all: number
  }


  export type EventAvgAggregateInputType = {
    id?: true
    createdById?: true
    bookOwnerId?: true
  }

  export type EventSumAggregateInputType = {
    id?: true
    createdById?: true
    bookOwnerId?: true
  }

  export type EventMinAggregateInputType = {
    id?: true
    name?: true
    date?: true
    createdById?: true
    bookOwnerId?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    name?: true
    date?: true
    createdById?: true
    bookOwnerId?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    name?: true
    date?: true
    createdById?: true
    bookOwnerId?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
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




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
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
    bookOwnerId: number | null
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    date?: boolean
    createdById?: boolean
    bookOwnerId?: boolean
    BookOwner?: boolean | Event$BookOwnerArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    name?: boolean
    date?: boolean
    createdById?: boolean
    bookOwnerId?: boolean
  }

  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    BookOwner?: boolean | Event$BookOwnerArgs<ExtArgs>
  }


  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      BookOwner: Prisma.$BookOwnerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      date: Date
      createdById: number | null
      bookOwnerId: number | null
    }, ExtArgs["result"]["event"]>
    composites: {}
  }


  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
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
    findUnique<T extends EventFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>
    ): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    findFirst<T extends EventFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>
    ): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
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
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

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
    findMany<T extends EventFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, 'findMany'>>

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
    create<T extends EventCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EventCreateArgs<ExtArgs>>
    ): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

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
    createMany<T extends EventCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    delete<T extends EventDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EventDeleteArgs<ExtArgs>>
    ): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    update<T extends EventUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EventUpdateArgs<ExtArgs>>
    ): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    deleteMany<T extends EventDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    updateMany<T extends EventUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    upsert<T extends EventUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EventUpsertArgs<ExtArgs>>
    ): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
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
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

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
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    BookOwner<T extends Event$BookOwnerArgs<ExtArgs> = {}>(args?: Subset<T, Event$BookOwnerArgs<ExtArgs>>): Prisma__BookOwnerClient<$Result.GetResult<Prisma.$BookOwnerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Event model
   */ 
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'Int'>
    readonly name: FieldRef<"Event", 'String'>
    readonly date: FieldRef<"Event", 'DateTime'>
    readonly createdById: FieldRef<"Event", 'Int'>
    readonly bookOwnerId: FieldRef<"Event", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }


  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }


  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }


  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }


  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }


  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }


  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }


  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
  }


  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }


  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }


  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
  }


  /**
   * Event.BookOwner
   */
  export type Event$BookOwnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookOwner
     */
    select?: BookOwnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookOwnerInclude<ExtArgs> | null
    where?: BookOwnerWhereInput
  }


  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventInclude<ExtArgs> | null
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
    themeId: number | null
    userId: number | null
    bookOwnerId: number | null
  }

  export type BookSumAggregateOutputType = {
    id: number | null
    themeId: number | null
    userId: number | null
    bookOwnerId: number | null
  }

  export type BookMinAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    price: Date | null
    description: string | null
    imageUrl: string | null
    themeId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
    bookOwnerId: number | null
  }

  export type BookMaxAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    price: Date | null
    description: string | null
    imageUrl: string | null
    themeId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
    bookOwnerId: number | null
  }

  export type BookCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    price: number
    description: number
    imageUrl: number
    themeId: number
    createdAt: number
    updatedAt: number
    userId: number
    bookOwnerId: number
    _all: number
  }


  export type BookAvgAggregateInputType = {
    id?: true
    themeId?: true
    userId?: true
    bookOwnerId?: true
  }

  export type BookSumAggregateInputType = {
    id?: true
    themeId?: true
    userId?: true
    bookOwnerId?: true
  }

  export type BookMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    price?: true
    description?: true
    imageUrl?: true
    themeId?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    bookOwnerId?: true
  }

  export type BookMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    price?: true
    description?: true
    imageUrl?: true
    themeId?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    bookOwnerId?: true
  }

  export type BookCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    price?: true
    description?: true
    imageUrl?: true
    themeId?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    bookOwnerId?: true
    _all?: true
  }

  export type BookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Book to aggregate.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
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




  export type BookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookWhereInput
    orderBy?: BookOrderByWithAggregationInput | BookOrderByWithAggregationInput[]
    by: BookScalarFieldEnum[] | BookScalarFieldEnum
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
    slug: string
    price: Date
    description: string
    imageUrl: string
    themeId: number
    createdAt: Date
    updatedAt: Date
    userId: number | null
    bookOwnerId: number
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  type GetBookGroupByPayload<T extends BookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookGroupByOutputType[P]>
            : GetScalarType<T[P], BookGroupByOutputType[P]>
        }
      >
    >


  export type BookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    price?: boolean
    description?: boolean
    imageUrl?: boolean
    themeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    bookOwnerId?: boolean
    theme?: boolean | ThemeDefaultArgs<ExtArgs>
    User?: boolean | Book$UserArgs<ExtArgs>
    BookOwner?: boolean | Book$BookOwnerArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>

  export type BookSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    price?: boolean
    description?: boolean
    imageUrl?: boolean
    themeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    bookOwnerId?: boolean
  }

  export type BookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    theme?: boolean | ThemeDefaultArgs<ExtArgs>
    User?: boolean | Book$UserArgs<ExtArgs>
    BookOwner?: boolean | Book$BookOwnerArgs<ExtArgs>
  }


  export type $BookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Book"
    objects: {
      theme: Prisma.$ThemePayload<ExtArgs>
      User: Prisma.$UserPayload<ExtArgs> | null
      BookOwner: Prisma.$BookOwnerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      slug: string
      price: Date
      description: string
      imageUrl: string
      themeId: number
      createdAt: Date
      updatedAt: Date
      userId: number | null
      bookOwnerId: number
    }, ExtArgs["result"]["book"]>
    composites: {}
  }


  type BookGetPayload<S extends boolean | null | undefined | BookDefaultArgs> = $Result.GetResult<Prisma.$BookPayload, S>

  type BookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BookFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BookCountAggregateInputType | true
    }

  export interface BookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Book'], meta: { name: 'Book' } }
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
    findUnique<T extends BookFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BookFindUniqueArgs<ExtArgs>>
    ): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends BookFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BookFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    findFirst<T extends BookFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BookFindFirstArgs<ExtArgs>>
    ): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Book that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
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
    findFirstOrThrow<T extends BookFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BookFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

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
    findMany<T extends BookFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BookFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, 'findMany'>>

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
    create<T extends BookCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BookCreateArgs<ExtArgs>>
    ): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

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
    createMany<T extends BookCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BookCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    delete<T extends BookDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BookDeleteArgs<ExtArgs>>
    ): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    update<T extends BookUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BookUpdateArgs<ExtArgs>>
    ): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    deleteMany<T extends BookDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BookDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    updateMany<T extends BookUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BookUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    upsert<T extends BookUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BookUpsertArgs<ExtArgs>>
    ): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
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
    aggregate<T extends BookAggregateArgs>(args: Subset<T, BookAggregateArgs>): Prisma.PrismaPromise<GetBookAggregateType<T>>

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
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, BookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Book model
   */
  readonly fields: BookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Book.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    theme<T extends ThemeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ThemeDefaultArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    User<T extends Book$UserArgs<ExtArgs> = {}>(args?: Subset<T, Book$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    BookOwner<T extends Book$BookOwnerArgs<ExtArgs> = {}>(args?: Subset<T, Book$BookOwnerArgs<ExtArgs>>): Prisma__BookOwnerClient<$Result.GetResult<Prisma.$BookOwnerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Book model
   */ 
  interface BookFieldRefs {
    readonly id: FieldRef<"Book", 'Int'>
    readonly name: FieldRef<"Book", 'String'>
    readonly slug: FieldRef<"Book", 'String'>
    readonly price: FieldRef<"Book", 'DateTime'>
    readonly description: FieldRef<"Book", 'String'>
    readonly imageUrl: FieldRef<"Book", 'String'>
    readonly themeId: FieldRef<"Book", 'Int'>
    readonly createdAt: FieldRef<"Book", 'DateTime'>
    readonly updatedAt: FieldRef<"Book", 'DateTime'>
    readonly userId: FieldRef<"Book", 'Int'>
    readonly bookOwnerId: FieldRef<"Book", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Book findUnique
   */
  export type BookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput
  }


  /**
   * Book findUniqueOrThrow
   */
  export type BookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput
  }


  /**
   * Book findFirst
   */
  export type BookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }


  /**
   * Book findFirstOrThrow
   */
  export type BookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }


  /**
   * Book findMany
   */
  export type BookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Books to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }


  /**
   * Book create
   */
  export type BookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The data needed to create a Book.
     */
    data: XOR<BookCreateInput, BookUncheckedCreateInput>
  }


  /**
   * Book createMany
   */
  export type BookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Books.
     */
    data: BookCreateManyInput | BookCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Book update
   */
  export type BookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The data needed to update a Book.
     */
    data: XOR<BookUpdateInput, BookUncheckedUpdateInput>
    /**
     * Choose, which Book to update.
     */
    where: BookWhereUniqueInput
  }


  /**
   * Book updateMany
   */
  export type BookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Books.
     */
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     */
    where?: BookWhereInput
  }


  /**
   * Book upsert
   */
  export type BookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The filter to search for the Book to update in case it exists.
     */
    where: BookWhereUniqueInput
    /**
     * In case the Book found by the `where` argument doesn't exist, create a new Book with this data.
     */
    create: XOR<BookCreateInput, BookUncheckedCreateInput>
    /**
     * In case the Book was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookUpdateInput, BookUncheckedUpdateInput>
  }


  /**
   * Book delete
   */
  export type BookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter which Book to delete.
     */
    where: BookWhereUniqueInput
  }


  /**
   * Book deleteMany
   */
  export type BookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Books to delete
     */
    where?: BookWhereInput
  }


  /**
   * Book.User
   */
  export type Book$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * Book.BookOwner
   */
  export type Book$BookOwnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookOwner
     */
    select?: BookOwnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookOwnerInclude<ExtArgs> | null
    where?: BookOwnerWhereInput
  }


  /**
   * Book without action
   */
  export type BookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookInclude<ExtArgs> | null
  }



  /**
   * Model BookOwner
   */

  export type AggregateBookOwner = {
    _count: BookOwnerCountAggregateOutputType | null
    _avg: BookOwnerAvgAggregateOutputType | null
    _sum: BookOwnerSumAggregateOutputType | null
    _min: BookOwnerMinAggregateOutputType | null
    _max: BookOwnerMaxAggregateOutputType | null
  }

  export type BookOwnerAvgAggregateOutputType = {
    id: number | null
    age: number | null
    bookId: number | null
  }

  export type BookOwnerSumAggregateOutputType = {
    id: number | null
    age: number | null
    bookId: number | null
  }

  export type BookOwnerMinAggregateOutputType = {
    id: number | null
    gender: $Enums.EnumGender | null
    glasses: boolean | null
    age: number | null
    hairStyle: $Enums.EnumHairStyle | null
    bookId: number | null
  }

  export type BookOwnerMaxAggregateOutputType = {
    id: number | null
    gender: $Enums.EnumGender | null
    glasses: boolean | null
    age: number | null
    hairStyle: $Enums.EnumHairStyle | null
    bookId: number | null
  }

  export type BookOwnerCountAggregateOutputType = {
    id: number
    gender: number
    glasses: number
    age: number
    hairStyle: number
    bookId: number
    _all: number
  }


  export type BookOwnerAvgAggregateInputType = {
    id?: true
    age?: true
    bookId?: true
  }

  export type BookOwnerSumAggregateInputType = {
    id?: true
    age?: true
    bookId?: true
  }

  export type BookOwnerMinAggregateInputType = {
    id?: true
    gender?: true
    glasses?: true
    age?: true
    hairStyle?: true
    bookId?: true
  }

  export type BookOwnerMaxAggregateInputType = {
    id?: true
    gender?: true
    glasses?: true
    age?: true
    hairStyle?: true
    bookId?: true
  }

  export type BookOwnerCountAggregateInputType = {
    id?: true
    gender?: true
    glasses?: true
    age?: true
    hairStyle?: true
    bookId?: true
    _all?: true
  }

  export type BookOwnerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookOwner to aggregate.
     */
    where?: BookOwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookOwners to fetch.
     */
    orderBy?: BookOwnerOrderByWithRelationInput | BookOwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookOwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookOwners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookOwners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookOwners
    **/
    _count?: true | BookOwnerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookOwnerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookOwnerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookOwnerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookOwnerMaxAggregateInputType
  }

  export type GetBookOwnerAggregateType<T extends BookOwnerAggregateArgs> = {
        [P in keyof T & keyof AggregateBookOwner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookOwner[P]>
      : GetScalarType<T[P], AggregateBookOwner[P]>
  }




  export type BookOwnerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookOwnerWhereInput
    orderBy?: BookOwnerOrderByWithAggregationInput | BookOwnerOrderByWithAggregationInput[]
    by: BookOwnerScalarFieldEnum[] | BookOwnerScalarFieldEnum
    having?: BookOwnerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookOwnerCountAggregateInputType | true
    _avg?: BookOwnerAvgAggregateInputType
    _sum?: BookOwnerSumAggregateInputType
    _min?: BookOwnerMinAggregateInputType
    _max?: BookOwnerMaxAggregateInputType
  }

  export type BookOwnerGroupByOutputType = {
    id: number
    gender: $Enums.EnumGender | null
    glasses: boolean | null
    age: number | null
    hairStyle: $Enums.EnumHairStyle | null
    bookId: number
    _count: BookOwnerCountAggregateOutputType | null
    _avg: BookOwnerAvgAggregateOutputType | null
    _sum: BookOwnerSumAggregateOutputType | null
    _min: BookOwnerMinAggregateOutputType | null
    _max: BookOwnerMaxAggregateOutputType | null
  }

  type GetBookOwnerGroupByPayload<T extends BookOwnerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookOwnerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookOwnerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookOwnerGroupByOutputType[P]>
            : GetScalarType<T[P], BookOwnerGroupByOutputType[P]>
        }
      >
    >


  export type BookOwnerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gender?: boolean
    glasses?: boolean
    age?: boolean
    hairStyle?: boolean
    bookId?: boolean
    familyMembers?: boolean | BookOwner$familyMembersArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
    events?: boolean | BookOwner$eventsArgs<ExtArgs>
    _count?: boolean | BookOwnerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookOwner"]>

  export type BookOwnerSelectScalar = {
    id?: boolean
    gender?: boolean
    glasses?: boolean
    age?: boolean
    hairStyle?: boolean
    bookId?: boolean
  }

  export type BookOwnerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    familyMembers?: boolean | BookOwner$familyMembersArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
    events?: boolean | BookOwner$eventsArgs<ExtArgs>
    _count?: boolean | BookOwnerCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $BookOwnerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookOwner"
    objects: {
      familyMembers: Prisma.$FamilyMemberPayload<ExtArgs>[]
      book: Prisma.$BookPayload<ExtArgs>
      events: Prisma.$EventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      gender: $Enums.EnumGender | null
      glasses: boolean | null
      age: number | null
      hairStyle: $Enums.EnumHairStyle | null
      bookId: number
    }, ExtArgs["result"]["bookOwner"]>
    composites: {}
  }


  type BookOwnerGetPayload<S extends boolean | null | undefined | BookOwnerDefaultArgs> = $Result.GetResult<Prisma.$BookOwnerPayload, S>

  type BookOwnerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BookOwnerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BookOwnerCountAggregateInputType | true
    }

  export interface BookOwnerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookOwner'], meta: { name: 'BookOwner' } }
    /**
     * Find zero or one BookOwner that matches the filter.
     * @param {BookOwnerFindUniqueArgs} args - Arguments to find a BookOwner
     * @example
     * // Get one BookOwner
     * const bookOwner = await prisma.bookOwner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BookOwnerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BookOwnerFindUniqueArgs<ExtArgs>>
    ): Prisma__BookOwnerClient<$Result.GetResult<Prisma.$BookOwnerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one BookOwner that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BookOwnerFindUniqueOrThrowArgs} args - Arguments to find a BookOwner
     * @example
     * // Get one BookOwner
     * const bookOwner = await prisma.bookOwner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BookOwnerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BookOwnerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BookOwnerClient<$Result.GetResult<Prisma.$BookOwnerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first BookOwner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookOwnerFindFirstArgs} args - Arguments to find a BookOwner
     * @example
     * // Get one BookOwner
     * const bookOwner = await prisma.bookOwner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BookOwnerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BookOwnerFindFirstArgs<ExtArgs>>
    ): Prisma__BookOwnerClient<$Result.GetResult<Prisma.$BookOwnerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first BookOwner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookOwnerFindFirstOrThrowArgs} args - Arguments to find a BookOwner
     * @example
     * // Get one BookOwner
     * const bookOwner = await prisma.bookOwner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BookOwnerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BookOwnerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BookOwnerClient<$Result.GetResult<Prisma.$BookOwnerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more BookOwners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookOwnerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookOwners
     * const bookOwners = await prisma.bookOwner.findMany()
     * 
     * // Get first 10 BookOwners
     * const bookOwners = await prisma.bookOwner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookOwnerWithIdOnly = await prisma.bookOwner.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BookOwnerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BookOwnerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookOwnerPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a BookOwner.
     * @param {BookOwnerCreateArgs} args - Arguments to create a BookOwner.
     * @example
     * // Create one BookOwner
     * const BookOwner = await prisma.bookOwner.create({
     *   data: {
     *     // ... data to create a BookOwner
     *   }
     * })
     * 
    **/
    create<T extends BookOwnerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BookOwnerCreateArgs<ExtArgs>>
    ): Prisma__BookOwnerClient<$Result.GetResult<Prisma.$BookOwnerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many BookOwners.
     *     @param {BookOwnerCreateManyArgs} args - Arguments to create many BookOwners.
     *     @example
     *     // Create many BookOwners
     *     const bookOwner = await prisma.bookOwner.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BookOwnerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BookOwnerCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BookOwner.
     * @param {BookOwnerDeleteArgs} args - Arguments to delete one BookOwner.
     * @example
     * // Delete one BookOwner
     * const BookOwner = await prisma.bookOwner.delete({
     *   where: {
     *     // ... filter to delete one BookOwner
     *   }
     * })
     * 
    **/
    delete<T extends BookOwnerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BookOwnerDeleteArgs<ExtArgs>>
    ): Prisma__BookOwnerClient<$Result.GetResult<Prisma.$BookOwnerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one BookOwner.
     * @param {BookOwnerUpdateArgs} args - Arguments to update one BookOwner.
     * @example
     * // Update one BookOwner
     * const bookOwner = await prisma.bookOwner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BookOwnerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BookOwnerUpdateArgs<ExtArgs>>
    ): Prisma__BookOwnerClient<$Result.GetResult<Prisma.$BookOwnerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more BookOwners.
     * @param {BookOwnerDeleteManyArgs} args - Arguments to filter BookOwners to delete.
     * @example
     * // Delete a few BookOwners
     * const { count } = await prisma.bookOwner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BookOwnerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BookOwnerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookOwners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookOwnerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookOwners
     * const bookOwner = await prisma.bookOwner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BookOwnerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BookOwnerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BookOwner.
     * @param {BookOwnerUpsertArgs} args - Arguments to update or create a BookOwner.
     * @example
     * // Update or create a BookOwner
     * const bookOwner = await prisma.bookOwner.upsert({
     *   create: {
     *     // ... data to create a BookOwner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookOwner we want to update
     *   }
     * })
    **/
    upsert<T extends BookOwnerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BookOwnerUpsertArgs<ExtArgs>>
    ): Prisma__BookOwnerClient<$Result.GetResult<Prisma.$BookOwnerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of BookOwners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookOwnerCountArgs} args - Arguments to filter BookOwners to count.
     * @example
     * // Count the number of BookOwners
     * const count = await prisma.bookOwner.count({
     *   where: {
     *     // ... the filter for the BookOwners we want to count
     *   }
     * })
    **/
    count<T extends BookOwnerCountArgs>(
      args?: Subset<T, BookOwnerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookOwnerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookOwner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookOwnerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookOwnerAggregateArgs>(args: Subset<T, BookOwnerAggregateArgs>): Prisma.PrismaPromise<GetBookOwnerAggregateType<T>>

    /**
     * Group by BookOwner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookOwnerGroupByArgs} args - Group by arguments.
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
      T extends BookOwnerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookOwnerGroupByArgs['orderBy'] }
        : { orderBy?: BookOwnerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, BookOwnerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookOwnerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookOwner model
   */
  readonly fields: BookOwnerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookOwner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookOwnerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    familyMembers<T extends BookOwner$familyMembersArgs<ExtArgs> = {}>(args?: Subset<T, BookOwner$familyMembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FamilyMemberPayload<ExtArgs>, T, 'findMany'> | Null>;

    book<T extends BookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookDefaultArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    events<T extends BookOwner$eventsArgs<ExtArgs> = {}>(args?: Subset<T, BookOwner$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the BookOwner model
   */ 
  interface BookOwnerFieldRefs {
    readonly id: FieldRef<"BookOwner", 'Int'>
    readonly gender: FieldRef<"BookOwner", 'EnumGender'>
    readonly glasses: FieldRef<"BookOwner", 'Boolean'>
    readonly age: FieldRef<"BookOwner", 'Int'>
    readonly hairStyle: FieldRef<"BookOwner", 'EnumHairStyle'>
    readonly bookId: FieldRef<"BookOwner", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * BookOwner findUnique
   */
  export type BookOwnerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookOwner
     */
    select?: BookOwnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookOwnerInclude<ExtArgs> | null
    /**
     * Filter, which BookOwner to fetch.
     */
    where: BookOwnerWhereUniqueInput
  }


  /**
   * BookOwner findUniqueOrThrow
   */
  export type BookOwnerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookOwner
     */
    select?: BookOwnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookOwnerInclude<ExtArgs> | null
    /**
     * Filter, which BookOwner to fetch.
     */
    where: BookOwnerWhereUniqueInput
  }


  /**
   * BookOwner findFirst
   */
  export type BookOwnerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookOwner
     */
    select?: BookOwnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookOwnerInclude<ExtArgs> | null
    /**
     * Filter, which BookOwner to fetch.
     */
    where?: BookOwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookOwners to fetch.
     */
    orderBy?: BookOwnerOrderByWithRelationInput | BookOwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookOwners.
     */
    cursor?: BookOwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookOwners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookOwners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookOwners.
     */
    distinct?: BookOwnerScalarFieldEnum | BookOwnerScalarFieldEnum[]
  }


  /**
   * BookOwner findFirstOrThrow
   */
  export type BookOwnerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookOwner
     */
    select?: BookOwnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookOwnerInclude<ExtArgs> | null
    /**
     * Filter, which BookOwner to fetch.
     */
    where?: BookOwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookOwners to fetch.
     */
    orderBy?: BookOwnerOrderByWithRelationInput | BookOwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookOwners.
     */
    cursor?: BookOwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookOwners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookOwners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookOwners.
     */
    distinct?: BookOwnerScalarFieldEnum | BookOwnerScalarFieldEnum[]
  }


  /**
   * BookOwner findMany
   */
  export type BookOwnerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookOwner
     */
    select?: BookOwnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookOwnerInclude<ExtArgs> | null
    /**
     * Filter, which BookOwners to fetch.
     */
    where?: BookOwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookOwners to fetch.
     */
    orderBy?: BookOwnerOrderByWithRelationInput | BookOwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookOwners.
     */
    cursor?: BookOwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookOwners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookOwners.
     */
    skip?: number
    distinct?: BookOwnerScalarFieldEnum | BookOwnerScalarFieldEnum[]
  }


  /**
   * BookOwner create
   */
  export type BookOwnerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookOwner
     */
    select?: BookOwnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookOwnerInclude<ExtArgs> | null
    /**
     * The data needed to create a BookOwner.
     */
    data: XOR<BookOwnerCreateInput, BookOwnerUncheckedCreateInput>
  }


  /**
   * BookOwner createMany
   */
  export type BookOwnerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookOwners.
     */
    data: BookOwnerCreateManyInput | BookOwnerCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * BookOwner update
   */
  export type BookOwnerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookOwner
     */
    select?: BookOwnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookOwnerInclude<ExtArgs> | null
    /**
     * The data needed to update a BookOwner.
     */
    data: XOR<BookOwnerUpdateInput, BookOwnerUncheckedUpdateInput>
    /**
     * Choose, which BookOwner to update.
     */
    where: BookOwnerWhereUniqueInput
  }


  /**
   * BookOwner updateMany
   */
  export type BookOwnerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookOwners.
     */
    data: XOR<BookOwnerUpdateManyMutationInput, BookOwnerUncheckedUpdateManyInput>
    /**
     * Filter which BookOwners to update
     */
    where?: BookOwnerWhereInput
  }


  /**
   * BookOwner upsert
   */
  export type BookOwnerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookOwner
     */
    select?: BookOwnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookOwnerInclude<ExtArgs> | null
    /**
     * The filter to search for the BookOwner to update in case it exists.
     */
    where: BookOwnerWhereUniqueInput
    /**
     * In case the BookOwner found by the `where` argument doesn't exist, create a new BookOwner with this data.
     */
    create: XOR<BookOwnerCreateInput, BookOwnerUncheckedCreateInput>
    /**
     * In case the BookOwner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookOwnerUpdateInput, BookOwnerUncheckedUpdateInput>
  }


  /**
   * BookOwner delete
   */
  export type BookOwnerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookOwner
     */
    select?: BookOwnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookOwnerInclude<ExtArgs> | null
    /**
     * Filter which BookOwner to delete.
     */
    where: BookOwnerWhereUniqueInput
  }


  /**
   * BookOwner deleteMany
   */
  export type BookOwnerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookOwners to delete
     */
    where?: BookOwnerWhereInput
  }


  /**
   * BookOwner.familyMembers
   */
  export type BookOwner$familyMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyMember
     */
    select?: FamilyMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FamilyMemberInclude<ExtArgs> | null
    where?: FamilyMemberWhereInput
    orderBy?: FamilyMemberOrderByWithRelationInput | FamilyMemberOrderByWithRelationInput[]
    cursor?: FamilyMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FamilyMemberScalarFieldEnum | FamilyMemberScalarFieldEnum[]
  }


  /**
   * BookOwner.events
   */
  export type BookOwner$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }


  /**
   * BookOwner without action
   */
  export type BookOwnerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookOwner
     */
    select?: BookOwnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookOwnerInclude<ExtArgs> | null
  }



  /**
   * Model Theme
   */

  export type AggregateTheme = {
    _count: ThemeCountAggregateOutputType | null
    _avg: ThemeAvgAggregateOutputType | null
    _sum: ThemeSumAggregateOutputType | null
    _min: ThemeMinAggregateOutputType | null
    _max: ThemeMaxAggregateOutputType | null
  }

  export type ThemeAvgAggregateOutputType = {
    id: number | null
  }

  export type ThemeSumAggregateOutputType = {
    id: number | null
  }

  export type ThemeMinAggregateOutputType = {
    id: number | null
    name: string | null
    coverImageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ThemeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    coverImageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ThemeCountAggregateOutputType = {
    id: number
    name: number
    coverImageUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ThemeAvgAggregateInputType = {
    id?: true
  }

  export type ThemeSumAggregateInputType = {
    id?: true
  }

  export type ThemeMinAggregateInputType = {
    id?: true
    name?: true
    coverImageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ThemeMaxAggregateInputType = {
    id?: true
    name?: true
    coverImageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ThemeCountAggregateInputType = {
    id?: true
    name?: true
    coverImageUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ThemeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Theme to aggregate.
     */
    where?: ThemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Themes to fetch.
     */
    orderBy?: ThemeOrderByWithRelationInput | ThemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ThemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Themes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Themes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Themes
    **/
    _count?: true | ThemeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ThemeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ThemeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ThemeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ThemeMaxAggregateInputType
  }

  export type GetThemeAggregateType<T extends ThemeAggregateArgs> = {
        [P in keyof T & keyof AggregateTheme]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTheme[P]>
      : GetScalarType<T[P], AggregateTheme[P]>
  }




  export type ThemeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ThemeWhereInput
    orderBy?: ThemeOrderByWithAggregationInput | ThemeOrderByWithAggregationInput[]
    by: ThemeScalarFieldEnum[] | ThemeScalarFieldEnum
    having?: ThemeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ThemeCountAggregateInputType | true
    _avg?: ThemeAvgAggregateInputType
    _sum?: ThemeSumAggregateInputType
    _min?: ThemeMinAggregateInputType
    _max?: ThemeMaxAggregateInputType
  }

  export type ThemeGroupByOutputType = {
    id: number
    name: string
    coverImageUrl: string
    createdAt: Date
    updatedAt: Date
    _count: ThemeCountAggregateOutputType | null
    _avg: ThemeAvgAggregateOutputType | null
    _sum: ThemeSumAggregateOutputType | null
    _min: ThemeMinAggregateOutputType | null
    _max: ThemeMaxAggregateOutputType | null
  }

  type GetThemeGroupByPayload<T extends ThemeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ThemeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ThemeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ThemeGroupByOutputType[P]>
            : GetScalarType<T[P], ThemeGroupByOutputType[P]>
        }
      >
    >


  export type ThemeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    coverImageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Book?: boolean | Theme$BookArgs<ExtArgs>
    _count?: boolean | ThemeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["theme"]>

  export type ThemeSelectScalar = {
    id?: boolean
    name?: boolean
    coverImageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ThemeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Book?: boolean | Theme$BookArgs<ExtArgs>
    _count?: boolean | ThemeCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ThemePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Theme"
    objects: {
      Book: Prisma.$BookPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      coverImageUrl: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["theme"]>
    composites: {}
  }


  type ThemeGetPayload<S extends boolean | null | undefined | ThemeDefaultArgs> = $Result.GetResult<Prisma.$ThemePayload, S>

  type ThemeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ThemeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ThemeCountAggregateInputType | true
    }

  export interface ThemeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Theme'], meta: { name: 'Theme' } }
    /**
     * Find zero or one Theme that matches the filter.
     * @param {ThemeFindUniqueArgs} args - Arguments to find a Theme
     * @example
     * // Get one Theme
     * const theme = await prisma.theme.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ThemeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ThemeFindUniqueArgs<ExtArgs>>
    ): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Theme that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ThemeFindUniqueOrThrowArgs} args - Arguments to find a Theme
     * @example
     * // Get one Theme
     * const theme = await prisma.theme.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ThemeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ThemeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Theme that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeFindFirstArgs} args - Arguments to find a Theme
     * @example
     * // Get one Theme
     * const theme = await prisma.theme.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ThemeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ThemeFindFirstArgs<ExtArgs>>
    ): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Theme that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeFindFirstOrThrowArgs} args - Arguments to find a Theme
     * @example
     * // Get one Theme
     * const theme = await prisma.theme.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ThemeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ThemeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Themes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Themes
     * const themes = await prisma.theme.findMany()
     * 
     * // Get first 10 Themes
     * const themes = await prisma.theme.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const themeWithIdOnly = await prisma.theme.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ThemeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ThemeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Theme.
     * @param {ThemeCreateArgs} args - Arguments to create a Theme.
     * @example
     * // Create one Theme
     * const Theme = await prisma.theme.create({
     *   data: {
     *     // ... data to create a Theme
     *   }
     * })
     * 
    **/
    create<T extends ThemeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ThemeCreateArgs<ExtArgs>>
    ): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Themes.
     *     @param {ThemeCreateManyArgs} args - Arguments to create many Themes.
     *     @example
     *     // Create many Themes
     *     const theme = await prisma.theme.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ThemeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ThemeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Theme.
     * @param {ThemeDeleteArgs} args - Arguments to delete one Theme.
     * @example
     * // Delete one Theme
     * const Theme = await prisma.theme.delete({
     *   where: {
     *     // ... filter to delete one Theme
     *   }
     * })
     * 
    **/
    delete<T extends ThemeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ThemeDeleteArgs<ExtArgs>>
    ): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Theme.
     * @param {ThemeUpdateArgs} args - Arguments to update one Theme.
     * @example
     * // Update one Theme
     * const theme = await prisma.theme.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ThemeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ThemeUpdateArgs<ExtArgs>>
    ): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Themes.
     * @param {ThemeDeleteManyArgs} args - Arguments to filter Themes to delete.
     * @example
     * // Delete a few Themes
     * const { count } = await prisma.theme.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ThemeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ThemeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Themes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Themes
     * const theme = await prisma.theme.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ThemeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ThemeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Theme.
     * @param {ThemeUpsertArgs} args - Arguments to update or create a Theme.
     * @example
     * // Update or create a Theme
     * const theme = await prisma.theme.upsert({
     *   create: {
     *     // ... data to create a Theme
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Theme we want to update
     *   }
     * })
    **/
    upsert<T extends ThemeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ThemeUpsertArgs<ExtArgs>>
    ): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Themes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeCountArgs} args - Arguments to filter Themes to count.
     * @example
     * // Count the number of Themes
     * const count = await prisma.theme.count({
     *   where: {
     *     // ... the filter for the Themes we want to count
     *   }
     * })
    **/
    count<T extends ThemeCountArgs>(
      args?: Subset<T, ThemeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ThemeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Theme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ThemeAggregateArgs>(args: Subset<T, ThemeAggregateArgs>): Prisma.PrismaPromise<GetThemeAggregateType<T>>

    /**
     * Group by Theme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeGroupByArgs} args - Group by arguments.
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
      T extends ThemeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ThemeGroupByArgs['orderBy'] }
        : { orderBy?: ThemeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ThemeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetThemeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Theme model
   */
  readonly fields: ThemeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Theme.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ThemeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Book<T extends Theme$BookArgs<ExtArgs> = {}>(args?: Subset<T, Theme$BookArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Theme model
   */ 
  interface ThemeFieldRefs {
    readonly id: FieldRef<"Theme", 'Int'>
    readonly name: FieldRef<"Theme", 'String'>
    readonly coverImageUrl: FieldRef<"Theme", 'String'>
    readonly createdAt: FieldRef<"Theme", 'DateTime'>
    readonly updatedAt: FieldRef<"Theme", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Theme findUnique
   */
  export type ThemeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * Filter, which Theme to fetch.
     */
    where: ThemeWhereUniqueInput
  }


  /**
   * Theme findUniqueOrThrow
   */
  export type ThemeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * Filter, which Theme to fetch.
     */
    where: ThemeWhereUniqueInput
  }


  /**
   * Theme findFirst
   */
  export type ThemeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * Filter, which Theme to fetch.
     */
    where?: ThemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Themes to fetch.
     */
    orderBy?: ThemeOrderByWithRelationInput | ThemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Themes.
     */
    cursor?: ThemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Themes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Themes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Themes.
     */
    distinct?: ThemeScalarFieldEnum | ThemeScalarFieldEnum[]
  }


  /**
   * Theme findFirstOrThrow
   */
  export type ThemeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * Filter, which Theme to fetch.
     */
    where?: ThemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Themes to fetch.
     */
    orderBy?: ThemeOrderByWithRelationInput | ThemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Themes.
     */
    cursor?: ThemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Themes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Themes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Themes.
     */
    distinct?: ThemeScalarFieldEnum | ThemeScalarFieldEnum[]
  }


  /**
   * Theme findMany
   */
  export type ThemeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * Filter, which Themes to fetch.
     */
    where?: ThemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Themes to fetch.
     */
    orderBy?: ThemeOrderByWithRelationInput | ThemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Themes.
     */
    cursor?: ThemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Themes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Themes.
     */
    skip?: number
    distinct?: ThemeScalarFieldEnum | ThemeScalarFieldEnum[]
  }


  /**
   * Theme create
   */
  export type ThemeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * The data needed to create a Theme.
     */
    data: XOR<ThemeCreateInput, ThemeUncheckedCreateInput>
  }


  /**
   * Theme createMany
   */
  export type ThemeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Themes.
     */
    data: ThemeCreateManyInput | ThemeCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Theme update
   */
  export type ThemeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * The data needed to update a Theme.
     */
    data: XOR<ThemeUpdateInput, ThemeUncheckedUpdateInput>
    /**
     * Choose, which Theme to update.
     */
    where: ThemeWhereUniqueInput
  }


  /**
   * Theme updateMany
   */
  export type ThemeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Themes.
     */
    data: XOR<ThemeUpdateManyMutationInput, ThemeUncheckedUpdateManyInput>
    /**
     * Filter which Themes to update
     */
    where?: ThemeWhereInput
  }


  /**
   * Theme upsert
   */
  export type ThemeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * The filter to search for the Theme to update in case it exists.
     */
    where: ThemeWhereUniqueInput
    /**
     * In case the Theme found by the `where` argument doesn't exist, create a new Theme with this data.
     */
    create: XOR<ThemeCreateInput, ThemeUncheckedCreateInput>
    /**
     * In case the Theme was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ThemeUpdateInput, ThemeUncheckedUpdateInput>
  }


  /**
   * Theme delete
   */
  export type ThemeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * Filter which Theme to delete.
     */
    where: ThemeWhereUniqueInput
  }


  /**
   * Theme deleteMany
   */
  export type ThemeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Themes to delete
     */
    where?: ThemeWhereInput
  }


  /**
   * Theme.Book
   */
  export type Theme$BookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookInclude<ExtArgs> | null
    where?: BookWhereInput
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    cursor?: BookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }


  /**
   * Theme without action
   */
  export type ThemeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThemeInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

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
    password: 'password',
    role: 'role',
    isEmailVerified: 'isEmailVerified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FamilyMemberScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    bookOwnerId: 'bookOwnerId'
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
    createdById: 'createdById',
    bookOwnerId: 'bookOwnerId'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const BookScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    price: 'price',
    description: 'description',
    imageUrl: 'imageUrl',
    themeId: 'themeId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    bookOwnerId: 'bookOwnerId'
  };

  export type BookScalarFieldEnum = (typeof BookScalarFieldEnum)[keyof typeof BookScalarFieldEnum]


  export const BookOwnerScalarFieldEnum: {
    id: 'id',
    gender: 'gender',
    glasses: 'glasses',
    age: 'age',
    hairStyle: 'hairStyle',
    bookId: 'bookId'
  };

  export type BookOwnerScalarFieldEnum = (typeof BookOwnerScalarFieldEnum)[keyof typeof BookOwnerScalarFieldEnum]


  export const ThemeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    coverImageUrl: 'coverImageUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ThemeScalarFieldEnum = (typeof ThemeScalarFieldEnum)[keyof typeof ThemeScalarFieldEnum]


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
   * Reference to a field of type 'TokenType'
   */
  export type EnumTokenTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TokenType'>
    


  /**
   * Reference to a field of type 'TokenType[]'
   */
  export type ListEnumTokenTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TokenType[]'>
    


  /**
   * Reference to a field of type 'EnumGender'
   */
  export type EnumEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EnumGender'>
    


  /**
   * Reference to a field of type 'EnumGender[]'
   */
  export type ListEnumEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EnumGender[]'>
    


  /**
   * Reference to a field of type 'EnumHairStyle'
   */
  export type EnumEnumHairStyleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EnumHairStyle'>
    


  /**
   * Reference to a field of type 'EnumHairStyle[]'
   */
  export type ListEnumEnumHairStyleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EnumHairStyle[]'>
    


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
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumEnumRoleFilter<"User"> | $Enums.EnumRole
    isEmailVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Token?: TokenListRelationFilter
    Book?: BookListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isEmailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Token?: TokenOrderByRelationAggregateInput
    Book?: BookOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumEnumRoleFilter<"User"> | $Enums.EnumRole
    isEmailVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Token?: TokenListRelationFilter
    Book?: BookListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isEmailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumEnumRoleWithAggregatesFilter<"User"> | $Enums.EnumRole
    isEmailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type FamilyMemberWhereInput = {
    AND?: FamilyMemberWhereInput | FamilyMemberWhereInput[]
    OR?: FamilyMemberWhereInput[]
    NOT?: FamilyMemberWhereInput | FamilyMemberWhereInput[]
    id?: IntFilter<"FamilyMember"> | number
    name?: StringFilter<"FamilyMember"> | string
    createdAt?: DateTimeFilter<"FamilyMember"> | Date | string
    updatedAt?: DateTimeFilter<"FamilyMember"> | Date | string
    bookOwnerId?: IntNullableFilter<"FamilyMember"> | number | null
    BookOwner?: XOR<BookOwnerNullableRelationFilter, BookOwnerWhereInput> | null
  }

  export type FamilyMemberOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bookOwnerId?: SortOrderInput | SortOrder
    BookOwner?: BookOwnerOrderByWithRelationInput
  }

  export type FamilyMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FamilyMemberWhereInput | FamilyMemberWhereInput[]
    OR?: FamilyMemberWhereInput[]
    NOT?: FamilyMemberWhereInput | FamilyMemberWhereInput[]
    name?: StringFilter<"FamilyMember"> | string
    createdAt?: DateTimeFilter<"FamilyMember"> | Date | string
    updatedAt?: DateTimeFilter<"FamilyMember"> | Date | string
    bookOwnerId?: IntNullableFilter<"FamilyMember"> | number | null
    BookOwner?: XOR<BookOwnerNullableRelationFilter, BookOwnerWhereInput> | null
  }, "id">

  export type FamilyMemberOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bookOwnerId?: SortOrderInput | SortOrder
    _count?: FamilyMemberCountOrderByAggregateInput
    _avg?: FamilyMemberAvgOrderByAggregateInput
    _max?: FamilyMemberMaxOrderByAggregateInput
    _min?: FamilyMemberMinOrderByAggregateInput
    _sum?: FamilyMemberSumOrderByAggregateInput
  }

  export type FamilyMemberScalarWhereWithAggregatesInput = {
    AND?: FamilyMemberScalarWhereWithAggregatesInput | FamilyMemberScalarWhereWithAggregatesInput[]
    OR?: FamilyMemberScalarWhereWithAggregatesInput[]
    NOT?: FamilyMemberScalarWhereWithAggregatesInput | FamilyMemberScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FamilyMember"> | number
    name?: StringWithAggregatesFilter<"FamilyMember"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FamilyMember"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FamilyMember"> | Date | string
    bookOwnerId?: IntNullableWithAggregatesFilter<"FamilyMember"> | number | null
  }

  export type TokenWhereInput = {
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    id?: IntFilter<"Token"> | number
    token?: StringFilter<"Token"> | string
    type?: EnumTokenTypeFilter<"Token"> | $Enums.TokenType
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
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    token?: StringFilter<"Token"> | string
    type?: EnumTokenTypeFilter<"Token"> | $Enums.TokenType
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
    AND?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    OR?: TokenScalarWhereWithAggregatesInput[]
    NOT?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Token"> | number
    token?: StringWithAggregatesFilter<"Token"> | string
    type?: EnumTokenTypeWithAggregatesFilter<"Token"> | $Enums.TokenType
    expires?: DateTimeWithAggregatesFilter<"Token"> | Date | string
    blacklisted?: BoolWithAggregatesFilter<"Token"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Token"> | Date | string
    userId?: IntWithAggregatesFilter<"Token"> | number
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: IntFilter<"Event"> | number
    name?: StringFilter<"Event"> | string
    date?: DateTimeFilter<"Event"> | Date | string
    createdById?: IntNullableFilter<"Event"> | number | null
    bookOwnerId?: IntNullableFilter<"Event"> | number | null
    BookOwner?: XOR<BookOwnerNullableRelationFilter, BookOwnerWhereInput> | null
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    createdById?: SortOrderInput | SortOrder
    bookOwnerId?: SortOrderInput | SortOrder
    BookOwner?: BookOwnerOrderByWithRelationInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    name?: StringFilter<"Event"> | string
    date?: DateTimeFilter<"Event"> | Date | string
    createdById?: IntNullableFilter<"Event"> | number | null
    bookOwnerId?: IntNullableFilter<"Event"> | number | null
    BookOwner?: XOR<BookOwnerNullableRelationFilter, BookOwnerWhereInput> | null
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    createdById?: SortOrderInput | SortOrder
    bookOwnerId?: SortOrderInput | SortOrder
    _count?: EventCountOrderByAggregateInput
    _avg?: EventAvgOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
    _sum?: EventSumOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Event"> | number
    name?: StringWithAggregatesFilter<"Event"> | string
    date?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    createdById?: IntNullableWithAggregatesFilter<"Event"> | number | null
    bookOwnerId?: IntNullableWithAggregatesFilter<"Event"> | number | null
  }

  export type BookWhereInput = {
    AND?: BookWhereInput | BookWhereInput[]
    OR?: BookWhereInput[]
    NOT?: BookWhereInput | BookWhereInput[]
    id?: IntFilter<"Book"> | number
    name?: StringFilter<"Book"> | string
    slug?: StringFilter<"Book"> | string
    price?: DateTimeFilter<"Book"> | Date | string
    description?: StringFilter<"Book"> | string
    imageUrl?: StringFilter<"Book"> | string
    themeId?: IntFilter<"Book"> | number
    createdAt?: DateTimeFilter<"Book"> | Date | string
    updatedAt?: DateTimeFilter<"Book"> | Date | string
    userId?: IntNullableFilter<"Book"> | number | null
    bookOwnerId?: IntFilter<"Book"> | number
    theme?: XOR<ThemeRelationFilter, ThemeWhereInput>
    User?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    BookOwner?: XOR<BookOwnerNullableRelationFilter, BookOwnerWhereInput> | null
  }

  export type BookOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    price?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    themeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    bookOwnerId?: SortOrder
    theme?: ThemeOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
    BookOwner?: BookOwnerOrderByWithRelationInput
  }

  export type BookWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BookWhereInput | BookWhereInput[]
    OR?: BookWhereInput[]
    NOT?: BookWhereInput | BookWhereInput[]
    name?: StringFilter<"Book"> | string
    slug?: StringFilter<"Book"> | string
    price?: DateTimeFilter<"Book"> | Date | string
    description?: StringFilter<"Book"> | string
    imageUrl?: StringFilter<"Book"> | string
    themeId?: IntFilter<"Book"> | number
    createdAt?: DateTimeFilter<"Book"> | Date | string
    updatedAt?: DateTimeFilter<"Book"> | Date | string
    userId?: IntNullableFilter<"Book"> | number | null
    bookOwnerId?: IntFilter<"Book"> | number
    theme?: XOR<ThemeRelationFilter, ThemeWhereInput>
    User?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    BookOwner?: XOR<BookOwnerNullableRelationFilter, BookOwnerWhereInput> | null
  }, "id">

  export type BookOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    price?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    themeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    bookOwnerId?: SortOrder
    _count?: BookCountOrderByAggregateInput
    _avg?: BookAvgOrderByAggregateInput
    _max?: BookMaxOrderByAggregateInput
    _min?: BookMinOrderByAggregateInput
    _sum?: BookSumOrderByAggregateInput
  }

  export type BookScalarWhereWithAggregatesInput = {
    AND?: BookScalarWhereWithAggregatesInput | BookScalarWhereWithAggregatesInput[]
    OR?: BookScalarWhereWithAggregatesInput[]
    NOT?: BookScalarWhereWithAggregatesInput | BookScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Book"> | number
    name?: StringWithAggregatesFilter<"Book"> | string
    slug?: StringWithAggregatesFilter<"Book"> | string
    price?: DateTimeWithAggregatesFilter<"Book"> | Date | string
    description?: StringWithAggregatesFilter<"Book"> | string
    imageUrl?: StringWithAggregatesFilter<"Book"> | string
    themeId?: IntWithAggregatesFilter<"Book"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Book"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Book"> | Date | string
    userId?: IntNullableWithAggregatesFilter<"Book"> | number | null
    bookOwnerId?: IntWithAggregatesFilter<"Book"> | number
  }

  export type BookOwnerWhereInput = {
    AND?: BookOwnerWhereInput | BookOwnerWhereInput[]
    OR?: BookOwnerWhereInput[]
    NOT?: BookOwnerWhereInput | BookOwnerWhereInput[]
    id?: IntFilter<"BookOwner"> | number
    gender?: EnumEnumGenderNullableFilter<"BookOwner"> | $Enums.EnumGender | null
    glasses?: BoolNullableFilter<"BookOwner"> | boolean | null
    age?: IntNullableFilter<"BookOwner"> | number | null
    hairStyle?: EnumEnumHairStyleNullableFilter<"BookOwner"> | $Enums.EnumHairStyle | null
    bookId?: IntFilter<"BookOwner"> | number
    familyMembers?: FamilyMemberListRelationFilter
    book?: XOR<BookRelationFilter, BookWhereInput>
    events?: EventListRelationFilter
  }

  export type BookOwnerOrderByWithRelationInput = {
    id?: SortOrder
    gender?: SortOrderInput | SortOrder
    glasses?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    hairStyle?: SortOrderInput | SortOrder
    bookId?: SortOrder
    familyMembers?: FamilyMemberOrderByRelationAggregateInput
    book?: BookOrderByWithRelationInput
    events?: EventOrderByRelationAggregateInput
  }

  export type BookOwnerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    bookId?: number
    AND?: BookOwnerWhereInput | BookOwnerWhereInput[]
    OR?: BookOwnerWhereInput[]
    NOT?: BookOwnerWhereInput | BookOwnerWhereInput[]
    gender?: EnumEnumGenderNullableFilter<"BookOwner"> | $Enums.EnumGender | null
    glasses?: BoolNullableFilter<"BookOwner"> | boolean | null
    age?: IntNullableFilter<"BookOwner"> | number | null
    hairStyle?: EnumEnumHairStyleNullableFilter<"BookOwner"> | $Enums.EnumHairStyle | null
    familyMembers?: FamilyMemberListRelationFilter
    book?: XOR<BookRelationFilter, BookWhereInput>
    events?: EventListRelationFilter
  }, "id" | "bookId">

  export type BookOwnerOrderByWithAggregationInput = {
    id?: SortOrder
    gender?: SortOrderInput | SortOrder
    glasses?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    hairStyle?: SortOrderInput | SortOrder
    bookId?: SortOrder
    _count?: BookOwnerCountOrderByAggregateInput
    _avg?: BookOwnerAvgOrderByAggregateInput
    _max?: BookOwnerMaxOrderByAggregateInput
    _min?: BookOwnerMinOrderByAggregateInput
    _sum?: BookOwnerSumOrderByAggregateInput
  }

  export type BookOwnerScalarWhereWithAggregatesInput = {
    AND?: BookOwnerScalarWhereWithAggregatesInput | BookOwnerScalarWhereWithAggregatesInput[]
    OR?: BookOwnerScalarWhereWithAggregatesInput[]
    NOT?: BookOwnerScalarWhereWithAggregatesInput | BookOwnerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BookOwner"> | number
    gender?: EnumEnumGenderNullableWithAggregatesFilter<"BookOwner"> | $Enums.EnumGender | null
    glasses?: BoolNullableWithAggregatesFilter<"BookOwner"> | boolean | null
    age?: IntNullableWithAggregatesFilter<"BookOwner"> | number | null
    hairStyle?: EnumEnumHairStyleNullableWithAggregatesFilter<"BookOwner"> | $Enums.EnumHairStyle | null
    bookId?: IntWithAggregatesFilter<"BookOwner"> | number
  }

  export type ThemeWhereInput = {
    AND?: ThemeWhereInput | ThemeWhereInput[]
    OR?: ThemeWhereInput[]
    NOT?: ThemeWhereInput | ThemeWhereInput[]
    id?: IntFilter<"Theme"> | number
    name?: StringFilter<"Theme"> | string
    coverImageUrl?: StringFilter<"Theme"> | string
    createdAt?: DateTimeFilter<"Theme"> | Date | string
    updatedAt?: DateTimeFilter<"Theme"> | Date | string
    Book?: BookListRelationFilter
  }

  export type ThemeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    coverImageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Book?: BookOrderByRelationAggregateInput
  }

  export type ThemeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ThemeWhereInput | ThemeWhereInput[]
    OR?: ThemeWhereInput[]
    NOT?: ThemeWhereInput | ThemeWhereInput[]
    name?: StringFilter<"Theme"> | string
    coverImageUrl?: StringFilter<"Theme"> | string
    createdAt?: DateTimeFilter<"Theme"> | Date | string
    updatedAt?: DateTimeFilter<"Theme"> | Date | string
    Book?: BookListRelationFilter
  }, "id">

  export type ThemeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    coverImageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ThemeCountOrderByAggregateInput
    _avg?: ThemeAvgOrderByAggregateInput
    _max?: ThemeMaxOrderByAggregateInput
    _min?: ThemeMinOrderByAggregateInput
    _sum?: ThemeSumOrderByAggregateInput
  }

  export type ThemeScalarWhereWithAggregatesInput = {
    AND?: ThemeScalarWhereWithAggregatesInput | ThemeScalarWhereWithAggregatesInput[]
    OR?: ThemeScalarWhereWithAggregatesInput[]
    NOT?: ThemeScalarWhereWithAggregatesInput | ThemeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Theme"> | number
    name?: StringWithAggregatesFilter<"Theme"> | string
    coverImageUrl?: StringWithAggregatesFilter<"Theme"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Theme"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Theme"> | Date | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    role?: $Enums.EnumRole
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Token?: TokenCreateNestedManyWithoutUserInput
    Book?: BookCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.EnumRole
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Token?: TokenUncheckedCreateNestedManyWithoutUserInput
    Book?: BookUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumEnumRoleFieldUpdateOperationsInput | $Enums.EnumRole
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Token?: TokenUpdateManyWithoutUserNestedInput
    Book?: BookUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumEnumRoleFieldUpdateOperationsInput | $Enums.EnumRole
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Token?: TokenUncheckedUpdateManyWithoutUserNestedInput
    Book?: BookUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.EnumRole
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumEnumRoleFieldUpdateOperationsInput | $Enums.EnumRole
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumEnumRoleFieldUpdateOperationsInput | $Enums.EnumRole
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FamilyMemberCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    BookOwner?: BookOwnerCreateNestedOneWithoutFamilyMembersInput
  }

  export type FamilyMemberUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bookOwnerId?: number | null
  }

  export type FamilyMemberUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BookOwner?: BookOwnerUpdateOneWithoutFamilyMembersNestedInput
  }

  export type FamilyMemberUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookOwnerId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FamilyMemberCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bookOwnerId?: number | null
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
    bookOwnerId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TokenCreateInput = {
    token: string
    type: $Enums.TokenType
    expires: Date | string
    blacklisted: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTokenInput
  }

  export type TokenUncheckedCreateInput = {
    id?: number
    token: string
    type: $Enums.TokenType
    expires: Date | string
    blacklisted: boolean
    createdAt?: Date | string
    userId: number
  }

  export type TokenUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    blacklisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTokenNestedInput
  }

  export type TokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    blacklisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type TokenCreateManyInput = {
    id?: number
    token: string
    type: $Enums.TokenType
    expires: Date | string
    blacklisted: boolean
    createdAt?: Date | string
    userId: number
  }

  export type TokenUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    blacklisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    blacklisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type EventCreateInput = {
    name: string
    date: Date | string
    createdById?: number | null
    BookOwner?: BookOwnerCreateNestedOneWithoutEventsInput
  }

  export type EventUncheckedCreateInput = {
    id?: number
    name: string
    date: Date | string
    createdById?: number | null
    bookOwnerId?: number | null
  }

  export type EventUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    BookOwner?: BookOwnerUpdateOneWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    bookOwnerId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EventCreateManyInput = {
    id?: number
    name: string
    date: Date | string
    createdById?: number | null
    bookOwnerId?: number | null
  }

  export type EventUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EventUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    bookOwnerId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BookCreateInput = {
    name: string
    slug: string
    price: Date | string
    description: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bookOwnerId: number
    theme: ThemeCreateNestedOneWithoutBookInput
    User?: UserCreateNestedOneWithoutBookInput
    BookOwner?: BookOwnerCreateNestedOneWithoutBookInput
  }

  export type BookUncheckedCreateInput = {
    id?: number
    name: string
    slug: string
    price: Date | string
    description: string
    imageUrl: string
    themeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: number | null
    bookOwnerId: number
    BookOwner?: BookOwnerUncheckedCreateNestedOneWithoutBookInput
  }

  export type BookUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    price?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookOwnerId?: IntFieldUpdateOperationsInput | number
    theme?: ThemeUpdateOneRequiredWithoutBookNestedInput
    User?: UserUpdateOneWithoutBookNestedInput
    BookOwner?: BookOwnerUpdateOneWithoutBookNestedInput
  }

  export type BookUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    price?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    themeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    bookOwnerId?: IntFieldUpdateOperationsInput | number
    BookOwner?: BookOwnerUncheckedUpdateOneWithoutBookNestedInput
  }

  export type BookCreateManyInput = {
    id?: number
    name: string
    slug: string
    price: Date | string
    description: string
    imageUrl: string
    themeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: number | null
    bookOwnerId: number
  }

  export type BookUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    price?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookOwnerId?: IntFieldUpdateOperationsInput | number
  }

  export type BookUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    price?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    themeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    bookOwnerId?: IntFieldUpdateOperationsInput | number
  }

  export type BookOwnerCreateInput = {
    gender?: $Enums.EnumGender | null
    glasses?: boolean | null
    age?: number | null
    hairStyle?: $Enums.EnumHairStyle | null
    familyMembers?: FamilyMemberCreateNestedManyWithoutBookOwnerInput
    book: BookCreateNestedOneWithoutBookOwnerInput
    events?: EventCreateNestedManyWithoutBookOwnerInput
  }

  export type BookOwnerUncheckedCreateInput = {
    id?: number
    gender?: $Enums.EnumGender | null
    glasses?: boolean | null
    age?: number | null
    hairStyle?: $Enums.EnumHairStyle | null
    bookId: number
    familyMembers?: FamilyMemberUncheckedCreateNestedManyWithoutBookOwnerInput
    events?: EventUncheckedCreateNestedManyWithoutBookOwnerInput
  }

  export type BookOwnerUpdateInput = {
    gender?: NullableEnumEnumGenderFieldUpdateOperationsInput | $Enums.EnumGender | null
    glasses?: NullableBoolFieldUpdateOperationsInput | boolean | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    hairStyle?: NullableEnumEnumHairStyleFieldUpdateOperationsInput | $Enums.EnumHairStyle | null
    familyMembers?: FamilyMemberUpdateManyWithoutBookOwnerNestedInput
    book?: BookUpdateOneRequiredWithoutBookOwnerNestedInput
    events?: EventUpdateManyWithoutBookOwnerNestedInput
  }

  export type BookOwnerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    gender?: NullableEnumEnumGenderFieldUpdateOperationsInput | $Enums.EnumGender | null
    glasses?: NullableBoolFieldUpdateOperationsInput | boolean | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    hairStyle?: NullableEnumEnumHairStyleFieldUpdateOperationsInput | $Enums.EnumHairStyle | null
    bookId?: IntFieldUpdateOperationsInput | number
    familyMembers?: FamilyMemberUncheckedUpdateManyWithoutBookOwnerNestedInput
    events?: EventUncheckedUpdateManyWithoutBookOwnerNestedInput
  }

  export type BookOwnerCreateManyInput = {
    id?: number
    gender?: $Enums.EnumGender | null
    glasses?: boolean | null
    age?: number | null
    hairStyle?: $Enums.EnumHairStyle | null
    bookId: number
  }

  export type BookOwnerUpdateManyMutationInput = {
    gender?: NullableEnumEnumGenderFieldUpdateOperationsInput | $Enums.EnumGender | null
    glasses?: NullableBoolFieldUpdateOperationsInput | boolean | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    hairStyle?: NullableEnumEnumHairStyleFieldUpdateOperationsInput | $Enums.EnumHairStyle | null
  }

  export type BookOwnerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    gender?: NullableEnumEnumGenderFieldUpdateOperationsInput | $Enums.EnumGender | null
    glasses?: NullableBoolFieldUpdateOperationsInput | boolean | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    hairStyle?: NullableEnumEnumHairStyleFieldUpdateOperationsInput | $Enums.EnumHairStyle | null
    bookId?: IntFieldUpdateOperationsInput | number
  }

  export type ThemeCreateInput = {
    name: string
    coverImageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Book?: BookCreateNestedManyWithoutThemeInput
  }

  export type ThemeUncheckedCreateInput = {
    id?: number
    name: string
    coverImageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Book?: BookUncheckedCreateNestedManyWithoutThemeInput
  }

  export type ThemeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Book?: BookUpdateManyWithoutThemeNestedInput
  }

  export type ThemeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Book?: BookUncheckedUpdateManyWithoutThemeNestedInput
  }

  export type ThemeCreateManyInput = {
    id?: number
    name: string
    coverImageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ThemeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ThemeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type EnumEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.EnumRole | EnumEnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.EnumRole[] | ListEnumEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.EnumRole[] | ListEnumEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumEnumRoleFilter<$PrismaModel> | $Enums.EnumRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TokenListRelationFilter = {
    every?: TokenWhereInput
    some?: TokenWhereInput
    none?: TokenWhereInput
  }

  export type BookListRelationFilter = {
    every?: BookWhereInput
    some?: BookWhereInput
    none?: BookWhereInput
  }

  export type TokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isEmailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isEmailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isEmailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type EnumEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EnumRole | EnumEnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.EnumRole[] | ListEnumEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.EnumRole[] | ListEnumEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.EnumRole
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
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BookOwnerNullableRelationFilter = {
    is?: BookOwnerWhereInput | null
    isNot?: BookOwnerWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FamilyMemberCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bookOwnerId?: SortOrder
  }

  export type FamilyMemberAvgOrderByAggregateInput = {
    id?: SortOrder
    bookOwnerId?: SortOrder
  }

  export type FamilyMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bookOwnerId?: SortOrder
  }

  export type FamilyMemberMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bookOwnerId?: SortOrder
  }

  export type FamilyMemberSumOrderByAggregateInput = {
    id?: SortOrder
    bookOwnerId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type EnumTokenTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeFilter<$PrismaModel> | $Enums.TokenType
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
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeWithAggregatesFilter<$PrismaModel> | $Enums.TokenType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTokenTypeFilter<$PrismaModel>
    _max?: NestedEnumTokenTypeFilter<$PrismaModel>
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    createdById?: SortOrder
    bookOwnerId?: SortOrder
  }

  export type EventAvgOrderByAggregateInput = {
    id?: SortOrder
    createdById?: SortOrder
    bookOwnerId?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    createdById?: SortOrder
    bookOwnerId?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    createdById?: SortOrder
    bookOwnerId?: SortOrder
  }

  export type EventSumOrderByAggregateInput = {
    id?: SortOrder
    createdById?: SortOrder
    bookOwnerId?: SortOrder
  }

  export type ThemeRelationFilter = {
    is?: ThemeWhereInput
    isNot?: ThemeWhereInput
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type BookCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    price?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    themeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    bookOwnerId?: SortOrder
  }

  export type BookAvgOrderByAggregateInput = {
    id?: SortOrder
    themeId?: SortOrder
    userId?: SortOrder
    bookOwnerId?: SortOrder
  }

  export type BookMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    price?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    themeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    bookOwnerId?: SortOrder
  }

  export type BookMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    price?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    themeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    bookOwnerId?: SortOrder
  }

  export type BookSumOrderByAggregateInput = {
    id?: SortOrder
    themeId?: SortOrder
    userId?: SortOrder
    bookOwnerId?: SortOrder
  }

  export type EnumEnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.EnumGender | EnumEnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.EnumGender[] | ListEnumEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EnumGender[] | ListEnumEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEnumGenderNullableFilter<$PrismaModel> | $Enums.EnumGender | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type EnumEnumHairStyleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.EnumHairStyle | EnumEnumHairStyleFieldRefInput<$PrismaModel> | null
    in?: $Enums.EnumHairStyle[] | ListEnumEnumHairStyleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EnumHairStyle[] | ListEnumEnumHairStyleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEnumHairStyleNullableFilter<$PrismaModel> | $Enums.EnumHairStyle | null
  }

  export type FamilyMemberListRelationFilter = {
    every?: FamilyMemberWhereInput
    some?: FamilyMemberWhereInput
    none?: FamilyMemberWhereInput
  }

  export type BookRelationFilter = {
    is?: BookWhereInput
    isNot?: BookWhereInput
  }

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type FamilyMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookOwnerCountOrderByAggregateInput = {
    id?: SortOrder
    gender?: SortOrder
    glasses?: SortOrder
    age?: SortOrder
    hairStyle?: SortOrder
    bookId?: SortOrder
  }

  export type BookOwnerAvgOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
    bookId?: SortOrder
  }

  export type BookOwnerMaxOrderByAggregateInput = {
    id?: SortOrder
    gender?: SortOrder
    glasses?: SortOrder
    age?: SortOrder
    hairStyle?: SortOrder
    bookId?: SortOrder
  }

  export type BookOwnerMinOrderByAggregateInput = {
    id?: SortOrder
    gender?: SortOrder
    glasses?: SortOrder
    age?: SortOrder
    hairStyle?: SortOrder
    bookId?: SortOrder
  }

  export type BookOwnerSumOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
    bookId?: SortOrder
  }

  export type EnumEnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EnumGender | EnumEnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.EnumGender[] | ListEnumEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EnumGender[] | ListEnumEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.EnumGender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumEnumGenderNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type EnumEnumHairStyleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EnumHairStyle | EnumEnumHairStyleFieldRefInput<$PrismaModel> | null
    in?: $Enums.EnumHairStyle[] | ListEnumEnumHairStyleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EnumHairStyle[] | ListEnumEnumHairStyleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEnumHairStyleNullableWithAggregatesFilter<$PrismaModel> | $Enums.EnumHairStyle | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumEnumHairStyleNullableFilter<$PrismaModel>
    _max?: NestedEnumEnumHairStyleNullableFilter<$PrismaModel>
  }

  export type ThemeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    coverImageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ThemeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ThemeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    coverImageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ThemeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    coverImageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ThemeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TokenCreateNestedManyWithoutUserInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
  }

  export type BookCreateNestedManyWithoutUserInput = {
    create?: XOR<BookCreateWithoutUserInput, BookUncheckedCreateWithoutUserInput> | BookCreateWithoutUserInput[] | BookUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookCreateOrConnectWithoutUserInput | BookCreateOrConnectWithoutUserInput[]
    createMany?: BookCreateManyUserInputEnvelope
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
  }

  export type TokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
  }

  export type BookUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BookCreateWithoutUserInput, BookUncheckedCreateWithoutUserInput> | BookCreateWithoutUserInput[] | BookUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookCreateOrConnectWithoutUserInput | BookCreateOrConnectWithoutUserInput[]
    createMany?: BookCreateManyUserInputEnvelope
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumEnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.EnumRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    upsert?: TokenUpsertWithWhereUniqueWithoutUserInput | TokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    update?: TokenUpdateWithWhereUniqueWithoutUserInput | TokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TokenUpdateManyWithWhereWithoutUserInput | TokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[]
  }

  export type BookUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookCreateWithoutUserInput, BookUncheckedCreateWithoutUserInput> | BookCreateWithoutUserInput[] | BookUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookCreateOrConnectWithoutUserInput | BookCreateOrConnectWithoutUserInput[]
    upsert?: BookUpsertWithWhereUniqueWithoutUserInput | BookUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookCreateManyUserInputEnvelope
    set?: BookWhereUniqueInput | BookWhereUniqueInput[]
    disconnect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    delete?: BookWhereUniqueInput | BookWhereUniqueInput[]
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    update?: BookUpdateWithWhereUniqueWithoutUserInput | BookUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookUpdateManyWithWhereWithoutUserInput | BookUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookScalarWhereInput | BookScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    upsert?: TokenUpsertWithWhereUniqueWithoutUserInput | TokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    update?: TokenUpdateWithWhereUniqueWithoutUserInput | TokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TokenUpdateManyWithWhereWithoutUserInput | TokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[]
  }

  export type BookUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookCreateWithoutUserInput, BookUncheckedCreateWithoutUserInput> | BookCreateWithoutUserInput[] | BookUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookCreateOrConnectWithoutUserInput | BookCreateOrConnectWithoutUserInput[]
    upsert?: BookUpsertWithWhereUniqueWithoutUserInput | BookUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookCreateManyUserInputEnvelope
    set?: BookWhereUniqueInput | BookWhereUniqueInput[]
    disconnect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    delete?: BookWhereUniqueInput | BookWhereUniqueInput[]
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    update?: BookUpdateWithWhereUniqueWithoutUserInput | BookUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookUpdateManyWithWhereWithoutUserInput | BookUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookScalarWhereInput | BookScalarWhereInput[]
  }

  export type BookOwnerCreateNestedOneWithoutFamilyMembersInput = {
    create?: XOR<BookOwnerCreateWithoutFamilyMembersInput, BookOwnerUncheckedCreateWithoutFamilyMembersInput>
    connectOrCreate?: BookOwnerCreateOrConnectWithoutFamilyMembersInput
    connect?: BookOwnerWhereUniqueInput
  }

  export type BookOwnerUpdateOneWithoutFamilyMembersNestedInput = {
    create?: XOR<BookOwnerCreateWithoutFamilyMembersInput, BookOwnerUncheckedCreateWithoutFamilyMembersInput>
    connectOrCreate?: BookOwnerCreateOrConnectWithoutFamilyMembersInput
    upsert?: BookOwnerUpsertWithoutFamilyMembersInput
    disconnect?: BookOwnerWhereInput | boolean
    delete?: BookOwnerWhereInput | boolean
    connect?: BookOwnerWhereUniqueInput
    update?: XOR<XOR<BookOwnerUpdateToOneWithWhereWithoutFamilyMembersInput, BookOwnerUpdateWithoutFamilyMembersInput>, BookOwnerUncheckedUpdateWithoutFamilyMembersInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutTokenInput = {
    create?: XOR<UserCreateWithoutTokenInput, UserUncheckedCreateWithoutTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokenInput
    connect?: UserWhereUniqueInput
  }

  export type EnumTokenTypeFieldUpdateOperationsInput = {
    set?: $Enums.TokenType
  }

  export type UserUpdateOneRequiredWithoutTokenNestedInput = {
    create?: XOR<UserCreateWithoutTokenInput, UserUncheckedCreateWithoutTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokenInput
    upsert?: UserUpsertWithoutTokenInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTokenInput, UserUpdateWithoutTokenInput>, UserUncheckedUpdateWithoutTokenInput>
  }

  export type BookOwnerCreateNestedOneWithoutEventsInput = {
    create?: XOR<BookOwnerCreateWithoutEventsInput, BookOwnerUncheckedCreateWithoutEventsInput>
    connectOrCreate?: BookOwnerCreateOrConnectWithoutEventsInput
    connect?: BookOwnerWhereUniqueInput
  }

  export type BookOwnerUpdateOneWithoutEventsNestedInput = {
    create?: XOR<BookOwnerCreateWithoutEventsInput, BookOwnerUncheckedCreateWithoutEventsInput>
    connectOrCreate?: BookOwnerCreateOrConnectWithoutEventsInput
    upsert?: BookOwnerUpsertWithoutEventsInput
    disconnect?: BookOwnerWhereInput | boolean
    delete?: BookOwnerWhereInput | boolean
    connect?: BookOwnerWhereUniqueInput
    update?: XOR<XOR<BookOwnerUpdateToOneWithWhereWithoutEventsInput, BookOwnerUpdateWithoutEventsInput>, BookOwnerUncheckedUpdateWithoutEventsInput>
  }

  export type ThemeCreateNestedOneWithoutBookInput = {
    create?: XOR<ThemeCreateWithoutBookInput, ThemeUncheckedCreateWithoutBookInput>
    connectOrCreate?: ThemeCreateOrConnectWithoutBookInput
    connect?: ThemeWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBookInput = {
    create?: XOR<UserCreateWithoutBookInput, UserUncheckedCreateWithoutBookInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookInput
    connect?: UserWhereUniqueInput
  }

  export type BookOwnerCreateNestedOneWithoutBookInput = {
    create?: XOR<BookOwnerCreateWithoutBookInput, BookOwnerUncheckedCreateWithoutBookInput>
    connectOrCreate?: BookOwnerCreateOrConnectWithoutBookInput
    connect?: BookOwnerWhereUniqueInput
  }

  export type BookOwnerUncheckedCreateNestedOneWithoutBookInput = {
    create?: XOR<BookOwnerCreateWithoutBookInput, BookOwnerUncheckedCreateWithoutBookInput>
    connectOrCreate?: BookOwnerCreateOrConnectWithoutBookInput
    connect?: BookOwnerWhereUniqueInput
  }

  export type ThemeUpdateOneRequiredWithoutBookNestedInput = {
    create?: XOR<ThemeCreateWithoutBookInput, ThemeUncheckedCreateWithoutBookInput>
    connectOrCreate?: ThemeCreateOrConnectWithoutBookInput
    upsert?: ThemeUpsertWithoutBookInput
    connect?: ThemeWhereUniqueInput
    update?: XOR<XOR<ThemeUpdateToOneWithWhereWithoutBookInput, ThemeUpdateWithoutBookInput>, ThemeUncheckedUpdateWithoutBookInput>
  }

  export type UserUpdateOneWithoutBookNestedInput = {
    create?: XOR<UserCreateWithoutBookInput, UserUncheckedCreateWithoutBookInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookInput
    upsert?: UserUpsertWithoutBookInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookInput, UserUpdateWithoutBookInput>, UserUncheckedUpdateWithoutBookInput>
  }

  export type BookOwnerUpdateOneWithoutBookNestedInput = {
    create?: XOR<BookOwnerCreateWithoutBookInput, BookOwnerUncheckedCreateWithoutBookInput>
    connectOrCreate?: BookOwnerCreateOrConnectWithoutBookInput
    upsert?: BookOwnerUpsertWithoutBookInput
    disconnect?: BookOwnerWhereInput | boolean
    delete?: BookOwnerWhereInput | boolean
    connect?: BookOwnerWhereUniqueInput
    update?: XOR<XOR<BookOwnerUpdateToOneWithWhereWithoutBookInput, BookOwnerUpdateWithoutBookInput>, BookOwnerUncheckedUpdateWithoutBookInput>
  }

  export type BookOwnerUncheckedUpdateOneWithoutBookNestedInput = {
    create?: XOR<BookOwnerCreateWithoutBookInput, BookOwnerUncheckedCreateWithoutBookInput>
    connectOrCreate?: BookOwnerCreateOrConnectWithoutBookInput
    upsert?: BookOwnerUpsertWithoutBookInput
    disconnect?: BookOwnerWhereInput | boolean
    delete?: BookOwnerWhereInput | boolean
    connect?: BookOwnerWhereUniqueInput
    update?: XOR<XOR<BookOwnerUpdateToOneWithWhereWithoutBookInput, BookOwnerUpdateWithoutBookInput>, BookOwnerUncheckedUpdateWithoutBookInput>
  }

  export type FamilyMemberCreateNestedManyWithoutBookOwnerInput = {
    create?: XOR<FamilyMemberCreateWithoutBookOwnerInput, FamilyMemberUncheckedCreateWithoutBookOwnerInput> | FamilyMemberCreateWithoutBookOwnerInput[] | FamilyMemberUncheckedCreateWithoutBookOwnerInput[]
    connectOrCreate?: FamilyMemberCreateOrConnectWithoutBookOwnerInput | FamilyMemberCreateOrConnectWithoutBookOwnerInput[]
    createMany?: FamilyMemberCreateManyBookOwnerInputEnvelope
    connect?: FamilyMemberWhereUniqueInput | FamilyMemberWhereUniqueInput[]
  }

  export type BookCreateNestedOneWithoutBookOwnerInput = {
    create?: XOR<BookCreateWithoutBookOwnerInput, BookUncheckedCreateWithoutBookOwnerInput>
    connectOrCreate?: BookCreateOrConnectWithoutBookOwnerInput
    connect?: BookWhereUniqueInput
  }

  export type EventCreateNestedManyWithoutBookOwnerInput = {
    create?: XOR<EventCreateWithoutBookOwnerInput, EventUncheckedCreateWithoutBookOwnerInput> | EventCreateWithoutBookOwnerInput[] | EventUncheckedCreateWithoutBookOwnerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutBookOwnerInput | EventCreateOrConnectWithoutBookOwnerInput[]
    createMany?: EventCreateManyBookOwnerInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type FamilyMemberUncheckedCreateNestedManyWithoutBookOwnerInput = {
    create?: XOR<FamilyMemberCreateWithoutBookOwnerInput, FamilyMemberUncheckedCreateWithoutBookOwnerInput> | FamilyMemberCreateWithoutBookOwnerInput[] | FamilyMemberUncheckedCreateWithoutBookOwnerInput[]
    connectOrCreate?: FamilyMemberCreateOrConnectWithoutBookOwnerInput | FamilyMemberCreateOrConnectWithoutBookOwnerInput[]
    createMany?: FamilyMemberCreateManyBookOwnerInputEnvelope
    connect?: FamilyMemberWhereUniqueInput | FamilyMemberWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutBookOwnerInput = {
    create?: XOR<EventCreateWithoutBookOwnerInput, EventUncheckedCreateWithoutBookOwnerInput> | EventCreateWithoutBookOwnerInput[] | EventUncheckedCreateWithoutBookOwnerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutBookOwnerInput | EventCreateOrConnectWithoutBookOwnerInput[]
    createMany?: EventCreateManyBookOwnerInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type NullableEnumEnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.EnumGender | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableEnumEnumHairStyleFieldUpdateOperationsInput = {
    set?: $Enums.EnumHairStyle | null
  }

  export type FamilyMemberUpdateManyWithoutBookOwnerNestedInput = {
    create?: XOR<FamilyMemberCreateWithoutBookOwnerInput, FamilyMemberUncheckedCreateWithoutBookOwnerInput> | FamilyMemberCreateWithoutBookOwnerInput[] | FamilyMemberUncheckedCreateWithoutBookOwnerInput[]
    connectOrCreate?: FamilyMemberCreateOrConnectWithoutBookOwnerInput | FamilyMemberCreateOrConnectWithoutBookOwnerInput[]
    upsert?: FamilyMemberUpsertWithWhereUniqueWithoutBookOwnerInput | FamilyMemberUpsertWithWhereUniqueWithoutBookOwnerInput[]
    createMany?: FamilyMemberCreateManyBookOwnerInputEnvelope
    set?: FamilyMemberWhereUniqueInput | FamilyMemberWhereUniqueInput[]
    disconnect?: FamilyMemberWhereUniqueInput | FamilyMemberWhereUniqueInput[]
    delete?: FamilyMemberWhereUniqueInput | FamilyMemberWhereUniqueInput[]
    connect?: FamilyMemberWhereUniqueInput | FamilyMemberWhereUniqueInput[]
    update?: FamilyMemberUpdateWithWhereUniqueWithoutBookOwnerInput | FamilyMemberUpdateWithWhereUniqueWithoutBookOwnerInput[]
    updateMany?: FamilyMemberUpdateManyWithWhereWithoutBookOwnerInput | FamilyMemberUpdateManyWithWhereWithoutBookOwnerInput[]
    deleteMany?: FamilyMemberScalarWhereInput | FamilyMemberScalarWhereInput[]
  }

  export type BookUpdateOneRequiredWithoutBookOwnerNestedInput = {
    create?: XOR<BookCreateWithoutBookOwnerInput, BookUncheckedCreateWithoutBookOwnerInput>
    connectOrCreate?: BookCreateOrConnectWithoutBookOwnerInput
    upsert?: BookUpsertWithoutBookOwnerInput
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutBookOwnerInput, BookUpdateWithoutBookOwnerInput>, BookUncheckedUpdateWithoutBookOwnerInput>
  }

  export type EventUpdateManyWithoutBookOwnerNestedInput = {
    create?: XOR<EventCreateWithoutBookOwnerInput, EventUncheckedCreateWithoutBookOwnerInput> | EventCreateWithoutBookOwnerInput[] | EventUncheckedCreateWithoutBookOwnerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutBookOwnerInput | EventCreateOrConnectWithoutBookOwnerInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutBookOwnerInput | EventUpsertWithWhereUniqueWithoutBookOwnerInput[]
    createMany?: EventCreateManyBookOwnerInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutBookOwnerInput | EventUpdateWithWhereUniqueWithoutBookOwnerInput[]
    updateMany?: EventUpdateManyWithWhereWithoutBookOwnerInput | EventUpdateManyWithWhereWithoutBookOwnerInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type FamilyMemberUncheckedUpdateManyWithoutBookOwnerNestedInput = {
    create?: XOR<FamilyMemberCreateWithoutBookOwnerInput, FamilyMemberUncheckedCreateWithoutBookOwnerInput> | FamilyMemberCreateWithoutBookOwnerInput[] | FamilyMemberUncheckedCreateWithoutBookOwnerInput[]
    connectOrCreate?: FamilyMemberCreateOrConnectWithoutBookOwnerInput | FamilyMemberCreateOrConnectWithoutBookOwnerInput[]
    upsert?: FamilyMemberUpsertWithWhereUniqueWithoutBookOwnerInput | FamilyMemberUpsertWithWhereUniqueWithoutBookOwnerInput[]
    createMany?: FamilyMemberCreateManyBookOwnerInputEnvelope
    set?: FamilyMemberWhereUniqueInput | FamilyMemberWhereUniqueInput[]
    disconnect?: FamilyMemberWhereUniqueInput | FamilyMemberWhereUniqueInput[]
    delete?: FamilyMemberWhereUniqueInput | FamilyMemberWhereUniqueInput[]
    connect?: FamilyMemberWhereUniqueInput | FamilyMemberWhereUniqueInput[]
    update?: FamilyMemberUpdateWithWhereUniqueWithoutBookOwnerInput | FamilyMemberUpdateWithWhereUniqueWithoutBookOwnerInput[]
    updateMany?: FamilyMemberUpdateManyWithWhereWithoutBookOwnerInput | FamilyMemberUpdateManyWithWhereWithoutBookOwnerInput[]
    deleteMany?: FamilyMemberScalarWhereInput | FamilyMemberScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutBookOwnerNestedInput = {
    create?: XOR<EventCreateWithoutBookOwnerInput, EventUncheckedCreateWithoutBookOwnerInput> | EventCreateWithoutBookOwnerInput[] | EventUncheckedCreateWithoutBookOwnerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutBookOwnerInput | EventCreateOrConnectWithoutBookOwnerInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutBookOwnerInput | EventUpsertWithWhereUniqueWithoutBookOwnerInput[]
    createMany?: EventCreateManyBookOwnerInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutBookOwnerInput | EventUpdateWithWhereUniqueWithoutBookOwnerInput[]
    updateMany?: EventUpdateManyWithWhereWithoutBookOwnerInput | EventUpdateManyWithWhereWithoutBookOwnerInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type BookCreateNestedManyWithoutThemeInput = {
    create?: XOR<BookCreateWithoutThemeInput, BookUncheckedCreateWithoutThemeInput> | BookCreateWithoutThemeInput[] | BookUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: BookCreateOrConnectWithoutThemeInput | BookCreateOrConnectWithoutThemeInput[]
    createMany?: BookCreateManyThemeInputEnvelope
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
  }

  export type BookUncheckedCreateNestedManyWithoutThemeInput = {
    create?: XOR<BookCreateWithoutThemeInput, BookUncheckedCreateWithoutThemeInput> | BookCreateWithoutThemeInput[] | BookUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: BookCreateOrConnectWithoutThemeInput | BookCreateOrConnectWithoutThemeInput[]
    createMany?: BookCreateManyThemeInputEnvelope
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
  }

  export type BookUpdateManyWithoutThemeNestedInput = {
    create?: XOR<BookCreateWithoutThemeInput, BookUncheckedCreateWithoutThemeInput> | BookCreateWithoutThemeInput[] | BookUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: BookCreateOrConnectWithoutThemeInput | BookCreateOrConnectWithoutThemeInput[]
    upsert?: BookUpsertWithWhereUniqueWithoutThemeInput | BookUpsertWithWhereUniqueWithoutThemeInput[]
    createMany?: BookCreateManyThemeInputEnvelope
    set?: BookWhereUniqueInput | BookWhereUniqueInput[]
    disconnect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    delete?: BookWhereUniqueInput | BookWhereUniqueInput[]
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    update?: BookUpdateWithWhereUniqueWithoutThemeInput | BookUpdateWithWhereUniqueWithoutThemeInput[]
    updateMany?: BookUpdateManyWithWhereWithoutThemeInput | BookUpdateManyWithWhereWithoutThemeInput[]
    deleteMany?: BookScalarWhereInput | BookScalarWhereInput[]
  }

  export type BookUncheckedUpdateManyWithoutThemeNestedInput = {
    create?: XOR<BookCreateWithoutThemeInput, BookUncheckedCreateWithoutThemeInput> | BookCreateWithoutThemeInput[] | BookUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: BookCreateOrConnectWithoutThemeInput | BookCreateOrConnectWithoutThemeInput[]
    upsert?: BookUpsertWithWhereUniqueWithoutThemeInput | BookUpsertWithWhereUniqueWithoutThemeInput[]
    createMany?: BookCreateManyThemeInputEnvelope
    set?: BookWhereUniqueInput | BookWhereUniqueInput[]
    disconnect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    delete?: BookWhereUniqueInput | BookWhereUniqueInput[]
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    update?: BookUpdateWithWhereUniqueWithoutThemeInput | BookUpdateWithWhereUniqueWithoutThemeInput[]
    updateMany?: BookUpdateManyWithWhereWithoutThemeInput | BookUpdateManyWithWhereWithoutThemeInput[]
    deleteMany?: BookScalarWhereInput | BookScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.EnumRole | EnumEnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.EnumRole[] | ListEnumEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.EnumRole[] | ListEnumEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumEnumRoleFilter<$PrismaModel> | $Enums.EnumRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedEnumEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EnumRole | EnumEnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.EnumRole[] | ListEnumEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.EnumRole[] | ListEnumEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.EnumRole
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
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumTokenTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeFilter<$PrismaModel> | $Enums.TokenType
  }

  export type NestedEnumTokenTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeWithAggregatesFilter<$PrismaModel> | $Enums.TokenType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTokenTypeFilter<$PrismaModel>
    _max?: NestedEnumTokenTypeFilter<$PrismaModel>
  }

  export type NestedEnumEnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.EnumGender | EnumEnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.EnumGender[] | ListEnumEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EnumGender[] | ListEnumEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEnumGenderNullableFilter<$PrismaModel> | $Enums.EnumGender | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedEnumEnumHairStyleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.EnumHairStyle | EnumEnumHairStyleFieldRefInput<$PrismaModel> | null
    in?: $Enums.EnumHairStyle[] | ListEnumEnumHairStyleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EnumHairStyle[] | ListEnumEnumHairStyleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEnumHairStyleNullableFilter<$PrismaModel> | $Enums.EnumHairStyle | null
  }

  export type NestedEnumEnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EnumGender | EnumEnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.EnumGender[] | ListEnumEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EnumGender[] | ListEnumEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.EnumGender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumEnumGenderNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumEnumHairStyleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EnumHairStyle | EnumEnumHairStyleFieldRefInput<$PrismaModel> | null
    in?: $Enums.EnumHairStyle[] | ListEnumEnumHairStyleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EnumHairStyle[] | ListEnumEnumHairStyleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEnumHairStyleNullableWithAggregatesFilter<$PrismaModel> | $Enums.EnumHairStyle | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumEnumHairStyleNullableFilter<$PrismaModel>
    _max?: NestedEnumEnumHairStyleNullableFilter<$PrismaModel>
  }

  export type TokenCreateWithoutUserInput = {
    token: string
    type: $Enums.TokenType
    expires: Date | string
    blacklisted: boolean
    createdAt?: Date | string
  }

  export type TokenUncheckedCreateWithoutUserInput = {
    id?: number
    token: string
    type: $Enums.TokenType
    expires: Date | string
    blacklisted: boolean
    createdAt?: Date | string
  }

  export type TokenCreateOrConnectWithoutUserInput = {
    where: TokenWhereUniqueInput
    create: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
  }

  export type TokenCreateManyUserInputEnvelope = {
    data: TokenCreateManyUserInput | TokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BookCreateWithoutUserInput = {
    name: string
    slug: string
    price: Date | string
    description: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bookOwnerId: number
    theme: ThemeCreateNestedOneWithoutBookInput
    BookOwner?: BookOwnerCreateNestedOneWithoutBookInput
  }

  export type BookUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    slug: string
    price: Date | string
    description: string
    imageUrl: string
    themeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bookOwnerId: number
    BookOwner?: BookOwnerUncheckedCreateNestedOneWithoutBookInput
  }

  export type BookCreateOrConnectWithoutUserInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutUserInput, BookUncheckedCreateWithoutUserInput>
  }

  export type BookCreateManyUserInputEnvelope = {
    data: BookCreateManyUserInput | BookCreateManyUserInput[]
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
    AND?: TokenScalarWhereInput | TokenScalarWhereInput[]
    OR?: TokenScalarWhereInput[]
    NOT?: TokenScalarWhereInput | TokenScalarWhereInput[]
    id?: IntFilter<"Token"> | number
    token?: StringFilter<"Token"> | string
    type?: EnumTokenTypeFilter<"Token"> | $Enums.TokenType
    expires?: DateTimeFilter<"Token"> | Date | string
    blacklisted?: BoolFilter<"Token"> | boolean
    createdAt?: DateTimeFilter<"Token"> | Date | string
    userId?: IntFilter<"Token"> | number
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
    AND?: BookScalarWhereInput | BookScalarWhereInput[]
    OR?: BookScalarWhereInput[]
    NOT?: BookScalarWhereInput | BookScalarWhereInput[]
    id?: IntFilter<"Book"> | number
    name?: StringFilter<"Book"> | string
    slug?: StringFilter<"Book"> | string
    price?: DateTimeFilter<"Book"> | Date | string
    description?: StringFilter<"Book"> | string
    imageUrl?: StringFilter<"Book"> | string
    themeId?: IntFilter<"Book"> | number
    createdAt?: DateTimeFilter<"Book"> | Date | string
    updatedAt?: DateTimeFilter<"Book"> | Date | string
    userId?: IntNullableFilter<"Book"> | number | null
    bookOwnerId?: IntFilter<"Book"> | number
  }

  export type BookOwnerCreateWithoutFamilyMembersInput = {
    gender?: $Enums.EnumGender | null
    glasses?: boolean | null
    age?: number | null
    hairStyle?: $Enums.EnumHairStyle | null
    book: BookCreateNestedOneWithoutBookOwnerInput
    events?: EventCreateNestedManyWithoutBookOwnerInput
  }

  export type BookOwnerUncheckedCreateWithoutFamilyMembersInput = {
    id?: number
    gender?: $Enums.EnumGender | null
    glasses?: boolean | null
    age?: number | null
    hairStyle?: $Enums.EnumHairStyle | null
    bookId: number
    events?: EventUncheckedCreateNestedManyWithoutBookOwnerInput
  }

  export type BookOwnerCreateOrConnectWithoutFamilyMembersInput = {
    where: BookOwnerWhereUniqueInput
    create: XOR<BookOwnerCreateWithoutFamilyMembersInput, BookOwnerUncheckedCreateWithoutFamilyMembersInput>
  }

  export type BookOwnerUpsertWithoutFamilyMembersInput = {
    update: XOR<BookOwnerUpdateWithoutFamilyMembersInput, BookOwnerUncheckedUpdateWithoutFamilyMembersInput>
    create: XOR<BookOwnerCreateWithoutFamilyMembersInput, BookOwnerUncheckedCreateWithoutFamilyMembersInput>
    where?: BookOwnerWhereInput
  }

  export type BookOwnerUpdateToOneWithWhereWithoutFamilyMembersInput = {
    where?: BookOwnerWhereInput
    data: XOR<BookOwnerUpdateWithoutFamilyMembersInput, BookOwnerUncheckedUpdateWithoutFamilyMembersInput>
  }

  export type BookOwnerUpdateWithoutFamilyMembersInput = {
    gender?: NullableEnumEnumGenderFieldUpdateOperationsInput | $Enums.EnumGender | null
    glasses?: NullableBoolFieldUpdateOperationsInput | boolean | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    hairStyle?: NullableEnumEnumHairStyleFieldUpdateOperationsInput | $Enums.EnumHairStyle | null
    book?: BookUpdateOneRequiredWithoutBookOwnerNestedInput
    events?: EventUpdateManyWithoutBookOwnerNestedInput
  }

  export type BookOwnerUncheckedUpdateWithoutFamilyMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    gender?: NullableEnumEnumGenderFieldUpdateOperationsInput | $Enums.EnumGender | null
    glasses?: NullableBoolFieldUpdateOperationsInput | boolean | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    hairStyle?: NullableEnumEnumHairStyleFieldUpdateOperationsInput | $Enums.EnumHairStyle | null
    bookId?: IntFieldUpdateOperationsInput | number
    events?: EventUncheckedUpdateManyWithoutBookOwnerNestedInput
  }

  export type UserCreateWithoutTokenInput = {
    name: string
    email: string
    password: string
    role?: $Enums.EnumRole
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Book?: BookCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTokenInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.EnumRole
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Book?: BookUncheckedCreateNestedManyWithoutUserInput
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
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumEnumRoleFieldUpdateOperationsInput | $Enums.EnumRole
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Book?: BookUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTokenInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumEnumRoleFieldUpdateOperationsInput | $Enums.EnumRole
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Book?: BookUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BookOwnerCreateWithoutEventsInput = {
    gender?: $Enums.EnumGender | null
    glasses?: boolean | null
    age?: number | null
    hairStyle?: $Enums.EnumHairStyle | null
    familyMembers?: FamilyMemberCreateNestedManyWithoutBookOwnerInput
    book: BookCreateNestedOneWithoutBookOwnerInput
  }

  export type BookOwnerUncheckedCreateWithoutEventsInput = {
    id?: number
    gender?: $Enums.EnumGender | null
    glasses?: boolean | null
    age?: number | null
    hairStyle?: $Enums.EnumHairStyle | null
    bookId: number
    familyMembers?: FamilyMemberUncheckedCreateNestedManyWithoutBookOwnerInput
  }

  export type BookOwnerCreateOrConnectWithoutEventsInput = {
    where: BookOwnerWhereUniqueInput
    create: XOR<BookOwnerCreateWithoutEventsInput, BookOwnerUncheckedCreateWithoutEventsInput>
  }

  export type BookOwnerUpsertWithoutEventsInput = {
    update: XOR<BookOwnerUpdateWithoutEventsInput, BookOwnerUncheckedUpdateWithoutEventsInput>
    create: XOR<BookOwnerCreateWithoutEventsInput, BookOwnerUncheckedCreateWithoutEventsInput>
    where?: BookOwnerWhereInput
  }

  export type BookOwnerUpdateToOneWithWhereWithoutEventsInput = {
    where?: BookOwnerWhereInput
    data: XOR<BookOwnerUpdateWithoutEventsInput, BookOwnerUncheckedUpdateWithoutEventsInput>
  }

  export type BookOwnerUpdateWithoutEventsInput = {
    gender?: NullableEnumEnumGenderFieldUpdateOperationsInput | $Enums.EnumGender | null
    glasses?: NullableBoolFieldUpdateOperationsInput | boolean | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    hairStyle?: NullableEnumEnumHairStyleFieldUpdateOperationsInput | $Enums.EnumHairStyle | null
    familyMembers?: FamilyMemberUpdateManyWithoutBookOwnerNestedInput
    book?: BookUpdateOneRequiredWithoutBookOwnerNestedInput
  }

  export type BookOwnerUncheckedUpdateWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    gender?: NullableEnumEnumGenderFieldUpdateOperationsInput | $Enums.EnumGender | null
    glasses?: NullableBoolFieldUpdateOperationsInput | boolean | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    hairStyle?: NullableEnumEnumHairStyleFieldUpdateOperationsInput | $Enums.EnumHairStyle | null
    bookId?: IntFieldUpdateOperationsInput | number
    familyMembers?: FamilyMemberUncheckedUpdateManyWithoutBookOwnerNestedInput
  }

  export type ThemeCreateWithoutBookInput = {
    name: string
    coverImageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ThemeUncheckedCreateWithoutBookInput = {
    id?: number
    name: string
    coverImageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ThemeCreateOrConnectWithoutBookInput = {
    where: ThemeWhereUniqueInput
    create: XOR<ThemeCreateWithoutBookInput, ThemeUncheckedCreateWithoutBookInput>
  }

  export type UserCreateWithoutBookInput = {
    name: string
    email: string
    password: string
    role?: $Enums.EnumRole
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Token?: TokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBookInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.EnumRole
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Token?: TokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBookInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookInput, UserUncheckedCreateWithoutBookInput>
  }

  export type BookOwnerCreateWithoutBookInput = {
    gender?: $Enums.EnumGender | null
    glasses?: boolean | null
    age?: number | null
    hairStyle?: $Enums.EnumHairStyle | null
    familyMembers?: FamilyMemberCreateNestedManyWithoutBookOwnerInput
    events?: EventCreateNestedManyWithoutBookOwnerInput
  }

  export type BookOwnerUncheckedCreateWithoutBookInput = {
    id?: number
    gender?: $Enums.EnumGender | null
    glasses?: boolean | null
    age?: number | null
    hairStyle?: $Enums.EnumHairStyle | null
    familyMembers?: FamilyMemberUncheckedCreateNestedManyWithoutBookOwnerInput
    events?: EventUncheckedCreateNestedManyWithoutBookOwnerInput
  }

  export type BookOwnerCreateOrConnectWithoutBookInput = {
    where: BookOwnerWhereUniqueInput
    create: XOR<BookOwnerCreateWithoutBookInput, BookOwnerUncheckedCreateWithoutBookInput>
  }

  export type ThemeUpsertWithoutBookInput = {
    update: XOR<ThemeUpdateWithoutBookInput, ThemeUncheckedUpdateWithoutBookInput>
    create: XOR<ThemeCreateWithoutBookInput, ThemeUncheckedCreateWithoutBookInput>
    where?: ThemeWhereInput
  }

  export type ThemeUpdateToOneWithWhereWithoutBookInput = {
    where?: ThemeWhereInput
    data: XOR<ThemeUpdateWithoutBookInput, ThemeUncheckedUpdateWithoutBookInput>
  }

  export type ThemeUpdateWithoutBookInput = {
    name?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ThemeUncheckedUpdateWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutBookInput = {
    update: XOR<UserUpdateWithoutBookInput, UserUncheckedUpdateWithoutBookInput>
    create: XOR<UserCreateWithoutBookInput, UserUncheckedCreateWithoutBookInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookInput, UserUncheckedUpdateWithoutBookInput>
  }

  export type UserUpdateWithoutBookInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumEnumRoleFieldUpdateOperationsInput | $Enums.EnumRole
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Token?: TokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumEnumRoleFieldUpdateOperationsInput | $Enums.EnumRole
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Token?: TokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BookOwnerUpsertWithoutBookInput = {
    update: XOR<BookOwnerUpdateWithoutBookInput, BookOwnerUncheckedUpdateWithoutBookInput>
    create: XOR<BookOwnerCreateWithoutBookInput, BookOwnerUncheckedCreateWithoutBookInput>
    where?: BookOwnerWhereInput
  }

  export type BookOwnerUpdateToOneWithWhereWithoutBookInput = {
    where?: BookOwnerWhereInput
    data: XOR<BookOwnerUpdateWithoutBookInput, BookOwnerUncheckedUpdateWithoutBookInput>
  }

  export type BookOwnerUpdateWithoutBookInput = {
    gender?: NullableEnumEnumGenderFieldUpdateOperationsInput | $Enums.EnumGender | null
    glasses?: NullableBoolFieldUpdateOperationsInput | boolean | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    hairStyle?: NullableEnumEnumHairStyleFieldUpdateOperationsInput | $Enums.EnumHairStyle | null
    familyMembers?: FamilyMemberUpdateManyWithoutBookOwnerNestedInput
    events?: EventUpdateManyWithoutBookOwnerNestedInput
  }

  export type BookOwnerUncheckedUpdateWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    gender?: NullableEnumEnumGenderFieldUpdateOperationsInput | $Enums.EnumGender | null
    glasses?: NullableBoolFieldUpdateOperationsInput | boolean | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    hairStyle?: NullableEnumEnumHairStyleFieldUpdateOperationsInput | $Enums.EnumHairStyle | null
    familyMembers?: FamilyMemberUncheckedUpdateManyWithoutBookOwnerNestedInput
    events?: EventUncheckedUpdateManyWithoutBookOwnerNestedInput
  }

  export type FamilyMemberCreateWithoutBookOwnerInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FamilyMemberUncheckedCreateWithoutBookOwnerInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FamilyMemberCreateOrConnectWithoutBookOwnerInput = {
    where: FamilyMemberWhereUniqueInput
    create: XOR<FamilyMemberCreateWithoutBookOwnerInput, FamilyMemberUncheckedCreateWithoutBookOwnerInput>
  }

  export type FamilyMemberCreateManyBookOwnerInputEnvelope = {
    data: FamilyMemberCreateManyBookOwnerInput | FamilyMemberCreateManyBookOwnerInput[]
    skipDuplicates?: boolean
  }

  export type BookCreateWithoutBookOwnerInput = {
    name: string
    slug: string
    price: Date | string
    description: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bookOwnerId: number
    theme: ThemeCreateNestedOneWithoutBookInput
    User?: UserCreateNestedOneWithoutBookInput
  }

  export type BookUncheckedCreateWithoutBookOwnerInput = {
    id?: number
    name: string
    slug: string
    price: Date | string
    description: string
    imageUrl: string
    themeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: number | null
    bookOwnerId: number
  }

  export type BookCreateOrConnectWithoutBookOwnerInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutBookOwnerInput, BookUncheckedCreateWithoutBookOwnerInput>
  }

  export type EventCreateWithoutBookOwnerInput = {
    name: string
    date: Date | string
    createdById?: number | null
  }

  export type EventUncheckedCreateWithoutBookOwnerInput = {
    id?: number
    name: string
    date: Date | string
    createdById?: number | null
  }

  export type EventCreateOrConnectWithoutBookOwnerInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutBookOwnerInput, EventUncheckedCreateWithoutBookOwnerInput>
  }

  export type EventCreateManyBookOwnerInputEnvelope = {
    data: EventCreateManyBookOwnerInput | EventCreateManyBookOwnerInput[]
    skipDuplicates?: boolean
  }

  export type FamilyMemberUpsertWithWhereUniqueWithoutBookOwnerInput = {
    where: FamilyMemberWhereUniqueInput
    update: XOR<FamilyMemberUpdateWithoutBookOwnerInput, FamilyMemberUncheckedUpdateWithoutBookOwnerInput>
    create: XOR<FamilyMemberCreateWithoutBookOwnerInput, FamilyMemberUncheckedCreateWithoutBookOwnerInput>
  }

  export type FamilyMemberUpdateWithWhereUniqueWithoutBookOwnerInput = {
    where: FamilyMemberWhereUniqueInput
    data: XOR<FamilyMemberUpdateWithoutBookOwnerInput, FamilyMemberUncheckedUpdateWithoutBookOwnerInput>
  }

  export type FamilyMemberUpdateManyWithWhereWithoutBookOwnerInput = {
    where: FamilyMemberScalarWhereInput
    data: XOR<FamilyMemberUpdateManyMutationInput, FamilyMemberUncheckedUpdateManyWithoutBookOwnerInput>
  }

  export type FamilyMemberScalarWhereInput = {
    AND?: FamilyMemberScalarWhereInput | FamilyMemberScalarWhereInput[]
    OR?: FamilyMemberScalarWhereInput[]
    NOT?: FamilyMemberScalarWhereInput | FamilyMemberScalarWhereInput[]
    id?: IntFilter<"FamilyMember"> | number
    name?: StringFilter<"FamilyMember"> | string
    createdAt?: DateTimeFilter<"FamilyMember"> | Date | string
    updatedAt?: DateTimeFilter<"FamilyMember"> | Date | string
    bookOwnerId?: IntNullableFilter<"FamilyMember"> | number | null
  }

  export type BookUpsertWithoutBookOwnerInput = {
    update: XOR<BookUpdateWithoutBookOwnerInput, BookUncheckedUpdateWithoutBookOwnerInput>
    create: XOR<BookCreateWithoutBookOwnerInput, BookUncheckedCreateWithoutBookOwnerInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutBookOwnerInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutBookOwnerInput, BookUncheckedUpdateWithoutBookOwnerInput>
  }

  export type BookUpdateWithoutBookOwnerInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    price?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookOwnerId?: IntFieldUpdateOperationsInput | number
    theme?: ThemeUpdateOneRequiredWithoutBookNestedInput
    User?: UserUpdateOneWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutBookOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    price?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    themeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    bookOwnerId?: IntFieldUpdateOperationsInput | number
  }

  export type EventUpsertWithWhereUniqueWithoutBookOwnerInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutBookOwnerInput, EventUncheckedUpdateWithoutBookOwnerInput>
    create: XOR<EventCreateWithoutBookOwnerInput, EventUncheckedCreateWithoutBookOwnerInput>
  }

  export type EventUpdateWithWhereUniqueWithoutBookOwnerInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutBookOwnerInput, EventUncheckedUpdateWithoutBookOwnerInput>
  }

  export type EventUpdateManyWithWhereWithoutBookOwnerInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutBookOwnerInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: IntFilter<"Event"> | number
    name?: StringFilter<"Event"> | string
    date?: DateTimeFilter<"Event"> | Date | string
    createdById?: IntNullableFilter<"Event"> | number | null
    bookOwnerId?: IntNullableFilter<"Event"> | number | null
  }

  export type BookCreateWithoutThemeInput = {
    name: string
    slug: string
    price: Date | string
    description: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bookOwnerId: number
    User?: UserCreateNestedOneWithoutBookInput
    BookOwner?: BookOwnerCreateNestedOneWithoutBookInput
  }

  export type BookUncheckedCreateWithoutThemeInput = {
    id?: number
    name: string
    slug: string
    price: Date | string
    description: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: number | null
    bookOwnerId: number
    BookOwner?: BookOwnerUncheckedCreateNestedOneWithoutBookInput
  }

  export type BookCreateOrConnectWithoutThemeInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutThemeInput, BookUncheckedCreateWithoutThemeInput>
  }

  export type BookCreateManyThemeInputEnvelope = {
    data: BookCreateManyThemeInput | BookCreateManyThemeInput[]
    skipDuplicates?: boolean
  }

  export type BookUpsertWithWhereUniqueWithoutThemeInput = {
    where: BookWhereUniqueInput
    update: XOR<BookUpdateWithoutThemeInput, BookUncheckedUpdateWithoutThemeInput>
    create: XOR<BookCreateWithoutThemeInput, BookUncheckedCreateWithoutThemeInput>
  }

  export type BookUpdateWithWhereUniqueWithoutThemeInput = {
    where: BookWhereUniqueInput
    data: XOR<BookUpdateWithoutThemeInput, BookUncheckedUpdateWithoutThemeInput>
  }

  export type BookUpdateManyWithWhereWithoutThemeInput = {
    where: BookScalarWhereInput
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyWithoutThemeInput>
  }

  export type TokenCreateManyUserInput = {
    id?: number
    token: string
    type: $Enums.TokenType
    expires: Date | string
    blacklisted: boolean
    createdAt?: Date | string
  }

  export type BookCreateManyUserInput = {
    id?: number
    name: string
    slug: string
    price: Date | string
    description: string
    imageUrl: string
    themeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bookOwnerId: number
  }

  export type TokenUpdateWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    blacklisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    blacklisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    blacklisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    price?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookOwnerId?: IntFieldUpdateOperationsInput | number
    theme?: ThemeUpdateOneRequiredWithoutBookNestedInput
    BookOwner?: BookOwnerUpdateOneWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    price?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    themeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookOwnerId?: IntFieldUpdateOperationsInput | number
    BookOwner?: BookOwnerUncheckedUpdateOneWithoutBookNestedInput
  }

  export type BookUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    price?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    themeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookOwnerId?: IntFieldUpdateOperationsInput | number
  }

  export type FamilyMemberCreateManyBookOwnerInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventCreateManyBookOwnerInput = {
    id?: number
    name: string
    date: Date | string
    createdById?: number | null
  }

  export type FamilyMemberUpdateWithoutBookOwnerInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FamilyMemberUncheckedUpdateWithoutBookOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FamilyMemberUncheckedUpdateManyWithoutBookOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUpdateWithoutBookOwnerInput = {
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EventUncheckedUpdateWithoutBookOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EventUncheckedUpdateManyWithoutBookOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BookCreateManyThemeInput = {
    id?: number
    name: string
    slug: string
    price: Date | string
    description: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: number | null
    bookOwnerId: number
  }

  export type BookUpdateWithoutThemeInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    price?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookOwnerId?: IntFieldUpdateOperationsInput | number
    User?: UserUpdateOneWithoutBookNestedInput
    BookOwner?: BookOwnerUpdateOneWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutThemeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    price?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    bookOwnerId?: IntFieldUpdateOperationsInput | number
    BookOwner?: BookOwnerUncheckedUpdateOneWithoutBookNestedInput
  }

  export type BookUncheckedUpdateManyWithoutThemeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    price?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    bookOwnerId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BookOwnerCountOutputTypeDefaultArgs instead
     */
    export type BookOwnerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BookOwnerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ThemeCountOutputTypeDefaultArgs instead
     */
    export type ThemeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ThemeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FamilyMemberDefaultArgs instead
     */
    export type FamilyMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FamilyMemberDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TokenDefaultArgs instead
     */
    export type TokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TokenDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EventDefaultArgs instead
     */
    export type EventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EventDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BookDefaultArgs instead
     */
    export type BookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BookDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BookOwnerDefaultArgs instead
     */
    export type BookOwnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BookOwnerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ThemeDefaultArgs instead
     */
    export type ThemeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ThemeDefaultArgs<ExtArgs>

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