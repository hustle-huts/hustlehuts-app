import BottomNavbar from "@/components/bottomNavbar/bottom-navbar";
import ProfileBox from "@/components/profile/ProfileBox";
import { PageName } from "@/components/shared/utils/constants";
import TopBanner from "@/components/topBanner/top-banner";
import styles from "@/styles/Profile.module.css";

export default function ProfilePage() {
  return (
    <>
      <TopBanner currentPage={PageName.PROFILE} />
      <div className={styles.container}>
        <ProfileBox className={styles.profileCard} />
        {/* <LinearProgress variant="determinate" value={50} /> */}
        {/* <CafeItem isOpen /> */}
      </div>
      <BottomNavbar currentPage={PageName.PROFILE} />
    </>
  );
}
