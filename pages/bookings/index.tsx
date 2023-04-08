import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import styles from '../../styles/Bookings.module.css';
import CafeItem from '@/components/cafes/cafe-item';
import BottomNavbar from '@/components/bottomNavbar/bottom-navbar';
import TopBanner from '@/components/topBanner/top-banner';
import { LinearProgress } from '@mui/material';

export default function BookingsPage() {
    return (
        <div className={styles.container}>
            <TopBanner currentPage='book' />
            <div className={styles.profileContainer}>
                <LinearProgress variant="determinate" value={50} />
                <CafeItem isOpen />
            </div>
            <BottomNavbar currentPage="book" />
        </div>
    );
}