import Head from "next/head";
import styles from "@/styles/Home.module.css";
import HomeComponent from "@/components/users/HomeComponent";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <HomeComponent />
      </main>
    </>
  );
}
