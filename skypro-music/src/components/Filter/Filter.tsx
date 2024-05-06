"use client";

import styles from "./Filter.module.css";
import FilterItem from "./FilterItem/FilterItem";
import { useState } from "react";
import { filters, orderList } from "./data";
import { TrackType } from "@/types";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setFilters, setInitialTracks } from "@/store/features/playlistSlice";

export default function Filter({ tracksData }: { tracksData: TrackType[] }) {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const dispatch = useAppDispatch();

  const authorsList = useAppSelector(
    (state) => state.playlist.filterOptions.author
  );
  const genreList = useAppSelector(
    (state) => state.playlist.filterOptions.genre
  );

  function handleFilterClick(newFilter: string) {
    if (newFilter !== activeFilter) {
      dispatch(setInitialTracks({ initialTracks: tracksData }));
      dispatch(setFilters({ author: [], genre: [] }));
    }
    setActiveFilter((prev) => (prev === newFilter ? null : newFilter));
  }

  return (
    <div className={styles.centerblockFilter}>
      <div className={styles.filterTitle}>Искать по:</div>

      <FilterItem
        list={authorsList}
        isOpened={activeFilter === filters[0].title}
        handleFilterClick={handleFilterClick}
        title={filters[0].title}
        value={filters[0].value}
        tracksData={tracksData}
      />
      <FilterItem
        list={genreList}
        isOpened={activeFilter === filters[1].title}
        handleFilterClick={handleFilterClick}
        title={filters[1].title}
        value={filters[1].value}
        tracksData={tracksData}
      />
      <FilterItem
        list={orderList}
        isOpened={activeFilter === filters[2].title}
        handleFilterClick={handleFilterClick}
        title={filters[2].title}
        value={filters[2].value}
        tracksData={tracksData}
      />
    </div>
  );
}
