import { google } from "googleapis";

async function getGoogleSheets() {
  const auth = await google.auth.getClient({
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return google.sheets({
    version: "v4",
    auth,
  });
}

export async function getSheet() {
  const gSheets = await getGoogleSheets();

  const response = await gSheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range: "Sheet1!A:H",
  });

  return response.data.values;
}

export async function updateRow(payload: Record<string, any>) {
  const gSheets = await getGoogleSheets();
  const range = `Sheet1!A${payload.id + 1}:H${payload.id + 1}`;

  const response = await gSheets.spreadsheets.values.update({
    spreadsheetId: process.env.SHEET_ID,
    range,
    requestBody: {
      majorDimension: "ROWS",
      range,
      values: [convertToRow(payload)],
    },
    valueInputOption: "RAW",
  });

  return response.data;
}

function convertToRow(payload: Record<string, any>) {
  const { accompaniedBy } = payload;

  return [
    payload.id,
    payload.fullname,
    payload.isGoing,
    payload.mobileNumber,
    payload.emailAddress,
    payload.tabletNumber || "",
    accompaniedBy.length ? JSON.stringify(accompaniedBy) : "",
    payload.reason || "",
  ];
}
