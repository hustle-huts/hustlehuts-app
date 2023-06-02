import CafeItem from "@/components/cafes/cafe-item";
import ProfileBox from "@/components/profile/ProfileBox";
import { LinearProgress } from "@mui/material";

import styles from "@/styles/Profile.module.css";

export default function ProfilePage() {
  return (
    <div className={styles.container}>
      <div className={styles.profileContainer}>
        <ProfileBox />
        <LinearProgress variant="determinate" value={50} />
        <CafeItem isOpen />
      </div>
    </div>
  );
}
