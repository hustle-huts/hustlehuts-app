import styles from "../../styles/Bookings.module.css";
import BookingItem from "@/components/bookings/booking-item";
import BottomNavbar from "@/components/bottomNavbar/bottom-navbar";
import TopBanner from "@/components/topBanner/top-banner";
import BookingsBar from "@/components/bookings/bookings-bar";
import SendIcon from "../../public/images/bookings-send.svg";
import Image from "next/image";
import Link from "next/link";
import { Typography } from "@mui/material";

export default function BookingsPage() {
  return (
    // <div className={styles.container}>
    //   <TopBanner currentPage="book" />
    //   <div className={styles.bookingContainer}>
    //     <BookingsBar />
    //     <p className={styles.title}>My Booking List</p>

    //     <div className={styles.cafeContainer}>
    //       {/* <BookingsList userId=""></BookingsList> */}
    //       <BookingItem />
    //     </div>

    //     <div>
    //       <p className={styles.title}>Need to cancel?</p>

    //       <Link href="mailto:admin@hustlehuts.com">
    //         <button className={styles.contactButton}>
    //           <Image className={styles.contactIcon} alt="Contact Icon" src={SendIcon} />
    //           <p className={styles.contactText}>
    //             Send us an email at <span className={styles.emailText}>admin@hustlehuts.com</span>
    //           </p>
    //         </button>
    //       </Link>
    //     </div>
    //   </div>
    //   <BottomNavbar currentPage="book" />
    // </div>
    // use MUI
    <div>
      <TopBanner currentPage="book" />
      <BookingsBar />
      <Typography variant="h6" component="div" sx={{ fontWeight: "800", fontSize: "1.1rem", color: "black", marginLeft: "5%", marginTop: "1vh" }}>
        My Booking List
      </Typography>
      <BottomNavbar currentPage="book" />
    </div>
  );
}
