"use client";

import MainSideBar from "@/components/MainSideBar/MainSideBar";
import Nav from "@/components/Nav/Nav";
import PlayerBar from "@/components/PlayerBar/PlayerBar";
import styles from "./layout.module.css";
import Search from "@/components/Search/Search";
import { useState } from "react";

export default function TracksLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 3500);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <Nav />
          <div className={styles.mainCenterblock}>
            <Search />
            <h2 className={styles.centerblockH2}>Треки</h2>
            <div className={styles.centerblockContent}>{children}</div>
          </div>
          <MainSideBar isLoading={isLoading}/>
        </main>
        <PlayerBar/>
        <footer className="footer" />
      </div>
    </div>
  );
}
