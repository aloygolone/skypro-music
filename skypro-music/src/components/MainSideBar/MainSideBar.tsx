import dynamic from "next/dynamic";
import SideBarPlaylists from "../SideBarPlaylists/SideBarPlaylist";
// import UserSideBar from "../UserSideBar/UserSideBar";
import styles from "./MainSideBar.module.css";

const UserSideBar = dynamic(() => import ("@/components/UserSideBar/UserSideBar"), {
  ssr: false
})


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
