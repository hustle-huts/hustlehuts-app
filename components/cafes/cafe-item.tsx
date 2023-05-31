import styles from "./cafe-item.module.css";
import Button from "../ui/button";
import Image from "next/image";
import Booking from "../../public/images/booking-image.png";
import CafeBadge from "./cafe-badge";
interface props {
  className?: string;
  isOpen: boolean;
  modalHandler?: Function;
  closeHandler?: Function;
}

const CafeItem: React.FC<props> = (props) => {
  return (
    <div className={styles.card} style={{ backgroundImage: `url(${Booking.src})` }}>
      <div className={styles.titleContainer}>
        <h3 className={styles.title}>Home Coffee Roasters</h3>
      </div>
      <div className={styles.badge}>
        <CafeBadge />
        <h3 className={styles.badgeText}>2/2</h3>
      </div>
      <div className={styles.headingContainer}>
        <div className={styles.leftHeading}>
          <h3 className={styles.topleftHeadingText}>1 for 1 drinks </h3>
          <h3 className={styles.bottomleftHeadingText}>Any drinks from their regular menu</h3>
        </div>
        <div className={styles.rightHeading}>
          <div className={styles.redeem}>
            <h3 className={styles.rightHeadingText}>Redeemed</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CafeItem;
