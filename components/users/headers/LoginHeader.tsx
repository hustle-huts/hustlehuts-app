import Image from "next/image";

import LocationPointer from "@/public/images/arrow.svg";
import LogIn1 from "@/public/images/login1.svg";
import LogIn2 from "@/public/images/login2.svg";
import SignUp1 from "@/public/images/signup1.svg";
import SignUp2 from "@/public/images/signup2.svg";
import SignUp3 from "@/public/images/signup3.svg";
import styles from "@/styles/LoginHeader.module.css";

export default function LoginHeader() {
  return (
    <div className={styles.container}>
      <Image className={styles.login1} style={{ objectFit: "contain" }} alt="" src={LogIn1} />
      <Image className={styles.login2} style={{ objectFit: "contain" }} alt="" src={LogIn2} />
      <Image className={styles.signup1} style={{ objectFit: "contain" }} alt="" src={SignUp1} />
      <Image className={styles.arrow} style={{ objectFit: "contain" }} alt="" src={LocationPointer} />
      <Image className={styles.signup2} style={{ objectFit: "contain" }} alt="" src={SignUp2} />
      <Image className={styles.signup3} style={{ objectFit: "contain" }} alt="" src={SignUp3} />
      <h1 className={styles.title}>Log In</h1>
    </div>
  );
}
