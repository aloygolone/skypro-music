"use client";

import styles from "./page.module.css";
import Nav from "@/components/Nav/Nav";
import CenterBlock from "@/components/CenterBlock/CenterBlock";
import MainSideBar from "@/components/MainSideBar/MainSideBar";
import PlayerBar from "@/components/PlayerBar/PlayerBar";
import { useState } from "react";
import { TrackType } from "@/types";

export default function Home() {
  const [track, setTrack] = useState<TrackType | null>(null);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <Nav />
          <CenterBlock setTrack={setTrack}/>
          <MainSideBar />
        </main>
        {track && <PlayerBar track={track}/>}
        <footer className="footer" />
      </div>
    </div>
  );
}
