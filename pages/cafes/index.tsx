import styles from "../../styles/Cafes.module.css";
import Image from "next/image";
import BottomNavbar from "@/components/bottomNavbar/bottom-navbar";
import TopBanner from "@/components/topBanner/top-banner";
import CafeCard from "@/components/cafes/cafe-card";
import ModalToChooseSlots from "@/components/cafes/modal-to-choose-slots";
import ModalToLoginWithSelectedSlots from "@/components/cafes/modal-to-login-with-selected-slots";
import InputAdornment from "@mui/material/InputAdornment";
import { Button, ButtonProps } from '@mui/material';
// import CustomChip from '@/components/ui/chip';
// import { AccessTime, Diversity1 } from '@mui/icons-material';
// import BottomSheet from "@/components/ui/bottomSheet";
import { TextField } from '@mui/material';

import SearchIcon from "../../public/images/search.svg";
import FilterIcon from "../../public/images/filter.svg";

import { useState } from "react";


const AllCafes = () => {
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
          "date": "30-05-2023",
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
          "date": "31-05-2023",
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
          "date": "30-05-2023",
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
          "date": "30-05-2023",
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
          "date": "30-05-2023",
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
  const [isModalToChooseSlotsOpen, setIsModalToChooseSlotsOpen] = useState(false);
  const [isModalToLoginOpen, setIsModalToLoginOpen] = useState(false);
  const [selectedCafe, setSelectedCafe] = useState<any>({});

  // all the timeslots for the date that the user is currently looking at in the modal-to-choose-slots
  const [selectedPossibleTimeSlots, setSelectedPossibleTimeSlots] = useState<any[] | null>(null);

  // the date and time slots that the user has selected and to keep track of across all modals
  const [finalSelectedDate, setFinalSelectedDate] = useState<string>("");
  const [finalSelectedTimeSlots, setFinalSelectedTimeSlots] = useState<string[]>([]);

  // open the modal pop-up with the correct cafe details
  const handleBottomSheetOpen = (cafe: any) => {
    setSelectedCafe(cafe);
    setIsBottomSheetOpen(true);
    setIsModalToChooseSlotsOpen(true);
  };

  // close the modal pop-up and reset all variables
  const handleBottomSheetClose = () => {
    setIsBottomSheetOpen(false);
    setIsModalToLoginOpen(false);
    setSelectedCafe(null);
    setSelectedPossibleTimeSlots(null);
    setFinalSelectedDate("");
    setFinalSelectedTimeSlots([]);
  };

  return (
    <div className={styles.container}>
      <TopBanner />

      <div className={styles.cafeContainer}>

        {/* Search bar */}
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
        {/* <div className={styles.filterButtons}>
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
        </div> */}

        {/* Most Popular Cafes */}
        {/* <div style={{ paddingTop: "0.8rem" }}>
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
        </div> */}

        {/* Near You Cafes */}
        {/* <div>
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
        </div> */}

        {/* Hidden Gems Cafes */}
        {/* <div>
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
        </div> */}

        {/* All Cafes */}
        <div>
          <div className={styles.titleBar}>
            <p className={styles.title}>Hidden Gems Near You</p>
            {/* <Button className={styles.seeAllButton} variant="text">
              See All
            </Button> */}
          </div>

          <div style={{ width: "100%", display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
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

      <BottomNavbar />

      {/* Open the modals */}
      {isModalToChooseSlotsOpen ? (
        <ModalToChooseSlots 
          cafe={selectedCafe} 
          isBottomSheetOpen={isBottomSheetOpen}
          handleBottomSheetClose={handleBottomSheetClose}
          setFinalSelectedDate={setFinalSelectedDate}
          setFinalSelectedTimeSlots={setFinalSelectedTimeSlots}
          setIsModalToLoginOpen={setIsModalToLoginOpen}
          setIsModalToChooseSlotsOpen={setIsModalToChooseSlotsOpen}
        />
      ) : null}

      {isModalToLoginOpen ? (
        <ModalToLoginWithSelectedSlots 
          cafe={selectedCafe} 
          isBottomSheetOpen={isBottomSheetOpen}
          handleBottomSheetClose={handleBottomSheetClose}
          selectedDate={finalSelectedDate}
          selectedTimeSlots={finalSelectedTimeSlots}
        />
      ) : null}


    </div>
  );
}

export default AllCafes;