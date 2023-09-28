import { Head as THead } from "../api/head/Head";

export const HEAD_TITLE_FIELD = "id";

export const HeadTitle = (record: THead): string => {
  return record.id?.toString() || String(record.id);
};
