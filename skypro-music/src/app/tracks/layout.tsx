"use client";

import MainSideBar from "@/components/MainSideBar/MainSideBar";
import Nav from "@/components/Nav/Nav";
import PlayerBar from "@/components/PlayerBar/PlayerBar";
import styles from "./layout.module.css";
import Search from "@/components/Search/Search";
import Filter from "@/components/Filter/Filter";

export default function TracksLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <Nav />
          <div className={styles.mainCenterblock}>
            <Search />
            <h2 className={styles.centerblockH2}>Треки</h2>
            <div className={styles.centerblockContent}>
              <Filter />
              {children}
            </div>
          </div>
          <MainSideBar />
        </main>
        <PlayerBar />
        <footer className="footer" />
      </div>
    </div>
  );
}
