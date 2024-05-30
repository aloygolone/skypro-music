import Image from "next/image";
import styles from "./SideBarPlaylists.module.css";
import Link from "next/link";

export default function SideBarPlaylists() {
  return (
    <div className={styles.sidebarBlock}>
      <div className={styles.sidebarList}>
        <div className={styles.sidebarItem}>
          <Link className={styles.sidebarLink} href="/tracks/category/1">
            <Image
              className={styles.sidebarImg}
              src="/img/playlist01.png"
              alt="Плейлист дня"
              width={250}
              height={150}
            />
          </Link>
        </div>
        <div className={styles.sidebarItem}>
          <Link className={styles.sidebarLink} href="/tracks/category/2">
            <Image
              className={styles.sidebarImg}
              src="/img/playlist02.png"
              alt="100 танцевальных хитов"
              width={250}
              height={150}
            />
          </Link>
        </div>
        <div className={styles.sidebarItem}>
          <Link className={styles.sidebarLink} href="/tracks/category/3">
            <Image
              className={styles.sidebarImg}
              src="/img/playlist03.png"
              alt="Инди заряд"
              width={250}
              height={150}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
