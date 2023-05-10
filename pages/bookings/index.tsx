import BookingItem from "@/components/bookings/booking-item";
import BottomNavbar from "@/components/bottomNavbar/bottom-navbar";
import TopBanner from "@/components/topBanner/top-banner";
import BookingsBar from "@/components/bookings/bookings-bar";
import { Alert, Box, CssBaseline, ImageList, Link, Stack, Typography } from "@mui/material";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import { useMediaQuery } from "react-responsive";

export default function BookingsPage() {
  const isMobile = useMediaQuery({ query: `(max-width: 600px)` });

  return (
    <div>
      <Box paddingBottom='70px'>
        <CssBaseline />
        <TopBanner currentPage="book" />
        <BookingsBar />
        <Typography
          variant="h6"
          component="div"
          sx={{ fontWeight: "800", fontSize: "1.1rem", color: "black", marginLeft: "5%", marginTop: "1vh" }}>
          My Booking List
        </Typography>

        <Stack mx={isMobile ? "10%" : "30%"} mt="0" width={isMobile ? "80%" : "40%"}>
          <ImageList sx={{ width: "100%", height: "100%" }} cols={1}>
            <BookingItem />
            <BookingItem />
            <BookingItem />
          </ImageList>
        </Stack>

        <Typography
          variant="h6"
          component="div"
          sx={{ fontWeight: "800", fontSize: "1.1rem", color: "black", marginLeft: "5%", marginTop: "1vh" }}>
          Need to cancel?
        </Typography>

        <Alert
          severity="info"
          sx={{ ml: "5%", mr: "5%", mt: "1vh", background: "rgba(216, 169, 119, 0.2)", border: "1px solid #DDC9B5", borderRadius: "14px" }}
          icon={
            <Box
              sx={{
                borderRadius: "12px",
                background: "linear-gradient(176.54deg, #6D5747 -11.89%, #B88151 64.46%)",
                width: "2.5rem",
                height: "2.5rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <MailOutlineRoundedIcon sx={{ color: "white" }} />
            </Box>
          }>
          Send us an email at
          <br />
          <Link component="button" variant="body2" sx={{ color: "#B88151", textDecorationColor: "#B88151" }}>
            admin@hustlehuts.com
          </Link>
        </Alert>
      </Box>

      <BottomNavbar currentPage="book" />
    </div>
  );
}
