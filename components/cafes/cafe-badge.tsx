import Image from "next/image";

import Badge from "../../public/images/award.png";
import styles from "./cafe-badge.module.css";

export default function CafeBadge() {
  return (
    <div className={styles.container}>
      <Image style={{ width: "80%", height: "80%", objectFit: "contain" }} alt="" src={Badge} width="30" height="30" />
    </div>
  );
}
