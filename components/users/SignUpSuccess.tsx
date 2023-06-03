import Image from "next/image";
import { useRouter } from "next/router";

import Button from "@/components/shared/Button";
import styles from "@/styles/SignUpSuccess.module.css";

const SignUpSuccess = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Image
        alt=""
        src="/images/signupSuccess.png"
        style={{
          width: "100%",
          margin: "50px 80px 0px 0px",
          objectFit: "contain",
        }}
        width="600"
        height="300"
      />
      <div className={styles.textContainer}>
        <h1 className={styles.text}>Sign Up</h1>
        <h1 className={styles.text} style={{ color: "#DB9A5A" }}>
          Successful!
        </h1>
        <div style={{ padding: "30px 100px", height: "auto" }}>
          <Button onClick={() => router.push("/")}>Done</Button>
        </div>
      </div>
    </div>
  );
};

export default SignUpSuccess;
