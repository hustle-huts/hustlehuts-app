import styles from './bottom-navbar.module.css';
import Image from 'next/image'
import { useRouter } from 'next/router'
import book from '../../public/images/navbar-book.svg'
import bookSelected from '../../public/images/navbar-book-selected.svg'
import home from '../../public/images/navbar-home.svg'
import homeSelected from '../../public/images/navbar-home-selected.svg'
import profile from '../../public/images/navbar-profile.svg'
import profileSelected from '../../public/images/navbar-profile-selected.svg'

interface props {
    currentPage?: string;
    userId?: number;
}

const BottomNavbar:React.FC<props> = (props) => {

    const router = useRouter();

    const handleNavItemClick = (pageName: string) => {
        // router.push(`/users/${pageName}/${props.userId}`); // adjust this code when we confirm the urls
    };

    return (
        <footer className={styles.navbar}>
            <div className={styles.iconContainer}>
                <a href="#" onClick={() => handleNavItemClick('home')}>
                    {props.currentPage !== 'home' && (
                        <Image alt="homepage navbar icon" src={home} width="600" height="300" />
                    )}
                    {props.currentPage === 'home' && (
                        <Image alt="homepage navbar icon" src={homeSelected} width="600" height="300" />
                    )}
                </a>
            </div>
            <div className={styles.iconContainer}>
                <a href="#" onClick={() => handleNavItemClick('book')}>
                    {props.currentPage !== 'book' && (
                        <Image alt="booking page navbar icon" src={book} width="600" height="300" />
                    )}
                    {props.currentPage === 'book' && (
                        <Image alt="booking page navbar icon" src={bookSelected} width="600" height="300" />
                    )}
                </a>
            </div>
            <div className={styles.iconContainer}>
                <a href="#" onClick={() => handleNavItemClick('profile')}>
                    {props.currentPage !== 'profile' && (
                        <Image alt="profile page navbar icon" src={profile} width="600" height="300" />
                    )}
                    {props.currentPage === 'profile' && (
                        <Image alt="profile page navbar icon" src={profileSelected} width="600" height="300" />
                    )}
                </a>
            </div>
        </footer>
    );
}

export default BottomNavbar;