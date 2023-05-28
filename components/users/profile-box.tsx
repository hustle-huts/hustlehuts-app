import styles from "./profile-box.module.css";
import UserImage from "../../public/images/user-image.png";
import ArrowRight from "../../public/images/arrow-right.png";
import Image from "next/image";
export default function ProfileBox() {
  return (
    <button className={styles.container}>
      <Image
        className={styles.image}
        style={{ width: "56px", height: "56px", objectFit: "contain" }}
        alt=""
        src={UserImage}
        width="600"
        height="300"
      />
      <div className={styles.username}>
        <h3 className={styles.name}>Vanessa</h3>
        <h3 className={styles.desc}>View your profile</h3>
      </div>
      <Image
        className={styles.arrow}
        style={{ width: "7%", height: "auto", objectFit: "contain" }}
        alt=""
        src={ArrowRight}
        width="600"
        height="300"
      />
    </button>
  );
}
