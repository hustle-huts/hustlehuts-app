import { useRouter } from "next/router";
import { AppBar, Toolbar, Typography, Badge } from "@mui/material";
import { useEffect, useState } from "react";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


interface props {
  currentPage?: string;
  userId?: number;
}

const TopBanner: React.FC<props> = (props) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(props.currentPage || "home");

  useEffect(() => {
    setCurrentPage(props.currentPage || "home");
  }, [props.currentPage])

  const handleNavItemClick = () => {
    // router.push(`/bookings/${props.userId}`); // adjust this code when we confirm the urls
  };

  return (
    <AppBar
      position="static"
      sx={{
        background: "linear-gradient(176.54deg, #6D5747 -11.89%, #B88151 64.46%)",
        root: {
          flexGrow: 1,
        },
        appbar: {
          alignItems: "center",
        },
      }}>
      <Toolbar>
        <Typography variant="h6" component="div" align="center" sx={{ flexGrow: 1, fontWeight: "800", fontSize: "1.65rem" }}>
          {currentPage === "home" && "Home"}
          {currentPage === "book" && "Bookings"}
          {currentPage === "profile" && "Profile"}
        </Typography>
        <Badge color="warning" variant="dot">
          <ShoppingCartOutlinedIcon sx={{ color: "#FFFEFF" }} />
        </Badge>
      </Toolbar>
    </AppBar>
  );
};

export default TopBanner;
