import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type HeadCreateInput = {
  test: string;
  users?: UserWhereUniqueInput | null;
};
