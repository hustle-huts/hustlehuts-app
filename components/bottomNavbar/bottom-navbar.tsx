import Image from "next/image";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";

import { hasUserState } from "@/recoil/auth/selector";

import book from "../../public/images/navbar-book.svg";
import bookSelected from "../../public/images/navbar-book-selected.svg";
import home from "../../public/images/navbar-home.svg";
import homeSelected from "../../public/images/navbar-home-selected.svg";
import profile from "../../public/images/navbar-profile.svg";
import profileSelected from "../../public/images/navbar-profile-selected.svg";
import { PageName } from "../shared/utils/constants";
import styles from "./bottom-navbar.module.css";

interface BottomNavbarProps {
  currentPage?: PageName;
}

const BottomNavbar: React.FC<BottomNavbarProps> = ({ currentPage = PageName.HOME }) => {
  const router = useRouter();
  const isLoggedInUser = useRecoilValue(hasUserState);

  const handleNavItemClick = (pageName: PageName) => {
    switch (pageName) {
      case PageName.BOOK: {
        if (isLoggedInUser) {
          return router.push("/bookings");
        }
        return router.push("/login");
      }
      case PageName.PROFILE: {
        if (isLoggedInUser) {
          return router.push("/profile");
        }
        return router.push("/login");
      }
      case PageName.HOME:
      default:
        return router.push("/");
    }
  };

  return (
    <footer className={styles.navbar}>
      <div className={styles.iconContainer}>
        <a href="#" onClick={() => handleNavItemClick(PageName.HOME)}>
          <Image
            alt="homepage navbar icon"
            src={currentPage === PageName.HOME ? homeSelected : home}
            width="600"
            height="300"
          />
        </a>
      </div>
      <div className={styles.iconContainer}>
        <a href="#" onClick={() => handleNavItemClick(PageName.BOOK)}>
          <Image
            alt="booking page navbar icon"
            src={currentPage === PageName.BOOK ? bookSelected : book}
            width="600"
            height="300"
          />
        </a>
      </div>
      <div className={styles.iconContainer}>
        <a href="#" onClick={() => handleNavItemClick(PageName.PROFILE)}>
          <Image
            alt="profile page navbar icon"
            src={currentPage === PageName.PROFILE ? profileSelected : profile}
            width="600"
            height="300"
          />
        </a>
      </div>
    </footer>
  );
};

export default BottomNavbar;
