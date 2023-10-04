import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type HeadUpdateInput = {
  test?: string;
  users?: UserWhereUniqueInput | null;
};
