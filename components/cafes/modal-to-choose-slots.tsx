import { ReactElement, useState, useEffect } from 'react';
import styles from './modal-to-choose-slots.module.css'
import { Button, ButtonProps } from '@mui/material';
import { AccessTime } from '@mui/icons-material';
import BottomSheet from "@/components/ui/bottomSheet";
import { Box, Container, Grid, MobileStepper, Typography } from '@mui/material';
import MockedImg from '../../public/images/mocked-cafe-for-booking.png'

type functionType = () => void;

interface props {
    cafe: any,
    isBottomSheetOpen: boolean,
    handleBottomSheetClose: functionType,
    selectedPossibleTimeSlots: any[] | null,
    setSelectedPossibleTimeSlots: Function
}

// function ModalToChooseSlots(props: any) {
const ModalToChooseSlots: React.FC<props> = (props): ReactElement<any, any> | null => {
    const selectedButtonStyle = {
        background: 'linear-gradient(176.54deg, #6D5747 -11.89%, #B88151 64.46%)',
        boxShadow: '0px 4px 40px rgba(160, 116, 78, 0.18)',
        borderRadius: '10px',
        padding: 1,
        marginBottom: 2,
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '60%',
        color: '#fff !important',
    };
    const unselectedButtonStyle = {
        background: '',
        boxShadow: '',
        borderRadius: '10px',
        padding: 1,
        marginBottom: 2,
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '60%',
        color: '#000 !important',
    }
    
    const [activeStep, setActiveStep] = useState(0);
    const [buttonClickedList, setButtonClickedList] = useState<boolean[]>([]);
    type ButtonVariant = 'text' | 'outlined' | 'contained';
    const [variantList, setVariantList] = useState<Array<ButtonVariant>>([]);
    const [buttonStyleList, setButtonStyleList] = useState<object[]>([]);
    
    useEffect(() => {
        console.log('Button clicked list useEffect:', buttonClickedList);
    }, [buttonClickedList]);
    
    useEffect(() => {
        console.log('Variant list useEffect:', variantList);
    }, [variantList]);
    
    useEffect(() => {
        console.log('Button style list useEffect:', buttonStyleList);
    }, [buttonStyleList]);
    
    
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
        // get the timeslots for the cafe again
        const availSlots = cafe.availability_time_slots;

        // for the chosen date, get all the corresponding time slots and no. of seats for each time slot
        const availCorrespondingTimeSlots = [];
        const availCorrespondingSeats: number[] = [];
        for (let i = 0; i < availSlots.length; i++) {
            if (availSlots[i].date === currentDate) {
            for (let j = 0; j < availSlots[i].time.length; j++) {
                availCorrespondingTimeSlots.push(availSlots[i].time[j]);
                availCorrespondingSeats.push(availSlots[i].seat[j]);
            }
            }
        }

        setButtonClickedList(Array.from({ length: availCorrespondingTimeSlots.length }, () => false));
        setVariantList(Array.from({ length: availCorrespondingTimeSlots.length }, () => 'outlined'));
        setButtonStyleList(
            Array.from({ length: availCorrespondingTimeSlots.length }, () => unselectedButtonStyle)
        );
        

        // to click or unclick a button
        const handleButtonClick = (index: number) => {
            setVariantList((prevList) => {
            const updatedList = [...prevList];
            if (updatedList[index] === 'contained') {
                updatedList[index] = 'outlined'
            } else {
                updatedList[index] = 'contained'
            }
            return updatedList;
            });

            setButtonStyleList((prevList) => {
            const updatedList = [...prevList];
            if (updatedList[index] === unselectedButtonStyle) {
                updatedList[index] = selectedButtonStyle;
            } else {
                updatedList[index] = unselectedButtonStyle
            }
            return updatedList;
            });

            setButtonClickedList((prevList) => {
            const updatedList = [...prevList];
            updatedList[index] = !updatedList[index];
            return updatedList;
            });
        };

        // build a button for each time slot and its no. of seats
        const timeButtons = availCorrespondingTimeSlots.map((timeSlot, index) => {
            const variant = variantList[index];
            const buttonStyle = buttonStyleList[index];

            return (
            <Button 
                key={index} 
                onClick={() => handleButtonClick(index)}
                size="small"
                variant={variant}
                color="warning"
                sx={buttonStyle}
            >
                {timeSlot} ({availCorrespondingSeats[index]} seats left)
            </Button>
            );
        });
        

        props.setSelectedPossibleTimeSlots(timeButtons);
    }

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
                        <Typography sx={{ width: 2 / 4, marginLeft: 1, }} textAlign='left'>
                        {props.cafe.open_at[dayOfWeek]} to {props.cafe.close_at[dayOfWeek]}
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
                        {generateDateButtons(props.cafe)}

                        <Typography sx={{ width: 2 / 4, marginLeft: 1, height: 'fit-content', marginBottom: 2 }} textAlign='left' fontWeight={600} >
                        Select Time 
                        </Typography>

                        {/* When they choose a date, the corresponding time will show */}
                        {props.selectedPossibleTimeSlots}
                    </Grid>
                    </Grid>


                    {/* Continue button  */}
                    <Button
                        size="small"
                        variant='contained'
                        className={styles.filledButton}
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