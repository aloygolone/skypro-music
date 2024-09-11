const apiUrlAllTracks =
  "https://webdev-music-003b5b991590.herokuapp.com/catalog/track/all/";
const apiUrlPlaylist =
  "https://webdev-music-003b5b991590.herokuapp.com/catalog/selection/";

export async function getTracks() {
  const res = await fetch(apiUrlAllTracks);

  if (!res.ok) {
    throw new Error("Ошибка при получении данных");
  }

  return res.json();
}

export async function getPlaylist(id: string) {
  const res = await fetch(apiUrlPlaylist + id, { cache: "no-cache" });

  if (!res.ok) {
    throw new Error("Ошибка при получении данных");
  }

  const data = await res.json();
  return data.items;
}

export async function getFavoritesTracks(token: string) {
  const res = await fetch(
    "https://webdev-music-003b5b991590.herokuapp.com/catalog/track/favorite/all/",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!res.ok) {
    throw new Error(JSON.stringify(res.status));
  }
  const data = await res.json();
  return data;
}
