import Booking from "../../public/images/booking-image.png";
import { ImageListItem, ImageListItemBar, Grid, Chip, Typography } from "@mui/material";
interface props {
  bookingId?: Number;
  imageLink?: String;
  cafeName?: String;
  noOfPax?: Number;
  reservationDate?: String;
  reservationTime?: String;
  noOfCredits?: Number;
}

const CafeItem: React.FC<props> = (props) => {
  return (
    // <div className={styles.card} style={{ backgroundImage: `url(${Booking.src})` }}>
    //     <div className={styles.badge}>
    //         <p className={styles.badgeText}>4 Credits</p>
    //     </div>
    //     <div className={styles.headingContainer} >
    //         <div className={styles.leftHeading}>
    //             <p className={styles.topleftHeadingText}>Twenty Eight Cafe</p>
    //             <p className={styles.bottomleftHeadingText}>2 pax</p>
    //         </div>
    //         <div className={styles.rightHeading}>
    //             <p className={styles.rightHeadingText}>28/01</p>
    //             <p className={styles.rightHeadingText}>4pm-6pm</p>
    //         </div>
    //     </div>
    // </div>
    <ImageListItem key={1} cols={1}>
      <img src={Booking.src} alt="booking" />
      <ImageListItemBar
        position="top"
        sx={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " + "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
        }}
        title={
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
              <Chip
                label={
                  <Typography variant="h6" component="p" align="left" sx={{ fontWeight: "600", fontSize: "1.1rem", color: "white" }}>
                    01
                  </Typography>
                }
              />
            </Grid>
            <Grid item xs={6}>
              <Chip
                sx={{ float: "right" }}
                label={
                  <Typography variant="h6" component="p" align="right" sx={{ fontWeight: "600", fontSize: "0.9rem", color: "white" }}>
                    4 Credits
                  </Typography>
                }
              />
            </Grid>
          </Grid>
        }
      />
      <ImageListItemBar
        position="bottom"
        title={
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
              <Typography variant="h6" component="p" align="left" sx={{ fontWeight: "600", fontSize: "1.1rem", color: "white" }}>
                Twenty Eight Cafe
              </Typography>
            </Grid>
          </Grid>
        }
        subtitle={
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
              <Typography variant="body1" component="p" align="left" sx={{ fontWeight: "400", fontSize: "0.9rem", color: "white" }}>
                2 pax
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" component="p" align="right" sx={{ fontWeight: "400", fontSize: "0.9rem", color: "white" }}>
                28/01 from 4pm - 6pm
              </Typography>
            </Grid>
          </Grid>
        }
      />
    </ImageListItem>
  );
};

export default CafeItem;