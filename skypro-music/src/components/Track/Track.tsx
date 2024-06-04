"use client";

import { TrackType } from "@/types";
import styles from "./Track.module.css";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setCurrentTrack, setIsPlaying } from "@/store/features/playlistSlice";
import classNames from "classnames";
import { durationFormat } from "@/lib/durationFormat";
import { useEffect, useState } from "react";
import { setDislike, setLike } from "@/api/likes";
import {
  AlbumSkeleton,
  AuthorSkeleton,
  NotesSkeleton,
  TitleSkeleton,
} from "../SkeletonBlocks/SkeletonBlocks";
import { useRouter } from "next/navigation";
import { setUserData } from "@/store/features/authSlice";

type PlaylistType = {
  track: TrackType;
  tracksData: TrackType[];
  isFavorite?: boolean;
  isLoading?: boolean;
};

export default function Track({
  track,
  tracksData,
  isFavorite,
  isLoading,
}: PlaylistType) {
  const currentTrack = useAppSelector((state) => state.playlist.currentTrack);
  const isPlaying = useAppSelector((state) => state.playlist.isPlaying);
  const userData = useAppSelector((state) => state.auth.userData);
  const { name, author, album, duration_in_seconds, id, stared_user } = track;
  const isLikedByUser =
    isFavorite || stared_user.find((u) => u.id === userData?.id);
  const [isLiked, setIsLiked] = useState(!!isLikedByUser);
  const router = useRouter();

  const isCurrentTrack = currentTrack ? currentTrack.id === id : false;

  const dispatch = useAppDispatch();

  const HandleTrackClick = () => {
    dispatch(setCurrentTrack({ track: { ...track, isFavorite }, tracksData }));
    dispatch(setIsPlaying(true));
  };

  const handleLikeClick = () => {
    isLiked
      ? setDislike(userData?.access, id)
          .then(() => {})
          .catch((error) => {
            if (error) {
              const errorData = JSON.parse(error.message);
              if (errorData.status === 401) {
                
                dispatch(setUserData(null));
                localStorage.removeItem("user");
                localStorage.removeItem("token");
                router.push("/signin");
              }
            }
          })
      : setLike(userData?.access, id)
          .then(() => {})
          .catch((error) => {
            if (error) {
              const errorData = JSON.parse(error.message);
              if (errorData.status === 401) {
                dispatch(setUserData(null));
                localStorage.removeItem("user");
                localStorage.removeItem("token");
                router.push("/signin");
              }
            }
          });
    setIsLiked(!isLiked);
  };

  useEffect(() => {
    setIsLiked(!!isLikedByUser);
  }, [track, isFavorite, userData, isLikedByUser]);

  return (
    <div className={styles.playlistItem}>
      <div className={styles.playlistTrack}>
        <div className={styles.trackTitle}>
          {isLoading ? (
            <NotesSkeleton />
          ) : (
            <div onClick={HandleTrackClick} className={styles.trackTitleImage}>
              <svg
                className={classNames(styles.trackTitleSvg, {
                  [styles.trackTitleSvgPlaying]: isPlaying && isCurrentTrack,
                })}
              >
                <use
                  xlinkHref={`/img/icon/sprite.svg#${
                    isCurrentTrack ? "icon-isplaying" : "icon-note"
                  }`}
                />
              </svg>
            </div>
          )}
          {isLoading ? (
            <TitleSkeleton />
          ) : (
            <div className={styles.trackTitleText}>
              <span className={styles.trackTitleLink}>
                {name} <span className={styles.trackTitleSpan} />
              </span>
            </div>
          )}
        </div>
        {isLoading ? (
          <AuthorSkeleton />
        ) : (
          <div className={styles.trackAuthor}>
            <span className={styles.trackAuthorLink}>{author}</span>
          </div>
        )}
        {isLoading ? (
          <AlbumSkeleton />
        ) : (
          <>
            <div className={styles.trackAlbum}>
              <span className={styles.trackAlbumLink}>{album}</span>
            </div>
            <div onClick={handleLikeClick} className={styles.trackTime}>
              <svg className={styles.trackTimeSvg}>
                <use
                  xlinkHref={`/img/icon/sprite.svg#${
                    isLiked ? "icon-like-active" : "icon-like"
                  }`}
                />
              </svg>
              <span className={styles.trackTimeText}>
                {durationFormat(duration_in_seconds)}
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
