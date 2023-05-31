import styles from "./top-banner.module.css";
import Image from "next/image";
import cart from "../../public/images/cart.svg";
import leftEclipse from "../../public/images/top-banner-left-eclipse.png";
import middleBottomEclipse from "../../public/images/top-banner-middle-bottom-eclipse.svg";
import middleTopEclipse from "../../public/images/top-banner-middle-top-eclipse.svg";
import rightEclipse from "../../public/images/top-banner-right-eclipse.svg";
import { useRouter } from "next/router";

interface props {
  currentPage?: string;
  userId?: number;
}

const TopBanner: React.FC<props> = (props) => {
  const router = useRouter();

  const handleNavItemClick = () => {
    // router.push(`/bookings/${props.userId}`); // adjust this code when we confirm the urls
  };

  return (
    <div className={styles.background}>
      <div className={styles.header}>
        {props.currentPage === "home" && <p>Home</p>}
        {props.currentPage === "book" && <p>Bookings</p>}
        {props.currentPage === "profile" && <p>Profile</p>}
      </div>
      <a href="#" onClick={() => handleNavItemClick()}>
        <Image className={styles.cart} alt="Cart button" src={cart} />
      </a>
      <Image className={styles.leftEclipse} alt="Background eclipse design" src={leftEclipse} />
      <Image className={styles.middleTopEclipse} alt="Background eclipse design" src={middleTopEclipse} />
      <Image className={styles.middleBottomEclipse} alt="Background eclipse design" src={middleBottomEclipse} />
      <Image className={styles.middleLeftEclipse} alt="Background eclipse design" src={middleTopEclipse} />
      <Image className={styles.rightEclipse} alt="Background eclipse design" src={rightEclipse} />
    </div>
  );
};

export default TopBanner;
