import { useRouter } from "next/router";
import { BottomNavigation, BottomNavigationAction, Typography } from "@mui/material";
import { useState } from "react";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import StoreIcon from "@mui/icons-material/Store";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
import HomeIcon from "@mui/icons-material/Home";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

interface props {
  currentPage?: string;
  userId?: number;
}

const BottomNavbar: React.FC<props> = (props) => {
  const router = useRouter();

  const handleNavItemClick = (pageName: string) => {
    // router.push(`/users/${pageName}/${props.userId}`); // adjust this code when we confirm the urls
  };

  const [currentPage, setCurrentPage] = useState(props.currentPage || "home");
  const selectedColor = "#FFFEFF";
  const unselectedColor = "#E2CCB9";

  return (
    <BottomNavigation
      showLabels
      value={props.currentPage}
      onChange={(_, newValue) => {
        setCurrentPage(newValue);
      }}
      sx={{
        background: "linear-gradient(176.54deg, #6D5747 -11.89%, #B88151 64.46%)",
        position: "fixed",
        bottom: 0,
        width: 1.0,
        padding: "0.5rem 0",
      }}>
      <BottomNavigationAction
        label={
          <Typography variant="body2" sx={{ color: currentPage === "home" ? selectedColor : unselectedColor }}>
            Home
          </Typography>
        }
        value="home"
        icon={currentPage === "home" ? <HomeIcon sx={{ color: selectedColor }} /> : <HomeOutlinedIcon sx={{ color: unselectedColor }} />}
      />
      <BottomNavigationAction
        label={
          <Typography variant="body2" sx={{ color: currentPage === "book" ? selectedColor : unselectedColor }}>
            Bookings
          </Typography>
        }
        value="book"
        icon={currentPage === "book" ? <StoreIcon sx={{ color: selectedColor }} /> : <StoreOutlinedIcon sx={{ color: unselectedColor }} />}
      />
      <BottomNavigationAction
        label={
          <Typography variant="body2" sx={{ color: currentPage === "profile" ? selectedColor : unselectedColor }}>
            Profile
          </Typography>
        }
        value="profile"
        icon={
          currentPage === "profile" ? (
            <PersonRoundedIcon sx={{ color: selectedColor }} />
          ) : (
            <PersonOutlineOutlinedIcon sx={{ color: unselectedColor }} />
          )
        }
      />
    </BottomNavigation>
  );
};

export default BottomNavbar;
