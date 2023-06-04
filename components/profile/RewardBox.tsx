import classNames from "classnames";
import Image from "next/image";
import { useRecoilValue } from "recoil";

import { IUser } from "@/models/user";
import { userState } from "@/recoil/auth/atom";
import styles from "@/styles/ProfileBox.module.css";

import ArrowRight from "../../public/images/arrow-right.svg";
import UserImage from "../../public/images/user-image.png";

export default function ProfileBox({ className }: { className?: string }) {
  const user = useRecoilValue<IUser>(userState);

  return (
    <div className={classNames(styles.container, className)}>
      <Image
        className={styles.image}
        style={{ width: "56px", height: "56px", objectFit: "contain" }}
        alt=""
        src={UserImage}
        width="600"
        height="300"
      />
      <div className={styles.username}>
        <h3 className={styles.name}>
          {user.first_name} {user.last_name}
        </h3>
        <p className={styles.desc}>View your profile</p>
      </div>
      <Image
        className={styles.arrow}
        style={{ width: "34px", height: "34px", objectFit: "contain" }}
        alt=""
        src={ArrowRight}
        width="0"
        height="0"
      />
    </div>
  );
}
