import styles from "../../styles/Cafes.module.css";
import Image from "next/image";
import BottomNavbar from "@/components/bottomNavbar/bottom-navbar";
import TopBanner from "@/components/topBanner/top-banner";
import CafeCard from "@/components/cafes/cafe-card";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

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
              <CafeCard
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
              <CafeCard
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
              <CafeCard
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
    </div>
  );
}
