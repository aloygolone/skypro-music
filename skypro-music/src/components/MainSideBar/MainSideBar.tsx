import SideBarPlaylists from "../SideBarPlaylists/SideBarPlaylist";
import UserSideBar from "../UserSideBar/UserSideBar";
import styles from "./MainSideBar.module.css";

type MainSideBarType = {
  isLoading: boolean
}

export default function MainSideBar({isLoading}: MainSideBarType) {
  return (
    <div className={styles.mainSidebar}>
      <UserSideBar />
      <SideBarPlaylists isLoading={isLoading} />
    </div>
  );
}
