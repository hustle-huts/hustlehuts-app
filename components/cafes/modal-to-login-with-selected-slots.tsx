import { ReactElement, useState, useEffect } from 'react';
import styles from './modal-to-choose-slots.module.css';
import Button from '@mui/material/Button';
import { AccessTime } from '@mui/icons-material';
import BottomSheet from "@/components/ui/bottomSheet";
import { Box, Container, Grid, Typography } from '@mui/material';
import MockedImg from '../../public/images/mocked-cafe-for-booking.png'

import ModalSelectedCafeDetails from './modal-selected-cafe-details';


type functionType = () => void;

interface props {
    cafe: any,
    selectedDate: string,
    selectedTimeSlots: string[],
    isBottomSheetOpen: boolean,
    handleBottomSheetClose: functionType
}


const ModalToLoginWithSelectedSlots: React.FC<props> = (props): ReactElement<any, any> | null => {

    return (
        <BottomSheet isOpen={props.isBottomSheetOpen} onClose={props.handleBottomSheetClose}>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="flex-start"
                sx={{
                }}
            >

                {/* Header text */}
                <Grid
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    sx={{
                        height: 'fit-content',
                        marginLeft: 0,
                        marginTop: 1,
                        width: '-webkit-fill-available',
                    }}
                    >
                    <Typography 
                        sx={{
                            marginTop: 2,
                            fontSize: 22
                        }} 
                        textAlign='center' 
                        fontWeight={700}
                        >
                        Confirm Your Booking
                    </Typography>
                    <Typography 
                        textAlign='center' 
                        color='#565656;'
                        >
                        But first, we'll need some of your details.
                    </Typography>
                </Grid>

                {/* Cafe with date/time slots that user has chosen  */}
                <Grid
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    sx={{
                        height: 'fit-content',
                        marginBottom: 2,
                        width: '-webkit-fill-available'
                    }}
                    >
                    <ModalSelectedCafeDetails
                        cafe={props.cafe} 
                        selectedDate={props.selectedDate}
                        selectedTimeSlots={props.selectedTimeSlots}
                    />
                </Grid>
            </Grid>
        </BottomSheet>
    );
}


export default ModalToLoginWithSelectedSlots;