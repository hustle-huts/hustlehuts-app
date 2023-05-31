import styles from "../../styles/Cafes.module.css";
import Image from "next/image";
import BottomNavbar from "@/components/bottomNavbar/bottom-navbar";
import TopBanner from "@/components/topBanner/top-banner";
import CafeCard from "@/components/cafes/cafe-card";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import { AccessTime } from '@mui/icons-material';
import BottomSheet from "@/components/ui/bottomSheet";
import CustomChip from '@/components/ui/chip';
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
      "open_at": "9am",
      "close_at": "5pm",
      "credit": 2,
      "has_wifi": true,
      "has_charging": false,
      "has_ambience": false,
      "image_url": "./images/mocked-cafe1.jpeg",
      "availability_time_slots": [
        {
          "date": null,
          "time": [
            "string"
          ],
          "seat": 0
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
      "open_at": "10am",
      "close_at": "2pm",
      "credit": 3,
      "has_wifi": true,
      "has_charging": true,
      "has_ambience": false,
      "image_url": "./images/mocked-cafe2.jpg",
      "availability_time_slots": [
        {
          "date": null,
          "time": [
            "string"
          ],
          "seat": 0
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
      "open_at": "11am",
      "close_at": "5pm",
      "credit": 4,
      "has_wifi": true,
      "has_charging": true,
      "has_ambience": true,
      "image_url": "./images/mocked-cafe3.png",
      "availability_time_slots": [
        {
          "date": null,
          "time": [
            "string"
          ],
          "seat": 0
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

  const handleBottomSheetOpen = () => {
    setIsBottomSheetOpen(true);
    setIsChoosingSlotsModalOpen(true);
  };

  const handleBottomSheetClose = () => {
    setIsBottomSheetOpen(false);
  };

  // for the number of people
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const choosingSlotsModal = () => {
    return (
      <BottomSheet isOpen={isBottomSheetOpen} onClose={handleBottomSheetClose}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          sx={{
            // overflow: "scroll",
            padding: 0,
            paddingBottom: 10
          }}
        >

          <Container sx={{
            border: "1px solid #E7E7E7",
            boxShadow: "0px 4px 20px -5px rgba(0, 0, 0, 0.15)",
            borderRadius: "20px",
            height: 'fit-content',
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
                Twenty Eight Cafe
              </Typography>
              <Typography sx={{ width: 2 / 5, color: "#D89554" }} textAlign='right'>
                16 Credit / hr
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
                11am to 6pm
              </Typography>
            </Grid>
          </Container>

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
            <Typography sx={{ width: 2 / 4, marginLeft: 1, height: 'fit-content', marginBottom: 2 }} textAlign='left' fontWeight={500} >
              Select Date
            </Typography>
            <input
              className={`${styles.date}`} type="date">
            </input>
          </Grid>

          <Grid
            container
            direction="column"
            rowGap={2}
            
            justifyContent="flex-start"
            alignItems="flex-start"
            sx={{
              height: 'fit-content',
              marginLeft: 0,
              marginTop: 2,
              marginBottom: 10,
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
          </Grid>
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
            {allCafes.map(({ name, open_at, close_at, credit, has_wifi, has_charging, has_ambience, image_url, rating}) => (
              <CafeCard modalHandler={handleBottomSheetOpen}
                key={`popular-cafe-${name}`}
                name={name}
                open_at={open_at}
                close_at={close_at}
                credit={credit}
                has_wifi={has_wifi}
                has_charging={has_charging}
                has_ambience={has_ambience}
                image_url={image_url}
                rating={rating}
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
            {allCafes.map(({ name, open_at, close_at, credit, has_wifi, has_charging, has_ambience, image_url, rating}) => (
              <CafeCard modalHandler={handleBottomSheetOpen}
                key={`popular-cafe-${name}`}
                name={name}
                open_at={open_at}
                close_at={close_at}
                credit={credit}
                has_wifi={has_wifi}
                has_charging={has_charging}
                has_ambience={has_ambience}
                image_url={image_url}
                rating={rating}
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
            {allCafes.map(({ name, open_at, close_at, credit, has_wifi, has_charging, has_ambience, image_url, rating}) => (
              <CafeCard modalHandler={handleBottomSheetOpen}
                key={`popular-cafe-${name}`}
                name={name}
                open_at={open_at}
                close_at={close_at}
                credit={credit}
                has_wifi={has_wifi}
                has_charging={has_charging}
                has_ambience={has_ambience}
                image_url={image_url}
                rating={rating}
              />
            ))}
          </div>
        </div>
      </div>
      <BottomNavbar currentPage="home" />
      {choosingSlotsModal()}
    </div>
  );
}
