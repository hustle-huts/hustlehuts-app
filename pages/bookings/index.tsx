import Image from "next/image";
import Link from "next/link";

import BookingItem from "@/components/bookings/booking-item";
import BookingsBar from "@/components/bookings/bookings-bar";
import BottomNavbar from "@/components/bottomNavbar/bottom-navbar";
import { PageName } from "@/components/shared/utils/constants";
import TopBanner from "@/components/topBanner/top-banner";

import SendIcon from "../../public/images/bookings-send.svg";
import styles from "../../styles/Bookings.module.css";

export default function BookingsPage() {
  return (
    <>
      <TopBanner currentPage={PageName.BOOK} />
      <div className={styles.container}>
        <div className={styles.bookingContainer}>
          <BookingsBar />
          <p className={styles.title}>My Booking List</p>

          <div className={styles.cafeContainer}>
            {/* <BookingsList userId=""></BookingsList> */}
            <BookingItem />
          </div>

          <div>
            <p className={styles.title}>Need to cancel?</p>

            <Link href="mailto:admin@hustlehuts.com">
              <button className={styles.contactButton}>
                <Image className={styles.contactIcon} alt="Contact Icon" src={SendIcon} />
                <p className={styles.contactText}>
                  Send us an email at <span className={styles.emailText}>admin@hustlehuts.com</span>
                </p>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <BottomNavbar currentPage={PageName.BOOK} />
    </>
  );
}
