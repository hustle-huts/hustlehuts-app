import { useState } from "react";
import styles from "./bookings-bar.module.css";
import { Box, Card, CardContent, LinearProgress, Typography } from "@mui/material";
export default function BookingsBar() {
  const [rewardNum, setRewardNum] = useState(2);
  const [rewardDenom, setRewardDenom] = useState(3);
  return (
    // <div className={styles.container}>
    //   <div className={styles.title}>
    //     <div className={styles.reward}>
    //       <div className={styles.progress}>
    //         <h1 style={{ fontSize: "14px", color: "#E4974E", textAlign: "left" }}>Rewards</h1>
    //         <span style={{ display: "flex", flexDirection: "row", flex: " 2" }}>
    //           <h2 style={{ fontSize: "14px", color: "#000000", flex: "1" }}>2</h2>
    //           <h2 style={{ fontSize: "14px", color: "#C4C2C0", flex: "1" }}>/3</h2>
    //         </span>
    //       </div>
    //       <div style={{ height: "4px", color: "#D89B60", marginTop: "4px" }}>
    //         <LinearProgress color="inherit" variant="determinate" value={66.67} />
    //       </div>
    //       <p className={styles.desc}>1 more to get a mystery reward at your favourite cafe.</p>
    //     </div>
    //   </div>
    // </div>

    <Card sx={{ width: "90%", marginLeft: "5%", marginTop: "1vh" }} variant="outlined">
      <CardContent>
        <Typography variant="h6" component="div" sx={{ fontWeight: "600", fontSize: "1.1rem", color: "#E4974E" }}>
          Rewards
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ width: "100%", mr: 1 }}>
            <LinearProgress
              variant="determinate"
              value={(rewardNum / rewardDenom) * 100}
              sx={{
                backgroundColor: "rgba(249, 230, 210, 0.49)",
                "& .MuiLinearProgress-bar": {
                  background: "linear-gradient(176.54deg, #6D5747 -11.89%, #B88151 64.46%)",
                },
              }}
            />
          </Box>
          <Box sx={{ minWidth: 35 }}>
            <Typography variant="body1" color="text.primary" sx={{ fontWeight: "600" }} component="span">
              {rewardNum}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontWeight: "600" }} component="span">
              {" "}
              / {rewardDenom}
            </Typography>
          </Box>
        </Box>
        <Typography variant="body2">{rewardDenom - rewardNum} more to get a mystery reward at your favourite cafe!</Typography>
      </CardContent>
    </Card>
  );
}
