import { Avatar, Box, Container, Rating, Typography } from "@mui/material";
import AvatarImage from "../../public/images/avatar.png";
import styles from "./cafe-review.module.css";
import { useState } from "react";
import Upload from "../../public/images/reviewPics.png";

interface props {
    reviewer: String;
    imageLink?: Array<String>;
    starValue: number;
    description?: String;
    reviewDate: String;
}

const CafeReview:React.FC<props> = (props) => {
  const [value, setValue] = useState<number | null>(2);
  const [images, setImages] = useState([Upload.src]);
  return (
    <Container className={styles.container}>
      <Container className={styles.user}>
        <Avatar alt="User" src={AvatarImage.src} sx={{ width: 'fit-content', height: 'fit-content' }} />
        <Container className={styles.name}>
          <Typography
            paddingTop={1}
            paddingBottom={1}
            fontFamily="inherit"
            align="left"
            fontWeight={600}
            fontSize={16}
          >
            {props.reviewer? props.reviewer : "Anonymous"}
          </Typography>
          <Box
            sx={{
              width: 200,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Rating
              name="text-feedback"
              value={props.starValue? props.starValue : 0}
              readOnly
              precision={0.5}
            />
            <Box sx={{ ml: 2 }}>{props.starValue ? props.starValue : 0}.0</Box>
          </Box>
        </Container>
      </Container>
      <Container className={styles.desc}>
        <Typography
          fontFamily="inherit"
          align="left"
          fontWeight={400}
          fontSize={12}
        >
          {props.description}
        </Typography>
      </Container>
      <Container className={styles.imageRow}>
        {images.map((item, index) => (
          <img
            style={{
              width: "20vh",
              paddingRight: "4px",
              height: "100%",
              objectFit: "contain",
            }}
            key={index}
            src={item}
          />
        ))}
      </Container>
      <Container className={styles.author}>
        <Typography
          fontFamily="inherit"
          align="left"
          color="#000000"
          fontWeight={500}
          fontSize={12}
        >
          By {props.reviewer}
        </Typography>
        <Typography
          fontFamily="inherit"
          align="left"
          color="#A39B9B"
          fontWeight={500}
          fontSize={12}
        >
          | Mar 29, 2023
        </Typography>
      </Container>
    </Container>
  );
}

export default CafeReview;