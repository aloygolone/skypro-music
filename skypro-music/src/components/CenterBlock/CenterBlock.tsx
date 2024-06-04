"use client";

import { TrackType } from "@/types";

import PlaylistHeader from "../PlaylistHeader/PlaylistHeader";
import Track from "../Track/Track";
import styles from "./CenterBlock.module.css";

export default function CenterBlock({
  tracks,
  playlist,
  isFavorite,
  isLoading,
}: {
  tracks: TrackType[];
  playlist: TrackType[];
  isFavorite?: boolean;
  isLoading: boolean;
}) {
  return (
    <>
      <PlaylistHeader />
      <div className={styles.contentPlaylist}>
        {tracks?.length === 0
          ? "Нет треков, удовлетворяющих условиям фильтра"
          : ""}
        {tracks?.map((track) => (
          <Track
            key={track.id}
            track={track}
            tracksData={playlist}
            isFavorite={isFavorite}
            isLoading={isLoading}
          />
        ))}
      </div>
    </>
  );
}
