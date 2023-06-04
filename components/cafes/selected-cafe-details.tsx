// this is not a modal component, 
// but just the summary box for the cafe, date, and time slots that the user has chosen

import { ReactElement, useState, useEffect } from 'react';
import { Box, Container, Grid, MobileStepper, Typography } from '@mui/material';
import { AccessTime, LocationOnOutlined, CalendarMonthOutlined } from '@mui/icons-material';
import MockedImg from '../../public/images/mocked-cafe-for-booking.png'

interface props {
    cafe: any,
    selectedDate: string,
    selectedTimeSlots: string[]
}

const ModalSelectedCafeDetails: React.FC<props> = (props): ReactElement<any, any> | null => {
    return (
        <Container sx={{
            border: "1px solid #E7E7E7",
            boxShadow: "0px 4px 20px -5px rgba(0, 0, 0, 0.15)",
            borderRadius: "20px",
            height: 'fit-content',
            marginTop: 2,
            paddingTop: 1,
            paddingBottom: 1,
            textAlign: 'center',
            maxWidth: { xs: 400, md: 600 },
            }}>

                {/* Cafe image */}
                <Container>
                    <Box
                    component="img"
                    sx={{
                        height: "auto",
                        marginTop: 2,
                        marginBottom: 2,
                        maxHeight: { md: 220 },
                        maxWidth: { md: 400 },
                    }}
                    alt="Cafe image."
                    src={MockedImg.src} />
                </Container>

                {/* Location */}
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    xs="auto"
                    sx={{
                    height: 'fit-content',
                    marginLeft: 0,
                    marginBottom: 2,
                    }}
                >
                    <LocationOnOutlined />
                    <Typography sx={{ width: 3 / 10 }} textAlign='left' fontWeight={600}>
                        Location
                    </Typography>
                    <Typography 
                        sx={{ 
                            width: 3 / 5,
                            color: '#676767'
                        }} 
                        textAlign='right' 
                        fontWeight={500}>
                            {props.cafe.name}
                    </Typography>
                </Grid>

                {/* Date */}
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    xs="auto"
                    sx={{
                    height: 'fit-content',
                    marginLeft: 0,
                    marginBottom: 2,
                    }}
                >
                    <CalendarMonthOutlined />
                    <Typography sx={{ width: 3 / 10 }} textAlign='left' fontWeight={600}>
                        Date
                    </Typography>
                    <Typography 
                        sx={{ 
                            width: 3 / 5,
                            color: '#676767'
                        }} 
                        textAlign='right' 
                        fontWeight={500}>
                            {props.selectedDate}
                    </Typography>
                </Grid>

                {/* Time slots  */}
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    xs="auto"
                    sx={{
                    height: 'fit-content',
                    marginLeft: 0,
                    marginBottom: 2,
                    }}
                >
                    <AccessTime />
                    <Typography sx={{ width: 3 / 10 }} textAlign='left' fontWeight={600}>
                        Slots
                    </Typography>
                    <Typography 
                        sx={{ 
                            width: 3 / 5,
                            color: '#676767'
                        }} 
                        textAlign='right' 
                        fontWeight={500}>
                            {props.selectedTimeSlots.map((timeSlot, index) => (
                                <span key={index}>
                                    {timeSlot}
                                    {index != props.selectedTimeSlots.length - 1 && ", "} 
                                </span>
                            ))}
                    </Typography>
                </Grid>
            </Container>
    );
}


export default ModalSelectedCafeDetails;