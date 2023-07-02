import { updateRow } from "../google-sheets";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const response = await updateRow(body);

  return {
    data: response,
    status: "OK",
  };
});
