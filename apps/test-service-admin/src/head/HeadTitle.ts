import { Head as THead } from "../api/head/Head";

export const HEAD_TITLE_FIELD = "test";

export const HeadTitle = (record: THead): string => {
  return record.test?.toString() || String(record.id);
};
