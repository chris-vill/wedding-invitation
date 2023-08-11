import * as T from "./types";

export async function getSheet() {
  try {
    const { data } = await useFetch<{
      data: T.Guest[];
      status: "OK" | "KO";
    }>("/api/guests", {
      method: "GET",
    });

    return toRaw(data.value);
  } catch (err) {
    console.log(err);
  }
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
