import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type HeadWhereInput = {
  id?: StringFilter;
  test?: StringFilter;
  users?: UserWhereUniqueInput;
};
