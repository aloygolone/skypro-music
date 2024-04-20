"use client";

import { ChangeEvent, useEffect, useRef, useState } from "react";
import PlayerControls from "../PlayerControls/PlayerControls";
import PlayerTrackNow from "../PlayerTrackNow/PlayerTrackNow";
import ProgressBar from "../ProgressBar/ProgressBar";
import VolumeBar from "../VolumeBar/VolumeBar";
import styles from "./PlayerBar.module.css";
import { TrackType } from "@/types";

type PlayerBarType = {
  track: TrackType;
};

export default function PlayerBar({ track }: PlayerBarType) {
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.5);
  const audioRef = useRef<null | HTMLAudioElement>(null);

  const duration = audioRef.current?.duration || 0;

  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.play();
    }
  });

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (currentTime === duration && duration !== 0) {
      audioRef.current?.pause();
      setIsPlaying(false);
    }
  }, [setIsPlaying, currentTime, duration]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying((prev) => !prev);
    }
  };

  const handleSeek = (event: ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.currentTime = Number(event.target.value);
    }
  };

  const handleVolume = (event: ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.volume = Number(event.target.value);
      setVolume(audioRef.current.volume);
    }
  };

  return (
    <div className={styles.bar}>
      <div className={styles.barContent}>
        <audio
          src={track.track_file}
          ref={audioRef}
          onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
        />
        <div className={styles.barPlayerProgress} />
        <ProgressBar
          max={duration}
          value={currentTime}
          step={0.01}
          onChange={handleSeek}
        />
        <div className={styles.barPlayerBlock}>
          <div className={styles.barPlayer}>
            <PlayerControls togglePlay={togglePlay} isPlaying={isPlaying} />
            <PlayerTrackNow track={track} />
          </div>
          <VolumeBar
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={handleVolume}
          />
        </div>
      </div>
    </div>
  );
}
