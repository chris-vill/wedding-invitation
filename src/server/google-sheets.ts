import { google } from "googleapis";
// import * as path from "path";
// import { fileURLToPath } from "url";

// const __dirname = path.dirname(fileURLToPath(import.meta.url));

// /opt/build/repo

async function getGoogleSheets() {
  // console.log("======================");
  // console.log(__dirname + process.env.SECRETS_PATH);
  // console.log("======================");

  const auth = await google.auth.getClient({
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    keyFile: "../../opt/build/repo/dist/secrets.json", //process.env.SECRETS_PATH,
  });

  return google.sheets({
    version: "v4",
    auth,
  });
}

export async function getSheet() {
  const gSheets = await getGoogleSheets();

  const response = await gSheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: "Sheet1!A:H",
  });

  return response.data.values;
}

export async function updateRow(payload: Record<string, any>) {
  const gSheets = await getGoogleSheets();
  const range = `Sheet1!A${payload.id + 1}:H${payload.id + 1}`;

  const response = await gSheets.spreadsheets.values.update({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
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
