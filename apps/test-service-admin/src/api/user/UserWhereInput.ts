import { StringNullableFilter } from "../../util/StringNullableFilter";
import { HeadListRelationFilter } from "../head/HeadListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  heads?: HeadListRelationFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
};
