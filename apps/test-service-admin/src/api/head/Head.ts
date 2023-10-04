import { User } from "../user/User";

export type Head = {
  createdAt: Date;
  id: string;
  test: string;
  updatedAt: Date;
  users?: User | null;
};
