import styles from "./SkeletonBlocks.module.css";

export function PlayerBarSkeleton() {
  return (
    <>
      <div className={styles.notesSkel}></div>
      <div className={styles.singerSongBlock}>
        <div className={styles.skeleton}></div>
        <div className={styles.skeleton}></div>
      </div>
    </>
  );
}

export function NotesSkeleton() {
  return <div className={styles.notesSkel}></div>;
}

export function TitleSkeleton() {
  return <div className={styles.titleSkel}></div>;
}

export function AuthorSkeleton() {
  return <div className={styles.authorSkel}></div>;
}

export function AlbumSkeleton() {
  return <div className={styles.albumSkel}></div>;
}

export function PlaylistSkeleton() {
  return <div className={styles.playlistSkel}></div>;
}
