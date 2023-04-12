import Button from "@/components/ui/button";
import Image from "next/image";
import styles from "../../../styles/SignupSuccess.module.css";

export default function SignUpSuccess() {
  return (
    <div className={styles.container}>
      <Image
        alt=""
        src="/images/signupSuccess.png"
        style={{
          width: "100%",
          height: "200%",
          margin: "30px 40px 0px 0px",
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
      </div>
      <div style={{ padding: "30px 50px" }}>
        <Button>Continue</Button>
      </div>
    </div>
  );
}
