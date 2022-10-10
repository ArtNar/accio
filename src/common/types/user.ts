import { ROLES } from 'src/backend/types';

export type UserType = {
  id: number;
  login: string;
  role: ROLES;
};
