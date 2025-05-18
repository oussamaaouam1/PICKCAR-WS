
/**
 * Client
**/

import * as runtime from '@prisma/client/runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Car
 * 
 */
export type Car = $Result.DefaultSelection<Prisma.$CarPayload>
/**
 * Model Manager
 * 
 */
export type Manager = $Result.DefaultSelection<Prisma.$ManagerPayload>
/**
 * Model Renter
 * 
 */
export type Renter = $Result.DefaultSelection<Prisma.$RenterPayload>
/**
 * Model Reservation
 * 
 */
export type Reservation = $Result.DefaultSelection<Prisma.$ReservationPayload>
/**
 * Model Application
 * 
 */
export type Application = $Result.DefaultSelection<Prisma.$ApplicationPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model Location
 * 
 */
export type Location = $Result.DefaultSelection<Prisma.$LocationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const CarFeature: {
  Bluetooth: 'Bluetooth',
  GPS: 'GPS',
  HeatedSeats: 'HeatedSeats',
  Sunroof: 'Sunroof',
  ParkingSensors: 'ParkingSensors',
  CruiseControl: 'CruiseControl',
  AirConditioning: 'AirConditioning',
  AlloyWheels: 'AlloyWheels',
  ChildSeat: 'ChildSeat',
  AutomaticTransmission: 'AutomaticTransmission',
  GPSNavigation: 'GPSNavigation'
};

export type CarFeature = (typeof CarFeature)[keyof typeof CarFeature]


export const CarType: {
  Sedan: 'Sedan',
  SUV: 'SUV',
  Convertible: 'Convertible',
  Truck: 'Truck',
  Electric: 'Electric',
  Minivan: 'Minivan',
  Hatchback: 'Hatchback',
  Coupe: 'Coupe'
};

export type CarType = (typeof CarType)[keyof typeof CarType]


export const ReservationStatus: {
  Pending: 'Pending',
  Approved: 'Approved',
  Rejected: 'Rejected',
  Completed: 'Completed',
  Cancelled: 'Cancelled'
};

export type ReservationStatus = (typeof ReservationStatus)[keyof typeof ReservationStatus]


export const PaymentStatus: {
  Pending: 'Pending',
  Paid: 'Paid',
  PartiallyPaid: 'PartiallyPaid',
  Overdue: 'Overdue',
  Refunded: 'Refunded'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]

}

export type CarFeature = $Enums.CarFeature

export const CarFeature: typeof $Enums.CarFeature

export type CarType = $Enums.CarType

export const CarType: typeof $Enums.CarType

export type ReservationStatus = $Enums.ReservationStatus

export const ReservationStatus: typeof $Enums.ReservationStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Cars
 * const cars = await prisma.car.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Cars
   * const cars = await prisma.car.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.car`: Exposes CRUD operations for the **Car** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cars
    * const cars = await prisma.car.findMany()
    * ```
    */
  get car(): Prisma.CarDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.manager`: Exposes CRUD operations for the **Manager** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Managers
    * const managers = await prisma.manager.findMany()
    * ```
    */
  get manager(): Prisma.ManagerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.renter`: Exposes CRUD operations for the **Renter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Renters
    * const renters = await prisma.renter.findMany()
    * ```
    */
  get renter(): Prisma.RenterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reservation`: Exposes CRUD operations for the **Reservation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reservations
    * const reservations = await prisma.reservation.findMany()
    * ```
    */
  get reservation(): Prisma.ReservationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.application`: Exposes CRUD operations for the **Application** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Applications
    * const applications = await prisma.application.findMany()
    * ```
    */
  get application(): Prisma.ApplicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.location`: Exposes CRUD operations for the **Location** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locations
    * const locations = await prisma.location.findMany()
    * ```
    */
  get location(): Prisma.LocationDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Car: 'Car',
    Manager: 'Manager',
    Renter: 'Renter',
    Reservation: 'Reservation',
    Application: 'Application',
    Payment: 'Payment',
    Location: 'Location'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "car" | "manager" | "renter" | "reservation" | "application" | "payment" | "location"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Car: {
        payload: Prisma.$CarPayload<ExtArgs>
        fields: Prisma.CarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          findFirst: {
            args: Prisma.CarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          findMany: {
            args: Prisma.CarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>[]
          }
          create: {
            args: Prisma.CarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          createMany: {
            args: Prisma.CarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>[]
          }
          delete: {
            args: Prisma.CarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          update: {
            args: Prisma.CarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          deleteMany: {
            args: Prisma.CarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CarUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>[]
          }
          upsert: {
            args: Prisma.CarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          aggregate: {
            args: Prisma.CarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCar>
          }
          groupBy: {
            args: Prisma.CarGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarCountArgs<ExtArgs>
            result: $Utils.Optional<CarCountAggregateOutputType> | number
          }
        }
      }
      Manager: {
        payload: Prisma.$ManagerPayload<ExtArgs>
        fields: Prisma.ManagerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ManagerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ManagerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload>
          }
          findFirst: {
            args: Prisma.ManagerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ManagerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload>
          }
          findMany: {
            args: Prisma.ManagerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload>[]
          }
          create: {
            args: Prisma.ManagerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload>
          }
          createMany: {
            args: Prisma.ManagerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ManagerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload>[]
          }
          delete: {
            args: Prisma.ManagerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload>
          }
          update: {
            args: Prisma.ManagerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload>
          }
          deleteMany: {
            args: Prisma.ManagerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ManagerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ManagerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload>[]
          }
          upsert: {
            args: Prisma.ManagerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload>
          }
          aggregate: {
            args: Prisma.ManagerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateManager>
          }
          groupBy: {
            args: Prisma.ManagerGroupByArgs<ExtArgs>
            result: $Utils.Optional<ManagerGroupByOutputType>[]
          }
          count: {
            args: Prisma.ManagerCountArgs<ExtArgs>
            result: $Utils.Optional<ManagerCountAggregateOutputType> | number
          }
        }
      }
      Renter: {
        payload: Prisma.$RenterPayload<ExtArgs>
        fields: Prisma.RenterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RenterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RenterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenterPayload>
          }
          findFirst: {
            args: Prisma.RenterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RenterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenterPayload>
          }
          findMany: {
            args: Prisma.RenterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenterPayload>[]
          }
          create: {
            args: Prisma.RenterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenterPayload>
          }
          createMany: {
            args: Prisma.RenterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RenterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenterPayload>[]
          }
          delete: {
            args: Prisma.RenterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenterPayload>
          }
          update: {
            args: Prisma.RenterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenterPayload>
          }
          deleteMany: {
            args: Prisma.RenterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RenterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RenterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenterPayload>[]
          }
          upsert: {
            args: Prisma.RenterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenterPayload>
          }
          aggregate: {
            args: Prisma.RenterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRenter>
          }
          groupBy: {
            args: Prisma.RenterGroupByArgs<ExtArgs>
            result: $Utils.Optional<RenterGroupByOutputType>[]
          }
          count: {
            args: Prisma.RenterCountArgs<ExtArgs>
            result: $Utils.Optional<RenterCountAggregateOutputType> | number
          }
        }
      }
      Reservation: {
        payload: Prisma.$ReservationPayload<ExtArgs>
        fields: Prisma.ReservationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReservationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReservationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          findFirst: {
            args: Prisma.ReservationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReservationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          findMany: {
            args: Prisma.ReservationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>[]
          }
          create: {
            args: Prisma.ReservationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          createMany: {
            args: Prisma.ReservationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReservationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>[]
          }
          delete: {
            args: Prisma.ReservationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          update: {
            args: Prisma.ReservationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          deleteMany: {
            args: Prisma.ReservationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReservationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReservationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>[]
          }
          upsert: {
            args: Prisma.ReservationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          aggregate: {
            args: Prisma.ReservationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReservation>
          }
          groupBy: {
            args: Prisma.ReservationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReservationCountArgs<ExtArgs>
            result: $Utils.Optional<ReservationCountAggregateOutputType> | number
          }
        }
      }
      Application: {
        payload: Prisma.$ApplicationPayload<ExtArgs>
        fields: Prisma.ApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApplicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApplicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          findFirst: {
            args: Prisma.ApplicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApplicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          findMany: {
            args: Prisma.ApplicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          create: {
            args: Prisma.ApplicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          createMany: {
            args: Prisma.ApplicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApplicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          delete: {
            args: Prisma.ApplicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          update: {
            args: Prisma.ApplicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          deleteMany: {
            args: Prisma.ApplicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApplicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApplicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          upsert: {
            args: Prisma.ApplicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          aggregate: {
            args: Prisma.ApplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApplication>
          }
          groupBy: {
            args: Prisma.ApplicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApplicationCountArgs<ExtArgs>
            result: $Utils.Optional<ApplicationCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      Location: {
        payload: Prisma.$LocationPayload<ExtArgs>
        fields: Prisma.LocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findFirst: {
            args: Prisma.LocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findMany: {
            args: Prisma.LocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          delete: {
            args: Prisma.LocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          update: {
            args: Prisma.LocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          deleteMany: {
            args: Prisma.LocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LocationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          aggregate: {
            args: Prisma.LocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocation>
          }
          groupBy: {
            args: Prisma.LocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocationCountArgs<ExtArgs>
            result: $Utils.Optional<LocationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    car?: CarOmit
    manager?: ManagerOmit
    renter?: RenterOmit
    reservation?: ReservationOmit
    application?: ApplicationOmit
    payment?: PaymentOmit
    location?: LocationOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type CarCountOutputType
   */

  export type CarCountOutputType = {
    reservations: number
    applications: number
    favoritedBy: number
  }

  export type CarCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | CarCountOutputTypeCountReservationsArgs
    applications?: boolean | CarCountOutputTypeCountApplicationsArgs
    favoritedBy?: boolean | CarCountOutputTypeCountFavoritedByArgs
  }

  // Custom InputTypes
  /**
   * CarCountOutputType without action
   */
  export type CarCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarCountOutputType
     */
    select?: CarCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CarCountOutputType without action
   */
  export type CarCountOutputTypeCountReservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
  }

  /**
   * CarCountOutputType without action
   */
  export type CarCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
  }

  /**
   * CarCountOutputType without action
   */
  export type CarCountOutputTypeCountFavoritedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RenterWhereInput
  }


  /**
   * Count Type ManagerCountOutputType
   */

  export type ManagerCountOutputType = {
    cars: number
  }

  export type ManagerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cars?: boolean | ManagerCountOutputTypeCountCarsArgs
  }

  // Custom InputTypes
  /**
   * ManagerCountOutputType without action
   */
  export type ManagerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagerCountOutputType
     */
    select?: ManagerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ManagerCountOutputType without action
   */
  export type ManagerCountOutputTypeCountCarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarWhereInput
  }


  /**
   * Count Type RenterCountOutputType
   */

  export type RenterCountOutputType = {
    reservations: number
    favorites: number
    applications: number
  }

  export type RenterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | RenterCountOutputTypeCountReservationsArgs
    favorites?: boolean | RenterCountOutputTypeCountFavoritesArgs
    applications?: boolean | RenterCountOutputTypeCountApplicationsArgs
  }

  // Custom InputTypes
  /**
   * RenterCountOutputType without action
   */
  export type RenterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenterCountOutputType
     */
    select?: RenterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RenterCountOutputType without action
   */
  export type RenterCountOutputTypeCountReservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
  }

  /**
   * RenterCountOutputType without action
   */
  export type RenterCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarWhereInput
  }

  /**
   * RenterCountOutputType without action
   */
  export type RenterCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
  }


  /**
   * Count Type ReservationCountOutputType
   */

  export type ReservationCountOutputType = {
    payments: number
  }

  export type ReservationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | ReservationCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * ReservationCountOutputType without action
   */
  export type ReservationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationCountOutputType
     */
    select?: ReservationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReservationCountOutputType without action
   */
  export type ReservationCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Count Type LocationCountOutputType
   */

  export type LocationCountOutputType = {
    cars: number
  }

  export type LocationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cars?: boolean | LocationCountOutputTypeCountCarsArgs
  }

  // Custom InputTypes
  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationCountOutputType
     */
    select?: LocationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountCarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Car
   */

  export type AggregateCar = {
    _count: CarCountAggregateOutputType | null
    _avg: CarAvgAggregateOutputType | null
    _sum: CarSumAggregateOutputType | null
    _min: CarMinAggregateOutputType | null
    _max: CarMaxAggregateOutputType | null
  }

  export type CarAvgAggregateOutputType = {
    id: number | null
    pricePerDay: number | null
    locationId: number | null
    rating: number | null
    numberOfReviews: number | null
  }

  export type CarSumAggregateOutputType = {
    id: number | null
    pricePerDay: number | null
    locationId: number | null
    rating: number | null
    numberOfReviews: number | null
  }

  export type CarMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    pricePerDay: number | null
    availableFrom: Date | null
    availableTo: Date | null
    carType: $Enums.CarType | null
    locationId: number | null
    rating: number | null
    numberOfReviews: number | null
    managerCognitoId: string | null
  }

  export type CarMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    pricePerDay: number | null
    availableFrom: Date | null
    availableTo: Date | null
    carType: $Enums.CarType | null
    locationId: number | null
    rating: number | null
    numberOfReviews: number | null
    managerCognitoId: string | null
  }

  export type CarCountAggregateOutputType = {
    id: number
    name: number
    description: number
    pricePerDay: number
    availableFrom: number
    availableTo: number
    carType: number
    carFeatures: number
    imageUrls: number
    locationId: number
    rating: number
    numberOfReviews: number
    managerCognitoId: number
    _all: number
  }


  export type CarAvgAggregateInputType = {
    id?: true
    pricePerDay?: true
    locationId?: true
    rating?: true
    numberOfReviews?: true
  }

  export type CarSumAggregateInputType = {
    id?: true
    pricePerDay?: true
    locationId?: true
    rating?: true
    numberOfReviews?: true
  }

  export type CarMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    pricePerDay?: true
    availableFrom?: true
    availableTo?: true
    carType?: true
    locationId?: true
    rating?: true
    numberOfReviews?: true
    managerCognitoId?: true
  }

  export type CarMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    pricePerDay?: true
    availableFrom?: true
    availableTo?: true
    carType?: true
    locationId?: true
    rating?: true
    numberOfReviews?: true
    managerCognitoId?: true
  }

  export type CarCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    pricePerDay?: true
    availableFrom?: true
    availableTo?: true
    carType?: true
    carFeatures?: true
    imageUrls?: true
    locationId?: true
    rating?: true
    numberOfReviews?: true
    managerCognitoId?: true
    _all?: true
  }

  export type CarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Car to aggregate.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cars
    **/
    _count?: true | CarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarMaxAggregateInputType
  }

  export type GetCarAggregateType<T extends CarAggregateArgs> = {
        [P in keyof T & keyof AggregateCar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCar[P]>
      : GetScalarType<T[P], AggregateCar[P]>
  }




  export type CarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarWhereInput
    orderBy?: CarOrderByWithAggregationInput | CarOrderByWithAggregationInput[]
    by: CarScalarFieldEnum[] | CarScalarFieldEnum
    having?: CarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarCountAggregateInputType | true
    _avg?: CarAvgAggregateInputType
    _sum?: CarSumAggregateInputType
    _min?: CarMinAggregateInputType
    _max?: CarMaxAggregateInputType
  }

  export type CarGroupByOutputType = {
    id: number
    name: string
    description: string
    pricePerDay: number
    availableFrom: Date
    availableTo: Date
    carType: $Enums.CarType
    carFeatures: $Enums.CarFeature[]
    imageUrls: string[]
    locationId: number
    rating: number | null
    numberOfReviews: number | null
    managerCognitoId: string
    _count: CarCountAggregateOutputType | null
    _avg: CarAvgAggregateOutputType | null
    _sum: CarSumAggregateOutputType | null
    _min: CarMinAggregateOutputType | null
    _max: CarMaxAggregateOutputType | null
  }

  type GetCarGroupByPayload<T extends CarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarGroupByOutputType[P]>
            : GetScalarType<T[P], CarGroupByOutputType[P]>
        }
      >
    >


  export type CarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    pricePerDay?: boolean
    availableFrom?: boolean
    availableTo?: boolean
    carType?: boolean
    carFeatures?: boolean
    imageUrls?: boolean
    locationId?: boolean
    rating?: boolean
    numberOfReviews?: boolean
    managerCognitoId?: boolean
    manager?: boolean | ManagerDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
    reservations?: boolean | Car$reservationsArgs<ExtArgs>
    applications?: boolean | Car$applicationsArgs<ExtArgs>
    favoritedBy?: boolean | Car$favoritedByArgs<ExtArgs>
    _count?: boolean | CarCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["car"]>

  export type CarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    pricePerDay?: boolean
    availableFrom?: boolean
    availableTo?: boolean
    carType?: boolean
    carFeatures?: boolean
    imageUrls?: boolean
    locationId?: boolean
    rating?: boolean
    numberOfReviews?: boolean
    managerCognitoId?: boolean
    manager?: boolean | ManagerDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["car"]>

  export type CarSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    pricePerDay?: boolean
    availableFrom?: boolean
    availableTo?: boolean
    carType?: boolean
    carFeatures?: boolean
    imageUrls?: boolean
    locationId?: boolean
    rating?: boolean
    numberOfReviews?: boolean
    managerCognitoId?: boolean
    manager?: boolean | ManagerDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["car"]>

  export type CarSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    pricePerDay?: boolean
    availableFrom?: boolean
    availableTo?: boolean
    carType?: boolean
    carFeatures?: boolean
    imageUrls?: boolean
    locationId?: boolean
    rating?: boolean
    numberOfReviews?: boolean
    managerCognitoId?: boolean
  }

  export type CarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "pricePerDay" | "availableFrom" | "availableTo" | "carType" | "carFeatures" | "imageUrls" | "locationId" | "rating" | "numberOfReviews" | "managerCognitoId", ExtArgs["result"]["car"]>
  export type CarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    manager?: boolean | ManagerDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
    reservations?: boolean | Car$reservationsArgs<ExtArgs>
    applications?: boolean | Car$applicationsArgs<ExtArgs>
    favoritedBy?: boolean | Car$favoritedByArgs<ExtArgs>
    _count?: boolean | CarCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CarIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    manager?: boolean | ManagerDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }
  export type CarIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    manager?: boolean | ManagerDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }

  export type $CarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Car"
    objects: {
      manager: Prisma.$ManagerPayload<ExtArgs>
      location: Prisma.$LocationPayload<ExtArgs>
      reservations: Prisma.$ReservationPayload<ExtArgs>[]
      applications: Prisma.$ApplicationPayload<ExtArgs>[]
      favoritedBy: Prisma.$RenterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      pricePerDay: number
      availableFrom: Date
      availableTo: Date
      carType: $Enums.CarType
      carFeatures: $Enums.CarFeature[]
      imageUrls: string[]
      locationId: number
      rating: number | null
      numberOfReviews: number | null
      managerCognitoId: string
    }, ExtArgs["result"]["car"]>
    composites: {}
  }

  type CarGetPayload<S extends boolean | null | undefined | CarDefaultArgs> = $Result.GetResult<Prisma.$CarPayload, S>

  type CarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarCountAggregateInputType | true
    }

  export interface CarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Car'], meta: { name: 'Car' } }
    /**
     * Find zero or one Car that matches the filter.
     * @param {CarFindUniqueArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarFindUniqueArgs>(args: SelectSubset<T, CarFindUniqueArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Car that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarFindUniqueOrThrowArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarFindUniqueOrThrowArgs>(args: SelectSubset<T, CarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Car that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindFirstArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarFindFirstArgs>(args?: SelectSubset<T, CarFindFirstArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Car that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindFirstOrThrowArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarFindFirstOrThrowArgs>(args?: SelectSubset<T, CarFindFirstOrThrowArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cars
     * const cars = await prisma.car.findMany()
     * 
     * // Get first 10 Cars
     * const cars = await prisma.car.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carWithIdOnly = await prisma.car.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CarFindManyArgs>(args?: SelectSubset<T, CarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Car.
     * @param {CarCreateArgs} args - Arguments to create a Car.
     * @example
     * // Create one Car
     * const Car = await prisma.car.create({
     *   data: {
     *     // ... data to create a Car
     *   }
     * })
     * 
     */
    create<T extends CarCreateArgs>(args: SelectSubset<T, CarCreateArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cars.
     * @param {CarCreateManyArgs} args - Arguments to create many Cars.
     * @example
     * // Create many Cars
     * const car = await prisma.car.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CarCreateManyArgs>(args?: SelectSubset<T, CarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cars and returns the data saved in the database.
     * @param {CarCreateManyAndReturnArgs} args - Arguments to create many Cars.
     * @example
     * // Create many Cars
     * const car = await prisma.car.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cars and only return the `id`
     * const carWithIdOnly = await prisma.car.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CarCreateManyAndReturnArgs>(args?: SelectSubset<T, CarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Car.
     * @param {CarDeleteArgs} args - Arguments to delete one Car.
     * @example
     * // Delete one Car
     * const Car = await prisma.car.delete({
     *   where: {
     *     // ... filter to delete one Car
     *   }
     * })
     * 
     */
    delete<T extends CarDeleteArgs>(args: SelectSubset<T, CarDeleteArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Car.
     * @param {CarUpdateArgs} args - Arguments to update one Car.
     * @example
     * // Update one Car
     * const car = await prisma.car.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CarUpdateArgs>(args: SelectSubset<T, CarUpdateArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cars.
     * @param {CarDeleteManyArgs} args - Arguments to filter Cars to delete.
     * @example
     * // Delete a few Cars
     * const { count } = await prisma.car.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CarDeleteManyArgs>(args?: SelectSubset<T, CarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cars
     * const car = await prisma.car.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CarUpdateManyArgs>(args: SelectSubset<T, CarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cars and returns the data updated in the database.
     * @param {CarUpdateManyAndReturnArgs} args - Arguments to update many Cars.
     * @example
     * // Update many Cars
     * const car = await prisma.car.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cars and only return the `id`
     * const carWithIdOnly = await prisma.car.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CarUpdateManyAndReturnArgs>(args: SelectSubset<T, CarUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Car.
     * @param {CarUpsertArgs} args - Arguments to update or create a Car.
     * @example
     * // Update or create a Car
     * const car = await prisma.car.upsert({
     *   create: {
     *     // ... data to create a Car
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Car we want to update
     *   }
     * })
     */
    upsert<T extends CarUpsertArgs>(args: SelectSubset<T, CarUpsertArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarCountArgs} args - Arguments to filter Cars to count.
     * @example
     * // Count the number of Cars
     * const count = await prisma.car.count({
     *   where: {
     *     // ... the filter for the Cars we want to count
     *   }
     * })
    **/
    count<T extends CarCountArgs>(
      args?: Subset<T, CarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Car.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CarAggregateArgs>(args: Subset<T, CarAggregateArgs>): Prisma.PrismaPromise<GetCarAggregateType<T>>

    /**
     * Group by Car.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarGroupByArgs} args - Group by arguments.
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
      T extends CarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarGroupByArgs['orderBy'] }
        : { orderBy?: CarGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Car model
   */
  readonly fields: CarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Car.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    manager<T extends ManagerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ManagerDefaultArgs<ExtArgs>>): Prisma__ManagerClient<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    location<T extends LocationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocationDefaultArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reservations<T extends Car$reservationsArgs<ExtArgs> = {}>(args?: Subset<T, Car$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    applications<T extends Car$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, Car$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favoritedBy<T extends Car$favoritedByArgs<ExtArgs> = {}>(args?: Subset<T, Car$favoritedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RenterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Car model
   */
  interface CarFieldRefs {
    readonly id: FieldRef<"Car", 'Int'>
    readonly name: FieldRef<"Car", 'String'>
    readonly description: FieldRef<"Car", 'String'>
    readonly pricePerDay: FieldRef<"Car", 'Float'>
    readonly availableFrom: FieldRef<"Car", 'DateTime'>
    readonly availableTo: FieldRef<"Car", 'DateTime'>
    readonly carType: FieldRef<"Car", 'CarType'>
    readonly carFeatures: FieldRef<"Car", 'CarFeature[]'>
    readonly imageUrls: FieldRef<"Car", 'String[]'>
    readonly locationId: FieldRef<"Car", 'Int'>
    readonly rating: FieldRef<"Car", 'Float'>
    readonly numberOfReviews: FieldRef<"Car", 'Int'>
    readonly managerCognitoId: FieldRef<"Car", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Car findUnique
   */
  export type CarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car findUniqueOrThrow
   */
  export type CarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car findFirst
   */
  export type CarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cars.
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cars.
     */
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Car findFirstOrThrow
   */
  export type CarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cars.
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cars.
     */
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Car findMany
   */
  export type CarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Cars to fetch.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cars.
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Car create
   */
  export type CarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * The data needed to create a Car.
     */
    data: XOR<CarCreateInput, CarUncheckedCreateInput>
  }

  /**
   * Car createMany
   */
  export type CarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cars.
     */
    data: CarCreateManyInput | CarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Car createManyAndReturn
   */
  export type CarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * The data used to create many Cars.
     */
    data: CarCreateManyInput | CarCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Car update
   */
  export type CarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * The data needed to update a Car.
     */
    data: XOR<CarUpdateInput, CarUncheckedUpdateInput>
    /**
     * Choose, which Car to update.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car updateMany
   */
  export type CarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cars.
     */
    data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyInput>
    /**
     * Filter which Cars to update
     */
    where?: CarWhereInput
    /**
     * Limit how many Cars to update.
     */
    limit?: number
  }

  /**
   * Car updateManyAndReturn
   */
  export type CarUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * The data used to update Cars.
     */
    data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyInput>
    /**
     * Filter which Cars to update
     */
    where?: CarWhereInput
    /**
     * Limit how many Cars to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Car upsert
   */
  export type CarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * The filter to search for the Car to update in case it exists.
     */
    where: CarWhereUniqueInput
    /**
     * In case the Car found by the `where` argument doesn't exist, create a new Car with this data.
     */
    create: XOR<CarCreateInput, CarUncheckedCreateInput>
    /**
     * In case the Car was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarUpdateInput, CarUncheckedUpdateInput>
  }

  /**
   * Car delete
   */
  export type CarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter which Car to delete.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car deleteMany
   */
  export type CarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cars to delete
     */
    where?: CarWhereInput
    /**
     * Limit how many Cars to delete.
     */
    limit?: number
  }

  /**
   * Car.reservations
   */
  export type Car$reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    cursor?: ReservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Car.applications
   */
  export type Car$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    cursor?: ApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Car.favoritedBy
   */
  export type Car$favoritedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Renter
     */
    select?: RenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Renter
     */
    omit?: RenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenterInclude<ExtArgs> | null
    where?: RenterWhereInput
    orderBy?: RenterOrderByWithRelationInput | RenterOrderByWithRelationInput[]
    cursor?: RenterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RenterScalarFieldEnum | RenterScalarFieldEnum[]
  }

  /**
   * Car without action
   */
  export type CarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
  }


  /**
   * Model Manager
   */

  export type AggregateManager = {
    _count: ManagerCountAggregateOutputType | null
    _avg: ManagerAvgAggregateOutputType | null
    _sum: ManagerSumAggregateOutputType | null
    _min: ManagerMinAggregateOutputType | null
    _max: ManagerMaxAggregateOutputType | null
  }

  export type ManagerAvgAggregateOutputType = {
    id: number | null
  }

  export type ManagerSumAggregateOutputType = {
    id: number | null
  }

  export type ManagerMinAggregateOutputType = {
    id: number | null
    cognitoId: string | null
    name: string | null
    email: string | null
    phoneNumber: string | null
  }

  export type ManagerMaxAggregateOutputType = {
    id: number | null
    cognitoId: string | null
    name: string | null
    email: string | null
    phoneNumber: string | null
  }

  export type ManagerCountAggregateOutputType = {
    id: number
    cognitoId: number
    name: number
    email: number
    phoneNumber: number
    _all: number
  }


  export type ManagerAvgAggregateInputType = {
    id?: true
  }

  export type ManagerSumAggregateInputType = {
    id?: true
  }

  export type ManagerMinAggregateInputType = {
    id?: true
    cognitoId?: true
    name?: true
    email?: true
    phoneNumber?: true
  }

  export type ManagerMaxAggregateInputType = {
    id?: true
    cognitoId?: true
    name?: true
    email?: true
    phoneNumber?: true
  }

  export type ManagerCountAggregateInputType = {
    id?: true
    cognitoId?: true
    name?: true
    email?: true
    phoneNumber?: true
    _all?: true
  }

  export type ManagerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Manager to aggregate.
     */
    where?: ManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Managers to fetch.
     */
    orderBy?: ManagerOrderByWithRelationInput | ManagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Managers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Managers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Managers
    **/
    _count?: true | ManagerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ManagerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ManagerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ManagerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ManagerMaxAggregateInputType
  }

  export type GetManagerAggregateType<T extends ManagerAggregateArgs> = {
        [P in keyof T & keyof AggregateManager]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateManager[P]>
      : GetScalarType<T[P], AggregateManager[P]>
  }




  export type ManagerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ManagerWhereInput
    orderBy?: ManagerOrderByWithAggregationInput | ManagerOrderByWithAggregationInput[]
    by: ManagerScalarFieldEnum[] | ManagerScalarFieldEnum
    having?: ManagerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ManagerCountAggregateInputType | true
    _avg?: ManagerAvgAggregateInputType
    _sum?: ManagerSumAggregateInputType
    _min?: ManagerMinAggregateInputType
    _max?: ManagerMaxAggregateInputType
  }

  export type ManagerGroupByOutputType = {
    id: number
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    _count: ManagerCountAggregateOutputType | null
    _avg: ManagerAvgAggregateOutputType | null
    _sum: ManagerSumAggregateOutputType | null
    _min: ManagerMinAggregateOutputType | null
    _max: ManagerMaxAggregateOutputType | null
  }

  type GetManagerGroupByPayload<T extends ManagerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ManagerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ManagerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ManagerGroupByOutputType[P]>
            : GetScalarType<T[P], ManagerGroupByOutputType[P]>
        }
      >
    >


  export type ManagerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cognitoId?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    cars?: boolean | Manager$carsArgs<ExtArgs>
    _count?: boolean | ManagerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["manager"]>

  export type ManagerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cognitoId?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
  }, ExtArgs["result"]["manager"]>

  export type ManagerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cognitoId?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
  }, ExtArgs["result"]["manager"]>

  export type ManagerSelectScalar = {
    id?: boolean
    cognitoId?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
  }

  export type ManagerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cognitoId" | "name" | "email" | "phoneNumber", ExtArgs["result"]["manager"]>
  export type ManagerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cars?: boolean | Manager$carsArgs<ExtArgs>
    _count?: boolean | ManagerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ManagerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ManagerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ManagerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Manager"
    objects: {
      cars: Prisma.$CarPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cognitoId: string
      name: string
      email: string
      phoneNumber: string
    }, ExtArgs["result"]["manager"]>
    composites: {}
  }

  type ManagerGetPayload<S extends boolean | null | undefined | ManagerDefaultArgs> = $Result.GetResult<Prisma.$ManagerPayload, S>

  type ManagerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ManagerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ManagerCountAggregateInputType | true
    }

  export interface ManagerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Manager'], meta: { name: 'Manager' } }
    /**
     * Find zero or one Manager that matches the filter.
     * @param {ManagerFindUniqueArgs} args - Arguments to find a Manager
     * @example
     * // Get one Manager
     * const manager = await prisma.manager.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ManagerFindUniqueArgs>(args: SelectSubset<T, ManagerFindUniqueArgs<ExtArgs>>): Prisma__ManagerClient<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Manager that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ManagerFindUniqueOrThrowArgs} args - Arguments to find a Manager
     * @example
     * // Get one Manager
     * const manager = await prisma.manager.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ManagerFindUniqueOrThrowArgs>(args: SelectSubset<T, ManagerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ManagerClient<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Manager that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerFindFirstArgs} args - Arguments to find a Manager
     * @example
     * // Get one Manager
     * const manager = await prisma.manager.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ManagerFindFirstArgs>(args?: SelectSubset<T, ManagerFindFirstArgs<ExtArgs>>): Prisma__ManagerClient<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Manager that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerFindFirstOrThrowArgs} args - Arguments to find a Manager
     * @example
     * // Get one Manager
     * const manager = await prisma.manager.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ManagerFindFirstOrThrowArgs>(args?: SelectSubset<T, ManagerFindFirstOrThrowArgs<ExtArgs>>): Prisma__ManagerClient<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Managers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Managers
     * const managers = await prisma.manager.findMany()
     * 
     * // Get first 10 Managers
     * const managers = await prisma.manager.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const managerWithIdOnly = await prisma.manager.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ManagerFindManyArgs>(args?: SelectSubset<T, ManagerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Manager.
     * @param {ManagerCreateArgs} args - Arguments to create a Manager.
     * @example
     * // Create one Manager
     * const Manager = await prisma.manager.create({
     *   data: {
     *     // ... data to create a Manager
     *   }
     * })
     * 
     */
    create<T extends ManagerCreateArgs>(args: SelectSubset<T, ManagerCreateArgs<ExtArgs>>): Prisma__ManagerClient<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Managers.
     * @param {ManagerCreateManyArgs} args - Arguments to create many Managers.
     * @example
     * // Create many Managers
     * const manager = await prisma.manager.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ManagerCreateManyArgs>(args?: SelectSubset<T, ManagerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Managers and returns the data saved in the database.
     * @param {ManagerCreateManyAndReturnArgs} args - Arguments to create many Managers.
     * @example
     * // Create many Managers
     * const manager = await prisma.manager.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Managers and only return the `id`
     * const managerWithIdOnly = await prisma.manager.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ManagerCreateManyAndReturnArgs>(args?: SelectSubset<T, ManagerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Manager.
     * @param {ManagerDeleteArgs} args - Arguments to delete one Manager.
     * @example
     * // Delete one Manager
     * const Manager = await prisma.manager.delete({
     *   where: {
     *     // ... filter to delete one Manager
     *   }
     * })
     * 
     */
    delete<T extends ManagerDeleteArgs>(args: SelectSubset<T, ManagerDeleteArgs<ExtArgs>>): Prisma__ManagerClient<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Manager.
     * @param {ManagerUpdateArgs} args - Arguments to update one Manager.
     * @example
     * // Update one Manager
     * const manager = await prisma.manager.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ManagerUpdateArgs>(args: SelectSubset<T, ManagerUpdateArgs<ExtArgs>>): Prisma__ManagerClient<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Managers.
     * @param {ManagerDeleteManyArgs} args - Arguments to filter Managers to delete.
     * @example
     * // Delete a few Managers
     * const { count } = await prisma.manager.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ManagerDeleteManyArgs>(args?: SelectSubset<T, ManagerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Managers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Managers
     * const manager = await prisma.manager.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ManagerUpdateManyArgs>(args: SelectSubset<T, ManagerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Managers and returns the data updated in the database.
     * @param {ManagerUpdateManyAndReturnArgs} args - Arguments to update many Managers.
     * @example
     * // Update many Managers
     * const manager = await prisma.manager.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Managers and only return the `id`
     * const managerWithIdOnly = await prisma.manager.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ManagerUpdateManyAndReturnArgs>(args: SelectSubset<T, ManagerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Manager.
     * @param {ManagerUpsertArgs} args - Arguments to update or create a Manager.
     * @example
     * // Update or create a Manager
     * const manager = await prisma.manager.upsert({
     *   create: {
     *     // ... data to create a Manager
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Manager we want to update
     *   }
     * })
     */
    upsert<T extends ManagerUpsertArgs>(args: SelectSubset<T, ManagerUpsertArgs<ExtArgs>>): Prisma__ManagerClient<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Managers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerCountArgs} args - Arguments to filter Managers to count.
     * @example
     * // Count the number of Managers
     * const count = await prisma.manager.count({
     *   where: {
     *     // ... the filter for the Managers we want to count
     *   }
     * })
    **/
    count<T extends ManagerCountArgs>(
      args?: Subset<T, ManagerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ManagerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Manager.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ManagerAggregateArgs>(args: Subset<T, ManagerAggregateArgs>): Prisma.PrismaPromise<GetManagerAggregateType<T>>

    /**
     * Group by Manager.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerGroupByArgs} args - Group by arguments.
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
      T extends ManagerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ManagerGroupByArgs['orderBy'] }
        : { orderBy?: ManagerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ManagerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetManagerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Manager model
   */
  readonly fields: ManagerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Manager.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ManagerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cars<T extends Manager$carsArgs<ExtArgs> = {}>(args?: Subset<T, Manager$carsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Manager model
   */
  interface ManagerFieldRefs {
    readonly id: FieldRef<"Manager", 'Int'>
    readonly cognitoId: FieldRef<"Manager", 'String'>
    readonly name: FieldRef<"Manager", 'String'>
    readonly email: FieldRef<"Manager", 'String'>
    readonly phoneNumber: FieldRef<"Manager", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Manager findUnique
   */
  export type ManagerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerInclude<ExtArgs> | null
    /**
     * Filter, which Manager to fetch.
     */
    where: ManagerWhereUniqueInput
  }

  /**
   * Manager findUniqueOrThrow
   */
  export type ManagerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerInclude<ExtArgs> | null
    /**
     * Filter, which Manager to fetch.
     */
    where: ManagerWhereUniqueInput
  }

  /**
   * Manager findFirst
   */
  export type ManagerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerInclude<ExtArgs> | null
    /**
     * Filter, which Manager to fetch.
     */
    where?: ManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Managers to fetch.
     */
    orderBy?: ManagerOrderByWithRelationInput | ManagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Managers.
     */
    cursor?: ManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Managers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Managers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Managers.
     */
    distinct?: ManagerScalarFieldEnum | ManagerScalarFieldEnum[]
  }

  /**
   * Manager findFirstOrThrow
   */
  export type ManagerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerInclude<ExtArgs> | null
    /**
     * Filter, which Manager to fetch.
     */
    where?: ManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Managers to fetch.
     */
    orderBy?: ManagerOrderByWithRelationInput | ManagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Managers.
     */
    cursor?: ManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Managers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Managers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Managers.
     */
    distinct?: ManagerScalarFieldEnum | ManagerScalarFieldEnum[]
  }

  /**
   * Manager findMany
   */
  export type ManagerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerInclude<ExtArgs> | null
    /**
     * Filter, which Managers to fetch.
     */
    where?: ManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Managers to fetch.
     */
    orderBy?: ManagerOrderByWithRelationInput | ManagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Managers.
     */
    cursor?: ManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Managers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Managers.
     */
    skip?: number
    distinct?: ManagerScalarFieldEnum | ManagerScalarFieldEnum[]
  }

  /**
   * Manager create
   */
  export type ManagerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerInclude<ExtArgs> | null
    /**
     * The data needed to create a Manager.
     */
    data: XOR<ManagerCreateInput, ManagerUncheckedCreateInput>
  }

  /**
   * Manager createMany
   */
  export type ManagerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Managers.
     */
    data: ManagerCreateManyInput | ManagerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Manager createManyAndReturn
   */
  export type ManagerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * The data used to create many Managers.
     */
    data: ManagerCreateManyInput | ManagerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Manager update
   */
  export type ManagerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerInclude<ExtArgs> | null
    /**
     * The data needed to update a Manager.
     */
    data: XOR<ManagerUpdateInput, ManagerUncheckedUpdateInput>
    /**
     * Choose, which Manager to update.
     */
    where: ManagerWhereUniqueInput
  }

  /**
   * Manager updateMany
   */
  export type ManagerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Managers.
     */
    data: XOR<ManagerUpdateManyMutationInput, ManagerUncheckedUpdateManyInput>
    /**
     * Filter which Managers to update
     */
    where?: ManagerWhereInput
    /**
     * Limit how many Managers to update.
     */
    limit?: number
  }

  /**
   * Manager updateManyAndReturn
   */
  export type ManagerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * The data used to update Managers.
     */
    data: XOR<ManagerUpdateManyMutationInput, ManagerUncheckedUpdateManyInput>
    /**
     * Filter which Managers to update
     */
    where?: ManagerWhereInput
    /**
     * Limit how many Managers to update.
     */
    limit?: number
  }

  /**
   * Manager upsert
   */
  export type ManagerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerInclude<ExtArgs> | null
    /**
     * The filter to search for the Manager to update in case it exists.
     */
    where: ManagerWhereUniqueInput
    /**
     * In case the Manager found by the `where` argument doesn't exist, create a new Manager with this data.
     */
    create: XOR<ManagerCreateInput, ManagerUncheckedCreateInput>
    /**
     * In case the Manager was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ManagerUpdateInput, ManagerUncheckedUpdateInput>
  }

  /**
   * Manager delete
   */
  export type ManagerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerInclude<ExtArgs> | null
    /**
     * Filter which Manager to delete.
     */
    where: ManagerWhereUniqueInput
  }

  /**
   * Manager deleteMany
   */
  export type ManagerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Managers to delete
     */
    where?: ManagerWhereInput
    /**
     * Limit how many Managers to delete.
     */
    limit?: number
  }

  /**
   * Manager.cars
   */
  export type Manager$carsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    where?: CarWhereInput
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    cursor?: CarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Manager without action
   */
  export type ManagerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerInclude<ExtArgs> | null
  }


  /**
   * Model Renter
   */

  export type AggregateRenter = {
    _count: RenterCountAggregateOutputType | null
    _avg: RenterAvgAggregateOutputType | null
    _sum: RenterSumAggregateOutputType | null
    _min: RenterMinAggregateOutputType | null
    _max: RenterMaxAggregateOutputType | null
  }

  export type RenterAvgAggregateOutputType = {
    id: number | null
  }

  export type RenterSumAggregateOutputType = {
    id: number | null
  }

  export type RenterMinAggregateOutputType = {
    id: number | null
    cognitoId: string | null
    name: string | null
    email: string | null
    phoneNumber: string | null
  }

  export type RenterMaxAggregateOutputType = {
    id: number | null
    cognitoId: string | null
    name: string | null
    email: string | null
    phoneNumber: string | null
  }

  export type RenterCountAggregateOutputType = {
    id: number
    cognitoId: number
    name: number
    email: number
    phoneNumber: number
    _all: number
  }


  export type RenterAvgAggregateInputType = {
    id?: true
  }

  export type RenterSumAggregateInputType = {
    id?: true
  }

  export type RenterMinAggregateInputType = {
    id?: true
    cognitoId?: true
    name?: true
    email?: true
    phoneNumber?: true
  }

  export type RenterMaxAggregateInputType = {
    id?: true
    cognitoId?: true
    name?: true
    email?: true
    phoneNumber?: true
  }

  export type RenterCountAggregateInputType = {
    id?: true
    cognitoId?: true
    name?: true
    email?: true
    phoneNumber?: true
    _all?: true
  }

  export type RenterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Renter to aggregate.
     */
    where?: RenterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Renters to fetch.
     */
    orderBy?: RenterOrderByWithRelationInput | RenterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RenterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Renters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Renters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Renters
    **/
    _count?: true | RenterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RenterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RenterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RenterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RenterMaxAggregateInputType
  }

  export type GetRenterAggregateType<T extends RenterAggregateArgs> = {
        [P in keyof T & keyof AggregateRenter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRenter[P]>
      : GetScalarType<T[P], AggregateRenter[P]>
  }




  export type RenterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RenterWhereInput
    orderBy?: RenterOrderByWithAggregationInput | RenterOrderByWithAggregationInput[]
    by: RenterScalarFieldEnum[] | RenterScalarFieldEnum
    having?: RenterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RenterCountAggregateInputType | true
    _avg?: RenterAvgAggregateInputType
    _sum?: RenterSumAggregateInputType
    _min?: RenterMinAggregateInputType
    _max?: RenterMaxAggregateInputType
  }

  export type RenterGroupByOutputType = {
    id: number
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    _count: RenterCountAggregateOutputType | null
    _avg: RenterAvgAggregateOutputType | null
    _sum: RenterSumAggregateOutputType | null
    _min: RenterMinAggregateOutputType | null
    _max: RenterMaxAggregateOutputType | null
  }

  type GetRenterGroupByPayload<T extends RenterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RenterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RenterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RenterGroupByOutputType[P]>
            : GetScalarType<T[P], RenterGroupByOutputType[P]>
        }
      >
    >


  export type RenterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cognitoId?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    reservations?: boolean | Renter$reservationsArgs<ExtArgs>
    favorites?: boolean | Renter$favoritesArgs<ExtArgs>
    applications?: boolean | Renter$applicationsArgs<ExtArgs>
    _count?: boolean | RenterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["renter"]>

  export type RenterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cognitoId?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
  }, ExtArgs["result"]["renter"]>

  export type RenterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cognitoId?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
  }, ExtArgs["result"]["renter"]>

  export type RenterSelectScalar = {
    id?: boolean
    cognitoId?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
  }

  export type RenterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cognitoId" | "name" | "email" | "phoneNumber", ExtArgs["result"]["renter"]>
  export type RenterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | Renter$reservationsArgs<ExtArgs>
    favorites?: boolean | Renter$favoritesArgs<ExtArgs>
    applications?: boolean | Renter$applicationsArgs<ExtArgs>
    _count?: boolean | RenterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RenterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RenterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RenterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Renter"
    objects: {
      reservations: Prisma.$ReservationPayload<ExtArgs>[]
      favorites: Prisma.$CarPayload<ExtArgs>[]
      applications: Prisma.$ApplicationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cognitoId: string
      name: string
      email: string
      phoneNumber: string
    }, ExtArgs["result"]["renter"]>
    composites: {}
  }

  type RenterGetPayload<S extends boolean | null | undefined | RenterDefaultArgs> = $Result.GetResult<Prisma.$RenterPayload, S>

  type RenterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RenterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RenterCountAggregateInputType | true
    }

  export interface RenterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Renter'], meta: { name: 'Renter' } }
    /**
     * Find zero or one Renter that matches the filter.
     * @param {RenterFindUniqueArgs} args - Arguments to find a Renter
     * @example
     * // Get one Renter
     * const renter = await prisma.renter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RenterFindUniqueArgs>(args: SelectSubset<T, RenterFindUniqueArgs<ExtArgs>>): Prisma__RenterClient<$Result.GetResult<Prisma.$RenterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Renter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RenterFindUniqueOrThrowArgs} args - Arguments to find a Renter
     * @example
     * // Get one Renter
     * const renter = await prisma.renter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RenterFindUniqueOrThrowArgs>(args: SelectSubset<T, RenterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RenterClient<$Result.GetResult<Prisma.$RenterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Renter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenterFindFirstArgs} args - Arguments to find a Renter
     * @example
     * // Get one Renter
     * const renter = await prisma.renter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RenterFindFirstArgs>(args?: SelectSubset<T, RenterFindFirstArgs<ExtArgs>>): Prisma__RenterClient<$Result.GetResult<Prisma.$RenterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Renter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenterFindFirstOrThrowArgs} args - Arguments to find a Renter
     * @example
     * // Get one Renter
     * const renter = await prisma.renter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RenterFindFirstOrThrowArgs>(args?: SelectSubset<T, RenterFindFirstOrThrowArgs<ExtArgs>>): Prisma__RenterClient<$Result.GetResult<Prisma.$RenterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Renters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Renters
     * const renters = await prisma.renter.findMany()
     * 
     * // Get first 10 Renters
     * const renters = await prisma.renter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const renterWithIdOnly = await prisma.renter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RenterFindManyArgs>(args?: SelectSubset<T, RenterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RenterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Renter.
     * @param {RenterCreateArgs} args - Arguments to create a Renter.
     * @example
     * // Create one Renter
     * const Renter = await prisma.renter.create({
     *   data: {
     *     // ... data to create a Renter
     *   }
     * })
     * 
     */
    create<T extends RenterCreateArgs>(args: SelectSubset<T, RenterCreateArgs<ExtArgs>>): Prisma__RenterClient<$Result.GetResult<Prisma.$RenterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Renters.
     * @param {RenterCreateManyArgs} args - Arguments to create many Renters.
     * @example
     * // Create many Renters
     * const renter = await prisma.renter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RenterCreateManyArgs>(args?: SelectSubset<T, RenterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Renters and returns the data saved in the database.
     * @param {RenterCreateManyAndReturnArgs} args - Arguments to create many Renters.
     * @example
     * // Create many Renters
     * const renter = await prisma.renter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Renters and only return the `id`
     * const renterWithIdOnly = await prisma.renter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RenterCreateManyAndReturnArgs>(args?: SelectSubset<T, RenterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RenterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Renter.
     * @param {RenterDeleteArgs} args - Arguments to delete one Renter.
     * @example
     * // Delete one Renter
     * const Renter = await prisma.renter.delete({
     *   where: {
     *     // ... filter to delete one Renter
     *   }
     * })
     * 
     */
    delete<T extends RenterDeleteArgs>(args: SelectSubset<T, RenterDeleteArgs<ExtArgs>>): Prisma__RenterClient<$Result.GetResult<Prisma.$RenterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Renter.
     * @param {RenterUpdateArgs} args - Arguments to update one Renter.
     * @example
     * // Update one Renter
     * const renter = await prisma.renter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RenterUpdateArgs>(args: SelectSubset<T, RenterUpdateArgs<ExtArgs>>): Prisma__RenterClient<$Result.GetResult<Prisma.$RenterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Renters.
     * @param {RenterDeleteManyArgs} args - Arguments to filter Renters to delete.
     * @example
     * // Delete a few Renters
     * const { count } = await prisma.renter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RenterDeleteManyArgs>(args?: SelectSubset<T, RenterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Renters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Renters
     * const renter = await prisma.renter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RenterUpdateManyArgs>(args: SelectSubset<T, RenterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Renters and returns the data updated in the database.
     * @param {RenterUpdateManyAndReturnArgs} args - Arguments to update many Renters.
     * @example
     * // Update many Renters
     * const renter = await prisma.renter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Renters and only return the `id`
     * const renterWithIdOnly = await prisma.renter.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RenterUpdateManyAndReturnArgs>(args: SelectSubset<T, RenterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RenterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Renter.
     * @param {RenterUpsertArgs} args - Arguments to update or create a Renter.
     * @example
     * // Update or create a Renter
     * const renter = await prisma.renter.upsert({
     *   create: {
     *     // ... data to create a Renter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Renter we want to update
     *   }
     * })
     */
    upsert<T extends RenterUpsertArgs>(args: SelectSubset<T, RenterUpsertArgs<ExtArgs>>): Prisma__RenterClient<$Result.GetResult<Prisma.$RenterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Renters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenterCountArgs} args - Arguments to filter Renters to count.
     * @example
     * // Count the number of Renters
     * const count = await prisma.renter.count({
     *   where: {
     *     // ... the filter for the Renters we want to count
     *   }
     * })
    **/
    count<T extends RenterCountArgs>(
      args?: Subset<T, RenterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RenterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Renter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RenterAggregateArgs>(args: Subset<T, RenterAggregateArgs>): Prisma.PrismaPromise<GetRenterAggregateType<T>>

    /**
     * Group by Renter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenterGroupByArgs} args - Group by arguments.
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
      T extends RenterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RenterGroupByArgs['orderBy'] }
        : { orderBy?: RenterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RenterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRenterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Renter model
   */
  readonly fields: RenterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Renter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RenterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservations<T extends Renter$reservationsArgs<ExtArgs> = {}>(args?: Subset<T, Renter$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favorites<T extends Renter$favoritesArgs<ExtArgs> = {}>(args?: Subset<T, Renter$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    applications<T extends Renter$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, Renter$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Renter model
   */
  interface RenterFieldRefs {
    readonly id: FieldRef<"Renter", 'Int'>
    readonly cognitoId: FieldRef<"Renter", 'String'>
    readonly name: FieldRef<"Renter", 'String'>
    readonly email: FieldRef<"Renter", 'String'>
    readonly phoneNumber: FieldRef<"Renter", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Renter findUnique
   */
  export type RenterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Renter
     */
    select?: RenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Renter
     */
    omit?: RenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenterInclude<ExtArgs> | null
    /**
     * Filter, which Renter to fetch.
     */
    where: RenterWhereUniqueInput
  }

  /**
   * Renter findUniqueOrThrow
   */
  export type RenterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Renter
     */
    select?: RenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Renter
     */
    omit?: RenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenterInclude<ExtArgs> | null
    /**
     * Filter, which Renter to fetch.
     */
    where: RenterWhereUniqueInput
  }

  /**
   * Renter findFirst
   */
  export type RenterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Renter
     */
    select?: RenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Renter
     */
    omit?: RenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenterInclude<ExtArgs> | null
    /**
     * Filter, which Renter to fetch.
     */
    where?: RenterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Renters to fetch.
     */
    orderBy?: RenterOrderByWithRelationInput | RenterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Renters.
     */
    cursor?: RenterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Renters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Renters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Renters.
     */
    distinct?: RenterScalarFieldEnum | RenterScalarFieldEnum[]
  }

  /**
   * Renter findFirstOrThrow
   */
  export type RenterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Renter
     */
    select?: RenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Renter
     */
    omit?: RenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenterInclude<ExtArgs> | null
    /**
     * Filter, which Renter to fetch.
     */
    where?: RenterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Renters to fetch.
     */
    orderBy?: RenterOrderByWithRelationInput | RenterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Renters.
     */
    cursor?: RenterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Renters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Renters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Renters.
     */
    distinct?: RenterScalarFieldEnum | RenterScalarFieldEnum[]
  }

  /**
   * Renter findMany
   */
  export type RenterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Renter
     */
    select?: RenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Renter
     */
    omit?: RenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenterInclude<ExtArgs> | null
    /**
     * Filter, which Renters to fetch.
     */
    where?: RenterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Renters to fetch.
     */
    orderBy?: RenterOrderByWithRelationInput | RenterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Renters.
     */
    cursor?: RenterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Renters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Renters.
     */
    skip?: number
    distinct?: RenterScalarFieldEnum | RenterScalarFieldEnum[]
  }

  /**
   * Renter create
   */
  export type RenterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Renter
     */
    select?: RenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Renter
     */
    omit?: RenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenterInclude<ExtArgs> | null
    /**
     * The data needed to create a Renter.
     */
    data: XOR<RenterCreateInput, RenterUncheckedCreateInput>
  }

  /**
   * Renter createMany
   */
  export type RenterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Renters.
     */
    data: RenterCreateManyInput | RenterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Renter createManyAndReturn
   */
  export type RenterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Renter
     */
    select?: RenterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Renter
     */
    omit?: RenterOmit<ExtArgs> | null
    /**
     * The data used to create many Renters.
     */
    data: RenterCreateManyInput | RenterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Renter update
   */
  export type RenterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Renter
     */
    select?: RenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Renter
     */
    omit?: RenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenterInclude<ExtArgs> | null
    /**
     * The data needed to update a Renter.
     */
    data: XOR<RenterUpdateInput, RenterUncheckedUpdateInput>
    /**
     * Choose, which Renter to update.
     */
    where: RenterWhereUniqueInput
  }

  /**
   * Renter updateMany
   */
  export type RenterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Renters.
     */
    data: XOR<RenterUpdateManyMutationInput, RenterUncheckedUpdateManyInput>
    /**
     * Filter which Renters to update
     */
    where?: RenterWhereInput
    /**
     * Limit how many Renters to update.
     */
    limit?: number
  }

  /**
   * Renter updateManyAndReturn
   */
  export type RenterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Renter
     */
    select?: RenterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Renter
     */
    omit?: RenterOmit<ExtArgs> | null
    /**
     * The data used to update Renters.
     */
    data: XOR<RenterUpdateManyMutationInput, RenterUncheckedUpdateManyInput>
    /**
     * Filter which Renters to update
     */
    where?: RenterWhereInput
    /**
     * Limit how many Renters to update.
     */
    limit?: number
  }

  /**
   * Renter upsert
   */
  export type RenterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Renter
     */
    select?: RenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Renter
     */
    omit?: RenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenterInclude<ExtArgs> | null
    /**
     * The filter to search for the Renter to update in case it exists.
     */
    where: RenterWhereUniqueInput
    /**
     * In case the Renter found by the `where` argument doesn't exist, create a new Renter with this data.
     */
    create: XOR<RenterCreateInput, RenterUncheckedCreateInput>
    /**
     * In case the Renter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RenterUpdateInput, RenterUncheckedUpdateInput>
  }

  /**
   * Renter delete
   */
  export type RenterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Renter
     */
    select?: RenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Renter
     */
    omit?: RenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenterInclude<ExtArgs> | null
    /**
     * Filter which Renter to delete.
     */
    where: RenterWhereUniqueInput
  }

  /**
   * Renter deleteMany
   */
  export type RenterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Renters to delete
     */
    where?: RenterWhereInput
    /**
     * Limit how many Renters to delete.
     */
    limit?: number
  }

  /**
   * Renter.reservations
   */
  export type Renter$reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    cursor?: ReservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Renter.favorites
   */
  export type Renter$favoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    where?: CarWhereInput
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    cursor?: CarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Renter.applications
   */
  export type Renter$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    cursor?: ApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Renter without action
   */
  export type RenterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Renter
     */
    select?: RenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Renter
     */
    omit?: RenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenterInclude<ExtArgs> | null
  }


  /**
   * Model Reservation
   */

  export type AggregateReservation = {
    _count: ReservationCountAggregateOutputType | null
    _avg: ReservationAvgAggregateOutputType | null
    _sum: ReservationSumAggregateOutputType | null
    _min: ReservationMinAggregateOutputType | null
    _max: ReservationMaxAggregateOutputType | null
  }

  export type ReservationAvgAggregateOutputType = {
    id: number | null
    carId: number | null
    totalPrice: number | null
  }

  export type ReservationSumAggregateOutputType = {
    id: number | null
    carId: number | null
    totalPrice: number | null
  }

  export type ReservationMinAggregateOutputType = {
    id: number | null
    carId: number | null
    renterCognitoId: string | null
    startDate: Date | null
    endDate: Date | null
    totalPrice: number | null
    status: $Enums.ReservationStatus | null
    paymentStatus: $Enums.PaymentStatus | null
  }

  export type ReservationMaxAggregateOutputType = {
    id: number | null
    carId: number | null
    renterCognitoId: string | null
    startDate: Date | null
    endDate: Date | null
    totalPrice: number | null
    status: $Enums.ReservationStatus | null
    paymentStatus: $Enums.PaymentStatus | null
  }

  export type ReservationCountAggregateOutputType = {
    id: number
    carId: number
    renterCognitoId: number
    startDate: number
    endDate: number
    totalPrice: number
    status: number
    paymentStatus: number
    _all: number
  }


  export type ReservationAvgAggregateInputType = {
    id?: true
    carId?: true
    totalPrice?: true
  }

  export type ReservationSumAggregateInputType = {
    id?: true
    carId?: true
    totalPrice?: true
  }

  export type ReservationMinAggregateInputType = {
    id?: true
    carId?: true
    renterCognitoId?: true
    startDate?: true
    endDate?: true
    totalPrice?: true
    status?: true
    paymentStatus?: true
  }

  export type ReservationMaxAggregateInputType = {
    id?: true
    carId?: true
    renterCognitoId?: true
    startDate?: true
    endDate?: true
    totalPrice?: true
    status?: true
    paymentStatus?: true
  }

  export type ReservationCountAggregateInputType = {
    id?: true
    carId?: true
    renterCognitoId?: true
    startDate?: true
    endDate?: true
    totalPrice?: true
    status?: true
    paymentStatus?: true
    _all?: true
  }

  export type ReservationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservation to aggregate.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reservations
    **/
    _count?: true | ReservationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReservationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReservationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservationMaxAggregateInputType
  }

  export type GetReservationAggregateType<T extends ReservationAggregateArgs> = {
        [P in keyof T & keyof AggregateReservation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReservation[P]>
      : GetScalarType<T[P], AggregateReservation[P]>
  }




  export type ReservationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithAggregationInput | ReservationOrderByWithAggregationInput[]
    by: ReservationScalarFieldEnum[] | ReservationScalarFieldEnum
    having?: ReservationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservationCountAggregateInputType | true
    _avg?: ReservationAvgAggregateInputType
    _sum?: ReservationSumAggregateInputType
    _min?: ReservationMinAggregateInputType
    _max?: ReservationMaxAggregateInputType
  }

  export type ReservationGroupByOutputType = {
    id: number
    carId: number
    renterCognitoId: string
    startDate: Date
    endDate: Date
    totalPrice: number
    status: $Enums.ReservationStatus
    paymentStatus: $Enums.PaymentStatus
    _count: ReservationCountAggregateOutputType | null
    _avg: ReservationAvgAggregateOutputType | null
    _sum: ReservationSumAggregateOutputType | null
    _min: ReservationMinAggregateOutputType | null
    _max: ReservationMaxAggregateOutputType | null
  }

  type GetReservationGroupByPayload<T extends ReservationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservationGroupByOutputType[P]>
            : GetScalarType<T[P], ReservationGroupByOutputType[P]>
        }
      >
    >


  export type ReservationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carId?: boolean
    renterCognitoId?: boolean
    startDate?: boolean
    endDate?: boolean
    totalPrice?: boolean
    status?: boolean
    paymentStatus?: boolean
    car?: boolean | CarDefaultArgs<ExtArgs>
    renter?: boolean | RenterDefaultArgs<ExtArgs>
    payments?: boolean | Reservation$paymentsArgs<ExtArgs>
    _count?: boolean | ReservationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservation"]>

  export type ReservationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carId?: boolean
    renterCognitoId?: boolean
    startDate?: boolean
    endDate?: boolean
    totalPrice?: boolean
    status?: boolean
    paymentStatus?: boolean
    car?: boolean | CarDefaultArgs<ExtArgs>
    renter?: boolean | RenterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservation"]>

  export type ReservationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carId?: boolean
    renterCognitoId?: boolean
    startDate?: boolean
    endDate?: boolean
    totalPrice?: boolean
    status?: boolean
    paymentStatus?: boolean
    car?: boolean | CarDefaultArgs<ExtArgs>
    renter?: boolean | RenterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservation"]>

  export type ReservationSelectScalar = {
    id?: boolean
    carId?: boolean
    renterCognitoId?: boolean
    startDate?: boolean
    endDate?: boolean
    totalPrice?: boolean
    status?: boolean
    paymentStatus?: boolean
  }

  export type ReservationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "carId" | "renterCognitoId" | "startDate" | "endDate" | "totalPrice" | "status" | "paymentStatus", ExtArgs["result"]["reservation"]>
  export type ReservationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarDefaultArgs<ExtArgs>
    renter?: boolean | RenterDefaultArgs<ExtArgs>
    payments?: boolean | Reservation$paymentsArgs<ExtArgs>
    _count?: boolean | ReservationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReservationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarDefaultArgs<ExtArgs>
    renter?: boolean | RenterDefaultArgs<ExtArgs>
  }
  export type ReservationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarDefaultArgs<ExtArgs>
    renter?: boolean | RenterDefaultArgs<ExtArgs>
  }

  export type $ReservationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reservation"
    objects: {
      car: Prisma.$CarPayload<ExtArgs>
      renter: Prisma.$RenterPayload<ExtArgs>
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      carId: number
      renterCognitoId: string
      startDate: Date
      endDate: Date
      totalPrice: number
      status: $Enums.ReservationStatus
      paymentStatus: $Enums.PaymentStatus
    }, ExtArgs["result"]["reservation"]>
    composites: {}
  }

  type ReservationGetPayload<S extends boolean | null | undefined | ReservationDefaultArgs> = $Result.GetResult<Prisma.$ReservationPayload, S>

  type ReservationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReservationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReservationCountAggregateInputType | true
    }

  export interface ReservationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reservation'], meta: { name: 'Reservation' } }
    /**
     * Find zero or one Reservation that matches the filter.
     * @param {ReservationFindUniqueArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReservationFindUniqueArgs>(args: SelectSubset<T, ReservationFindUniqueArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reservation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReservationFindUniqueOrThrowArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReservationFindUniqueOrThrowArgs>(args: SelectSubset<T, ReservationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindFirstArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReservationFindFirstArgs>(args?: SelectSubset<T, ReservationFindFirstArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindFirstOrThrowArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReservationFindFirstOrThrowArgs>(args?: SelectSubset<T, ReservationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reservations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reservations
     * const reservations = await prisma.reservation.findMany()
     * 
     * // Get first 10 Reservations
     * const reservations = await prisma.reservation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reservationWithIdOnly = await prisma.reservation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReservationFindManyArgs>(args?: SelectSubset<T, ReservationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reservation.
     * @param {ReservationCreateArgs} args - Arguments to create a Reservation.
     * @example
     * // Create one Reservation
     * const Reservation = await prisma.reservation.create({
     *   data: {
     *     // ... data to create a Reservation
     *   }
     * })
     * 
     */
    create<T extends ReservationCreateArgs>(args: SelectSubset<T, ReservationCreateArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reservations.
     * @param {ReservationCreateManyArgs} args - Arguments to create many Reservations.
     * @example
     * // Create many Reservations
     * const reservation = await prisma.reservation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReservationCreateManyArgs>(args?: SelectSubset<T, ReservationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reservations and returns the data saved in the database.
     * @param {ReservationCreateManyAndReturnArgs} args - Arguments to create many Reservations.
     * @example
     * // Create many Reservations
     * const reservation = await prisma.reservation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reservations and only return the `id`
     * const reservationWithIdOnly = await prisma.reservation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReservationCreateManyAndReturnArgs>(args?: SelectSubset<T, ReservationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reservation.
     * @param {ReservationDeleteArgs} args - Arguments to delete one Reservation.
     * @example
     * // Delete one Reservation
     * const Reservation = await prisma.reservation.delete({
     *   where: {
     *     // ... filter to delete one Reservation
     *   }
     * })
     * 
     */
    delete<T extends ReservationDeleteArgs>(args: SelectSubset<T, ReservationDeleteArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reservation.
     * @param {ReservationUpdateArgs} args - Arguments to update one Reservation.
     * @example
     * // Update one Reservation
     * const reservation = await prisma.reservation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReservationUpdateArgs>(args: SelectSubset<T, ReservationUpdateArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reservations.
     * @param {ReservationDeleteManyArgs} args - Arguments to filter Reservations to delete.
     * @example
     * // Delete a few Reservations
     * const { count } = await prisma.reservation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReservationDeleteManyArgs>(args?: SelectSubset<T, ReservationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reservations
     * const reservation = await prisma.reservation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReservationUpdateManyArgs>(args: SelectSubset<T, ReservationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservations and returns the data updated in the database.
     * @param {ReservationUpdateManyAndReturnArgs} args - Arguments to update many Reservations.
     * @example
     * // Update many Reservations
     * const reservation = await prisma.reservation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reservations and only return the `id`
     * const reservationWithIdOnly = await prisma.reservation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReservationUpdateManyAndReturnArgs>(args: SelectSubset<T, ReservationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reservation.
     * @param {ReservationUpsertArgs} args - Arguments to update or create a Reservation.
     * @example
     * // Update or create a Reservation
     * const reservation = await prisma.reservation.upsert({
     *   create: {
     *     // ... data to create a Reservation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reservation we want to update
     *   }
     * })
     */
    upsert<T extends ReservationUpsertArgs>(args: SelectSubset<T, ReservationUpsertArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationCountArgs} args - Arguments to filter Reservations to count.
     * @example
     * // Count the number of Reservations
     * const count = await prisma.reservation.count({
     *   where: {
     *     // ... the filter for the Reservations we want to count
     *   }
     * })
    **/
    count<T extends ReservationCountArgs>(
      args?: Subset<T, ReservationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReservationAggregateArgs>(args: Subset<T, ReservationAggregateArgs>): Prisma.PrismaPromise<GetReservationAggregateType<T>>

    /**
     * Group by Reservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationGroupByArgs} args - Group by arguments.
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
      T extends ReservationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReservationGroupByArgs['orderBy'] }
        : { orderBy?: ReservationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReservationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reservation model
   */
  readonly fields: ReservationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reservation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReservationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    car<T extends CarDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarDefaultArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    renter<T extends RenterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RenterDefaultArgs<ExtArgs>>): Prisma__RenterClient<$Result.GetResult<Prisma.$RenterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payments<T extends Reservation$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Reservation$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Reservation model
   */
  interface ReservationFieldRefs {
    readonly id: FieldRef<"Reservation", 'Int'>
    readonly carId: FieldRef<"Reservation", 'Int'>
    readonly renterCognitoId: FieldRef<"Reservation", 'String'>
    readonly startDate: FieldRef<"Reservation", 'DateTime'>
    readonly endDate: FieldRef<"Reservation", 'DateTime'>
    readonly totalPrice: FieldRef<"Reservation", 'Float'>
    readonly status: FieldRef<"Reservation", 'ReservationStatus'>
    readonly paymentStatus: FieldRef<"Reservation", 'PaymentStatus'>
  }
    

  // Custom InputTypes
  /**
   * Reservation findUnique
   */
  export type ReservationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation findUniqueOrThrow
   */
  export type ReservationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation findFirst
   */
  export type ReservationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservations.
     */
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation findFirstOrThrow
   */
  export type ReservationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservations.
     */
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation findMany
   */
  export type ReservationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservations to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation create
   */
  export type ReservationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The data needed to create a Reservation.
     */
    data: XOR<ReservationCreateInput, ReservationUncheckedCreateInput>
  }

  /**
   * Reservation createMany
   */
  export type ReservationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reservations.
     */
    data: ReservationCreateManyInput | ReservationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reservation createManyAndReturn
   */
  export type ReservationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * The data used to create many Reservations.
     */
    data: ReservationCreateManyInput | ReservationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reservation update
   */
  export type ReservationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The data needed to update a Reservation.
     */
    data: XOR<ReservationUpdateInput, ReservationUncheckedUpdateInput>
    /**
     * Choose, which Reservation to update.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation updateMany
   */
  export type ReservationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reservations.
     */
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyInput>
    /**
     * Filter which Reservations to update
     */
    where?: ReservationWhereInput
    /**
     * Limit how many Reservations to update.
     */
    limit?: number
  }

  /**
   * Reservation updateManyAndReturn
   */
  export type ReservationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * The data used to update Reservations.
     */
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyInput>
    /**
     * Filter which Reservations to update
     */
    where?: ReservationWhereInput
    /**
     * Limit how many Reservations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reservation upsert
   */
  export type ReservationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The filter to search for the Reservation to update in case it exists.
     */
    where: ReservationWhereUniqueInput
    /**
     * In case the Reservation found by the `where` argument doesn't exist, create a new Reservation with this data.
     */
    create: XOR<ReservationCreateInput, ReservationUncheckedCreateInput>
    /**
     * In case the Reservation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReservationUpdateInput, ReservationUncheckedUpdateInput>
  }

  /**
   * Reservation delete
   */
  export type ReservationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter which Reservation to delete.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation deleteMany
   */
  export type ReservationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservations to delete
     */
    where?: ReservationWhereInput
    /**
     * Limit how many Reservations to delete.
     */
    limit?: number
  }

  /**
   * Reservation.payments
   */
  export type Reservation$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Reservation without action
   */
  export type ReservationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
  }


  /**
   * Model Application
   */

  export type AggregateApplication = {
    _count: ApplicationCountAggregateOutputType | null
    _avg: ApplicationAvgAggregateOutputType | null
    _sum: ApplicationSumAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  export type ApplicationAvgAggregateOutputType = {
    id: number | null
    carId: number | null
  }

  export type ApplicationSumAggregateOutputType = {
    id: number | null
    carId: number | null
  }

  export type ApplicationMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phoneNumber: string | null
    message: string | null
    carId: number | null
    renterCognitoId: string | null
  }

  export type ApplicationMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phoneNumber: string | null
    message: string | null
    carId: number | null
    renterCognitoId: string | null
  }

  export type ApplicationCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phoneNumber: number
    message: number
    carId: number
    renterCognitoId: number
    _all: number
  }


  export type ApplicationAvgAggregateInputType = {
    id?: true
    carId?: true
  }

  export type ApplicationSumAggregateInputType = {
    id?: true
    carId?: true
  }

  export type ApplicationMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phoneNumber?: true
    message?: true
    carId?: true
    renterCognitoId?: true
  }

  export type ApplicationMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phoneNumber?: true
    message?: true
    carId?: true
    renterCognitoId?: true
  }

  export type ApplicationCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phoneNumber?: true
    message?: true
    carId?: true
    renterCognitoId?: true
    _all?: true
  }

  export type ApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Application to aggregate.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Applications
    **/
    _count?: true | ApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApplicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApplicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicationMaxAggregateInputType
  }

  export type GetApplicationAggregateType<T extends ApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplication[P]>
      : GetScalarType<T[P], AggregateApplication[P]>
  }




  export type ApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithAggregationInput | ApplicationOrderByWithAggregationInput[]
    by: ApplicationScalarFieldEnum[] | ApplicationScalarFieldEnum
    having?: ApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicationCountAggregateInputType | true
    _avg?: ApplicationAvgAggregateInputType
    _sum?: ApplicationSumAggregateInputType
    _min?: ApplicationMinAggregateInputType
    _max?: ApplicationMaxAggregateInputType
  }

  export type ApplicationGroupByOutputType = {
    id: number
    name: string
    email: string
    phoneNumber: string
    message: string | null
    carId: number
    renterCognitoId: string
    _count: ApplicationCountAggregateOutputType | null
    _avg: ApplicationAvgAggregateOutputType | null
    _sum: ApplicationSumAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  type GetApplicationGroupByPayload<T extends ApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
        }
      >
    >


  export type ApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    message?: boolean
    carId?: boolean
    renterCognitoId?: boolean
    car?: boolean | CarDefaultArgs<ExtArgs>
    renter?: boolean | RenterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    message?: boolean
    carId?: boolean
    renterCognitoId?: boolean
    car?: boolean | CarDefaultArgs<ExtArgs>
    renter?: boolean | RenterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    message?: boolean
    carId?: boolean
    renterCognitoId?: boolean
    car?: boolean | CarDefaultArgs<ExtArgs>
    renter?: boolean | RenterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    message?: boolean
    carId?: boolean
    renterCognitoId?: boolean
  }

  export type ApplicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phoneNumber" | "message" | "carId" | "renterCognitoId", ExtArgs["result"]["application"]>
  export type ApplicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarDefaultArgs<ExtArgs>
    renter?: boolean | RenterDefaultArgs<ExtArgs>
  }
  export type ApplicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarDefaultArgs<ExtArgs>
    renter?: boolean | RenterDefaultArgs<ExtArgs>
  }
  export type ApplicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarDefaultArgs<ExtArgs>
    renter?: boolean | RenterDefaultArgs<ExtArgs>
  }

  export type $ApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Application"
    objects: {
      car: Prisma.$CarPayload<ExtArgs>
      renter: Prisma.$RenterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      phoneNumber: string
      message: string | null
      carId: number
      renterCognitoId: string
    }, ExtArgs["result"]["application"]>
    composites: {}
  }

  type ApplicationGetPayload<S extends boolean | null | undefined | ApplicationDefaultArgs> = $Result.GetResult<Prisma.$ApplicationPayload, S>

  type ApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApplicationCountAggregateInputType | true
    }

  export interface ApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Application'], meta: { name: 'Application' } }
    /**
     * Find zero or one Application that matches the filter.
     * @param {ApplicationFindUniqueArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApplicationFindUniqueArgs>(args: SelectSubset<T, ApplicationFindUniqueArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Application that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApplicationFindUniqueOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApplicationFindUniqueOrThrowArgs>(args: SelectSubset<T, ApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Application that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApplicationFindFirstArgs>(args?: SelectSubset<T, ApplicationFindFirstArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Application that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApplicationFindFirstOrThrowArgs>(args?: SelectSubset<T, ApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Applications
     * const applications = await prisma.application.findMany()
     * 
     * // Get first 10 Applications
     * const applications = await prisma.application.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applicationWithIdOnly = await prisma.application.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApplicationFindManyArgs>(args?: SelectSubset<T, ApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Application.
     * @param {ApplicationCreateArgs} args - Arguments to create a Application.
     * @example
     * // Create one Application
     * const Application = await prisma.application.create({
     *   data: {
     *     // ... data to create a Application
     *   }
     * })
     * 
     */
    create<T extends ApplicationCreateArgs>(args: SelectSubset<T, ApplicationCreateArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Applications.
     * @param {ApplicationCreateManyArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const application = await prisma.application.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApplicationCreateManyArgs>(args?: SelectSubset<T, ApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Applications and returns the data saved in the database.
     * @param {ApplicationCreateManyAndReturnArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const application = await prisma.application.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Applications and only return the `id`
     * const applicationWithIdOnly = await prisma.application.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApplicationCreateManyAndReturnArgs>(args?: SelectSubset<T, ApplicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Application.
     * @param {ApplicationDeleteArgs} args - Arguments to delete one Application.
     * @example
     * // Delete one Application
     * const Application = await prisma.application.delete({
     *   where: {
     *     // ... filter to delete one Application
     *   }
     * })
     * 
     */
    delete<T extends ApplicationDeleteArgs>(args: SelectSubset<T, ApplicationDeleteArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Application.
     * @param {ApplicationUpdateArgs} args - Arguments to update one Application.
     * @example
     * // Update one Application
     * const application = await prisma.application.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApplicationUpdateArgs>(args: SelectSubset<T, ApplicationUpdateArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Applications.
     * @param {ApplicationDeleteManyArgs} args - Arguments to filter Applications to delete.
     * @example
     * // Delete a few Applications
     * const { count } = await prisma.application.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApplicationDeleteManyArgs>(args?: SelectSubset<T, ApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApplicationUpdateManyArgs>(args: SelectSubset<T, ApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications and returns the data updated in the database.
     * @param {ApplicationUpdateManyAndReturnArgs} args - Arguments to update many Applications.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Applications and only return the `id`
     * const applicationWithIdOnly = await prisma.application.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApplicationUpdateManyAndReturnArgs>(args: SelectSubset<T, ApplicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Application.
     * @param {ApplicationUpsertArgs} args - Arguments to update or create a Application.
     * @example
     * // Update or create a Application
     * const application = await prisma.application.upsert({
     *   create: {
     *     // ... data to create a Application
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Application we want to update
     *   }
     * })
     */
    upsert<T extends ApplicationUpsertArgs>(args: SelectSubset<T, ApplicationUpsertArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationCountArgs} args - Arguments to filter Applications to count.
     * @example
     * // Count the number of Applications
     * const count = await prisma.application.count({
     *   where: {
     *     // ... the filter for the Applications we want to count
     *   }
     * })
    **/
    count<T extends ApplicationCountArgs>(
      args?: Subset<T, ApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApplicationAggregateArgs>(args: Subset<T, ApplicationAggregateArgs>): Prisma.PrismaPromise<GetApplicationAggregateType<T>>

    /**
     * Group by Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationGroupByArgs} args - Group by arguments.
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
      T extends ApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicationGroupByArgs['orderBy'] }
        : { orderBy?: ApplicationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Application model
   */
  readonly fields: ApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Application.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    car<T extends CarDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarDefaultArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    renter<T extends RenterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RenterDefaultArgs<ExtArgs>>): Prisma__RenterClient<$Result.GetResult<Prisma.$RenterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Application model
   */
  interface ApplicationFieldRefs {
    readonly id: FieldRef<"Application", 'Int'>
    readonly name: FieldRef<"Application", 'String'>
    readonly email: FieldRef<"Application", 'String'>
    readonly phoneNumber: FieldRef<"Application", 'String'>
    readonly message: FieldRef<"Application", 'String'>
    readonly carId: FieldRef<"Application", 'Int'>
    readonly renterCognitoId: FieldRef<"Application", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Application findUnique
   */
  export type ApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application findUniqueOrThrow
   */
  export type ApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application findFirst
   */
  export type ApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application findFirstOrThrow
   */
  export type ApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application findMany
   */
  export type ApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Applications to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application create
   */
  export type ApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The data needed to create a Application.
     */
    data: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
  }

  /**
   * Application createMany
   */
  export type ApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Applications.
     */
    data: ApplicationCreateManyInput | ApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Application createManyAndReturn
   */
  export type ApplicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * The data used to create many Applications.
     */
    data: ApplicationCreateManyInput | ApplicationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Application update
   */
  export type ApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The data needed to update a Application.
     */
    data: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
    /**
     * Choose, which Application to update.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application updateMany
   */
  export type ApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Applications.
     */
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyInput>
    /**
     * Filter which Applications to update
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to update.
     */
    limit?: number
  }

  /**
   * Application updateManyAndReturn
   */
  export type ApplicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * The data used to update Applications.
     */
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyInput>
    /**
     * Filter which Applications to update
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Application upsert
   */
  export type ApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The filter to search for the Application to update in case it exists.
     */
    where: ApplicationWhereUniqueInput
    /**
     * In case the Application found by the `where` argument doesn't exist, create a new Application with this data.
     */
    create: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
    /**
     * In case the Application was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
  }

  /**
   * Application delete
   */
  export type ApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter which Application to delete.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application deleteMany
   */
  export type ApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Applications to delete
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to delete.
     */
    limit?: number
  }

  /**
   * Application without action
   */
  export type ApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    id: number | null
    amountDue: number | null
    amountPaid: number | null
    reservationId: number | null
  }

  export type PaymentSumAggregateOutputType = {
    id: number | null
    amountDue: number | null
    amountPaid: number | null
    reservationId: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: number | null
    amountDue: number | null
    amountPaid: number | null
    dueDate: Date | null
    paymentDate: Date | null
    paymentStatus: $Enums.PaymentStatus | null
    reservationId: number | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: number | null
    amountDue: number | null
    amountPaid: number | null
    dueDate: Date | null
    paymentDate: Date | null
    paymentStatus: $Enums.PaymentStatus | null
    reservationId: number | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    amountDue: number
    amountPaid: number
    dueDate: number
    paymentDate: number
    paymentStatus: number
    reservationId: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    id?: true
    amountDue?: true
    amountPaid?: true
    reservationId?: true
  }

  export type PaymentSumAggregateInputType = {
    id?: true
    amountDue?: true
    amountPaid?: true
    reservationId?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    amountDue?: true
    amountPaid?: true
    dueDate?: true
    paymentDate?: true
    paymentStatus?: true
    reservationId?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    amountDue?: true
    amountPaid?: true
    dueDate?: true
    paymentDate?: true
    paymentStatus?: true
    reservationId?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    amountDue?: true
    amountPaid?: true
    dueDate?: true
    paymentDate?: true
    paymentStatus?: true
    reservationId?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: number
    amountDue: number
    amountPaid: number
    dueDate: Date
    paymentDate: Date | null
    paymentStatus: $Enums.PaymentStatus
    reservationId: number
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amountDue?: boolean
    amountPaid?: boolean
    dueDate?: boolean
    paymentDate?: boolean
    paymentStatus?: boolean
    reservationId?: boolean
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amountDue?: boolean
    amountPaid?: boolean
    dueDate?: boolean
    paymentDate?: boolean
    paymentStatus?: boolean
    reservationId?: boolean
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amountDue?: boolean
    amountPaid?: boolean
    dueDate?: boolean
    paymentDate?: boolean
    paymentStatus?: boolean
    reservationId?: boolean
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    amountDue?: boolean
    amountPaid?: boolean
    dueDate?: boolean
    paymentDate?: boolean
    paymentStatus?: boolean
    reservationId?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amountDue" | "amountPaid" | "dueDate" | "paymentDate" | "paymentStatus" | "reservationId", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      reservation: Prisma.$ReservationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      amountDue: number
      amountPaid: number
      dueDate: Date
      paymentDate: Date | null
      paymentStatus: $Enums.PaymentStatus
      reservationId: number
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservation<T extends ReservationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReservationDefaultArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'Int'>
    readonly amountDue: FieldRef<"Payment", 'Float'>
    readonly amountPaid: FieldRef<"Payment", 'Float'>
    readonly dueDate: FieldRef<"Payment", 'DateTime'>
    readonly paymentDate: FieldRef<"Payment", 'DateTime'>
    readonly paymentStatus: FieldRef<"Payment", 'PaymentStatus'>
    readonly reservationId: FieldRef<"Payment", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model Location
   */

  export type AggregateLocation = {
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  export type LocationAvgAggregateOutputType = {
    id: number | null
  }

  export type LocationSumAggregateOutputType = {
    id: number | null
  }

  export type LocationMinAggregateOutputType = {
    id: number | null
    address: string | null
    city: string | null
    state: string | null
    country: string | null
    postalCode: string | null
  }

  export type LocationMaxAggregateOutputType = {
    id: number | null
    address: string | null
    city: string | null
    state: string | null
    country: string | null
    postalCode: string | null
  }

  export type LocationCountAggregateOutputType = {
    id: number
    address: number
    city: number
    state: number
    country: number
    postalCode: number
    _all: number
  }


  export type LocationAvgAggregateInputType = {
    id?: true
  }

  export type LocationSumAggregateInputType = {
    id?: true
  }

  export type LocationMinAggregateInputType = {
    id?: true
    address?: true
    city?: true
    state?: true
    country?: true
    postalCode?: true
  }

  export type LocationMaxAggregateInputType = {
    id?: true
    address?: true
    city?: true
    state?: true
    country?: true
    postalCode?: true
  }

  export type LocationCountAggregateInputType = {
    id?: true
    address?: true
    city?: true
    state?: true
    country?: true
    postalCode?: true
    _all?: true
  }

  export type LocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Location to aggregate.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locations
    **/
    _count?: true | LocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationMaxAggregateInputType
  }

  export type GetLocationAggregateType<T extends LocationAggregateArgs> = {
        [P in keyof T & keyof AggregateLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocation[P]>
      : GetScalarType<T[P], AggregateLocation[P]>
  }




  export type LocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithAggregationInput | LocationOrderByWithAggregationInput[]
    by: LocationScalarFieldEnum[] | LocationScalarFieldEnum
    having?: LocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationCountAggregateInputType | true
    _avg?: LocationAvgAggregateInputType
    _sum?: LocationSumAggregateInputType
    _min?: LocationMinAggregateInputType
    _max?: LocationMaxAggregateInputType
  }

  export type LocationGroupByOutputType = {
    id: number
    address: string
    city: string
    state: string
    country: string
    postalCode: string
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  type GetLocationGroupByPayload<T extends LocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationGroupByOutputType[P]>
            : GetScalarType<T[P], LocationGroupByOutputType[P]>
        }
      >
    >


  export type LocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postalCode?: boolean
    cars?: boolean | Location$carsArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>


  export type LocationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postalCode?: boolean
  }, ExtArgs["result"]["location"]>

  export type LocationSelectScalar = {
    id?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postalCode?: boolean
  }

  export type LocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "address" | "city" | "state" | "country" | "postalCode", ExtArgs["result"]["location"]>
  export type LocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cars?: boolean | Location$carsArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LocationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Location"
    objects: {
      cars: Prisma.$CarPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      address: string
      city: string
      state: string
      country: string
      postalCode: string
    }, ExtArgs["result"]["location"]>
    composites: {}
  }

  type LocationGetPayload<S extends boolean | null | undefined | LocationDefaultArgs> = $Result.GetResult<Prisma.$LocationPayload, S>

  type LocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocationCountAggregateInputType | true
    }

  export interface LocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Location'], meta: { name: 'Location' } }
    /**
     * Find zero or one Location that matches the filter.
     * @param {LocationFindUniqueArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocationFindUniqueArgs>(args: SelectSubset<T, LocationFindUniqueArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Location that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocationFindUniqueOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocationFindUniqueOrThrowArgs>(args: SelectSubset<T, LocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocationFindFirstArgs>(args?: SelectSubset<T, LocationFindFirstArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocationFindFirstOrThrowArgs>(args?: SelectSubset<T, LocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.location.findMany()
     * 
     * // Get first 10 Locations
     * const locations = await prisma.location.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationWithIdOnly = await prisma.location.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocationFindManyArgs>(args?: SelectSubset<T, LocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Delete a Location.
     * @param {LocationDeleteArgs} args - Arguments to delete one Location.
     * @example
     * // Delete one Location
     * const Location = await prisma.location.delete({
     *   where: {
     *     // ... filter to delete one Location
     *   }
     * })
     * 
     */
    delete<T extends LocationDeleteArgs>(args: SelectSubset<T, LocationDeleteArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Location.
     * @param {LocationUpdateArgs} args - Arguments to update one Location.
     * @example
     * // Update one Location
     * const location = await prisma.location.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocationUpdateArgs>(args: SelectSubset<T, LocationUpdateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Locations.
     * @param {LocationDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.location.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocationDeleteManyArgs>(args?: SelectSubset<T, LocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocationUpdateManyArgs>(args: SelectSubset<T, LocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations and returns the data updated in the database.
     * @param {LocationUpdateManyAndReturnArgs} args - Arguments to update many Locations.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Locations and only return the `id`
     * const locationWithIdOnly = await prisma.location.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LocationUpdateManyAndReturnArgs>(args: SelectSubset<T, LocationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>


    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.location.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends LocationCountArgs>(
      args?: Subset<T, LocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LocationAggregateArgs>(args: Subset<T, LocationAggregateArgs>): Prisma.PrismaPromise<GetLocationAggregateType<T>>

    /**
     * Group by Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationGroupByArgs} args - Group by arguments.
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
      T extends LocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationGroupByArgs['orderBy'] }
        : { orderBy?: LocationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Location model
   */
  readonly fields: LocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Location.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cars<T extends Location$carsArgs<ExtArgs> = {}>(args?: Subset<T, Location$carsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Location model
   */
  interface LocationFieldRefs {
    readonly id: FieldRef<"Location", 'Int'>
    readonly address: FieldRef<"Location", 'String'>
    readonly city: FieldRef<"Location", 'String'>
    readonly state: FieldRef<"Location", 'String'>
    readonly country: FieldRef<"Location", 'String'>
    readonly postalCode: FieldRef<"Location", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Location findUnique
   */
  export type LocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findUniqueOrThrow
   */
  export type LocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findFirst
   */
  export type LocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findFirstOrThrow
   */
  export type LocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findMany
   */
  export type LocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location update
   */
  export type LocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to update a Location.
     */
    data: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
    /**
     * Choose, which Location to update.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location updateMany
   */
  export type LocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Location updateManyAndReturn
   */
  export type LocationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Location delete
   */
  export type LocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter which Location to delete.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location deleteMany
   */
  export type LocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locations to delete
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to delete.
     */
    limit?: number
  }

  /**
   * Location.cars
   */
  export type Location$carsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    where?: CarWhereInput
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    cursor?: CarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Location without action
   */
  export type LocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
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


  export const CarScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    pricePerDay: 'pricePerDay',
    availableFrom: 'availableFrom',
    availableTo: 'availableTo',
    carType: 'carType',
    carFeatures: 'carFeatures',
    imageUrls: 'imageUrls',
    locationId: 'locationId',
    rating: 'rating',
    numberOfReviews: 'numberOfReviews',
    managerCognitoId: 'managerCognitoId'
  };

  export type CarScalarFieldEnum = (typeof CarScalarFieldEnum)[keyof typeof CarScalarFieldEnum]


  export const ManagerScalarFieldEnum: {
    id: 'id',
    cognitoId: 'cognitoId',
    name: 'name',
    email: 'email',
    phoneNumber: 'phoneNumber'
  };

  export type ManagerScalarFieldEnum = (typeof ManagerScalarFieldEnum)[keyof typeof ManagerScalarFieldEnum]


  export const RenterScalarFieldEnum: {
    id: 'id',
    cognitoId: 'cognitoId',
    name: 'name',
    email: 'email',
    phoneNumber: 'phoneNumber'
  };

  export type RenterScalarFieldEnum = (typeof RenterScalarFieldEnum)[keyof typeof RenterScalarFieldEnum]


  export const ReservationScalarFieldEnum: {
    id: 'id',
    carId: 'carId',
    renterCognitoId: 'renterCognitoId',
    startDate: 'startDate',
    endDate: 'endDate',
    totalPrice: 'totalPrice',
    status: 'status',
    paymentStatus: 'paymentStatus'
  };

  export type ReservationScalarFieldEnum = (typeof ReservationScalarFieldEnum)[keyof typeof ReservationScalarFieldEnum]


  export const ApplicationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phoneNumber: 'phoneNumber',
    message: 'message',
    carId: 'carId',
    renterCognitoId: 'renterCognitoId'
  };

  export type ApplicationScalarFieldEnum = (typeof ApplicationScalarFieldEnum)[keyof typeof ApplicationScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    amountDue: 'amountDue',
    amountPaid: 'amountPaid',
    dueDate: 'dueDate',
    paymentDate: 'paymentDate',
    paymentStatus: 'paymentStatus',
    reservationId: 'reservationId'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const LocationScalarFieldEnum: {
    id: 'id',
    address: 'address',
    city: 'city',
    state: 'state',
    country: 'country',
    postalCode: 'postalCode'
  };

  export type LocationScalarFieldEnum = (typeof LocationScalarFieldEnum)[keyof typeof LocationScalarFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'CarType'
   */
  export type EnumCarTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CarType'>
    


  /**
   * Reference to a field of type 'CarType[]'
   */
  export type ListEnumCarTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CarType[]'>
    


  /**
   * Reference to a field of type 'CarFeature[]'
   */
  export type ListEnumCarFeatureFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CarFeature[]'>
    


  /**
   * Reference to a field of type 'CarFeature'
   */
  export type EnumCarFeatureFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CarFeature'>
    


  /**
   * Reference to a field of type 'ReservationStatus'
   */
  export type EnumReservationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReservationStatus'>
    


  /**
   * Reference to a field of type 'ReservationStatus[]'
   */
  export type ListEnumReservationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReservationStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type CarWhereInput = {
    AND?: CarWhereInput | CarWhereInput[]
    OR?: CarWhereInput[]
    NOT?: CarWhereInput | CarWhereInput[]
    id?: IntFilter<"Car"> | number
    name?: StringFilter<"Car"> | string
    description?: StringFilter<"Car"> | string
    pricePerDay?: FloatFilter<"Car"> | number
    availableFrom?: DateTimeFilter<"Car"> | Date | string
    availableTo?: DateTimeFilter<"Car"> | Date | string
    carType?: EnumCarTypeFilter<"Car"> | $Enums.CarType
    carFeatures?: EnumCarFeatureNullableListFilter<"Car">
    imageUrls?: StringNullableListFilter<"Car">
    locationId?: IntFilter<"Car"> | number
    rating?: FloatNullableFilter<"Car"> | number | null
    numberOfReviews?: IntNullableFilter<"Car"> | number | null
    managerCognitoId?: StringFilter<"Car"> | string
    manager?: XOR<ManagerScalarRelationFilter, ManagerWhereInput>
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
    reservations?: ReservationListRelationFilter
    applications?: ApplicationListRelationFilter
    favoritedBy?: RenterListRelationFilter
  }

  export type CarOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    pricePerDay?: SortOrder
    availableFrom?: SortOrder
    availableTo?: SortOrder
    carType?: SortOrder
    carFeatures?: SortOrder
    imageUrls?: SortOrder
    locationId?: SortOrder
    rating?: SortOrderInput | SortOrder
    numberOfReviews?: SortOrderInput | SortOrder
    managerCognitoId?: SortOrder
    manager?: ManagerOrderByWithRelationInput
    location?: LocationOrderByWithRelationInput
    reservations?: ReservationOrderByRelationAggregateInput
    applications?: ApplicationOrderByRelationAggregateInput
    favoritedBy?: RenterOrderByRelationAggregateInput
  }

  export type CarWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CarWhereInput | CarWhereInput[]
    OR?: CarWhereInput[]
    NOT?: CarWhereInput | CarWhereInput[]
    name?: StringFilter<"Car"> | string
    description?: StringFilter<"Car"> | string
    pricePerDay?: FloatFilter<"Car"> | number
    availableFrom?: DateTimeFilter<"Car"> | Date | string
    availableTo?: DateTimeFilter<"Car"> | Date | string
    carType?: EnumCarTypeFilter<"Car"> | $Enums.CarType
    carFeatures?: EnumCarFeatureNullableListFilter<"Car">
    imageUrls?: StringNullableListFilter<"Car">
    locationId?: IntFilter<"Car"> | number
    rating?: FloatNullableFilter<"Car"> | number | null
    numberOfReviews?: IntNullableFilter<"Car"> | number | null
    managerCognitoId?: StringFilter<"Car"> | string
    manager?: XOR<ManagerScalarRelationFilter, ManagerWhereInput>
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
    reservations?: ReservationListRelationFilter
    applications?: ApplicationListRelationFilter
    favoritedBy?: RenterListRelationFilter
  }, "id">

  export type CarOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    pricePerDay?: SortOrder
    availableFrom?: SortOrder
    availableTo?: SortOrder
    carType?: SortOrder
    carFeatures?: SortOrder
    imageUrls?: SortOrder
    locationId?: SortOrder
    rating?: SortOrderInput | SortOrder
    numberOfReviews?: SortOrderInput | SortOrder
    managerCognitoId?: SortOrder
    _count?: CarCountOrderByAggregateInput
    _avg?: CarAvgOrderByAggregateInput
    _max?: CarMaxOrderByAggregateInput
    _min?: CarMinOrderByAggregateInput
    _sum?: CarSumOrderByAggregateInput
  }

  export type CarScalarWhereWithAggregatesInput = {
    AND?: CarScalarWhereWithAggregatesInput | CarScalarWhereWithAggregatesInput[]
    OR?: CarScalarWhereWithAggregatesInput[]
    NOT?: CarScalarWhereWithAggregatesInput | CarScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Car"> | number
    name?: StringWithAggregatesFilter<"Car"> | string
    description?: StringWithAggregatesFilter<"Car"> | string
    pricePerDay?: FloatWithAggregatesFilter<"Car"> | number
    availableFrom?: DateTimeWithAggregatesFilter<"Car"> | Date | string
    availableTo?: DateTimeWithAggregatesFilter<"Car"> | Date | string
    carType?: EnumCarTypeWithAggregatesFilter<"Car"> | $Enums.CarType
    carFeatures?: EnumCarFeatureNullableListFilter<"Car">
    imageUrls?: StringNullableListFilter<"Car">
    locationId?: IntWithAggregatesFilter<"Car"> | number
    rating?: FloatNullableWithAggregatesFilter<"Car"> | number | null
    numberOfReviews?: IntNullableWithAggregatesFilter<"Car"> | number | null
    managerCognitoId?: StringWithAggregatesFilter<"Car"> | string
  }

  export type ManagerWhereInput = {
    AND?: ManagerWhereInput | ManagerWhereInput[]
    OR?: ManagerWhereInput[]
    NOT?: ManagerWhereInput | ManagerWhereInput[]
    id?: IntFilter<"Manager"> | number
    cognitoId?: StringFilter<"Manager"> | string
    name?: StringFilter<"Manager"> | string
    email?: StringFilter<"Manager"> | string
    phoneNumber?: StringFilter<"Manager"> | string
    cars?: CarListRelationFilter
  }

  export type ManagerOrderByWithRelationInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    cars?: CarOrderByRelationAggregateInput
  }

  export type ManagerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cognitoId?: string
    AND?: ManagerWhereInput | ManagerWhereInput[]
    OR?: ManagerWhereInput[]
    NOT?: ManagerWhereInput | ManagerWhereInput[]
    name?: StringFilter<"Manager"> | string
    email?: StringFilter<"Manager"> | string
    phoneNumber?: StringFilter<"Manager"> | string
    cars?: CarListRelationFilter
  }, "id" | "cognitoId">

  export type ManagerOrderByWithAggregationInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    _count?: ManagerCountOrderByAggregateInput
    _avg?: ManagerAvgOrderByAggregateInput
    _max?: ManagerMaxOrderByAggregateInput
    _min?: ManagerMinOrderByAggregateInput
    _sum?: ManagerSumOrderByAggregateInput
  }

  export type ManagerScalarWhereWithAggregatesInput = {
    AND?: ManagerScalarWhereWithAggregatesInput | ManagerScalarWhereWithAggregatesInput[]
    OR?: ManagerScalarWhereWithAggregatesInput[]
    NOT?: ManagerScalarWhereWithAggregatesInput | ManagerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Manager"> | number
    cognitoId?: StringWithAggregatesFilter<"Manager"> | string
    name?: StringWithAggregatesFilter<"Manager"> | string
    email?: StringWithAggregatesFilter<"Manager"> | string
    phoneNumber?: StringWithAggregatesFilter<"Manager"> | string
  }

  export type RenterWhereInput = {
    AND?: RenterWhereInput | RenterWhereInput[]
    OR?: RenterWhereInput[]
    NOT?: RenterWhereInput | RenterWhereInput[]
    id?: IntFilter<"Renter"> | number
    cognitoId?: StringFilter<"Renter"> | string
    name?: StringFilter<"Renter"> | string
    email?: StringFilter<"Renter"> | string
    phoneNumber?: StringFilter<"Renter"> | string
    reservations?: ReservationListRelationFilter
    favorites?: CarListRelationFilter
    applications?: ApplicationListRelationFilter
  }

  export type RenterOrderByWithRelationInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    reservations?: ReservationOrderByRelationAggregateInput
    favorites?: CarOrderByRelationAggregateInput
    applications?: ApplicationOrderByRelationAggregateInput
  }

  export type RenterWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cognitoId?: string
    AND?: RenterWhereInput | RenterWhereInput[]
    OR?: RenterWhereInput[]
    NOT?: RenterWhereInput | RenterWhereInput[]
    name?: StringFilter<"Renter"> | string
    email?: StringFilter<"Renter"> | string
    phoneNumber?: StringFilter<"Renter"> | string
    reservations?: ReservationListRelationFilter
    favorites?: CarListRelationFilter
    applications?: ApplicationListRelationFilter
  }, "id" | "cognitoId">

  export type RenterOrderByWithAggregationInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    _count?: RenterCountOrderByAggregateInput
    _avg?: RenterAvgOrderByAggregateInput
    _max?: RenterMaxOrderByAggregateInput
    _min?: RenterMinOrderByAggregateInput
    _sum?: RenterSumOrderByAggregateInput
  }

  export type RenterScalarWhereWithAggregatesInput = {
    AND?: RenterScalarWhereWithAggregatesInput | RenterScalarWhereWithAggregatesInput[]
    OR?: RenterScalarWhereWithAggregatesInput[]
    NOT?: RenterScalarWhereWithAggregatesInput | RenterScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Renter"> | number
    cognitoId?: StringWithAggregatesFilter<"Renter"> | string
    name?: StringWithAggregatesFilter<"Renter"> | string
    email?: StringWithAggregatesFilter<"Renter"> | string
    phoneNumber?: StringWithAggregatesFilter<"Renter"> | string
  }

  export type ReservationWhereInput = {
    AND?: ReservationWhereInput | ReservationWhereInput[]
    OR?: ReservationWhereInput[]
    NOT?: ReservationWhereInput | ReservationWhereInput[]
    id?: IntFilter<"Reservation"> | number
    carId?: IntFilter<"Reservation"> | number
    renterCognitoId?: StringFilter<"Reservation"> | string
    startDate?: DateTimeFilter<"Reservation"> | Date | string
    endDate?: DateTimeFilter<"Reservation"> | Date | string
    totalPrice?: FloatFilter<"Reservation"> | number
    status?: EnumReservationStatusFilter<"Reservation"> | $Enums.ReservationStatus
    paymentStatus?: EnumPaymentStatusFilter<"Reservation"> | $Enums.PaymentStatus
    car?: XOR<CarScalarRelationFilter, CarWhereInput>
    renter?: XOR<RenterScalarRelationFilter, RenterWhereInput>
    payments?: PaymentListRelationFilter
  }

  export type ReservationOrderByWithRelationInput = {
    id?: SortOrder
    carId?: SortOrder
    renterCognitoId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    car?: CarOrderByWithRelationInput
    renter?: RenterOrderByWithRelationInput
    payments?: PaymentOrderByRelationAggregateInput
  }

  export type ReservationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReservationWhereInput | ReservationWhereInput[]
    OR?: ReservationWhereInput[]
    NOT?: ReservationWhereInput | ReservationWhereInput[]
    carId?: IntFilter<"Reservation"> | number
    renterCognitoId?: StringFilter<"Reservation"> | string
    startDate?: DateTimeFilter<"Reservation"> | Date | string
    endDate?: DateTimeFilter<"Reservation"> | Date | string
    totalPrice?: FloatFilter<"Reservation"> | number
    status?: EnumReservationStatusFilter<"Reservation"> | $Enums.ReservationStatus
    paymentStatus?: EnumPaymentStatusFilter<"Reservation"> | $Enums.PaymentStatus
    car?: XOR<CarScalarRelationFilter, CarWhereInput>
    renter?: XOR<RenterScalarRelationFilter, RenterWhereInput>
    payments?: PaymentListRelationFilter
  }, "id">

  export type ReservationOrderByWithAggregationInput = {
    id?: SortOrder
    carId?: SortOrder
    renterCognitoId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    _count?: ReservationCountOrderByAggregateInput
    _avg?: ReservationAvgOrderByAggregateInput
    _max?: ReservationMaxOrderByAggregateInput
    _min?: ReservationMinOrderByAggregateInput
    _sum?: ReservationSumOrderByAggregateInput
  }

  export type ReservationScalarWhereWithAggregatesInput = {
    AND?: ReservationScalarWhereWithAggregatesInput | ReservationScalarWhereWithAggregatesInput[]
    OR?: ReservationScalarWhereWithAggregatesInput[]
    NOT?: ReservationScalarWhereWithAggregatesInput | ReservationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Reservation"> | number
    carId?: IntWithAggregatesFilter<"Reservation"> | number
    renterCognitoId?: StringWithAggregatesFilter<"Reservation"> | string
    startDate?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
    totalPrice?: FloatWithAggregatesFilter<"Reservation"> | number
    status?: EnumReservationStatusWithAggregatesFilter<"Reservation"> | $Enums.ReservationStatus
    paymentStatus?: EnumPaymentStatusWithAggregatesFilter<"Reservation"> | $Enums.PaymentStatus
  }

  export type ApplicationWhereInput = {
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    id?: IntFilter<"Application"> | number
    name?: StringFilter<"Application"> | string
    email?: StringFilter<"Application"> | string
    phoneNumber?: StringFilter<"Application"> | string
    message?: StringNullableFilter<"Application"> | string | null
    carId?: IntFilter<"Application"> | number
    renterCognitoId?: StringFilter<"Application"> | string
    car?: XOR<CarScalarRelationFilter, CarWhereInput>
    renter?: XOR<RenterScalarRelationFilter, RenterWhereInput>
  }

  export type ApplicationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    message?: SortOrderInput | SortOrder
    carId?: SortOrder
    renterCognitoId?: SortOrder
    car?: CarOrderByWithRelationInput
    renter?: RenterOrderByWithRelationInput
  }

  export type ApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    name?: StringFilter<"Application"> | string
    email?: StringFilter<"Application"> | string
    phoneNumber?: StringFilter<"Application"> | string
    message?: StringNullableFilter<"Application"> | string | null
    carId?: IntFilter<"Application"> | number
    renterCognitoId?: StringFilter<"Application"> | string
    car?: XOR<CarScalarRelationFilter, CarWhereInput>
    renter?: XOR<RenterScalarRelationFilter, RenterWhereInput>
  }, "id">

  export type ApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    message?: SortOrderInput | SortOrder
    carId?: SortOrder
    renterCognitoId?: SortOrder
    _count?: ApplicationCountOrderByAggregateInput
    _avg?: ApplicationAvgOrderByAggregateInput
    _max?: ApplicationMaxOrderByAggregateInput
    _min?: ApplicationMinOrderByAggregateInput
    _sum?: ApplicationSumOrderByAggregateInput
  }

  export type ApplicationScalarWhereWithAggregatesInput = {
    AND?: ApplicationScalarWhereWithAggregatesInput | ApplicationScalarWhereWithAggregatesInput[]
    OR?: ApplicationScalarWhereWithAggregatesInput[]
    NOT?: ApplicationScalarWhereWithAggregatesInput | ApplicationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Application"> | number
    name?: StringWithAggregatesFilter<"Application"> | string
    email?: StringWithAggregatesFilter<"Application"> | string
    phoneNumber?: StringWithAggregatesFilter<"Application"> | string
    message?: StringNullableWithAggregatesFilter<"Application"> | string | null
    carId?: IntWithAggregatesFilter<"Application"> | number
    renterCognitoId?: StringWithAggregatesFilter<"Application"> | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: IntFilter<"Payment"> | number
    amountDue?: FloatFilter<"Payment"> | number
    amountPaid?: FloatFilter<"Payment"> | number
    dueDate?: DateTimeFilter<"Payment"> | Date | string
    paymentDate?: DateTimeNullableFilter<"Payment"> | Date | string | null
    paymentStatus?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    reservationId?: IntFilter<"Payment"> | number
    reservation?: XOR<ReservationScalarRelationFilter, ReservationWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    amountDue?: SortOrder
    amountPaid?: SortOrder
    dueDate?: SortOrder
    paymentDate?: SortOrderInput | SortOrder
    paymentStatus?: SortOrder
    reservationId?: SortOrder
    reservation?: ReservationOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    amountDue?: FloatFilter<"Payment"> | number
    amountPaid?: FloatFilter<"Payment"> | number
    dueDate?: DateTimeFilter<"Payment"> | Date | string
    paymentDate?: DateTimeNullableFilter<"Payment"> | Date | string | null
    paymentStatus?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    reservationId?: IntFilter<"Payment"> | number
    reservation?: XOR<ReservationScalarRelationFilter, ReservationWhereInput>
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    amountDue?: SortOrder
    amountPaid?: SortOrder
    dueDate?: SortOrder
    paymentDate?: SortOrderInput | SortOrder
    paymentStatus?: SortOrder
    reservationId?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Payment"> | number
    amountDue?: FloatWithAggregatesFilter<"Payment"> | number
    amountPaid?: FloatWithAggregatesFilter<"Payment"> | number
    dueDate?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    paymentDate?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
    paymentStatus?: EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus
    reservationId?: IntWithAggregatesFilter<"Payment"> | number
  }

  export type LocationWhereInput = {
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    id?: IntFilter<"Location"> | number
    address?: StringFilter<"Location"> | string
    city?: StringFilter<"Location"> | string
    state?: StringFilter<"Location"> | string
    country?: StringFilter<"Location"> | string
    postalCode?: StringFilter<"Location"> | string
    cars?: CarListRelationFilter
  }

  export type LocationOrderByWithRelationInput = {
    id?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
    cars?: CarOrderByRelationAggregateInput
  }

  export type LocationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    address?: StringFilter<"Location"> | string
    city?: StringFilter<"Location"> | string
    state?: StringFilter<"Location"> | string
    country?: StringFilter<"Location"> | string
    postalCode?: StringFilter<"Location"> | string
    cars?: CarListRelationFilter
  }, "id">

  export type LocationOrderByWithAggregationInput = {
    id?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
    _count?: LocationCountOrderByAggregateInput
    _avg?: LocationAvgOrderByAggregateInput
    _max?: LocationMaxOrderByAggregateInput
    _min?: LocationMinOrderByAggregateInput
    _sum?: LocationSumOrderByAggregateInput
  }

  export type LocationScalarWhereWithAggregatesInput = {
    AND?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    OR?: LocationScalarWhereWithAggregatesInput[]
    NOT?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Location"> | number
    address?: StringWithAggregatesFilter<"Location"> | string
    city?: StringWithAggregatesFilter<"Location"> | string
    state?: StringWithAggregatesFilter<"Location"> | string
    country?: StringWithAggregatesFilter<"Location"> | string
    postalCode?: StringWithAggregatesFilter<"Location"> | string
  }

  export type CarCreateInput = {
    name: string
    description: string
    pricePerDay: number
    availableFrom: Date | string
    availableTo: Date | string
    carType: $Enums.CarType
    carFeatures?: CarCreatecarFeaturesInput | $Enums.CarFeature[]
    imageUrls?: CarCreateimageUrlsInput | string[]
    rating?: number | null
    numberOfReviews?: number | null
    manager: ManagerCreateNestedOneWithoutCarsInput
    location: LocationCreateNestedOneWithoutCarsInput
    reservations?: ReservationCreateNestedManyWithoutCarInput
    applications?: ApplicationCreateNestedManyWithoutCarInput
    favoritedBy?: RenterCreateNestedManyWithoutFavoritesInput
  }

  export type CarUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    pricePerDay: number
    availableFrom: Date | string
    availableTo: Date | string
    carType: $Enums.CarType
    carFeatures?: CarCreatecarFeaturesInput | $Enums.CarFeature[]
    imageUrls?: CarCreateimageUrlsInput | string[]
    locationId: number
    rating?: number | null
    numberOfReviews?: number | null
    managerCognitoId: string
    reservations?: ReservationUncheckedCreateNestedManyWithoutCarInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutCarInput
    favoritedBy?: RenterUncheckedCreateNestedManyWithoutFavoritesInput
  }

  export type CarUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricePerDay?: FloatFieldUpdateOperationsInput | number
    availableFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    availableTo?: DateTimeFieldUpdateOperationsInput | Date | string
    carType?: EnumCarTypeFieldUpdateOperationsInput | $Enums.CarType
    carFeatures?: CarUpdatecarFeaturesInput | $Enums.CarFeature[]
    imageUrls?: CarUpdateimageUrlsInput | string[]
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    manager?: ManagerUpdateOneRequiredWithoutCarsNestedInput
    location?: LocationUpdateOneRequiredWithoutCarsNestedInput
    reservations?: ReservationUpdateManyWithoutCarNestedInput
    applications?: ApplicationUpdateManyWithoutCarNestedInput
    favoritedBy?: RenterUpdateManyWithoutFavoritesNestedInput
  }

  export type CarUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricePerDay?: FloatFieldUpdateOperationsInput | number
    availableFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    availableTo?: DateTimeFieldUpdateOperationsInput | Date | string
    carType?: EnumCarTypeFieldUpdateOperationsInput | $Enums.CarType
    carFeatures?: CarUpdatecarFeaturesInput | $Enums.CarFeature[]
    imageUrls?: CarUpdateimageUrlsInput | string[]
    locationId?: IntFieldUpdateOperationsInput | number
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    managerCognitoId?: StringFieldUpdateOperationsInput | string
    reservations?: ReservationUncheckedUpdateManyWithoutCarNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutCarNestedInput
    favoritedBy?: RenterUncheckedUpdateManyWithoutFavoritesNestedInput
  }

  export type CarCreateManyInput = {
    id?: number
    name: string
    description: string
    pricePerDay: number
    availableFrom: Date | string
    availableTo: Date | string
    carType: $Enums.CarType
    carFeatures?: CarCreatecarFeaturesInput | $Enums.CarFeature[]
    imageUrls?: CarCreateimageUrlsInput | string[]
    locationId: number
    rating?: number | null
    numberOfReviews?: number | null
    managerCognitoId: string
  }

  export type CarUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricePerDay?: FloatFieldUpdateOperationsInput | number
    availableFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    availableTo?: DateTimeFieldUpdateOperationsInput | Date | string
    carType?: EnumCarTypeFieldUpdateOperationsInput | $Enums.CarType
    carFeatures?: CarUpdatecarFeaturesInput | $Enums.CarFeature[]
    imageUrls?: CarUpdateimageUrlsInput | string[]
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CarUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricePerDay?: FloatFieldUpdateOperationsInput | number
    availableFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    availableTo?: DateTimeFieldUpdateOperationsInput | Date | string
    carType?: EnumCarTypeFieldUpdateOperationsInput | $Enums.CarType
    carFeatures?: CarUpdatecarFeaturesInput | $Enums.CarFeature[]
    imageUrls?: CarUpdateimageUrlsInput | string[]
    locationId?: IntFieldUpdateOperationsInput | number
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    managerCognitoId?: StringFieldUpdateOperationsInput | string
  }

  export type ManagerCreateInput = {
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    cars?: CarCreateNestedManyWithoutManagerInput
  }

  export type ManagerUncheckedCreateInput = {
    id?: number
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    cars?: CarUncheckedCreateNestedManyWithoutManagerInput
  }

  export type ManagerUpdateInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    cars?: CarUpdateManyWithoutManagerNestedInput
  }

  export type ManagerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    cars?: CarUncheckedUpdateManyWithoutManagerNestedInput
  }

  export type ManagerCreateManyInput = {
    id?: number
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
  }

  export type ManagerUpdateManyMutationInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
  }

  export type ManagerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
  }

  export type RenterCreateInput = {
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    reservations?: ReservationCreateNestedManyWithoutRenterInput
    favorites?: CarCreateNestedManyWithoutFavoritedByInput
    applications?: ApplicationCreateNestedManyWithoutRenterInput
  }

  export type RenterUncheckedCreateInput = {
    id?: number
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    reservations?: ReservationUncheckedCreateNestedManyWithoutRenterInput
    favorites?: CarUncheckedCreateNestedManyWithoutFavoritedByInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutRenterInput
  }

  export type RenterUpdateInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    reservations?: ReservationUpdateManyWithoutRenterNestedInput
    favorites?: CarUpdateManyWithoutFavoritedByNestedInput
    applications?: ApplicationUpdateManyWithoutRenterNestedInput
  }

  export type RenterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    reservations?: ReservationUncheckedUpdateManyWithoutRenterNestedInput
    favorites?: CarUncheckedUpdateManyWithoutFavoritedByNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutRenterNestedInput
  }

  export type RenterCreateManyInput = {
    id?: number
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
  }

  export type RenterUpdateManyMutationInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
  }

  export type RenterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
  }

  export type ReservationCreateInput = {
    startDate: Date | string
    endDate: Date | string
    totalPrice: number
    status: $Enums.ReservationStatus
    paymentStatus?: $Enums.PaymentStatus
    car: CarCreateNestedOneWithoutReservationsInput
    renter: RenterCreateNestedOneWithoutReservationsInput
    payments?: PaymentCreateNestedManyWithoutReservationInput
  }

  export type ReservationUncheckedCreateInput = {
    id?: number
    carId: number
    renterCognitoId: string
    startDate: Date | string
    endDate: Date | string
    totalPrice: number
    status: $Enums.ReservationStatus
    paymentStatus?: $Enums.PaymentStatus
    payments?: PaymentUncheckedCreateNestedManyWithoutReservationInput
  }

  export type ReservationUpdateInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    car?: CarUpdateOneRequiredWithoutReservationsNestedInput
    renter?: RenterUpdateOneRequiredWithoutReservationsNestedInput
    payments?: PaymentUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    renterCognitoId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payments?: PaymentUncheckedUpdateManyWithoutReservationNestedInput
  }

  export type ReservationCreateManyInput = {
    id?: number
    carId: number
    renterCognitoId: string
    startDate: Date | string
    endDate: Date | string
    totalPrice: number
    status: $Enums.ReservationStatus
    paymentStatus?: $Enums.PaymentStatus
  }

  export type ReservationUpdateManyMutationInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
  }

  export type ReservationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    renterCognitoId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
  }

  export type ApplicationCreateInput = {
    name: string
    email: string
    phoneNumber: string
    message?: string | null
    car: CarCreateNestedOneWithoutApplicationsInput
    renter: RenterCreateNestedOneWithoutApplicationsInput
  }

  export type ApplicationUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    phoneNumber: string
    message?: string | null
    carId: number
    renterCognitoId: string
  }

  export type ApplicationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    car?: CarUpdateOneRequiredWithoutApplicationsNestedInput
    renter?: RenterUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type ApplicationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    carId?: IntFieldUpdateOperationsInput | number
    renterCognitoId?: StringFieldUpdateOperationsInput | string
  }

  export type ApplicationCreateManyInput = {
    id?: number
    name: string
    email: string
    phoneNumber: string
    message?: string | null
    carId: number
    renterCognitoId: string
  }

  export type ApplicationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ApplicationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    carId?: IntFieldUpdateOperationsInput | number
    renterCognitoId?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentCreateInput = {
    amountDue: number
    amountPaid: number
    dueDate: Date | string
    paymentDate?: Date | string | null
    paymentStatus: $Enums.PaymentStatus
    reservation: ReservationCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: number
    amountDue: number
    amountPaid: number
    dueDate: Date | string
    paymentDate?: Date | string | null
    paymentStatus: $Enums.PaymentStatus
    reservationId: number
  }

  export type PaymentUpdateInput = {
    amountDue?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    reservation?: ReservationUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    amountDue?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    reservationId?: IntFieldUpdateOperationsInput | number
  }

  export type PaymentCreateManyInput = {
    id?: number
    amountDue: number
    amountPaid: number
    dueDate: Date | string
    paymentDate?: Date | string | null
    paymentStatus: $Enums.PaymentStatus
    reservationId: number
  }

  export type PaymentUpdateManyMutationInput = {
    amountDue?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    amountDue?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    reservationId?: IntFieldUpdateOperationsInput | number
  }

  export type LocationUpdateInput = {
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    cars?: CarUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    cars?: CarUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type LocationUpdateManyMutationInput = {
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
  }

  export type LocationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type EnumCarTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CarType | EnumCarTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CarType[] | ListEnumCarTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CarType[] | ListEnumCarTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCarTypeFilter<$PrismaModel> | $Enums.CarType
  }

  export type EnumCarFeatureNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.CarFeature[] | ListEnumCarFeatureFieldRefInput<$PrismaModel> | null
    has?: $Enums.CarFeature | EnumCarFeatureFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.CarFeature[] | ListEnumCarFeatureFieldRefInput<$PrismaModel>
    hasSome?: $Enums.CarFeature[] | ListEnumCarFeatureFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type ManagerScalarRelationFilter = {
    is?: ManagerWhereInput
    isNot?: ManagerWhereInput
  }

  export type LocationScalarRelationFilter = {
    is?: LocationWhereInput
    isNot?: LocationWhereInput
  }

  export type ReservationListRelationFilter = {
    every?: ReservationWhereInput
    some?: ReservationWhereInput
    none?: ReservationWhereInput
  }

  export type ApplicationListRelationFilter = {
    every?: ApplicationWhereInput
    some?: ApplicationWhereInput
    none?: ApplicationWhereInput
  }

  export type RenterListRelationFilter = {
    every?: RenterWhereInput
    some?: RenterWhereInput
    none?: RenterWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ReservationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApplicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RenterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CarCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    pricePerDay?: SortOrder
    availableFrom?: SortOrder
    availableTo?: SortOrder
    carType?: SortOrder
    carFeatures?: SortOrder
    imageUrls?: SortOrder
    locationId?: SortOrder
    rating?: SortOrder
    numberOfReviews?: SortOrder
    managerCognitoId?: SortOrder
  }

  export type CarAvgOrderByAggregateInput = {
    id?: SortOrder
    pricePerDay?: SortOrder
    locationId?: SortOrder
    rating?: SortOrder
    numberOfReviews?: SortOrder
  }

  export type CarMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    pricePerDay?: SortOrder
    availableFrom?: SortOrder
    availableTo?: SortOrder
    carType?: SortOrder
    locationId?: SortOrder
    rating?: SortOrder
    numberOfReviews?: SortOrder
    managerCognitoId?: SortOrder
  }

  export type CarMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    pricePerDay?: SortOrder
    availableFrom?: SortOrder
    availableTo?: SortOrder
    carType?: SortOrder
    locationId?: SortOrder
    rating?: SortOrder
    numberOfReviews?: SortOrder
    managerCognitoId?: SortOrder
  }

  export type CarSumOrderByAggregateInput = {
    id?: SortOrder
    pricePerDay?: SortOrder
    locationId?: SortOrder
    rating?: SortOrder
    numberOfReviews?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type EnumCarTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CarType | EnumCarTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CarType[] | ListEnumCarTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CarType[] | ListEnumCarTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCarTypeWithAggregatesFilter<$PrismaModel> | $Enums.CarType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCarTypeFilter<$PrismaModel>
    _max?: NestedEnumCarTypeFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type CarListRelationFilter = {
    every?: CarWhereInput
    some?: CarWhereInput
    none?: CarWhereInput
  }

  export type CarOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ManagerCountOrderByAggregateInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
  }

  export type ManagerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ManagerMaxOrderByAggregateInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
  }

  export type ManagerMinOrderByAggregateInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
  }

  export type ManagerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RenterCountOrderByAggregateInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
  }

  export type RenterAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RenterMaxOrderByAggregateInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
  }

  export type RenterMinOrderByAggregateInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
  }

  export type RenterSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumReservationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReservationStatusFilter<$PrismaModel> | $Enums.ReservationStatus
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type CarScalarRelationFilter = {
    is?: CarWhereInput
    isNot?: CarWhereInput
  }

  export type RenterScalarRelationFilter = {
    is?: RenterWhereInput
    isNot?: RenterWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReservationCountOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    renterCognitoId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
  }

  export type ReservationAvgOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    totalPrice?: SortOrder
  }

  export type ReservationMaxOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    renterCognitoId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
  }

  export type ReservationMinOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    renterCognitoId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
  }

  export type ReservationSumOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    totalPrice?: SortOrder
  }

  export type EnumReservationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReservationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReservationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReservationStatusFilter<$PrismaModel>
    _max?: NestedEnumReservationStatusFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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

  export type ApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    message?: SortOrder
    carId?: SortOrder
    renterCognitoId?: SortOrder
  }

  export type ApplicationAvgOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
  }

  export type ApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    message?: SortOrder
    carId?: SortOrder
    renterCognitoId?: SortOrder
  }

  export type ApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    message?: SortOrder
    carId?: SortOrder
    renterCognitoId?: SortOrder
  }

  export type ApplicationSumOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ReservationScalarRelationFilter = {
    is?: ReservationWhereInput
    isNot?: ReservationWhereInput
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    amountDue?: SortOrder
    amountPaid?: SortOrder
    dueDate?: SortOrder
    paymentDate?: SortOrder
    paymentStatus?: SortOrder
    reservationId?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    id?: SortOrder
    amountDue?: SortOrder
    amountPaid?: SortOrder
    reservationId?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    amountDue?: SortOrder
    amountPaid?: SortOrder
    dueDate?: SortOrder
    paymentDate?: SortOrder
    paymentStatus?: SortOrder
    reservationId?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    amountDue?: SortOrder
    amountPaid?: SortOrder
    dueDate?: SortOrder
    paymentDate?: SortOrder
    paymentStatus?: SortOrder
    reservationId?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    id?: SortOrder
    amountDue?: SortOrder
    amountPaid?: SortOrder
    reservationId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type LocationCountOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
  }

  export type LocationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LocationMaxOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
  }

  export type LocationMinOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
  }

  export type LocationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CarCreatecarFeaturesInput = {
    set: $Enums.CarFeature[]
  }

  export type CarCreateimageUrlsInput = {
    set: string[]
  }

  export type ManagerCreateNestedOneWithoutCarsInput = {
    create?: XOR<ManagerCreateWithoutCarsInput, ManagerUncheckedCreateWithoutCarsInput>
    connectOrCreate?: ManagerCreateOrConnectWithoutCarsInput
    connect?: ManagerWhereUniqueInput
  }

  export type LocationCreateNestedOneWithoutCarsInput = {
    connect?: LocationWhereUniqueInput
  }

  export type ReservationCreateNestedManyWithoutCarInput = {
    create?: XOR<ReservationCreateWithoutCarInput, ReservationUncheckedCreateWithoutCarInput> | ReservationCreateWithoutCarInput[] | ReservationUncheckedCreateWithoutCarInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutCarInput | ReservationCreateOrConnectWithoutCarInput[]
    createMany?: ReservationCreateManyCarInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type ApplicationCreateNestedManyWithoutCarInput = {
    create?: XOR<ApplicationCreateWithoutCarInput, ApplicationUncheckedCreateWithoutCarInput> | ApplicationCreateWithoutCarInput[] | ApplicationUncheckedCreateWithoutCarInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutCarInput | ApplicationCreateOrConnectWithoutCarInput[]
    createMany?: ApplicationCreateManyCarInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type RenterCreateNestedManyWithoutFavoritesInput = {
    create?: XOR<RenterCreateWithoutFavoritesInput, RenterUncheckedCreateWithoutFavoritesInput> | RenterCreateWithoutFavoritesInput[] | RenterUncheckedCreateWithoutFavoritesInput[]
    connectOrCreate?: RenterCreateOrConnectWithoutFavoritesInput | RenterCreateOrConnectWithoutFavoritesInput[]
    connect?: RenterWhereUniqueInput | RenterWhereUniqueInput[]
  }

  export type ReservationUncheckedCreateNestedManyWithoutCarInput = {
    create?: XOR<ReservationCreateWithoutCarInput, ReservationUncheckedCreateWithoutCarInput> | ReservationCreateWithoutCarInput[] | ReservationUncheckedCreateWithoutCarInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutCarInput | ReservationCreateOrConnectWithoutCarInput[]
    createMany?: ReservationCreateManyCarInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type ApplicationUncheckedCreateNestedManyWithoutCarInput = {
    create?: XOR<ApplicationCreateWithoutCarInput, ApplicationUncheckedCreateWithoutCarInput> | ApplicationCreateWithoutCarInput[] | ApplicationUncheckedCreateWithoutCarInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutCarInput | ApplicationCreateOrConnectWithoutCarInput[]
    createMany?: ApplicationCreateManyCarInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type RenterUncheckedCreateNestedManyWithoutFavoritesInput = {
    create?: XOR<RenterCreateWithoutFavoritesInput, RenterUncheckedCreateWithoutFavoritesInput> | RenterCreateWithoutFavoritesInput[] | RenterUncheckedCreateWithoutFavoritesInput[]
    connectOrCreate?: RenterCreateOrConnectWithoutFavoritesInput | RenterCreateOrConnectWithoutFavoritesInput[]
    connect?: RenterWhereUniqueInput | RenterWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumCarTypeFieldUpdateOperationsInput = {
    set?: $Enums.CarType
  }

  export type CarUpdatecarFeaturesInput = {
    set?: $Enums.CarFeature[]
    push?: $Enums.CarFeature | $Enums.CarFeature[]
  }

  export type CarUpdateimageUrlsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ManagerUpdateOneRequiredWithoutCarsNestedInput = {
    create?: XOR<ManagerCreateWithoutCarsInput, ManagerUncheckedCreateWithoutCarsInput>
    connectOrCreate?: ManagerCreateOrConnectWithoutCarsInput
    upsert?: ManagerUpsertWithoutCarsInput
    connect?: ManagerWhereUniqueInput
    update?: XOR<XOR<ManagerUpdateToOneWithWhereWithoutCarsInput, ManagerUpdateWithoutCarsInput>, ManagerUncheckedUpdateWithoutCarsInput>
  }

  export type LocationUpdateOneRequiredWithoutCarsNestedInput = {
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutCarsInput, LocationUpdateWithoutCarsInput>, LocationUncheckedUpdateWithoutCarsInput>
  }

  export type ReservationUpdateManyWithoutCarNestedInput = {
    create?: XOR<ReservationCreateWithoutCarInput, ReservationUncheckedCreateWithoutCarInput> | ReservationCreateWithoutCarInput[] | ReservationUncheckedCreateWithoutCarInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutCarInput | ReservationCreateOrConnectWithoutCarInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutCarInput | ReservationUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: ReservationCreateManyCarInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutCarInput | ReservationUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutCarInput | ReservationUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type ApplicationUpdateManyWithoutCarNestedInput = {
    create?: XOR<ApplicationCreateWithoutCarInput, ApplicationUncheckedCreateWithoutCarInput> | ApplicationCreateWithoutCarInput[] | ApplicationUncheckedCreateWithoutCarInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutCarInput | ApplicationCreateOrConnectWithoutCarInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutCarInput | ApplicationUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: ApplicationCreateManyCarInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutCarInput | ApplicationUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutCarInput | ApplicationUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type RenterUpdateManyWithoutFavoritesNestedInput = {
    create?: XOR<RenterCreateWithoutFavoritesInput, RenterUncheckedCreateWithoutFavoritesInput> | RenterCreateWithoutFavoritesInput[] | RenterUncheckedCreateWithoutFavoritesInput[]
    connectOrCreate?: RenterCreateOrConnectWithoutFavoritesInput | RenterCreateOrConnectWithoutFavoritesInput[]
    upsert?: RenterUpsertWithWhereUniqueWithoutFavoritesInput | RenterUpsertWithWhereUniqueWithoutFavoritesInput[]
    set?: RenterWhereUniqueInput | RenterWhereUniqueInput[]
    disconnect?: RenterWhereUniqueInput | RenterWhereUniqueInput[]
    delete?: RenterWhereUniqueInput | RenterWhereUniqueInput[]
    connect?: RenterWhereUniqueInput | RenterWhereUniqueInput[]
    update?: RenterUpdateWithWhereUniqueWithoutFavoritesInput | RenterUpdateWithWhereUniqueWithoutFavoritesInput[]
    updateMany?: RenterUpdateManyWithWhereWithoutFavoritesInput | RenterUpdateManyWithWhereWithoutFavoritesInput[]
    deleteMany?: RenterScalarWhereInput | RenterScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ReservationUncheckedUpdateManyWithoutCarNestedInput = {
    create?: XOR<ReservationCreateWithoutCarInput, ReservationUncheckedCreateWithoutCarInput> | ReservationCreateWithoutCarInput[] | ReservationUncheckedCreateWithoutCarInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutCarInput | ReservationCreateOrConnectWithoutCarInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutCarInput | ReservationUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: ReservationCreateManyCarInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutCarInput | ReservationUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutCarInput | ReservationUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type ApplicationUncheckedUpdateManyWithoutCarNestedInput = {
    create?: XOR<ApplicationCreateWithoutCarInput, ApplicationUncheckedCreateWithoutCarInput> | ApplicationCreateWithoutCarInput[] | ApplicationUncheckedCreateWithoutCarInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutCarInput | ApplicationCreateOrConnectWithoutCarInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutCarInput | ApplicationUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: ApplicationCreateManyCarInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutCarInput | ApplicationUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutCarInput | ApplicationUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type RenterUncheckedUpdateManyWithoutFavoritesNestedInput = {
    create?: XOR<RenterCreateWithoutFavoritesInput, RenterUncheckedCreateWithoutFavoritesInput> | RenterCreateWithoutFavoritesInput[] | RenterUncheckedCreateWithoutFavoritesInput[]
    connectOrCreate?: RenterCreateOrConnectWithoutFavoritesInput | RenterCreateOrConnectWithoutFavoritesInput[]
    upsert?: RenterUpsertWithWhereUniqueWithoutFavoritesInput | RenterUpsertWithWhereUniqueWithoutFavoritesInput[]
    set?: RenterWhereUniqueInput | RenterWhereUniqueInput[]
    disconnect?: RenterWhereUniqueInput | RenterWhereUniqueInput[]
    delete?: RenterWhereUniqueInput | RenterWhereUniqueInput[]
    connect?: RenterWhereUniqueInput | RenterWhereUniqueInput[]
    update?: RenterUpdateWithWhereUniqueWithoutFavoritesInput | RenterUpdateWithWhereUniqueWithoutFavoritesInput[]
    updateMany?: RenterUpdateManyWithWhereWithoutFavoritesInput | RenterUpdateManyWithWhereWithoutFavoritesInput[]
    deleteMany?: RenterScalarWhereInput | RenterScalarWhereInput[]
  }

  export type CarCreateNestedManyWithoutManagerInput = {
    create?: XOR<CarCreateWithoutManagerInput, CarUncheckedCreateWithoutManagerInput> | CarCreateWithoutManagerInput[] | CarUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: CarCreateOrConnectWithoutManagerInput | CarCreateOrConnectWithoutManagerInput[]
    createMany?: CarCreateManyManagerInputEnvelope
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
  }

  export type CarUncheckedCreateNestedManyWithoutManagerInput = {
    create?: XOR<CarCreateWithoutManagerInput, CarUncheckedCreateWithoutManagerInput> | CarCreateWithoutManagerInput[] | CarUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: CarCreateOrConnectWithoutManagerInput | CarCreateOrConnectWithoutManagerInput[]
    createMany?: CarCreateManyManagerInputEnvelope
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
  }

  export type CarUpdateManyWithoutManagerNestedInput = {
    create?: XOR<CarCreateWithoutManagerInput, CarUncheckedCreateWithoutManagerInput> | CarCreateWithoutManagerInput[] | CarUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: CarCreateOrConnectWithoutManagerInput | CarCreateOrConnectWithoutManagerInput[]
    upsert?: CarUpsertWithWhereUniqueWithoutManagerInput | CarUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: CarCreateManyManagerInputEnvelope
    set?: CarWhereUniqueInput | CarWhereUniqueInput[]
    disconnect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    delete?: CarWhereUniqueInput | CarWhereUniqueInput[]
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    update?: CarUpdateWithWhereUniqueWithoutManagerInput | CarUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: CarUpdateManyWithWhereWithoutManagerInput | CarUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: CarScalarWhereInput | CarScalarWhereInput[]
  }

  export type CarUncheckedUpdateManyWithoutManagerNestedInput = {
    create?: XOR<CarCreateWithoutManagerInput, CarUncheckedCreateWithoutManagerInput> | CarCreateWithoutManagerInput[] | CarUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: CarCreateOrConnectWithoutManagerInput | CarCreateOrConnectWithoutManagerInput[]
    upsert?: CarUpsertWithWhereUniqueWithoutManagerInput | CarUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: CarCreateManyManagerInputEnvelope
    set?: CarWhereUniqueInput | CarWhereUniqueInput[]
    disconnect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    delete?: CarWhereUniqueInput | CarWhereUniqueInput[]
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    update?: CarUpdateWithWhereUniqueWithoutManagerInput | CarUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: CarUpdateManyWithWhereWithoutManagerInput | CarUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: CarScalarWhereInput | CarScalarWhereInput[]
  }

  export type ReservationCreateNestedManyWithoutRenterInput = {
    create?: XOR<ReservationCreateWithoutRenterInput, ReservationUncheckedCreateWithoutRenterInput> | ReservationCreateWithoutRenterInput[] | ReservationUncheckedCreateWithoutRenterInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutRenterInput | ReservationCreateOrConnectWithoutRenterInput[]
    createMany?: ReservationCreateManyRenterInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type CarCreateNestedManyWithoutFavoritedByInput = {
    create?: XOR<CarCreateWithoutFavoritedByInput, CarUncheckedCreateWithoutFavoritedByInput> | CarCreateWithoutFavoritedByInput[] | CarUncheckedCreateWithoutFavoritedByInput[]
    connectOrCreate?: CarCreateOrConnectWithoutFavoritedByInput | CarCreateOrConnectWithoutFavoritedByInput[]
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
  }

  export type ApplicationCreateNestedManyWithoutRenterInput = {
    create?: XOR<ApplicationCreateWithoutRenterInput, ApplicationUncheckedCreateWithoutRenterInput> | ApplicationCreateWithoutRenterInput[] | ApplicationUncheckedCreateWithoutRenterInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutRenterInput | ApplicationCreateOrConnectWithoutRenterInput[]
    createMany?: ApplicationCreateManyRenterInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type ReservationUncheckedCreateNestedManyWithoutRenterInput = {
    create?: XOR<ReservationCreateWithoutRenterInput, ReservationUncheckedCreateWithoutRenterInput> | ReservationCreateWithoutRenterInput[] | ReservationUncheckedCreateWithoutRenterInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutRenterInput | ReservationCreateOrConnectWithoutRenterInput[]
    createMany?: ReservationCreateManyRenterInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type CarUncheckedCreateNestedManyWithoutFavoritedByInput = {
    create?: XOR<CarCreateWithoutFavoritedByInput, CarUncheckedCreateWithoutFavoritedByInput> | CarCreateWithoutFavoritedByInput[] | CarUncheckedCreateWithoutFavoritedByInput[]
    connectOrCreate?: CarCreateOrConnectWithoutFavoritedByInput | CarCreateOrConnectWithoutFavoritedByInput[]
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
  }

  export type ApplicationUncheckedCreateNestedManyWithoutRenterInput = {
    create?: XOR<ApplicationCreateWithoutRenterInput, ApplicationUncheckedCreateWithoutRenterInput> | ApplicationCreateWithoutRenterInput[] | ApplicationUncheckedCreateWithoutRenterInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutRenterInput | ApplicationCreateOrConnectWithoutRenterInput[]
    createMany?: ApplicationCreateManyRenterInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type ReservationUpdateManyWithoutRenterNestedInput = {
    create?: XOR<ReservationCreateWithoutRenterInput, ReservationUncheckedCreateWithoutRenterInput> | ReservationCreateWithoutRenterInput[] | ReservationUncheckedCreateWithoutRenterInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutRenterInput | ReservationCreateOrConnectWithoutRenterInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutRenterInput | ReservationUpsertWithWhereUniqueWithoutRenterInput[]
    createMany?: ReservationCreateManyRenterInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutRenterInput | ReservationUpdateWithWhereUniqueWithoutRenterInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutRenterInput | ReservationUpdateManyWithWhereWithoutRenterInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type CarUpdateManyWithoutFavoritedByNestedInput = {
    create?: XOR<CarCreateWithoutFavoritedByInput, CarUncheckedCreateWithoutFavoritedByInput> | CarCreateWithoutFavoritedByInput[] | CarUncheckedCreateWithoutFavoritedByInput[]
    connectOrCreate?: CarCreateOrConnectWithoutFavoritedByInput | CarCreateOrConnectWithoutFavoritedByInput[]
    upsert?: CarUpsertWithWhereUniqueWithoutFavoritedByInput | CarUpsertWithWhereUniqueWithoutFavoritedByInput[]
    set?: CarWhereUniqueInput | CarWhereUniqueInput[]
    disconnect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    delete?: CarWhereUniqueInput | CarWhereUniqueInput[]
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    update?: CarUpdateWithWhereUniqueWithoutFavoritedByInput | CarUpdateWithWhereUniqueWithoutFavoritedByInput[]
    updateMany?: CarUpdateManyWithWhereWithoutFavoritedByInput | CarUpdateManyWithWhereWithoutFavoritedByInput[]
    deleteMany?: CarScalarWhereInput | CarScalarWhereInput[]
  }

  export type ApplicationUpdateManyWithoutRenterNestedInput = {
    create?: XOR<ApplicationCreateWithoutRenterInput, ApplicationUncheckedCreateWithoutRenterInput> | ApplicationCreateWithoutRenterInput[] | ApplicationUncheckedCreateWithoutRenterInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutRenterInput | ApplicationCreateOrConnectWithoutRenterInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutRenterInput | ApplicationUpsertWithWhereUniqueWithoutRenterInput[]
    createMany?: ApplicationCreateManyRenterInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutRenterInput | ApplicationUpdateWithWhereUniqueWithoutRenterInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutRenterInput | ApplicationUpdateManyWithWhereWithoutRenterInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type ReservationUncheckedUpdateManyWithoutRenterNestedInput = {
    create?: XOR<ReservationCreateWithoutRenterInput, ReservationUncheckedCreateWithoutRenterInput> | ReservationCreateWithoutRenterInput[] | ReservationUncheckedCreateWithoutRenterInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutRenterInput | ReservationCreateOrConnectWithoutRenterInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutRenterInput | ReservationUpsertWithWhereUniqueWithoutRenterInput[]
    createMany?: ReservationCreateManyRenterInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutRenterInput | ReservationUpdateWithWhereUniqueWithoutRenterInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutRenterInput | ReservationUpdateManyWithWhereWithoutRenterInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type CarUncheckedUpdateManyWithoutFavoritedByNestedInput = {
    create?: XOR<CarCreateWithoutFavoritedByInput, CarUncheckedCreateWithoutFavoritedByInput> | CarCreateWithoutFavoritedByInput[] | CarUncheckedCreateWithoutFavoritedByInput[]
    connectOrCreate?: CarCreateOrConnectWithoutFavoritedByInput | CarCreateOrConnectWithoutFavoritedByInput[]
    upsert?: CarUpsertWithWhereUniqueWithoutFavoritedByInput | CarUpsertWithWhereUniqueWithoutFavoritedByInput[]
    set?: CarWhereUniqueInput | CarWhereUniqueInput[]
    disconnect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    delete?: CarWhereUniqueInput | CarWhereUniqueInput[]
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    update?: CarUpdateWithWhereUniqueWithoutFavoritedByInput | CarUpdateWithWhereUniqueWithoutFavoritedByInput[]
    updateMany?: CarUpdateManyWithWhereWithoutFavoritedByInput | CarUpdateManyWithWhereWithoutFavoritedByInput[]
    deleteMany?: CarScalarWhereInput | CarScalarWhereInput[]
  }

  export type ApplicationUncheckedUpdateManyWithoutRenterNestedInput = {
    create?: XOR<ApplicationCreateWithoutRenterInput, ApplicationUncheckedCreateWithoutRenterInput> | ApplicationCreateWithoutRenterInput[] | ApplicationUncheckedCreateWithoutRenterInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutRenterInput | ApplicationCreateOrConnectWithoutRenterInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutRenterInput | ApplicationUpsertWithWhereUniqueWithoutRenterInput[]
    createMany?: ApplicationCreateManyRenterInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutRenterInput | ApplicationUpdateWithWhereUniqueWithoutRenterInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutRenterInput | ApplicationUpdateManyWithWhereWithoutRenterInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type CarCreateNestedOneWithoutReservationsInput = {
    create?: XOR<CarCreateWithoutReservationsInput, CarUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: CarCreateOrConnectWithoutReservationsInput
    connect?: CarWhereUniqueInput
  }

  export type RenterCreateNestedOneWithoutReservationsInput = {
    create?: XOR<RenterCreateWithoutReservationsInput, RenterUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: RenterCreateOrConnectWithoutReservationsInput
    connect?: RenterWhereUniqueInput
  }

  export type PaymentCreateNestedManyWithoutReservationInput = {
    create?: XOR<PaymentCreateWithoutReservationInput, PaymentUncheckedCreateWithoutReservationInput> | PaymentCreateWithoutReservationInput[] | PaymentUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutReservationInput | PaymentCreateOrConnectWithoutReservationInput[]
    createMany?: PaymentCreateManyReservationInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutReservationInput = {
    create?: XOR<PaymentCreateWithoutReservationInput, PaymentUncheckedCreateWithoutReservationInput> | PaymentCreateWithoutReservationInput[] | PaymentUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutReservationInput | PaymentCreateOrConnectWithoutReservationInput[]
    createMany?: PaymentCreateManyReservationInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type EnumReservationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ReservationStatus
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type CarUpdateOneRequiredWithoutReservationsNestedInput = {
    create?: XOR<CarCreateWithoutReservationsInput, CarUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: CarCreateOrConnectWithoutReservationsInput
    upsert?: CarUpsertWithoutReservationsInput
    connect?: CarWhereUniqueInput
    update?: XOR<XOR<CarUpdateToOneWithWhereWithoutReservationsInput, CarUpdateWithoutReservationsInput>, CarUncheckedUpdateWithoutReservationsInput>
  }

  export type RenterUpdateOneRequiredWithoutReservationsNestedInput = {
    create?: XOR<RenterCreateWithoutReservationsInput, RenterUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: RenterCreateOrConnectWithoutReservationsInput
    upsert?: RenterUpsertWithoutReservationsInput
    connect?: RenterWhereUniqueInput
    update?: XOR<XOR<RenterUpdateToOneWithWhereWithoutReservationsInput, RenterUpdateWithoutReservationsInput>, RenterUncheckedUpdateWithoutReservationsInput>
  }

  export type PaymentUpdateManyWithoutReservationNestedInput = {
    create?: XOR<PaymentCreateWithoutReservationInput, PaymentUncheckedCreateWithoutReservationInput> | PaymentCreateWithoutReservationInput[] | PaymentUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutReservationInput | PaymentCreateOrConnectWithoutReservationInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutReservationInput | PaymentUpsertWithWhereUniqueWithoutReservationInput[]
    createMany?: PaymentCreateManyReservationInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutReservationInput | PaymentUpdateWithWhereUniqueWithoutReservationInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutReservationInput | PaymentUpdateManyWithWhereWithoutReservationInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutReservationNestedInput = {
    create?: XOR<PaymentCreateWithoutReservationInput, PaymentUncheckedCreateWithoutReservationInput> | PaymentCreateWithoutReservationInput[] | PaymentUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutReservationInput | PaymentCreateOrConnectWithoutReservationInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutReservationInput | PaymentUpsertWithWhereUniqueWithoutReservationInput[]
    createMany?: PaymentCreateManyReservationInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutReservationInput | PaymentUpdateWithWhereUniqueWithoutReservationInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutReservationInput | PaymentUpdateManyWithWhereWithoutReservationInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type CarCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<CarCreateWithoutApplicationsInput, CarUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: CarCreateOrConnectWithoutApplicationsInput
    connect?: CarWhereUniqueInput
  }

  export type RenterCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<RenterCreateWithoutApplicationsInput, RenterUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: RenterCreateOrConnectWithoutApplicationsInput
    connect?: RenterWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CarUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<CarCreateWithoutApplicationsInput, CarUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: CarCreateOrConnectWithoutApplicationsInput
    upsert?: CarUpsertWithoutApplicationsInput
    connect?: CarWhereUniqueInput
    update?: XOR<XOR<CarUpdateToOneWithWhereWithoutApplicationsInput, CarUpdateWithoutApplicationsInput>, CarUncheckedUpdateWithoutApplicationsInput>
  }

  export type RenterUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<RenterCreateWithoutApplicationsInput, RenterUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: RenterCreateOrConnectWithoutApplicationsInput
    upsert?: RenterUpsertWithoutApplicationsInput
    connect?: RenterWhereUniqueInput
    update?: XOR<XOR<RenterUpdateToOneWithWhereWithoutApplicationsInput, RenterUpdateWithoutApplicationsInput>, RenterUncheckedUpdateWithoutApplicationsInput>
  }

  export type ReservationCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<ReservationCreateWithoutPaymentsInput, ReservationUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: ReservationCreateOrConnectWithoutPaymentsInput
    connect?: ReservationWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ReservationUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<ReservationCreateWithoutPaymentsInput, ReservationUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: ReservationCreateOrConnectWithoutPaymentsInput
    upsert?: ReservationUpsertWithoutPaymentsInput
    connect?: ReservationWhereUniqueInput
    update?: XOR<XOR<ReservationUpdateToOneWithWhereWithoutPaymentsInput, ReservationUpdateWithoutPaymentsInput>, ReservationUncheckedUpdateWithoutPaymentsInput>
  }

  export type CarUpdateManyWithoutLocationNestedInput = {
    create?: XOR<CarCreateWithoutLocationInput, CarUncheckedCreateWithoutLocationInput> | CarCreateWithoutLocationInput[] | CarUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: CarCreateOrConnectWithoutLocationInput | CarCreateOrConnectWithoutLocationInput[]
    upsert?: CarUpsertWithWhereUniqueWithoutLocationInput | CarUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: CarCreateManyLocationInputEnvelope
    set?: CarWhereUniqueInput | CarWhereUniqueInput[]
    disconnect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    delete?: CarWhereUniqueInput | CarWhereUniqueInput[]
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    update?: CarUpdateWithWhereUniqueWithoutLocationInput | CarUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: CarUpdateManyWithWhereWithoutLocationInput | CarUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: CarScalarWhereInput | CarScalarWhereInput[]
  }

  export type CarUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<CarCreateWithoutLocationInput, CarUncheckedCreateWithoutLocationInput> | CarCreateWithoutLocationInput[] | CarUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: CarCreateOrConnectWithoutLocationInput | CarCreateOrConnectWithoutLocationInput[]
    upsert?: CarUpsertWithWhereUniqueWithoutLocationInput | CarUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: CarCreateManyLocationInputEnvelope
    set?: CarWhereUniqueInput | CarWhereUniqueInput[]
    disconnect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    delete?: CarWhereUniqueInput | CarWhereUniqueInput[]
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    update?: CarUpdateWithWhereUniqueWithoutLocationInput | CarUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: CarUpdateManyWithWhereWithoutLocationInput | CarUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: CarScalarWhereInput | CarScalarWhereInput[]
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

  export type NestedEnumCarTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CarType | EnumCarTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CarType[] | ListEnumCarTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CarType[] | ListEnumCarTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCarTypeFilter<$PrismaModel> | $Enums.CarType
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type NestedEnumCarTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CarType | EnumCarTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CarType[] | ListEnumCarTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CarType[] | ListEnumCarTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCarTypeWithAggregatesFilter<$PrismaModel> | $Enums.CarType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCarTypeFilter<$PrismaModel>
    _max?: NestedEnumCarTypeFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type NestedEnumReservationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReservationStatusFilter<$PrismaModel> | $Enums.ReservationStatus
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumReservationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReservationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReservationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReservationStatusFilter<$PrismaModel>
    _max?: NestedEnumReservationStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ManagerCreateWithoutCarsInput = {
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
  }

  export type ManagerUncheckedCreateWithoutCarsInput = {
    id?: number
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
  }

  export type ManagerCreateOrConnectWithoutCarsInput = {
    where: ManagerWhereUniqueInput
    create: XOR<ManagerCreateWithoutCarsInput, ManagerUncheckedCreateWithoutCarsInput>
  }

  export type ReservationCreateWithoutCarInput = {
    startDate: Date | string
    endDate: Date | string
    totalPrice: number
    status: $Enums.ReservationStatus
    paymentStatus?: $Enums.PaymentStatus
    renter: RenterCreateNestedOneWithoutReservationsInput
    payments?: PaymentCreateNestedManyWithoutReservationInput
  }

  export type ReservationUncheckedCreateWithoutCarInput = {
    id?: number
    renterCognitoId: string
    startDate: Date | string
    endDate: Date | string
    totalPrice: number
    status: $Enums.ReservationStatus
    paymentStatus?: $Enums.PaymentStatus
    payments?: PaymentUncheckedCreateNestedManyWithoutReservationInput
  }

  export type ReservationCreateOrConnectWithoutCarInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutCarInput, ReservationUncheckedCreateWithoutCarInput>
  }

  export type ReservationCreateManyCarInputEnvelope = {
    data: ReservationCreateManyCarInput | ReservationCreateManyCarInput[]
    skipDuplicates?: boolean
  }

  export type ApplicationCreateWithoutCarInput = {
    name: string
    email: string
    phoneNumber: string
    message?: string | null
    renter: RenterCreateNestedOneWithoutApplicationsInput
  }

  export type ApplicationUncheckedCreateWithoutCarInput = {
    id?: number
    name: string
    email: string
    phoneNumber: string
    message?: string | null
    renterCognitoId: string
  }

  export type ApplicationCreateOrConnectWithoutCarInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutCarInput, ApplicationUncheckedCreateWithoutCarInput>
  }

  export type ApplicationCreateManyCarInputEnvelope = {
    data: ApplicationCreateManyCarInput | ApplicationCreateManyCarInput[]
    skipDuplicates?: boolean
  }

  export type RenterCreateWithoutFavoritesInput = {
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    reservations?: ReservationCreateNestedManyWithoutRenterInput
    applications?: ApplicationCreateNestedManyWithoutRenterInput
  }

  export type RenterUncheckedCreateWithoutFavoritesInput = {
    id?: number
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    reservations?: ReservationUncheckedCreateNestedManyWithoutRenterInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutRenterInput
  }

  export type RenterCreateOrConnectWithoutFavoritesInput = {
    where: RenterWhereUniqueInput
    create: XOR<RenterCreateWithoutFavoritesInput, RenterUncheckedCreateWithoutFavoritesInput>
  }

  export type ManagerUpsertWithoutCarsInput = {
    update: XOR<ManagerUpdateWithoutCarsInput, ManagerUncheckedUpdateWithoutCarsInput>
    create: XOR<ManagerCreateWithoutCarsInput, ManagerUncheckedCreateWithoutCarsInput>
    where?: ManagerWhereInput
  }

  export type ManagerUpdateToOneWithWhereWithoutCarsInput = {
    where?: ManagerWhereInput
    data: XOR<ManagerUpdateWithoutCarsInput, ManagerUncheckedUpdateWithoutCarsInput>
  }

  export type ManagerUpdateWithoutCarsInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
  }

  export type ManagerUncheckedUpdateWithoutCarsInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
  }

  export type LocationUpdateToOneWithWhereWithoutCarsInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutCarsInput, LocationUncheckedUpdateWithoutCarsInput>
  }

  export type LocationUpdateWithoutCarsInput = {
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
  }

  export type LocationUncheckedUpdateWithoutCarsInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
  }

  export type ReservationUpsertWithWhereUniqueWithoutCarInput = {
    where: ReservationWhereUniqueInput
    update: XOR<ReservationUpdateWithoutCarInput, ReservationUncheckedUpdateWithoutCarInput>
    create: XOR<ReservationCreateWithoutCarInput, ReservationUncheckedCreateWithoutCarInput>
  }

  export type ReservationUpdateWithWhereUniqueWithoutCarInput = {
    where: ReservationWhereUniqueInput
    data: XOR<ReservationUpdateWithoutCarInput, ReservationUncheckedUpdateWithoutCarInput>
  }

  export type ReservationUpdateManyWithWhereWithoutCarInput = {
    where: ReservationScalarWhereInput
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyWithoutCarInput>
  }

  export type ReservationScalarWhereInput = {
    AND?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
    OR?: ReservationScalarWhereInput[]
    NOT?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
    id?: IntFilter<"Reservation"> | number
    carId?: IntFilter<"Reservation"> | number
    renterCognitoId?: StringFilter<"Reservation"> | string
    startDate?: DateTimeFilter<"Reservation"> | Date | string
    endDate?: DateTimeFilter<"Reservation"> | Date | string
    totalPrice?: FloatFilter<"Reservation"> | number
    status?: EnumReservationStatusFilter<"Reservation"> | $Enums.ReservationStatus
    paymentStatus?: EnumPaymentStatusFilter<"Reservation"> | $Enums.PaymentStatus
  }

  export type ApplicationUpsertWithWhereUniqueWithoutCarInput = {
    where: ApplicationWhereUniqueInput
    update: XOR<ApplicationUpdateWithoutCarInput, ApplicationUncheckedUpdateWithoutCarInput>
    create: XOR<ApplicationCreateWithoutCarInput, ApplicationUncheckedCreateWithoutCarInput>
  }

  export type ApplicationUpdateWithWhereUniqueWithoutCarInput = {
    where: ApplicationWhereUniqueInput
    data: XOR<ApplicationUpdateWithoutCarInput, ApplicationUncheckedUpdateWithoutCarInput>
  }

  export type ApplicationUpdateManyWithWhereWithoutCarInput = {
    where: ApplicationScalarWhereInput
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyWithoutCarInput>
  }

  export type ApplicationScalarWhereInput = {
    AND?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
    OR?: ApplicationScalarWhereInput[]
    NOT?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
    id?: IntFilter<"Application"> | number
    name?: StringFilter<"Application"> | string
    email?: StringFilter<"Application"> | string
    phoneNumber?: StringFilter<"Application"> | string
    message?: StringNullableFilter<"Application"> | string | null
    carId?: IntFilter<"Application"> | number
    renterCognitoId?: StringFilter<"Application"> | string
  }

  export type RenterUpsertWithWhereUniqueWithoutFavoritesInput = {
    where: RenterWhereUniqueInput
    update: XOR<RenterUpdateWithoutFavoritesInput, RenterUncheckedUpdateWithoutFavoritesInput>
    create: XOR<RenterCreateWithoutFavoritesInput, RenterUncheckedCreateWithoutFavoritesInput>
  }

  export type RenterUpdateWithWhereUniqueWithoutFavoritesInput = {
    where: RenterWhereUniqueInput
    data: XOR<RenterUpdateWithoutFavoritesInput, RenterUncheckedUpdateWithoutFavoritesInput>
  }

  export type RenterUpdateManyWithWhereWithoutFavoritesInput = {
    where: RenterScalarWhereInput
    data: XOR<RenterUpdateManyMutationInput, RenterUncheckedUpdateManyWithoutFavoritesInput>
  }

  export type RenterScalarWhereInput = {
    AND?: RenterScalarWhereInput | RenterScalarWhereInput[]
    OR?: RenterScalarWhereInput[]
    NOT?: RenterScalarWhereInput | RenterScalarWhereInput[]
    id?: IntFilter<"Renter"> | number
    cognitoId?: StringFilter<"Renter"> | string
    name?: StringFilter<"Renter"> | string
    email?: StringFilter<"Renter"> | string
    phoneNumber?: StringFilter<"Renter"> | string
  }

  export type CarCreateWithoutManagerInput = {
    name: string
    description: string
    pricePerDay: number
    availableFrom: Date | string
    availableTo: Date | string
    carType: $Enums.CarType
    carFeatures?: CarCreatecarFeaturesInput | $Enums.CarFeature[]
    imageUrls?: CarCreateimageUrlsInput | string[]
    rating?: number | null
    numberOfReviews?: number | null
    location: LocationCreateNestedOneWithoutCarsInput
    reservations?: ReservationCreateNestedManyWithoutCarInput
    applications?: ApplicationCreateNestedManyWithoutCarInput
    favoritedBy?: RenterCreateNestedManyWithoutFavoritesInput
  }

  export type CarUncheckedCreateWithoutManagerInput = {
    id?: number
    name: string
    description: string
    pricePerDay: number
    availableFrom: Date | string
    availableTo: Date | string
    carType: $Enums.CarType
    carFeatures?: CarCreatecarFeaturesInput | $Enums.CarFeature[]
    imageUrls?: CarCreateimageUrlsInput | string[]
    locationId: number
    rating?: number | null
    numberOfReviews?: number | null
    reservations?: ReservationUncheckedCreateNestedManyWithoutCarInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutCarInput
    favoritedBy?: RenterUncheckedCreateNestedManyWithoutFavoritesInput
  }

  export type CarCreateOrConnectWithoutManagerInput = {
    where: CarWhereUniqueInput
    create: XOR<CarCreateWithoutManagerInput, CarUncheckedCreateWithoutManagerInput>
  }

  export type CarCreateManyManagerInputEnvelope = {
    data: CarCreateManyManagerInput | CarCreateManyManagerInput[]
    skipDuplicates?: boolean
  }

  export type CarUpsertWithWhereUniqueWithoutManagerInput = {
    where: CarWhereUniqueInput
    update: XOR<CarUpdateWithoutManagerInput, CarUncheckedUpdateWithoutManagerInput>
    create: XOR<CarCreateWithoutManagerInput, CarUncheckedCreateWithoutManagerInput>
  }

  export type CarUpdateWithWhereUniqueWithoutManagerInput = {
    where: CarWhereUniqueInput
    data: XOR<CarUpdateWithoutManagerInput, CarUncheckedUpdateWithoutManagerInput>
  }

  export type CarUpdateManyWithWhereWithoutManagerInput = {
    where: CarScalarWhereInput
    data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyWithoutManagerInput>
  }

  export type CarScalarWhereInput = {
    AND?: CarScalarWhereInput | CarScalarWhereInput[]
    OR?: CarScalarWhereInput[]
    NOT?: CarScalarWhereInput | CarScalarWhereInput[]
    id?: IntFilter<"Car"> | number
    name?: StringFilter<"Car"> | string
    description?: StringFilter<"Car"> | string
    pricePerDay?: FloatFilter<"Car"> | number
    availableFrom?: DateTimeFilter<"Car"> | Date | string
    availableTo?: DateTimeFilter<"Car"> | Date | string
    carType?: EnumCarTypeFilter<"Car"> | $Enums.CarType
    carFeatures?: EnumCarFeatureNullableListFilter<"Car">
    imageUrls?: StringNullableListFilter<"Car">
    locationId?: IntFilter<"Car"> | number
    rating?: FloatNullableFilter<"Car"> | number | null
    numberOfReviews?: IntNullableFilter<"Car"> | number | null
    managerCognitoId?: StringFilter<"Car"> | string
  }

  export type ReservationCreateWithoutRenterInput = {
    startDate: Date | string
    endDate: Date | string
    totalPrice: number
    status: $Enums.ReservationStatus
    paymentStatus?: $Enums.PaymentStatus
    car: CarCreateNestedOneWithoutReservationsInput
    payments?: PaymentCreateNestedManyWithoutReservationInput
  }

  export type ReservationUncheckedCreateWithoutRenterInput = {
    id?: number
    carId: number
    startDate: Date | string
    endDate: Date | string
    totalPrice: number
    status: $Enums.ReservationStatus
    paymentStatus?: $Enums.PaymentStatus
    payments?: PaymentUncheckedCreateNestedManyWithoutReservationInput
  }

  export type ReservationCreateOrConnectWithoutRenterInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutRenterInput, ReservationUncheckedCreateWithoutRenterInput>
  }

  export type ReservationCreateManyRenterInputEnvelope = {
    data: ReservationCreateManyRenterInput | ReservationCreateManyRenterInput[]
    skipDuplicates?: boolean
  }

  export type CarCreateWithoutFavoritedByInput = {
    name: string
    description: string
    pricePerDay: number
    availableFrom: Date | string
    availableTo: Date | string
    carType: $Enums.CarType
    carFeatures?: CarCreatecarFeaturesInput | $Enums.CarFeature[]
    imageUrls?: CarCreateimageUrlsInput | string[]
    rating?: number | null
    numberOfReviews?: number | null
    manager: ManagerCreateNestedOneWithoutCarsInput
    location: LocationCreateNestedOneWithoutCarsInput
    reservations?: ReservationCreateNestedManyWithoutCarInput
    applications?: ApplicationCreateNestedManyWithoutCarInput
  }

  export type CarUncheckedCreateWithoutFavoritedByInput = {
    id?: number
    name: string
    description: string
    pricePerDay: number
    availableFrom: Date | string
    availableTo: Date | string
    carType: $Enums.CarType
    carFeatures?: CarCreatecarFeaturesInput | $Enums.CarFeature[]
    imageUrls?: CarCreateimageUrlsInput | string[]
    locationId: number
    rating?: number | null
    numberOfReviews?: number | null
    managerCognitoId: string
    reservations?: ReservationUncheckedCreateNestedManyWithoutCarInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarCreateOrConnectWithoutFavoritedByInput = {
    where: CarWhereUniqueInput
    create: XOR<CarCreateWithoutFavoritedByInput, CarUncheckedCreateWithoutFavoritedByInput>
  }

  export type ApplicationCreateWithoutRenterInput = {
    name: string
    email: string
    phoneNumber: string
    message?: string | null
    car: CarCreateNestedOneWithoutApplicationsInput
  }

  export type ApplicationUncheckedCreateWithoutRenterInput = {
    id?: number
    name: string
    email: string
    phoneNumber: string
    message?: string | null
    carId: number
  }

  export type ApplicationCreateOrConnectWithoutRenterInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutRenterInput, ApplicationUncheckedCreateWithoutRenterInput>
  }

  export type ApplicationCreateManyRenterInputEnvelope = {
    data: ApplicationCreateManyRenterInput | ApplicationCreateManyRenterInput[]
    skipDuplicates?: boolean
  }

  export type ReservationUpsertWithWhereUniqueWithoutRenterInput = {
    where: ReservationWhereUniqueInput
    update: XOR<ReservationUpdateWithoutRenterInput, ReservationUncheckedUpdateWithoutRenterInput>
    create: XOR<ReservationCreateWithoutRenterInput, ReservationUncheckedCreateWithoutRenterInput>
  }

  export type ReservationUpdateWithWhereUniqueWithoutRenterInput = {
    where: ReservationWhereUniqueInput
    data: XOR<ReservationUpdateWithoutRenterInput, ReservationUncheckedUpdateWithoutRenterInput>
  }

  export type ReservationUpdateManyWithWhereWithoutRenterInput = {
    where: ReservationScalarWhereInput
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyWithoutRenterInput>
  }

  export type CarUpsertWithWhereUniqueWithoutFavoritedByInput = {
    where: CarWhereUniqueInput
    update: XOR<CarUpdateWithoutFavoritedByInput, CarUncheckedUpdateWithoutFavoritedByInput>
    create: XOR<CarCreateWithoutFavoritedByInput, CarUncheckedCreateWithoutFavoritedByInput>
  }

  export type CarUpdateWithWhereUniqueWithoutFavoritedByInput = {
    where: CarWhereUniqueInput
    data: XOR<CarUpdateWithoutFavoritedByInput, CarUncheckedUpdateWithoutFavoritedByInput>
  }

  export type CarUpdateManyWithWhereWithoutFavoritedByInput = {
    where: CarScalarWhereInput
    data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyWithoutFavoritedByInput>
  }

  export type ApplicationUpsertWithWhereUniqueWithoutRenterInput = {
    where: ApplicationWhereUniqueInput
    update: XOR<ApplicationUpdateWithoutRenterInput, ApplicationUncheckedUpdateWithoutRenterInput>
    create: XOR<ApplicationCreateWithoutRenterInput, ApplicationUncheckedCreateWithoutRenterInput>
  }

  export type ApplicationUpdateWithWhereUniqueWithoutRenterInput = {
    where: ApplicationWhereUniqueInput
    data: XOR<ApplicationUpdateWithoutRenterInput, ApplicationUncheckedUpdateWithoutRenterInput>
  }

  export type ApplicationUpdateManyWithWhereWithoutRenterInput = {
    where: ApplicationScalarWhereInput
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyWithoutRenterInput>
  }

  export type CarCreateWithoutReservationsInput = {
    name: string
    description: string
    pricePerDay: number
    availableFrom: Date | string
    availableTo: Date | string
    carType: $Enums.CarType
    carFeatures?: CarCreatecarFeaturesInput | $Enums.CarFeature[]
    imageUrls?: CarCreateimageUrlsInput | string[]
    rating?: number | null
    numberOfReviews?: number | null
    manager: ManagerCreateNestedOneWithoutCarsInput
    location: LocationCreateNestedOneWithoutCarsInput
    applications?: ApplicationCreateNestedManyWithoutCarInput
    favoritedBy?: RenterCreateNestedManyWithoutFavoritesInput
  }

  export type CarUncheckedCreateWithoutReservationsInput = {
    id?: number
    name: string
    description: string
    pricePerDay: number
    availableFrom: Date | string
    availableTo: Date | string
    carType: $Enums.CarType
    carFeatures?: CarCreatecarFeaturesInput | $Enums.CarFeature[]
    imageUrls?: CarCreateimageUrlsInput | string[]
    locationId: number
    rating?: number | null
    numberOfReviews?: number | null
    managerCognitoId: string
    applications?: ApplicationUncheckedCreateNestedManyWithoutCarInput
    favoritedBy?: RenterUncheckedCreateNestedManyWithoutFavoritesInput
  }

  export type CarCreateOrConnectWithoutReservationsInput = {
    where: CarWhereUniqueInput
    create: XOR<CarCreateWithoutReservationsInput, CarUncheckedCreateWithoutReservationsInput>
  }

  export type RenterCreateWithoutReservationsInput = {
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    favorites?: CarCreateNestedManyWithoutFavoritedByInput
    applications?: ApplicationCreateNestedManyWithoutRenterInput
  }

  export type RenterUncheckedCreateWithoutReservationsInput = {
    id?: number
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    favorites?: CarUncheckedCreateNestedManyWithoutFavoritedByInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutRenterInput
  }

  export type RenterCreateOrConnectWithoutReservationsInput = {
    where: RenterWhereUniqueInput
    create: XOR<RenterCreateWithoutReservationsInput, RenterUncheckedCreateWithoutReservationsInput>
  }

  export type PaymentCreateWithoutReservationInput = {
    amountDue: number
    amountPaid: number
    dueDate: Date | string
    paymentDate?: Date | string | null
    paymentStatus: $Enums.PaymentStatus
  }

  export type PaymentUncheckedCreateWithoutReservationInput = {
    id?: number
    amountDue: number
    amountPaid: number
    dueDate: Date | string
    paymentDate?: Date | string | null
    paymentStatus: $Enums.PaymentStatus
  }

  export type PaymentCreateOrConnectWithoutReservationInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutReservationInput, PaymentUncheckedCreateWithoutReservationInput>
  }

  export type PaymentCreateManyReservationInputEnvelope = {
    data: PaymentCreateManyReservationInput | PaymentCreateManyReservationInput[]
    skipDuplicates?: boolean
  }

  export type CarUpsertWithoutReservationsInput = {
    update: XOR<CarUpdateWithoutReservationsInput, CarUncheckedUpdateWithoutReservationsInput>
    create: XOR<CarCreateWithoutReservationsInput, CarUncheckedCreateWithoutReservationsInput>
    where?: CarWhereInput
  }

  export type CarUpdateToOneWithWhereWithoutReservationsInput = {
    where?: CarWhereInput
    data: XOR<CarUpdateWithoutReservationsInput, CarUncheckedUpdateWithoutReservationsInput>
  }

  export type CarUpdateWithoutReservationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricePerDay?: FloatFieldUpdateOperationsInput | number
    availableFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    availableTo?: DateTimeFieldUpdateOperationsInput | Date | string
    carType?: EnumCarTypeFieldUpdateOperationsInput | $Enums.CarType
    carFeatures?: CarUpdatecarFeaturesInput | $Enums.CarFeature[]
    imageUrls?: CarUpdateimageUrlsInput | string[]
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    manager?: ManagerUpdateOneRequiredWithoutCarsNestedInput
    location?: LocationUpdateOneRequiredWithoutCarsNestedInput
    applications?: ApplicationUpdateManyWithoutCarNestedInput
    favoritedBy?: RenterUpdateManyWithoutFavoritesNestedInput
  }

  export type CarUncheckedUpdateWithoutReservationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricePerDay?: FloatFieldUpdateOperationsInput | number
    availableFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    availableTo?: DateTimeFieldUpdateOperationsInput | Date | string
    carType?: EnumCarTypeFieldUpdateOperationsInput | $Enums.CarType
    carFeatures?: CarUpdatecarFeaturesInput | $Enums.CarFeature[]
    imageUrls?: CarUpdateimageUrlsInput | string[]
    locationId?: IntFieldUpdateOperationsInput | number
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    managerCognitoId?: StringFieldUpdateOperationsInput | string
    applications?: ApplicationUncheckedUpdateManyWithoutCarNestedInput
    favoritedBy?: RenterUncheckedUpdateManyWithoutFavoritesNestedInput
  }

  export type RenterUpsertWithoutReservationsInput = {
    update: XOR<RenterUpdateWithoutReservationsInput, RenterUncheckedUpdateWithoutReservationsInput>
    create: XOR<RenterCreateWithoutReservationsInput, RenterUncheckedCreateWithoutReservationsInput>
    where?: RenterWhereInput
  }

  export type RenterUpdateToOneWithWhereWithoutReservationsInput = {
    where?: RenterWhereInput
    data: XOR<RenterUpdateWithoutReservationsInput, RenterUncheckedUpdateWithoutReservationsInput>
  }

  export type RenterUpdateWithoutReservationsInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    favorites?: CarUpdateManyWithoutFavoritedByNestedInput
    applications?: ApplicationUpdateManyWithoutRenterNestedInput
  }

  export type RenterUncheckedUpdateWithoutReservationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    favorites?: CarUncheckedUpdateManyWithoutFavoritedByNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutRenterNestedInput
  }

  export type PaymentUpsertWithWhereUniqueWithoutReservationInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutReservationInput, PaymentUncheckedUpdateWithoutReservationInput>
    create: XOR<PaymentCreateWithoutReservationInput, PaymentUncheckedCreateWithoutReservationInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutReservationInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutReservationInput, PaymentUncheckedUpdateWithoutReservationInput>
  }

  export type PaymentUpdateManyWithWhereWithoutReservationInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutReservationInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: IntFilter<"Payment"> | number
    amountDue?: FloatFilter<"Payment"> | number
    amountPaid?: FloatFilter<"Payment"> | number
    dueDate?: DateTimeFilter<"Payment"> | Date | string
    paymentDate?: DateTimeNullableFilter<"Payment"> | Date | string | null
    paymentStatus?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    reservationId?: IntFilter<"Payment"> | number
  }

  export type CarCreateWithoutApplicationsInput = {
    name: string
    description: string
    pricePerDay: number
    availableFrom: Date | string
    availableTo: Date | string
    carType: $Enums.CarType
    carFeatures?: CarCreatecarFeaturesInput | $Enums.CarFeature[]
    imageUrls?: CarCreateimageUrlsInput | string[]
    rating?: number | null
    numberOfReviews?: number | null
    manager: ManagerCreateNestedOneWithoutCarsInput
    location: LocationCreateNestedOneWithoutCarsInput
    reservations?: ReservationCreateNestedManyWithoutCarInput
    favoritedBy?: RenterCreateNestedManyWithoutFavoritesInput
  }

  export type CarUncheckedCreateWithoutApplicationsInput = {
    id?: number
    name: string
    description: string
    pricePerDay: number
    availableFrom: Date | string
    availableTo: Date | string
    carType: $Enums.CarType
    carFeatures?: CarCreatecarFeaturesInput | $Enums.CarFeature[]
    imageUrls?: CarCreateimageUrlsInput | string[]
    locationId: number
    rating?: number | null
    numberOfReviews?: number | null
    managerCognitoId: string
    reservations?: ReservationUncheckedCreateNestedManyWithoutCarInput
    favoritedBy?: RenterUncheckedCreateNestedManyWithoutFavoritesInput
  }

  export type CarCreateOrConnectWithoutApplicationsInput = {
    where: CarWhereUniqueInput
    create: XOR<CarCreateWithoutApplicationsInput, CarUncheckedCreateWithoutApplicationsInput>
  }

  export type RenterCreateWithoutApplicationsInput = {
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    reservations?: ReservationCreateNestedManyWithoutRenterInput
    favorites?: CarCreateNestedManyWithoutFavoritedByInput
  }

  export type RenterUncheckedCreateWithoutApplicationsInput = {
    id?: number
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    reservations?: ReservationUncheckedCreateNestedManyWithoutRenterInput
    favorites?: CarUncheckedCreateNestedManyWithoutFavoritedByInput
  }

  export type RenterCreateOrConnectWithoutApplicationsInput = {
    where: RenterWhereUniqueInput
    create: XOR<RenterCreateWithoutApplicationsInput, RenterUncheckedCreateWithoutApplicationsInput>
  }

  export type CarUpsertWithoutApplicationsInput = {
    update: XOR<CarUpdateWithoutApplicationsInput, CarUncheckedUpdateWithoutApplicationsInput>
    create: XOR<CarCreateWithoutApplicationsInput, CarUncheckedCreateWithoutApplicationsInput>
    where?: CarWhereInput
  }

  export type CarUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: CarWhereInput
    data: XOR<CarUpdateWithoutApplicationsInput, CarUncheckedUpdateWithoutApplicationsInput>
  }

  export type CarUpdateWithoutApplicationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricePerDay?: FloatFieldUpdateOperationsInput | number
    availableFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    availableTo?: DateTimeFieldUpdateOperationsInput | Date | string
    carType?: EnumCarTypeFieldUpdateOperationsInput | $Enums.CarType
    carFeatures?: CarUpdatecarFeaturesInput | $Enums.CarFeature[]
    imageUrls?: CarUpdateimageUrlsInput | string[]
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    manager?: ManagerUpdateOneRequiredWithoutCarsNestedInput
    location?: LocationUpdateOneRequiredWithoutCarsNestedInput
    reservations?: ReservationUpdateManyWithoutCarNestedInput
    favoritedBy?: RenterUpdateManyWithoutFavoritesNestedInput
  }

  export type CarUncheckedUpdateWithoutApplicationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricePerDay?: FloatFieldUpdateOperationsInput | number
    availableFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    availableTo?: DateTimeFieldUpdateOperationsInput | Date | string
    carType?: EnumCarTypeFieldUpdateOperationsInput | $Enums.CarType
    carFeatures?: CarUpdatecarFeaturesInput | $Enums.CarFeature[]
    imageUrls?: CarUpdateimageUrlsInput | string[]
    locationId?: IntFieldUpdateOperationsInput | number
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    managerCognitoId?: StringFieldUpdateOperationsInput | string
    reservations?: ReservationUncheckedUpdateManyWithoutCarNestedInput
    favoritedBy?: RenterUncheckedUpdateManyWithoutFavoritesNestedInput
  }

  export type RenterUpsertWithoutApplicationsInput = {
    update: XOR<RenterUpdateWithoutApplicationsInput, RenterUncheckedUpdateWithoutApplicationsInput>
    create: XOR<RenterCreateWithoutApplicationsInput, RenterUncheckedCreateWithoutApplicationsInput>
    where?: RenterWhereInput
  }

  export type RenterUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: RenterWhereInput
    data: XOR<RenterUpdateWithoutApplicationsInput, RenterUncheckedUpdateWithoutApplicationsInput>
  }

  export type RenterUpdateWithoutApplicationsInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    reservations?: ReservationUpdateManyWithoutRenterNestedInput
    favorites?: CarUpdateManyWithoutFavoritedByNestedInput
  }

  export type RenterUncheckedUpdateWithoutApplicationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    reservations?: ReservationUncheckedUpdateManyWithoutRenterNestedInput
    favorites?: CarUncheckedUpdateManyWithoutFavoritedByNestedInput
  }

  export type ReservationCreateWithoutPaymentsInput = {
    startDate: Date | string
    endDate: Date | string
    totalPrice: number
    status: $Enums.ReservationStatus
    paymentStatus?: $Enums.PaymentStatus
    car: CarCreateNestedOneWithoutReservationsInput
    renter: RenterCreateNestedOneWithoutReservationsInput
  }

  export type ReservationUncheckedCreateWithoutPaymentsInput = {
    id?: number
    carId: number
    renterCognitoId: string
    startDate: Date | string
    endDate: Date | string
    totalPrice: number
    status: $Enums.ReservationStatus
    paymentStatus?: $Enums.PaymentStatus
  }

  export type ReservationCreateOrConnectWithoutPaymentsInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutPaymentsInput, ReservationUncheckedCreateWithoutPaymentsInput>
  }

  export type ReservationUpsertWithoutPaymentsInput = {
    update: XOR<ReservationUpdateWithoutPaymentsInput, ReservationUncheckedUpdateWithoutPaymentsInput>
    create: XOR<ReservationCreateWithoutPaymentsInput, ReservationUncheckedCreateWithoutPaymentsInput>
    where?: ReservationWhereInput
  }

  export type ReservationUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: ReservationWhereInput
    data: XOR<ReservationUpdateWithoutPaymentsInput, ReservationUncheckedUpdateWithoutPaymentsInput>
  }

  export type ReservationUpdateWithoutPaymentsInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    car?: CarUpdateOneRequiredWithoutReservationsNestedInput
    renter?: RenterUpdateOneRequiredWithoutReservationsNestedInput
  }

  export type ReservationUncheckedUpdateWithoutPaymentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    renterCognitoId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
  }

  export type CarCreateWithoutLocationInput = {
    name: string
    description: string
    pricePerDay: number
    availableFrom: Date | string
    availableTo: Date | string
    carType: $Enums.CarType
    carFeatures?: CarCreatecarFeaturesInput | $Enums.CarFeature[]
    imageUrls?: CarCreateimageUrlsInput | string[]
    rating?: number | null
    numberOfReviews?: number | null
    manager: ManagerCreateNestedOneWithoutCarsInput
    reservations?: ReservationCreateNestedManyWithoutCarInput
    applications?: ApplicationCreateNestedManyWithoutCarInput
    favoritedBy?: RenterCreateNestedManyWithoutFavoritesInput
  }

  export type CarUncheckedCreateWithoutLocationInput = {
    id?: number
    name: string
    description: string
    pricePerDay: number
    availableFrom: Date | string
    availableTo: Date | string
    carType: $Enums.CarType
    carFeatures?: CarCreatecarFeaturesInput | $Enums.CarFeature[]
    imageUrls?: CarCreateimageUrlsInput | string[]
    rating?: number | null
    numberOfReviews?: number | null
    managerCognitoId: string
    reservations?: ReservationUncheckedCreateNestedManyWithoutCarInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutCarInput
    favoritedBy?: RenterUncheckedCreateNestedManyWithoutFavoritesInput
  }

  export type CarCreateOrConnectWithoutLocationInput = {
    where: CarWhereUniqueInput
    create: XOR<CarCreateWithoutLocationInput, CarUncheckedCreateWithoutLocationInput>
  }

  export type CarUpsertWithWhereUniqueWithoutLocationInput = {
    where: CarWhereUniqueInput
    update: XOR<CarUpdateWithoutLocationInput, CarUncheckedUpdateWithoutLocationInput>
    create: XOR<CarCreateWithoutLocationInput, CarUncheckedCreateWithoutLocationInput>
  }

  export type CarCreateManyLocationInputEnvelope = {
    data: CarCreateManyLocationInput | CarCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type CarUpdateWithWhereUniqueWithoutLocationInput = {
    where: CarWhereUniqueInput
    data: XOR<CarUpdateWithoutLocationInput, CarUncheckedUpdateWithoutLocationInput>
  }

  export type CarUpdateManyWithWhereWithoutLocationInput = {
    where: CarScalarWhereInput
    data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyWithoutLocationInput>
  }

  export type ReservationCreateManyCarInput = {
    id?: number
    renterCognitoId: string
    startDate: Date | string
    endDate: Date | string
    totalPrice: number
    status: $Enums.ReservationStatus
    paymentStatus?: $Enums.PaymentStatus
  }

  export type ApplicationCreateManyCarInput = {
    id?: number
    name: string
    email: string
    phoneNumber: string
    message?: string | null
    renterCognitoId: string
  }

  export type ReservationUpdateWithoutCarInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    renter?: RenterUpdateOneRequiredWithoutReservationsNestedInput
    payments?: PaymentUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateWithoutCarInput = {
    id?: IntFieldUpdateOperationsInput | number
    renterCognitoId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payments?: PaymentUncheckedUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateManyWithoutCarInput = {
    id?: IntFieldUpdateOperationsInput | number
    renterCognitoId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
  }

  export type ApplicationUpdateWithoutCarInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    renter?: RenterUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutCarInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    renterCognitoId?: StringFieldUpdateOperationsInput | string
  }

  export type ApplicationUncheckedUpdateManyWithoutCarInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    renterCognitoId?: StringFieldUpdateOperationsInput | string
  }

  export type RenterUpdateWithoutFavoritesInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    reservations?: ReservationUpdateManyWithoutRenterNestedInput
    applications?: ApplicationUpdateManyWithoutRenterNestedInput
  }

  export type RenterUncheckedUpdateWithoutFavoritesInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    reservations?: ReservationUncheckedUpdateManyWithoutRenterNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutRenterNestedInput
  }

  export type RenterUncheckedUpdateManyWithoutFavoritesInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
  }

  export type CarCreateManyManagerInput = {
    id?: number
    name: string
    description: string
    pricePerDay: number
    availableFrom: Date | string
    availableTo: Date | string
    carType: $Enums.CarType
    carFeatures?: CarCreatecarFeaturesInput | $Enums.CarFeature[]
    imageUrls?: CarCreateimageUrlsInput | string[]
    locationId: number
    rating?: number | null
    numberOfReviews?: number | null
  }

  export type CarUpdateWithoutManagerInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricePerDay?: FloatFieldUpdateOperationsInput | number
    availableFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    availableTo?: DateTimeFieldUpdateOperationsInput | Date | string
    carType?: EnumCarTypeFieldUpdateOperationsInput | $Enums.CarType
    carFeatures?: CarUpdatecarFeaturesInput | $Enums.CarFeature[]
    imageUrls?: CarUpdateimageUrlsInput | string[]
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    location?: LocationUpdateOneRequiredWithoutCarsNestedInput
    reservations?: ReservationUpdateManyWithoutCarNestedInput
    applications?: ApplicationUpdateManyWithoutCarNestedInput
    favoritedBy?: RenterUpdateManyWithoutFavoritesNestedInput
  }

  export type CarUncheckedUpdateWithoutManagerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricePerDay?: FloatFieldUpdateOperationsInput | number
    availableFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    availableTo?: DateTimeFieldUpdateOperationsInput | Date | string
    carType?: EnumCarTypeFieldUpdateOperationsInput | $Enums.CarType
    carFeatures?: CarUpdatecarFeaturesInput | $Enums.CarFeature[]
    imageUrls?: CarUpdateimageUrlsInput | string[]
    locationId?: IntFieldUpdateOperationsInput | number
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    reservations?: ReservationUncheckedUpdateManyWithoutCarNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutCarNestedInput
    favoritedBy?: RenterUncheckedUpdateManyWithoutFavoritesNestedInput
  }

  export type CarUncheckedUpdateManyWithoutManagerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricePerDay?: FloatFieldUpdateOperationsInput | number
    availableFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    availableTo?: DateTimeFieldUpdateOperationsInput | Date | string
    carType?: EnumCarTypeFieldUpdateOperationsInput | $Enums.CarType
    carFeatures?: CarUpdatecarFeaturesInput | $Enums.CarFeature[]
    imageUrls?: CarUpdateimageUrlsInput | string[]
    locationId?: IntFieldUpdateOperationsInput | number
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ReservationCreateManyRenterInput = {
    id?: number
    carId: number
    startDate: Date | string
    endDate: Date | string
    totalPrice: number
    status: $Enums.ReservationStatus
    paymentStatus?: $Enums.PaymentStatus
  }

  export type ApplicationCreateManyRenterInput = {
    id?: number
    name: string
    email: string
    phoneNumber: string
    message?: string | null
    carId: number
  }

  export type ReservationUpdateWithoutRenterInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    car?: CarUpdateOneRequiredWithoutReservationsNestedInput
    payments?: PaymentUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateWithoutRenterInput = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payments?: PaymentUncheckedUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateManyWithoutRenterInput = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
  }

  export type CarUpdateWithoutFavoritedByInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricePerDay?: FloatFieldUpdateOperationsInput | number
    availableFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    availableTo?: DateTimeFieldUpdateOperationsInput | Date | string
    carType?: EnumCarTypeFieldUpdateOperationsInput | $Enums.CarType
    carFeatures?: CarUpdatecarFeaturesInput | $Enums.CarFeature[]
    imageUrls?: CarUpdateimageUrlsInput | string[]
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    manager?: ManagerUpdateOneRequiredWithoutCarsNestedInput
    location?: LocationUpdateOneRequiredWithoutCarsNestedInput
    reservations?: ReservationUpdateManyWithoutCarNestedInput
    applications?: ApplicationUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateWithoutFavoritedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricePerDay?: FloatFieldUpdateOperationsInput | number
    availableFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    availableTo?: DateTimeFieldUpdateOperationsInput | Date | string
    carType?: EnumCarTypeFieldUpdateOperationsInput | $Enums.CarType
    carFeatures?: CarUpdatecarFeaturesInput | $Enums.CarFeature[]
    imageUrls?: CarUpdateimageUrlsInput | string[]
    locationId?: IntFieldUpdateOperationsInput | number
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    managerCognitoId?: StringFieldUpdateOperationsInput | string
    reservations?: ReservationUncheckedUpdateManyWithoutCarNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateManyWithoutFavoritedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricePerDay?: FloatFieldUpdateOperationsInput | number
    availableFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    availableTo?: DateTimeFieldUpdateOperationsInput | Date | string
    carType?: EnumCarTypeFieldUpdateOperationsInput | $Enums.CarType
    carFeatures?: CarUpdatecarFeaturesInput | $Enums.CarFeature[]
    imageUrls?: CarUpdateimageUrlsInput | string[]
    locationId?: IntFieldUpdateOperationsInput | number
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    managerCognitoId?: StringFieldUpdateOperationsInput | string
  }

  export type ApplicationUpdateWithoutRenterInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    car?: CarUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutRenterInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    carId?: IntFieldUpdateOperationsInput | number
  }

  export type ApplicationUncheckedUpdateManyWithoutRenterInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    carId?: IntFieldUpdateOperationsInput | number
  }

  export type PaymentCreateManyReservationInput = {
    id?: number
    amountDue: number
    amountPaid: number
    dueDate: Date | string
    paymentDate?: Date | string | null
    paymentStatus: $Enums.PaymentStatus
  }

  export type PaymentUpdateWithoutReservationInput = {
    amountDue?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
  }

  export type PaymentUncheckedUpdateWithoutReservationInput = {
    id?: IntFieldUpdateOperationsInput | number
    amountDue?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
  }

  export type PaymentUncheckedUpdateManyWithoutReservationInput = {
    id?: IntFieldUpdateOperationsInput | number
    amountDue?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
  }

  export type CarUpdateWithoutLocationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricePerDay?: FloatFieldUpdateOperationsInput | number
    availableFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    availableTo?: DateTimeFieldUpdateOperationsInput | Date | string
    carType?: EnumCarTypeFieldUpdateOperationsInput | $Enums.CarType
    carFeatures?: CarUpdatecarFeaturesInput | $Enums.CarFeature[]
    imageUrls?: CarUpdateimageUrlsInput | string[]
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    manager?: ManagerUpdateOneRequiredWithoutCarsNestedInput
    reservations?: ReservationUpdateManyWithoutCarNestedInput
    applications?: ApplicationUpdateManyWithoutCarNestedInput
    favoritedBy?: RenterUpdateManyWithoutFavoritesNestedInput
  }

  export type CarUncheckedUpdateWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricePerDay?: FloatFieldUpdateOperationsInput | number
    availableFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    availableTo?: DateTimeFieldUpdateOperationsInput | Date | string
    carType?: EnumCarTypeFieldUpdateOperationsInput | $Enums.CarType
    carFeatures?: CarUpdatecarFeaturesInput | $Enums.CarFeature[]
    imageUrls?: CarUpdateimageUrlsInput | string[]
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    managerCognitoId?: StringFieldUpdateOperationsInput | string
    reservations?: ReservationUncheckedUpdateManyWithoutCarNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutCarNestedInput
    favoritedBy?: RenterUncheckedUpdateManyWithoutFavoritesNestedInput
  }

  export type CarCreateManyLocationInput = {
    id?: number
    name: string
    description: string
    pricePerDay: number
    availableFrom: Date | string
    availableTo: Date | string
    carType: $Enums.CarType
    carFeatures?: CarCreatecarFeaturesInput | $Enums.CarFeature[]
    imageUrls?: CarCreateimageUrlsInput | string[]
    rating?: number | null
    numberOfReviews?: number | null
    managerCognitoId: string
  }

  export type CarUncheckedUpdateManyWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricePerDay?: FloatFieldUpdateOperationsInput | number
    availableFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    availableTo?: DateTimeFieldUpdateOperationsInput | Date | string
    carType?: EnumCarTypeFieldUpdateOperationsInput | $Enums.CarType
    carFeatures?: CarUpdatecarFeaturesInput | $Enums.CarFeature[]
    imageUrls?: CarUpdateimageUrlsInput | string[]
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    managerCognitoId?: StringFieldUpdateOperationsInput | string
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