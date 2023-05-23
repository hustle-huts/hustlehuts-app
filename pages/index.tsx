import Button from '@/components/ui/button';
import styles from '../styles/Home.module.css';
import { Box, Container, Grid, LinearProgress, MobileStepper, Stack, TextField, Typography, createTheme } from '@mui/material';
import { Button as ButtonMUI } from '@mui/material';
import BGM from '../public/images/redemption.png'
import BGM2 from '../public/images/booking-image.png'
import type { } from '@mui/x-date-pickers/themeAugmentation';
import type { } from '@mui/x-date-pickers-pro/themeAugmentation';
import BottomSheet from '@/components/ui/bottomSheet';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import CustomChip from '@/components/ui/chip';

const theme = createTheme({
  components: {
    MuiDatePicker: {
      styleOverrides: {
        root: {
          backgroundColor: 'red',
        },
      },
    },
  },
});

export default function Home() {


  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [value, setValue] = useState<Dayjs | null>(null);
  const maxSteps = 100;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleBottomSheetOpen = () => {
    setIsBottomSheetOpen(true);
  };

  const handleBottomSheetClose = () => {
    setIsBottomSheetOpen(false);
  };

  const handleSuccess = () => {
    setIsSuccess(true);
  };

  function handleConfirm() {
    console.log('Confirmed!');
  }

  const successModal = () => {
    return (
      <BottomSheet isOpen={isBottomSheetOpen} onClose={handleBottomSheetClose}>
        <Container className={styles.redemption} >
          <img alt="" style={{ width: '30vh', height: '100%', objectFit: "contain" }} src={BGM.src} />
        </Container>
        <Container className={styles.descWord} >
          <Typography style={{ padding: '0px 5px' }} align='right' fontFamily='inherit' fontWeight={700} fontSize={22}  >
            "Redemption
          </Typography>
          <Typography color="#D89B60" style={{ padding: '0px 5px' }} align="left" fontFamily='inherit' fontWeight={700} fontSize={22} >
            Successful"
          </Typography>
        </Container>
        <Container className={styles.descRedemption}>
          <Typography style={{ paddingBottom: 16 }} fontFamily='inherit' align='center' fontWeight={600} fontSize={14} >
            1 for 1 drinks
          </Typography>
          <Typography fontFamily='inherit' align='center' fontWeight={600} fontSize={14} >
            Home Coffee Roasters
          </Typography>
        </Container>
        <Container className={styles.desc} >
          <Typography style={{ paddingTop: 16 }} fontFamily='inherit' fontWeight={400} fontSize={16} align="left">
            Enjoyed your experience? We’d love to hear all about it!
          </Typography>
        </Container>
        <Container className={styles.desc} >
          <Typography fontFamily='inherit' fontWeight={500} fontSize={14} >
            Post about your visit on Instagram and tag us at @hustlehutssg!             </Typography>
        </Container>
        <Container className={styles.time} >
          <Typography fontFamily='inherit' fontWeight={500} fontSize={14} >
            Ref ID : 12345            </Typography>
          <Typography align="right" fontFamily='inherit' fontWeight={500} fontSize={14} >
            Feb 4, 2023 | 5:15 pm
          </Typography>
        </Container>

        <Container className={styles.desc}>
          <Button clickEvent={handleBottomSheetClose}>Done</Button>
        </Container>
      </BottomSheet>
    )
  }

  const waitingModal = () => (
    <BottomSheet isOpen={isBottomSheetOpen} onClose={handleBottomSheetClose}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        sx={{
          overflow: "scroll",
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
              src={BGM2.src} />
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
            <Typography sx={{ width: 2 / 5 }} textAlign='left' fontFamily='inherit' fontWeight={600} fontSize={18}>
              Twenty Eight Cafe
            </Typography>
            <Typography sx={{ width: 2 / 5, color: "#D89554" }} textAlign='right' fontFamily='inherit' fontWeight={600} fontSize={16}>
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
            <AccessTimeIcon />
            <Typography sx={{ width: 2 / 4, marginLeft: 1, }} textAlign='left' fontFamily='inherit' fontWeight={400} fontSize={14}>
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
          <Typography sx={{ width: 2 / 4, marginLeft: 1, height: 'fit-content', marginBottom: 2 }} textAlign='left' fontFamily='inherit' fontWeight={500} fontSize={16}>
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
            nextButton={<ButtonMUI
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
            </ButtonMUI>}
            backButton={<ButtonMUI
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
            </ButtonMUI>} />
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
          <Typography sx={{ width: 2 / 4, marginLeft: 1, height: 'fit-content', marginBottom: 2 }} textAlign='left' fontFamily='inherit' fontWeight={500} fontSize={16}>
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
            marginBottom: 2,
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
  )

  return (
    <div className={styles.container}>
      <Button clickEvent={handleBottomSheetOpen}></Button>
      {isSuccess ? successModal() : waitingModal()}
    </div>
  );
}