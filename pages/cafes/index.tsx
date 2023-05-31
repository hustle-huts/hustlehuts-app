import styles from "../../styles/Cafes.module.css";
import Image from "next/image";
import BottomNavbar from "@/components/bottomNavbar/bottom-navbar";
import TopBanner from "@/components/topBanner/top-banner";
import CafeCard from "@/components/cafes/cafe-card";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import CustomChip from '@/components/ui/chip';
import { AccessTime, Diversity1 } from '@mui/icons-material';
import BottomSheet from "@/components/ui/bottomSheet";
import { Box, Container, Grid, MobileStepper, Stack, TextField, Typography } from '@mui/material';
import MockedImg from '../../public/images/mocked-cafe-for-booking.png'

import SearchIcon from "../../public/images/search.svg";
import FilterIcon from "../../public/images/filter.svg";

import { useState } from "react";

export default function AllCafes() {
  const [selectedFilter, setSelectedFilters] = useState("filter1");

  // Testing data with three mocked cafes
  const allCafes = [
    {
      "name": "Twenty Eight Cafe",
      "address": "string",
      "location": {
        "type": "Point",
        "coordinates": [
          0
        ]
      },
      // start on Monday
      "open_at": ["9am", "9am", "9am", "9am", "9am", "11am", "11am"],
      "close_at": ["9pm", "9pm", "9pm", "9pm", "9pm", "11pm", "11pm"],
      "credit": 28,
      "has_wifi": true,
      "has_charging": false,
      "has_ambience": false,
      "image_url": "./images/mocked-cafe1.jpeg",
      "availability_time_slots": [
        {
          "date": "05-30-2023",
          "time": [
            "9am-10am",
            "10am-11am",
            "11am-12pm"
          ],
          "seat": [
            5,
            6,
            7
          ]
        },
        {
          "date": "05-31-2023",
          "time": [
            "2pm-3pm",
            "3pm-4pm",
            "4pm-5pm"
          ],
          "seat": [
            10,
            11,
            12
          ]
        }
      ],
      "manager": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "rating": 4.5,
      "deleted_at": "2023-05-29T11:35:22.788Z",
      "created_at": "2023-05-29T11:35:22.788Z",
      "updated_at": "2023-05-29T11:35:22.788Z",
      "_id": "64C98dDcfCdA5FfB106e41AB"
    },
    {
      "name": "Twenty Nine Cafe",
      "address": "string",
      "location": {
        "type": "Point",
        "coordinates": [
          0
        ]
      },
      "open_at": ["9am", "9am", "10am", "9am", "9am", "11am", "11am"],
      "close_at": ["9pm", "9pm", "10pm", "9pm", "9pm", "11pm", "11pm"],
      "credit": 29,
      "has_wifi": true,
      "has_charging": false,
      "has_ambience": false,
      "image_url": "./images/mocked-cafe1.jpeg",
      "availability_time_slots": [
        {
          "date": "05-30-2023",
          "time": [
            "10am-11am",
            "11am-12pm",
            "12pm-1pm"
          ],
          "seat": [
            6,
            7,
            8
          ]
        }
      ],
      "manager": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "rating": 4.6,
      "deleted_at": "2023-05-29T11:35:22.788Z",
      "created_at": "2023-05-29T11:35:22.788Z",
      "updated_at": "2023-05-29T11:35:22.788Z",
      "_id": "64C98dDcfCdA5FfB106e41AB"
    },
    {
      "name": "Thirty Cafe",
      "address": "string",
      "location": {
        "type": "Point",
        "coordinates": [
          0
        ]
      },
      "open_at": ["9am", "9am", "9am", "9am", "9am", "11am", "11am"],
      "close_at": ["9pm", "9pm", "9pm", "9pm", "9pm", "11pm", "11pm"],
      "credit": 30,
      "has_wifi": true,
      "has_charging": false,
      "has_ambience": false,
      "image_url": "./images/mocked-cafe1.jpeg",
      "availability_time_slots": [
        {
          "date": "05-30-2023",
          "time": [
            "11am-12pm",
            "12pm-1pm",
            "1pm-2pm"
          ],
          "seat": [
            7,
            8,
            9
          ]
        }
      ],
      "manager": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "rating": 4.7,
      "deleted_at": "2023-05-29T11:35:22.788Z",
      "created_at": "2023-05-29T11:35:22.788Z",
      "updated_at": "2023-05-29T11:35:22.788Z",
      "_id": "64C98dDcfCdA5FfB106e41AB"
    }
  ];

  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [isChoosingSlotsModalOpen, setIsChoosingSlotsModalOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [selectedCafe, setSelectedCafe] = useState<any>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedPossibleTimeSlots, setSelectedPossibleTimeSlots] = useState<string[] | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleBottomSheetOpen = (cafe: any) => {
    console.log(cafe)
    setSelectedCafe(cafe);
    setIsBottomSheetOpen(true);
    setIsChoosingSlotsModalOpen(true);
  };

  const handleBottomSheetClose = () => {
    setIsBottomSheetOpen(false);
    // erase all data when the modal is closed
    setSelectedCafe(null);
    setSelectedDate(null);
    setSelectedTime(null);
    setSelectedPossibleTimeSlots(null);
  };

  // for the number of people
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // Get the day of the week to show the correct opening hours in the choosingSlotsModal
  const currentTime = new Date();
  const dayOfWeek = (currentTime.getDay() + 6) % 7; // 0 for Monday, 1 for Tuesday, etc.
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  const generateDateButtons = (cafe: any) => {
    if (!cafe) {
      return; // Return early if cafe is null or undefined
    }

    const availSlots = cafe.availability_time_slots;
    const availDates = []
    for (let i = 0; i < availSlots.length; i++) {
      availDates.push(availSlots[i].date);
    }

    const buttons = availDates.map((currentDate) => (
      <Button 
      key={currentDate}
      size="small"
      variant='contained'
      sx={{
        background: 'linear-gradient(176.54deg, #6D5747 -11.89%, #B88151 64.46%)',
        boxShadow: '0px 4px 40px rgba(160, 116, 78, 0.18)',
        borderRadius: '10px',
        padding: 1,
        marginBottom: 2,
        marginLeft: 'auto',
        marginRight: 'auto',
        color: '#fff !important',
      }}
      onClick={() => showCorrespondingTimeSlotsButtons(currentDate, cafe)} >
        {currentDate}, {days[dayOfWeek]}
      </Button>
    ));
    
    return (
      <div>
        {buttons}
      </div>
    )
  }

  const showCorrespondingTimeSlotsButtons = (currentDate: string, cafe: any) => {
    const availSlots = cafe.availability_time_slots;

    // for the chosen date, get all the corresponding time slots and no. of seats for each time slot
    const availCorrespondingTimeSlots = [];
    const availCorrespondingSeats = []
    for (let i = 0; i < availSlots.length; i++) {
      if (availSlots[i].date === currentDate) {
        for (let j = 0; j < availSlots[i].time.length; j++) {
          availCorrespondingTimeSlots.push(availSlots[i].time[j]);
          availCorrespondingSeats.push(availSlots[i].seat[j]);
        }
      }
    }

    // build a button for each time slot and its no. of seats
    const timeButtons = []
    for (let i = 0; i < availCorrespondingTimeSlots.length; i++) {
      timeButtons.push(
        <Button 
        size="small"
        variant='contained'
        sx={{
          background: 'linear-gradient(176.54deg, #6D5747 -11.89%, #B88151 64.46%)',
          boxShadow: '0px 4px 40px rgba(160, 116, 78, 0.18)',
          borderRadius: '10px',
          padding: 1,
          marginBottom: 2,
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: '60%',
          color: '#fff !important',
        }}
        key={i} >
          {availCorrespondingTimeSlots[i]} ({availCorrespondingSeats[i]} seats left)
        </Button>
      )
    }

    setSelectedPossibleTimeSlots(timeButtons);
  }

  const choosingSlotsModal = (cafe: any) => {
    if (!cafe) {
      return; // Return early if cafe is null or undefined
    }
    return (
      <BottomSheet isOpen={isBottomSheetOpen} onClose={handleBottomSheetClose}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          sx={{
            padding: 0,
            paddingBottom: 10,
            marginBottom: 20
          }}
        >

          {/* Cafe details */}
          <Container sx={{
            border: "1px solid #E7E7E7",
            boxShadow: "0px 4px 20px -5px rgba(0, 0, 0, 0.15)",
            borderRadius: "20px",
            height: 'fit-content',
            marginTop: 2,
            paddingBottom: 2
          }}>
            <Container className={styles.image}>
              <Box
                component="img"
                sx={{
                  height: "auto",
                  width: 280,
                  marginTop: 2,
                  marginBottom: 2,
                  maxHeight: { xs: 150, md: 220 },
                  maxWidth: { xs: 280, md: 400 },
                }}
                alt="Cafe image."
                src={MockedImg.src} />
            </Container>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              xs="auto"
              sx={{
                height: 'fit-content',
                marginLeft: 0,
                marginTop: 2,
                marginBottom: 2,
              }}
            >
              <Typography sx={{ width: 2 / 5 }} textAlign='left' fontWeight={700}>
                {cafe.name}
              </Typography>
              <Typography sx={{ width: 2 / 5, color: "#D89554" }} textAlign='right'>
                {cafe.credit} Credit(s) / hr
              </Typography>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              xs="auto"
              sx={{
                height: 'fit-content'
              }}
            >
              <AccessTime />
              <Typography sx={{ width: 2 / 4, marginLeft: 1, }} textAlign='left'>
                {cafe.open_at[dayOfWeek]} to {cafe.close_at[dayOfWeek]}
              </Typography>
            </Grid>
          </Container>

          
          {/* Number of people */}
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            sx={{
              height: 'fit-content',
              marginLeft: 0,
              marginTop: 2,
              width: '-webkit-fill-available',
              marginBottom: 2,
            }}
          >
            <Typography sx={{ width: 2 / 4, marginLeft: 1, height: 'fit-content', marginBottom: 2 }} textAlign='left' fontWeight={600}>
              Number of People
            </Typography>
            <MobileStepper
              variant='text'
              steps={100}
              sx={{
                fontWeight: 600,
                height: 'fit-content',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                background: 'rgba(216, 169, 119, 0.1)',
                borderRadius: '14px'
              }}
              position='static'
              activeStep={activeStep}
              nextButton={<Button
                size="small"
                variant='contained'
                sx={{
                  width: '18px',
                  background: 'linear-gradient(176.54deg, #6D5747 -11.89%, #B88151 64.46%)',
                  boxShadow: '0px 4px 40px rgba(160, 116, 78, 0.18)',
                  borderRadius: '10px',
                  padding: 1,
                  color: '#fff !important',
                  fontSize: '16px'
                }}
                disabled={activeStep >= 100}
                onClick={handleNext}
              >
                +
              </Button>}
              backButton={<Button
                size="small"
                variant='contained'
                sx={{
                  width: '18px',
                  background: 'linear-gradient(176.54deg, #6D5747 -11.89%, #B88151 64.46%)',
                  boxShadow: '0px 4px 40px rgba(160, 116, 78, 0.18)',
                  borderRadius: '10px',
                  padding: 1,
                  color: '#fff !important',
                  fontSize: '16px'
                }}
                disabled={activeStep <= 0}
                onClick={handleBack}>
                -
              </Button>} />
          </Grid>
          
          
          {/* Select Date (with calendar) */}
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            sx={{
              height: 'fit-content',
              marginLeft: 0,
              marginTop: 2,
              marginBottom: 2,
              width: '-webkit-fill-available'
            }}
          >
            <Typography sx={{ width: 2 / 4, marginLeft: 1, height: 'fit-content', marginBottom: 2 }} textAlign='left' fontWeight={600} >
              Select Date
            </Typography>

            <Grid
              container
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              sx={{
                height: 'fit-content',
                marginLeft: 0,
                marginTop: 2,
                marginBottom: 2,
                width: '-webkit-fill-available'
              }}
            >

              {/* Show the dates available for this cafe */}
              {generateDateButtons(cafe)}

              <Typography sx={{ width: 2 / 4, marginLeft: 1, height: 'fit-content', marginBottom: 2 }} textAlign='left' fontWeight={600} >
                Select Time 
              </Typography>

              {/* When they choose a date, the corresponding time will show */}
              {selectedPossibleTimeSlots}
            </Grid>
          </Grid>


          {/* Continue button  */}
          <Button
            size="small"
            variant='contained'
            sx={{
              background: 'linear-gradient(176.54deg, #6D5747 -11.89%, #B88151 64.46%)',
              boxShadow: '0px 4px 40px rgba(160, 116, 78, 0.18)',
              borderRadius: '10px',
              padding: 1,
              marginBottom: 2,
              marginLeft: 'auto',
              marginRight: 'auto',
              maxWidth: '60%',
              maxHeight: '40px',
              color: '#fff !important',
            }}
            >
              Continue
          </Button>


          {/* Select Time */}
          {/* <Grid
            container
            direction="column"
            rowGap={2}
            
            justifyContent="flex-start"
            alignItems="flex-start"
            sx={{
              height: 'fit-content',
              marginLeft: 0,
              marginTop: 2,
              marginBottom: 30,
              paddingBottom: 5,
              width: '-webkit-fill-available'
            }}
          >
            <Stack direction="row" spacing={2}>
              <CustomChip children="1100 - 1200" state/>
              <CustomChip children="1100 - 1200" />
              <CustomChip children="1100 - 1200" />
            </Stack>
            <Stack direction="row" spacing={2}>
              <CustomChip children="1100 - 1200" state/>
              <CustomChip children="1100 - 1200" />
              <CustomChip children="1100 - 1200" />
            </Stack>
            <Stack direction="row" spacing={2}>
              <CustomChip children="1100 - 1200" state/>
              <CustomChip children="1100 - 1200" />
              <CustomChip children="1100 - 1200" />
            </Stack>
          </Grid> */}
        </Grid>
      </BottomSheet>
    );
  };

  return (
    <div className={styles.container}>
      <TopBanner currentPage="home" />
      <div className={styles.cafeContainer}>
        <TextField
          id="input-with-icon-textfield"
          sx={{ marginBottom: "1.4rem" }}
          placeholder="Search for Cafes"
          className={styles.searchTextField}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" sx={{ width: "auto" }}>
                <Image
                  className={styles.searchIcon}
                  alt="Search Icon"
                  src={SearchIcon}
                />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end" sx={{ width: "auto" }}>
                <Button
                  className={styles.searchFilterButton}
                  onClick={() => console.log("Filter button clicked")}
                  variant="text"
                >
                  <Image
                    className={styles.filterIcon}
                    alt="Filter Icon"
                    src={FilterIcon}
                  />
                </Button>
              </InputAdornment>
            ),
          }}
          variant="standard"
        />

        {/* Filters */}
        <div className={styles.filterButtons}>
          <Button
            className={
              styles.filterButton +
              " " +
              (selectedFilter === "filter1" && styles.filterButtonSelected)
            }
            onClick={() => setSelectedFilters("filter1")}
            variant="text"
          >
            Most Popular
          </Button>
          <Button
            className={
              styles.filterButton +
              " " +
              (selectedFilter === "filter2" && styles.filterButtonSelected)
            }
            onClick={() => setSelectedFilters("filter2")}
            variant="text"
          >
            Near You
          </Button>
          <Button
            className={
              styles.filterButton +
              " " +
              (selectedFilter === "filter3" && styles.filterButtonSelected)
            }
            onClick={() => setSelectedFilters("filter3")}
            variant="text"
          >
            Hidden Gems
          </Button>
        </div>

        {/* Most Popular Cafes */}
        <div style={{ paddingTop: "0.8rem" }}>
          <div className={styles.titleBar}>
            <p className={styles.title}>Most Popular Cafes</p>
            <Button className={styles.seeAllButton} variant="text">
              See All
            </Button>
          </div>
          <div style={{ width: "100%", overflow: "auto", display: "flex" }}>
          {allCafes.map((cafe) => (
            <CafeCard
              cafe={cafe}
              modalHandler={() => handleBottomSheetOpen(cafe)}
              key={`popular-cafe-${cafe.name}`}
            />
          ))}
          </div>
        </div>

        {/* Near You Cafes */}
        <div>
          <div className={styles.titleBar}>
            <p className={styles.title}>Near You</p>
            <Button className={styles.seeAllButton} variant="text">
              See All
            </Button>
          </div>

          <div style={{ width: "100%", overflow: "auto", display: "flex" }}>
            {allCafes.map(cafe => (
              <CafeCard
                cafe={cafe}
                modalHandler={() => handleBottomSheetOpen(cafe)}
                key={`popular-cafe-${cafe.name}`}
              />
            ))}
          </div>
        </div>

        {/* Hidden Gems Cafes */}
        <div>
          <div className={styles.titleBar}>
            <p className={styles.title}>Hidden Gems</p>
            <Button className={styles.seeAllButton} variant="text">
              See All
            </Button>
          </div>

          <div style={{ width: "100%", overflow: "auto", display: "flex" }}>
            {allCafes.map(cafe => (
              <CafeCard
                cafe={cafe}
                modalHandler={() => handleBottomSheetOpen(cafe)}
                key={`popular-cafe-${cafe.name}`}
              />
            ))}
          </div>
        </div>
      </div>
      <BottomNavbar currentPage="home" />

      {isChoosingSlotsModalOpen? choosingSlotsModal(selectedCafe) : null}
    </div>
  );
}