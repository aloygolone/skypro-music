const apiUrlAllTracks =
  "https://skypro-music-api.skyeng.tech/catalog/track/all/";
const apiUrlPlaylist =
  "https://skypro-music-api.skyeng.tech/catalog/selection/";

export async function getTracks() {
  const res = await fetch(apiUrlAllTracks);

  if (!res.ok) {
    throw new Error("Ошибка при получении данных");
  }

  return res.json();
}

export async function getPlaylist(id: string) {
  const res = await fetch(apiUrlPlaylist + id);

  if (!res.ok) {
    throw new Error("Ошибка при получении данных");
  }

  const data = await res.json();
  return data.items;
}
