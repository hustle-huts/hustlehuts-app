import styles from '../../styles/Bookings.module.css';
import CafeItem from '@/components/cafes/cafe-item';
import BottomNavbar from '@/components/bottomNavbar/bottom-navbar';
import TopBanner from '@/components/topBanner/top-banner';
import BookingsBar from '@/components/users/bookings-bar';
import { LinearProgress } from '@mui/material';

export default function BookingsPage() {
    return (
        <div className={styles.container}>
            <TopBanner currentPage='book' />
            <div className={styles.bookingContainer}>
                <BookingsBar />
                <h1 className={styles.title}>
                    My Booking List
                </h1>
                <div className={styles.cafeContainer} >
                    <CafeItem isOpen />
                </div>
                
                <h1 className={styles.title}>
                    Need to cancel?
                </h1>
            </div>
            <BottomNavbar currentPage="book" />
        </div>
    );
}