import { google } from "googleapis";

export default defineEventHandler(async (event) => {
  const auth = await google.auth.getClient({
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({
    version: "v4",
    auth,
  });

  const body = await readBody(event);
  console.log("===========================");
  console.log(body);
  console.log("===========================");

  const response = await sheets.spreadsheets.values.update({
    spreadsheetId: process.env.SHEET_ID,
    range: "Sheet1!A2:B2",
    requestBody: {
      majorDimension: "ROWS",
      range: "Sheet1!A2:B2",
      values: [["1", "Melanie Sambajon"]],
    },
    valueInputOption: "RAW",
  });

  return response;
});

// await useFetch("/api/sheets/update", {
//   method: "POST",
//   body: {
//     isGoing: true,
//     mobileNumber: 123123,
//     emailAddress: "m.s@gmail.com",
//   },
// });
/*
  GET guests
    - list of guests with column header
  
  PUT guest
    - update specific guest
*/
