export interface ApiResonse {
  ApiData?: ReturnType<<T>() => T>;
  NetworkError?: ReturnType<() => Error>;
}

export type ApiData = ReturnType<<T>() => T>;
export type NetworkError = ReturnType<() => string>;

export type Func = () => Promise<any | NetworkError>;