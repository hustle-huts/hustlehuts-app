import styles from './booking-item.module.css';
import Button from '../ui/button';
import Image from 'next/image';
import { MouseEventHandler } from 'react';
import Booking from '../../public/images/mocked-cafe-for-booking.png'
interface props {
    bookingId?: Number;
    imageLink?: String;
    cafeName?: String;
    modalHandler: MouseEventHandler<HTMLDivElement>;
    noOfPax?: Number;
    reservationDate?: String;
    reservationTime?: String;
    noOfCredits?: Number;
}

const CafeItem:React.FC<props> = (props) => {
    return (
      <div>
        <div onClick={props.modalHandler} className={styles.card} style={{ backgroundImage: `url(${Booking.src})` }}>
            <div className={styles.badge}>
                <p className={styles.badgeText}>4 Credits</p>
            </div>
            <div className={styles.headingContainer} >
                <div className={styles.leftHeading}>
                    <p className={styles.topleftHeadingText}>Twenty Eight Cafe</p>
                    <p className={styles.bottomleftHeadingText}>2 pax</p>
                </div>
                <div className={styles.rightHeading}>
                    <p className={styles.rightHeadingText}>28/01</p>
                    <p className={styles.rightHeadingText}>4pm-6pm</p>
                </div>
            </div>
        </div>
        <div className={styles.rightHeading}>
          <p className={styles.rightHeadingText}>28/01</p>
          <p className={styles.rightHeadingText}>4pm-6pm</p>
        </div>
      </div>
  );
};

export default CafeItem;
