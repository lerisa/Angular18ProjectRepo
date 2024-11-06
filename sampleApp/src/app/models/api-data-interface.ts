import { Role } from './role-interface';

export interface ApiDataStructure {
  message: string;
  result: boolean;
  data: Role[];
}
