import { HeadWhereInput } from "./HeadWhereInput";
import { HeadOrderByInput } from "./HeadOrderByInput";

export type HeadFindManyArgs = {
  where?: HeadWhereInput;
  orderBy?: Array<HeadOrderByInput>;
  skip?: number;
  take?: number;
};
