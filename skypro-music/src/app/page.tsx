import styles from "./page.module.css";
import Nav from "@/components/Nav/Nav";
import CenterBlock from "@/components/CenterBlock/CenterBlock";
import MainSideBar from "@/components/MainSideBar/MainSideBar";
import PlayerBar from "@/components/PlayerBar/PlayerBar";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <Nav />
          <CenterBlock />
          <MainSideBar />
        </main>
        <PlayerBar />
        <footer className="footer" />
      </div>
    </div>
  );
}
