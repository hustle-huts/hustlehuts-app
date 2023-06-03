import Image from "next/image";

import LocationPointer from "@/public/images/arrow.png";
import SignUp1 from "@/public/images/signup1.png";
import SignUp2 from "@/public/images/signup2.png";
import SignUp3 from "@/public/images/signup3.png";
import SignUpCircles from "@/public/images/signupcircles.png";
import SignUpBgm from "@/public/images/signupheader.png";
import styles from "@/styles/SignUpHeader.module.css";

export default function SignUpHeader() {
  return (
    <div className={styles.container}>
      <Image
        className={styles.circleTopLeft}
        style={{ width: "20%", height: "20%", objectFit: "contain" }}
        alt=""
        src={SignUpCircles}
        width="600"
        height="300"
      />
      <Image
        className={styles.circleCenter}
        style={{ width: "15%", height: "15%", objectFit: "contain" }}
        alt=""
        src={SignUpCircles}
        width="600"
        height="300"
      />
      <Image
        className={styles.signup1}
        style={{ width: "20%", height: "20%", objectFit: "contain" }}
        alt=""
        src={SignUp1}
        width="600"
        height="300"
      />
      <Image
        className={styles.arrow}
        style={{ width: "8%", height: "8%", objectFit: "contain" }}
        alt=""
        src={LocationPointer}
        width="600"
        height="300"
      />
      <Image
        className={styles.signup2}
        style={{ width: "25%", height: "17%", objectFit: "contain" }}
        alt=""
        src={SignUp2}
        width="600"
        height="300"
      />
      <Image
        className={styles.signup3}
        style={{ width: "10%", height: "10%", objectFit: "contain" }}
        alt=""
        src={SignUp3}
        width="600"
        height="300"
      />
      <Image
        className={styles.line}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          position: "absolute",
        }}
        alt=""
        src={SignUpBgm}
        width="600"
        height="300"
      />
      <h1 className={styles.title}>Sign Up</h1>
    </div>
  );
}
