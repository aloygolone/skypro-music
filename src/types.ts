import { ChangeEvent } from "react";

export type FilterItemType = {
  title: string;
  value: "author" | "genre" | "order";
  handleFilterClick: (newFilter: string) => void;
  isOpened: boolean;
  list: string[];
};

export type UserType = {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  refresh: string;
};

export type TrackType = {
  isFavorite?: boolean;
  _id: number;
  name: string;
  author: string;
  release_date: string;
  genre: string;
  duration_in_seconds: number;
  album: string;
  logo: string | null;
  track_file: string;
  stared_user: string[];
  onClick: () => void;
};

export type ProgressType = {
  max: number;
  value: number;
  step: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export type PlayerControlsType = {
  togglePlay: () => void;
  isPlaying: boolean;
  isLooping: boolean;
  toggleLoop: () => void;
};

export type VolumeType = {
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
