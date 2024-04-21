import { TrackType } from "@/types";
import styles from "./Track.module.css";
import { durationFormat } from "@/utils";

export default function Track({ name, author, album, duration_in_seconds, onClick }: TrackType) {
  return (
    <div onClick={onClick} className={styles.playlistItem}>
      <div className={styles.playlistTrack}>
        <div className={styles.trackTitle}>
          <div className={styles.trackTitleImage}>
            <svg className={styles.trackTitleSvg}>
              <use xlinkHref="img/icon/sprite.svg#icon-note" />
            </svg>
          </div>
          <div className={styles.trackTitleText}>
            <span className={styles.trackTitleLink}>
              {name} <span className={styles.trackTitleSpan} />
            </span>
          </div>
        </div>
        <div className={styles.trackAuthor}>
          <span className={styles.trackAuthorLink}>
            {author}
          </span>
        </div>
        <div className={styles.trackAlbum}>
          <span className={styles.trackAlbumLink}>
            {album}
          </span>
        </div>
        <div className={styles.trackTime}>
          <svg className={styles.trackTimeSvg}>
            <use xlinkHref="img/icon/sprite.svg#icon-like" />
          </svg>
          <span className={styles.trackTimeText}>{durationFormat(duration_in_seconds)}</span>
        </div>
      </div>
    </div>
  );
}
