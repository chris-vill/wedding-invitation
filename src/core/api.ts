import * as T from "./types";

export async function getSheet() {
  const { data } = await useFetch<{
    data: T.Guest[];
    status: "OK" | "KO";
  }>("/api/guests", {
    method: "GET",
  });

  return toRaw(data.value);
}

export async function updateRow(payload: Partial<T.Guest>) {
  const { data } = await useFetch<{
    data: T.Guest[];
    status: "OK" | "KO";
  }>("/api/guest", {
    method: "PUT",
    body: payload,
  });

  return toRaw(data.value);
}
