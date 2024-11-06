export interface ApiDataStructure<T> {
  message: string;
  result: boolean;
  data: T[];
}
