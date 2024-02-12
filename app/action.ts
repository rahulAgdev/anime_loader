"use server";

export const fetchAnime = async (page: number) => {
  // make a call to the api and return the data
  const res = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`
  );
  const data = await res.json();
  return data;
};
