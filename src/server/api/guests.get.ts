import { getSheet } from "../google-sheets";

export default defineEventHandler(async (event) => {
  const sheet = await getSheet();

  if (!sheet) {
    return {
      data: null,
      status: "KO",
    };
  }

  const columnHeaders = sheet.shift() as any[];

  const guestList = sheet.map((row) =>
    columnHeaders.reduce((acc, property: keyof typeof guestPropertyMap, i) => {
      acc[property] = guestPropertyMap[property](row[i]);

      return acc;
    }, {})
  );

  return {
    data: guestList,
    status: "OK",
  };
});

const guestPropertyMap = {
  id: (value: string) => (value ? +value : -1),
  fullname: (value: string) => value,
  isGoing: (value: string) =>
    value === "TRUE" ? true : value === "FALSE" ? false : null,
  mobileNumber: (value: string) => value,
  emailAddress: (value: string) => value,
  tableNumber: (value: string) => +value,
  accompaniedBy: (value: string) => (value ? JSON.parse(value) : []),
  reason: (value: string) => value,
};
