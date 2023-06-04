import { ReactElement, useState, useEffect } from 'react';
import styles from './modal-to-choose-slots.module.css';
import Button from '@mui/material/Button';
import { AccessTime } from '@mui/icons-material';
import BottomSheet from '../ui/bottomSheet';
import { Box, Container, Grid, MobileStepper, Typography } from '@mui/material';
import MockedImg from '../../public/images/mocked-cafe-for-booking.png'

type functionType = () => void;

interface props {
    cafe: any,
    isBottomSheetOpen: boolean,
    handleBottomSheetClose: functionType,
    setFinalSelectedDate: Function,
    setFinalSelectedTimeSlots: Function,
    setIsModalToLoginOpen: Function,
    setIsModalToChooseSlotsOpen: Function
}

// function ModalToChooseSlots(props: any) {
const ModalToChooseSlots: React.FC<props> = (props): ReactElement<any, any> | null => {
    const [activeStep, setActiveStep] = useState(0);

    // to keep track of the date that the user has clicked in the modal
    const [availDates, setAvailDates] = useState<string[]>([]);
    const [buttonDateStyleList, setButtonDateStyleList] = useState<string[]>([]);

    // to keep track of the time slots that the user has clicked in the modal
    const [availCorrespondingTimeSlots, setAvailCorrespondingTimeSlots] = useState<string[]>([]);
    const [availCorrespondingSeats, setAvailCorrespondingSeats] = useState<number[]>([]);
    const [buttonTimeStyleList, setButtonTimeStyleList] = useState<string[]>([]);
    
    useEffect(() => {
        console.log('Button style list useEffect:', buttonDateStyleList);
    }, [buttonDateStyleList]);

    
    useEffect(() => {
        console.log('Button style list useEffect:', buttonTimeStyleList);
    }, [buttonTimeStyleList]);

    useEffect(() => {
        if (props.isBottomSheetOpen) {
          generateDateButtons();
          setAvailCorrespondingTimeSlots([]);
        }
    }, [props.isBottomSheetOpen]);
    
    
    // increase the number of people
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    
    // decrease the number of people
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };


    if (!props.cafe) {
        return null; // Return early if cafe is null or undefined
    }


    // Get the day of the week from"dd-mm-yyyy" 
    const getDayOfWeek = (dateString: string) => {
        const parts = dateString.split("-"); // Split the date string into day, month, and year parts
        const formattedDate = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`); // Create a new Date object in the "yyyy-mm-dd" format
        const dayOfWeek = formattedDate.toLocaleDateString("en-US", { weekday: "long" }); // Get the day of the week in long format (e.g., "Monday")
        return dayOfWeek;
    }

    // Get the day of the week to show the correct opening hours in the choosingSlotsModal
    const getCurrentDayOfWeekIndex = () => {
        const currentTime = new Date();
        const dayOfWeekIndex = (currentTime.getDay() + 6) % 7; // 0 for Monday, 1 for Tuesday, etc.
        return dayOfWeekIndex;
        // const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    }
    

    // show all the available dates as buttons
    const generateDateButtons = () => {
        if (!props.cafe) {
            return; // Return early if cafe is null or undefined
        }

        const availSlots = props.cafe.availability_time_slots;
        const availDates = []
        for (let i = 0; i < availSlots.length; i++) {
            availDates.push(availSlots[i].date);
        }

        // create the arrays to keep track of whether the date buttons are clicked on
        setButtonDateStyleList(
            Array.from({ length: availDates.length }, () => styles.outlinedButton)
        );

        setAvailDates(availDates);
    }

    // to show the corresponding time slots for a date that a user clicks on
    const showCorrespondingTimeSlotsButtons = (currentDate: string, cafe: any) => {

        // get the timeslots for the cafe again
        const availSlots = cafe.availability_time_slots;

        // for the chosen date, get all the corresponding time slots and no. of seats for each time slot
        const availCorrespondingTimeSlots: string[] = [];
        const availCorrespondingSeats: number[] = [];
        for (let i = 0; i < availSlots.length; i++) {
            if (availSlots[i].date === currentDate) {
                for (let j = 0; j < availSlots[i].time.length; j++) {
                    availCorrespondingTimeSlots.push(availSlots[i].time[j]);
                    availCorrespondingSeats.push(availSlots[i].seat[j]);
                }
            }
        }

        // create the default lists for unclicked buttons 
        // setButtonTimeClickedList(Array.from({ length: availCorrespondingTimeSlots.length }, () => false));
        setButtonTimeStyleList(
            Array.from({ length: availCorrespondingTimeSlots.length }, () => styles.outlinedButton)
        );

        // to click or unclick a button
        setAvailCorrespondingTimeSlots(availCorrespondingTimeSlots)
        setAvailCorrespondingSeats(availCorrespondingSeats)
    }

    // change color of the button for the date the user clicks on
    const handleDateClick = (index: number) => {
        setButtonDateStyleList((prevList) => {
          const dateStyleUpdatedList = [...prevList];
      
          // Update only the clicked button's style
          dateStyleUpdatedList.forEach((_, i) => {
            if (i === index) {
              dateStyleUpdatedList[i] = styles.filledButton;
            } else {
              dateStyleUpdatedList[i] = styles.outlinedButton;
            }
          });
      
          return dateStyleUpdatedList;
        });
      };

    // to click or unclick a button
    const handleTimeButtonClick = (index: number) => {
        // add the selected time slot to user's final time slots chosen
        // this list will be emptied when the user clicks on another date
        props.setFinalSelectedTimeSlots((prevList : string[]) => [...prevList, availCorrespondingTimeSlots[index]]);
        
        setButtonTimeStyleList((prevList) => {
            const timeStyleUpdatedList = [...prevList];
            if (timeStyleUpdatedList[index] === styles.outlinedButton) {
                timeStyleUpdatedList[index] = styles.filledButton;
            } else {
                timeStyleUpdatedList[index] = styles.outlinedButton;
            } 
            return timeStyleUpdatedList;
        });
    };

    return (
        <div>
            <BottomSheet isOpen={props.isBottomSheetOpen} onClose={props.handleBottomSheetClose}>
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
                    textAlign: 'center',
                    marginTop: 2,
                    paddingBottom: 2
                    }}>
                        <Container>
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
                            {props.cafe.name}
                            </Typography>
                            <Typography sx={{ width: 2 / 5, color: "#D89554" }} textAlign='right'>
                            {props.cafe.credit} Credit(s) / hr
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
                            <Typography 
                            sx={{ 
                                width: 2 / 4, 
                                marginLeft: 1, 
                            }} 
                            textAlign='left'>
                            {props.cafe.open_at[getCurrentDayOfWeekIndex()]} to {props.cafe.close_at[getCurrentDayOfWeekIndex()]}
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
                    <Typography 
                    sx={{ 
                        width: 2 / 4, 
                        marginLeft: 1, 
                        height: 'fit-content',
                        marginTop: 2,
                        marginBottom: 2 
                        }} 
                    textAlign='left'
                    fontWeight={600}>
                        Number of People
                    </Typography>
                    <MobileStepper
                        variant='text'
                        steps={100}
                        className={styles.mobileStepper}
                        position='static'
                        activeStep={activeStep}
                        
                        // Next/add button
                        nextButton={
                        <Button
                        className={styles.mobileStepperButton}
                        disabled={activeStep >= 100}
                        onClick={handleNext}
                        >
                        +
                        </Button>}

                        // Back/substract button
                        backButton={
                        <Button
                        className={styles.mobileStepperButton}
                        disabled={activeStep <= 0}
                        onClick={handleBack}>
                        -
                        </Button>} />
                    </Grid>
                    
                    
                    {/* Select Date */}
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
                        <Typography 
                        sx={{ 
                            width: 2 / 4, 
                            marginLeft: 1, 
                            height: 'fit-content', 
                            marginTop: 2,
                            marginBottom: 2 
                            }} 
                        textAlign='left' 
                        fontWeight={600} >
                            Select Date
                        </Typography>


                        {/* Show the dates available for this cafe */}
                        <Grid
                        container
                        display="flex"
                        sx={{
                            marginLeft: 0,
                            marginTop: 2,
                            marginBottom: 2,
                        }}>
                            {availDates.map((date, index) => {
                                return (
                                    <Button 
                                        key={index}
                                        className={buttonDateStyleList[index]}
                                        sx={{
                                            padding: '50px',
                                            textTransform: 'none'
                                        }}
                                        onClick={() => {
                                            props.setFinalSelectedDate(date);
                                            // clear the previous selection of time slots by the user
                                            props.setFinalSelectedTimeSlots([]);
                                            showCorrespondingTimeSlotsButtons(date, props.cafe);
                                            handleDateClick(index);
                                            }} >
                                            {date}, {getDayOfWeek(date)}
                                    </Button>
                                )
                            })}
                        </Grid>

                        <Typography 
                        sx={{ 
                            width: 2 / 4, 
                            marginLeft: 1, 
                            height: 'fit-content', 
                            marginTop: 2,
                            marginBottom: 2 
                            }} 
                        textAlign='left' 
                        fontWeight={600} >
                            Select Time 
                        </Typography>

                        {/* When they choose a date, the corresponding time slots will show */}
                        <Grid
                        container
                        display="flex"
                        flexWrap="wrap"
                        sx={{
                            marginLeft: 0,
                            marginTop: 2,
                            marginBottom: 2,
                        }}>
                            {availCorrespondingTimeSlots.map((timeSlot, index) => {
                                const buttonStyle = buttonTimeStyleList[index];

                                return (
                                <Button 
                                    key={index} 
                                    onClick={() => handleTimeButtonClick(index)}
                                    sx={{
                                        padding: 5,
                                        textTransform: 'none'
                                    }}
                                    className={buttonStyle}
                                >
                                    {timeSlot} ({availCorrespondingSeats[index]} seats left)
                                </Button>
                                );
                            })}
                        </Grid>
                    </Grid>


                    {/* Continue button  */}
                    <Button 
                        className={styles.filledButton}
                        sx={{
                            maxHeight: '60px',
                        }}
                        onClick={() => {
                            if (availDates.length !== 0 && availCorrespondingTimeSlots.length !== 0) {
                                // open the next modal and close this current modal
                                props.setIsModalToLoginOpen(true);
                                props.setIsModalToChooseSlotsOpen(false);
                            } 
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
        </div>
    );
}


export default ModalToChooseSlots;