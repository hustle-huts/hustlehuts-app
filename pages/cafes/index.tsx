import styles from '../../styles/Cafes.module.css';
import CafeItem from '@/components/cafes/cafe-item';
import BottomNavbar from '@/components/bottomNavbar/bottom-navbar';
import TopBanner from '@/components/topBanner/top-banner';
import Link from 'next/link';

export default function AllCafes() {
  const cafes = [
    { id: 1, name: 'Cafe A', location: 'City X', credits: 5 },
    { id: 2, name: 'Cafe B', location: 'City Y', credits: 3 },
    { id: 3, name: 'Cafe C', location: 'City Z', credits: 4 },
  ];

  return (
    <div className={styles.container}>
      <TopBanner currentPage="cafes" />
      <div className={styles.cafesContainer}>
        <p className={styles.title}>Available Cafes</p>

        <div className={styles.cafeContainer}>
          {cafes.map((cafe) => (
            <CafeItem key={cafe.id} isOpen={false} />
          ))}
        </div>

        <div className={styles.contactSection}>
          <p className={styles.title}>Need assistance?</p>

          <Link href="mailto:admin@hustlehuts.com">
            <button className={styles.contactButton}>
              <span className={styles.contactText}>
                Contact us at <span className={styles.emailText}>admin@hustlehuts.com</span>
              </span>
            </button>
          </Link>
        </div>
      </div>
      <BottomNavbar currentPage="cafes" />
    </div>
  );
}

