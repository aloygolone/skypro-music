import { getTracks } from "@/api/tracks";
import Filter from "../Filter/Filter";
import PlaylistHeader from "../PlaylistHeader/PlaylistHeader";
import Search from "../Search/Search";
import Track from "../Track/Track";
import styles from "./CenterBlock.module.css";
import { TrackType } from "@/types";

export default async function CenterBlock() {
  let tracksData: TrackType[];
  try {
    tracksData = await getTracks();
  } catch (error: any) {
    throw new Error(error.message);
  }
  return (
    <div className={styles.mainCenterblock}>
      <Search />
      <h2 className={styles.centerblockH2}>Треки</h2>
      <Filter />
      <div className={styles.centerblockContent}>
        <PlaylistHeader />
        <div className={styles.contentPlaylist}>
          {tracksData.map((track) => (
            <Track key={track.id} track={track} tracksData={tracksData} />
          ))}
        </div>
      </div>
    </div>
  );
}
