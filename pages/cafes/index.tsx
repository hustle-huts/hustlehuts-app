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

const CafesPage = () => {
  const [selectedFilter, setSelectedFilters] = useState("filter1");

  // Testing data
  const allCafes = [
    {
      cafe_name: "Twenty Eight Cafe",
    },
    {
      cafe_name: "Twenty Nine Cafe",
    },
    {
      cafe_name: "Thirty Cafe",
    },
  ];

  return (
    <>
      <TopBanner currentPage="home" />
      <div className={styles.container}>
        <div className={styles.cafeContainer}>
          <TextField
            id="input-with-icon-textfield"
            sx={{ marginBottom: "1.4rem" }}
            placeholder="Search for Cafes"
            className={styles.searchTextField}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" sx={{ width: "auto" }}>
                  <Image className={styles.searchIcon} alt="Search Icon" src={SearchIcon} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end" sx={{ width: "auto" }}>
                  <Button
                    className={styles.searchFilterButton}
                    onClick={() => console.log("Filter button clicked")}
                    variant="text"
                  >
                    <Image className={styles.filterIcon} alt="Filter Icon" src={FilterIcon} />
                  </Button>
                </InputAdornment>
              ),
            }}
            variant="standard"
          />

          {/* Filters */}
          <div className={styles.filterButtons}>
            <Button
              className={styles.filterButton + " " + (selectedFilter === "filter1" && styles.filterButtonSelected)}
              onClick={() => setSelectedFilters("filter1")}
              variant="text"
            >
              Most Popular
            </Button>
            <Button
              className={styles.filterButton + " " + (selectedFilter === "filter2" && styles.filterButtonSelected)}
              onClick={() => setSelectedFilters("filter2")}
              variant="text"
            >
              Near You
            </Button>
            <Button
              className={styles.filterButton + " " + (selectedFilter === "filter3" && styles.filterButtonSelected)}
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
              {allCafes.map(({ cafe_name }) => (
                <CafeCard key={`popular-cafe-${cafe_name}`} cafe_name={cafe_name} />
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
              {allCafes.map(({ cafe_name }) => (
                <CafeCard key={`near-cafe-${cafe_name}`} cafe_name={cafe_name} />
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
              {allCafes.map(({ cafe_name }) => (
                <CafeCard key={`hidden-gem-cafe-${cafe_name}`} cafe_name={cafe_name} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <BottomNavbar currentPage="home" />
    </>
  );
};

export default CafesPage;
