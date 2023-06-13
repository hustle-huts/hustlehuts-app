import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import BGM from "../../public/images/coffee.png";
import Upload from "../../public/images/upload.png";
import Box from "@mui/material/Box";
import { AccessTime } from '@mui/icons-material';
import Button from "@/components/ui/button";
import BottomSheet from "@/components/ui/bottomSheet";
import { Container, TextField, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import Input from "@/components/ui/input";
import CafeReview from "@/components/cafes/cafe-review";

import BookingItem from "@/components/bookings/booking-item";
import BookingsBar from "@/components/bookings/bookings-bar";
import BottomNavbar from "@/components/bottomNavbar/bottom-navbar";
import { PageName } from "@/components/shared/utils/constants";
import TopBanner from "@/components/topBanner/top-banner";

import SendIcon from "../../public/images/bookings-send.svg";
import styles from "../../styles/Bookings.module.css";

export default function BookingsPage() {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isReview, setIsReview] = useState(false);
  const [isReviewList, setIsReviewList] = useState(false);
  const [isInput, setIsInput] = useState(false);
  const [desc, setDesc] = useState("Write your review here");
  const [images, setImages] = useState([Upload.src]);
  const [value, setValue] = useState<number | null>(2);
  const handleBottomSheetOpen = () => {
    setIsBottomSheetOpen(true);
  };

  const handleBottomSheetClose = () => {
    setIsBottomSheetOpen(false);
  };

  const handleAddImages = (url: string) => {
    setImages([...images, url]);
  };

  const handleSuccess = () => {
    setIsInput(false);
    setIsSuccess(true);
  };

  const handleReview = () => {
    setIsSuccess(false);
    setIsReview(true);
  };

  const handleReviewList = () => {
    setIsReview(false);
    setIsReviewList(true);
  };

  const handleInput = () => {
    console.log("SAS");
    setIsInput(true);
  };

  function handleConfirm() {
    console.log("Confirmed!");
  }

  const reviewListModal = () => {
    return (
      <BottomSheet isOpen={isBottomSheetOpen} onClose={handleBottomSheetClose}>
        <Container className={styles.cafeTextModalContainer}>
          <Typography
            paddingTop={3}
            paddingBottom={2}
            fontFamily="inherit"
            align="center"
            fontWeight={700}
            fontSize={24}
          >
            Check Out
          </Typography>
        </Container>
        <Container className={styles.cafeModalContainer}>
          {/* <BookingsList userId=""></BookingsList> */}
          <BookingItem modalHandler={handleBottomSheetOpen} />
        </Container>
        <Container className={styles.cafeReviewModalContainer}>
          <CafeReview
            reviewer="Jon Doe"
            starValue={4}
            reviewDate="May 23, 2023"
            description="Lorem Ipsum is simply dummy text of typesetting has been the
                industry's and standard printing and dummy. Lorem Ipsum simply dummy
                text of typesetting has been the industry's and standard printing and
                dummy"
          />
          <CafeReview
            reviewer="Sam Paul"
            starValue={5}
            reviewDate="May 23, 2023"
            description="Lorem Ipsum is simply dummy text of typesetting has been the
                industry's and standard printing and dummy. Lorem Ipsum simply dummy
                text of typesetting has been the industry's and standard printing and
                dummy"
          />
        </Container>
        <Container className={styles.cafeButtonModalContainer}>
        </Container>
      </BottomSheet>
    );
  };

  const reviewModal = () => {
    return (
      <BottomSheet isOpen={isBottomSheetOpen} onClose={handleBottomSheetClose}>
        <Container className={styles.cafeTextModalContainer}>
          <Typography
            paddingTop={1}
            paddingBottom={2}
            fontFamily="inherit"
            align="center"
            fontWeight={700}
            fontSize={24}
          >
            Check Out
          </Typography>
        </Container>
        <Container className={styles.cafeModalContainer}>
          {/* <BookingsList userId=""></BookingsList> */}
          <BookingItem modalHandler={handleBottomSheetOpen} />
        </Container>
        <Container className={styles.descWord}>
          <Typography
            style={{ padding: "0px 5px" }}
            align="right"
            fontFamily="inherit"
            fontWeight={700}
            fontSize={22}
          >
            Check Out
          </Typography>
          <Typography
            color="#D89B60"
            style={{ padding: "0px 5px" }}
            align="left"
            fontFamily="inherit"
            fontWeight={700}
            fontSize={22}
          >
            Successful!
          </Typography>
        </Container>
        <Container className={styles.descRating}>
          <Container className={styles.descTime}>
            <img
              alt=""
              style={{ width: "20vh", height: "100%", objectFit: "contain" }}
              src={BGM.src}
            />
          </Container>
          <Container className={styles.thankModal}>
            <Typography
              align="center"
              fontFamily="inherit"
              fontWeight={600}
              fontSize={20}
            >
              Thank you for visiting Twenty Eight Cafe
            </Typography>
          </Container>
        </Container>
        <Container className={styles.descRating}>
          <Container className={styles.descStar}>
            <Rating
              size="large"
              name="simple-controlled"
              value={value}
              max={5}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              sx={{
                paddingBottom: 1,
                "& .MuiRating-pristine": {
                  display: 'none'
                },
                "& .MuiRating-icon": {
                  display: 'flex',
                  justifyContent: 'center'
                },
              }}
            />
            <Typography
              align="center"
              fontFamily="inherit"
              fontWeight={500}
              fontSize={16}
            >
              Your overall rating of this cafe
            </Typography>
          </Container>

          <Container  className={styles.cafeImageModalContainer}>
            <Typography
              paddingTop={1}
              paddingBottom={1}
              fontFamily="inherit"
              align="left"
              fontWeight={400}
              fontSize={16}
            >
              Upload Images
            </Typography>
            <Container className={styles.imageRow}>
              {images.map((item, index) => (
                <img
                  style={{
                    width: "15vh",
                    paddingRight: "4px",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  key={index}
                  src={item}
                />
              ))}
              <div onClick={handleSuccess}>
              <input style={{zIndex: 2, opacity: 0, position: 'relative',height: '15vh', width: '15vh'}}  accept="image/*" multiple type="file" />

                <img
                  style={{
                    position: 'relative',
                    width: "15vh",
                    paddingRight: "4px",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  src={Upload.src}
                />
              </div>
            </Container>
          </Container>

          <Container className={styles.cafeDescModalContainer}>
            <Typography
              paddingTop={1}
              paddingBottom={1}
              fontFamily="inherit"
              align="left"
              fontWeight={400}
              fontSize={16}
            >
              Summarize Review
            </Typography>
            <Box
              component="form"
              sx={{
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#AA7A50",
                  borderRadius: "14px",
                },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-controlled"
                label=" "
                multiline
                rows={6}
                InputLabelProps={{ shrink: false }}
                value={desc}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setDesc(event.target.value);
                }}
              />
            </Box>
          </Container>

          <Container className={styles.buttonModal}>
            <Button onClick={handleReviewList}>Submit</Button>
          </Container>
        </Container>
      </BottomSheet>
    );
  };

  const successModal = () => {
    return (
      <BottomSheet isOpen={isBottomSheetOpen} onClose={handleBottomSheetClose}>
        <Container className={styles.cafeTextModalContainer}>
          <Typography
            paddingTop={3}
            paddingBottom={2}
            fontFamily="inherit"
            align="center"
            fontWeight={700}
            fontSize={24}
          >
            Check In
          </Typography>
        </Container>
        <Container className={styles.cafeModalContainer}>
          {/* <BookingsList userId=""></BookingsList> */}
          <BookingItem modalHandler={handleBottomSheetOpen} />
        </Container>
        <Container className={styles.descWord}>
          <Typography
            style={{ padding: "0px 5px" }}
            align="right"
            fontFamily="inherit"
            fontWeight={700}
            fontSize={22}
          >
            Check In
          </Typography>
          <Typography
            color="#D89B60"
            style={{ padding: "0px 5px" }}
            align="left"
            fontFamily="inherit"
            fontWeight={700}
            fontSize={22}
          >
            Successful!
          </Typography>
        </Container>
        <Container className={styles.descWord}>
          <Typography
            align="center"
            fontFamily="inherit"
            fontWeight={600}
            fontSize={16}
          >
            Have a Productive 2 hours!
          </Typography>
        </Container>
        <Container className={styles.desc}>
          <img
            alt=""
            style={{ width: "20vh", height: "100%", objectFit: "contain" }}
            src={BGM.src}
          />
        </Container>
        <Container
        sx={{ marginBottom: '30px' }}
        className={styles.descIcon}>
          <Container className={styles.descTime}>
            <AccessTime />
            <Typography
              align="center"
              fontFamily="inherit"
              fontWeight={500}
              fontSize={16}
            >
              1 hour 59 minutes left
            </Typography>
          </Container>
          <Container className={styles.buttonModal}>
            <Button onClick={handleReview}>Check Out</Button>
          </Container>
        </Container>
      </BottomSheet>
    );
  };

  const waitingModal = () => {
    return (
      <BottomSheet isOpen={isBottomSheetOpen} onClose={handleBottomSheetClose}>
        <Container className={styles.cafeTextModalContainer}>
          <Typography
            paddingTop={3}
            paddingBottom={2}
            fontFamily="inherit"
            align="center"
            fontWeight={700}
            fontSize={24}
          >
            My Booking
          </Typography>
        </Container>
        <Container className={styles.cafeModalContainer}>
          {/* <BookingsList userId=""></BookingsList> */}
          <BookingItem modalHandler={handleBottomSheetOpen} />
        </Container>
        <Container className={styles.cafeButtonModalContainer}>
          <Button onClick={handleInput} btntype="tertiary">
            Check In
          </Button>
        </Container>
        <Container className={styles.cafeButtonModalContainer}>
          <Button btntype="primary">Cancel Booking</Button>
        </Container>
      </BottomSheet>
    );
  };

  const inputModal = () => {
    return (
      <BottomSheet isOpen={isBottomSheetOpen} onClose={handleBottomSheetClose}>
        <Container className={styles.cafeTextModalContainer}>
          <Typography
            paddingTop={3}
            paddingBottom={2}
            fontFamily="inherit"
            align="center"
            fontWeight={700}
            fontSize={24}
          >
            My Booking
          </Typography>
        </Container>
        <Container className={styles.cafeModalContainer}>
          {/* <BookingsList userId=""></BookingsList> */}
          <BookingItem modalHandler={handleBottomSheetOpen} />
        </Container>
        <Container className={styles.cafeButtonModalContainer}>
          <Input isRequired={true} label="Enter Check In Code"></Input>
        </Container>
        <Container className={styles.cafeButtonModalContainer}>
          <Button onClick={handleSuccess} btntype="primary">
            Submit
          </Button>
        </Container>
      </BottomSheet>
    );
  };

  return (
    <div className={styles.container}>
      <TopBanner />
      <div className={styles.bookingContainer}>
        <BookingsBar subtitle="You've unlocked a mystery reward!" stepNumber={3} title="Congratulation!" description="Place 5 more bookings by Feb 2023 to unlock another mystery reward" />
        <p className={styles.title}>My Booking List</p>
        <div className={styles.cafeContainer}>
          {/* <BookingsList userId=""></BookingsList> */}
          <BookingItem modalHandler={handleBottomSheetOpen} />
        </div>

        <div>
          <p className={styles.title}>Need to cancel?</p>

          <Link href="mailto:admin@hustlehuts.com">
            <button className={styles.contactButton}>
              <Image
                className={styles.contactIcon}
                alt="Contact Icon"
                src={SendIcon}
              />
              <p className={styles.contactText}>
                Send us an email at{" "}
                <span className={styles.emailText}>admin@hustlehuts.com</span>
              </p>
            </button>
          </Link>
        </div>
      </div>
      <BottomNavbar />
      {isReviewList
        ? reviewListModal()
        : isReview
        ? reviewModal()
        : isSuccess
        ? successModal()
        : isInput
        ? inputModal()
        : waitingModal()}
    </div>
  );
}
