import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import styles from "../../../styles/Profile.module.css";
import CafeItem from "@/components/cafes/cafe-item";
import ProfileBox from "@/components/users/profile-box";
import { LinearProgress } from "@mui/material";
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
