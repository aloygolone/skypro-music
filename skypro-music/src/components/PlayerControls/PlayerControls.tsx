import { PlayerControlsType } from "@/types";
import styles from "./PlayerControls.module.css";

export default function PlayerControls({
  togglePlay,
  isPlaying,
  isLooping,
  toggleLoop,
}: PlayerControlsType) {
  return (
    <div className={styles.playerControls}>
      <div className="player__btn-prev">
        <svg className={styles.playerBtnPrevSvg}>
          <use xlinkHref="/img/icon/sprite.svg#icon-prev" />
        </svg>
      </div>
      <div onClick={togglePlay} className="player__btn-play _btn">
        <svg className={styles.playerBtnPlaySvg}>
          <use
            xlinkHref={`/img/icon/sprite.svg#${
              isPlaying ? "icon-pause" : "icon-play"
            }`}
          />
        </svg>
      </div>
      <div className="player__btn-next">
        <svg className={styles.playerBtnNextSvg}>
          <use xlinkHref="/img/icon/sprite.svg#icon-next" />
        </svg>
      </div>
      <div onClick={toggleLoop} className="player__btn-repeat _btn-icon">
        <svg className={styles.playerBtnRepeatSvg}>
        <use
            xlinkHref={`/img/icon/sprite.svg#${
              isLooping ? "icon-repeat-toggled" : "icon-repeat"
            }`}
          />
        </svg>
      </div>
      <div className="player__btn-shuffle _btn-icon">
        <svg className={styles.playerBtnShuffleSvg}>
          <use xlinkHref="/img/icon/sprite.svg#icon-shuffle" />
        </svg>
      </div>
    </div>
  );
}
