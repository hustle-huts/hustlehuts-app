import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import styles from '@/styles/Profile.module.css';
import CafeItem from '@/components/cafes/cafe-item';
import TopBanner from '@/components/topBanner/top-banner';
import ProfileBox from '@/components/profile/profile-box';
import { Container, LinearProgress, Typography } from '@mui/material';
import UserReward from '@/components/users/user-reward';
import Image from 'next/image';
import FeedbackIcon from '@/public/images/feedback.png'
import Link from 'next/link';
import BGM from '@/public/images/redemption.png'
import BGM2 from '@/public/images/mocked-cafe-for-booking.png'
import BottomSheet from '@/components/ui/bottomSheet';
import { useState } from 'react';
import CafePromotion from '@/components/cafes/cafe-promotion';
import SwipeToConfirmButton from '@/components/ui/SwipeToConfirmButton';

export default function ProfilePage() {
    const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
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
           <img alt="" style={{ width: '30vh', height: '100%', objectFit:"contain" }}  src={BGM.src}  />
           </Container>
            <Container className={styles.descWord} >
            <Typography style={{padding: '0px 5px'}} align='right' fontFamily='inherit' fontWeight={700} fontSize={22}  >
                "Redemption  
            </Typography>
            <Typography color="#D89B60" style={{padding: '0px 5px'}} align="left" fontFamily='inherit' fontWeight={700} fontSize={22} >
                   Successful"
            </Typography>
          </Container>
          <Container className={styles.descRedemption}>
        <Typography style={{paddingBottom: 16}} fontFamily='inherit' align='center' fontWeight={600} fontSize={14} >
        1 for 1 drinks             
          </Typography>
          <Typography fontFamily='inherit' align='center' fontWeight={600} fontSize={14} >
        Home Coffee Roasters            
          </Typography>
        </Container>
          <Container className={styles.desc} >
            <Typography style={{paddingTop: 16}}  fontFamily='inherit' fontWeight={400} fontSize={16} align="left">
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
          <Button onClick={handleBottomSheetClose}>Done</Button>
        </Container>
      </BottomSheet>
      )
  }

  const waitingModal = () => {
    return (
      <BottomSheet isOpen={isBottomSheetOpen} onClose={handleBottomSheetClose}>
        <CafePromotion image={BGM2} />
        <Container className={styles.desc} >
          <Typography fontFamily='inherit' fontWeight={500} fontSize={16} >
              Please ensure the following before activating the voucher:
          </Typography>
        </Container>
        <Container className={styles.descDetail}>
        <Typography fontFamily='inherit' fontWeight={400} fontSize={16} >
              You are at Home Coffee Roaster Telok Ayer
          </Typography>
        </Container>
        <Container className={styles.descDetail}>
        <Typography fontFamily='inherit' fontWeight={400} fontSize={16} >
        A Cafe/restaurant staff is present to witness the redemption            
        </Typography>
        </Container>
        <Container className={styles.desc}>
        <Typography fontFamily='inherit' align='center' fontWeight={400} fontSize={16} >
        This voucher expires in 15 minutes after activation          </Typography>
        </Container>
        <Container className={styles.slide}>
            <SwipeToConfirmButton onConfirm={handleSuccess} />
        </Container>
    </BottomSheet>
    )
}
    
    return (
        <div className={styles.container}>
            <TopBanner />
            <div className={styles.profileContainer}>
                <div className={styles.box}>
                    <ProfileBox />
                    <UserReward />
                    <div className={styles.cafeContainer} style={{ display:'flex', justifyContent:'center', height: '100%'}}>
                        <CafeItem isOpen modalHandler={handleBottomSheetOpen} />
                    </div>
                    <div style={{ height:"15%", display:'flex', width:'70%', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                        <p className={styles.feedback}>We love your feedback!</p>
                        <div className={styles.linkBox}>
                            <Image style={{ width: '40px', height: '40px', objectFit:"contain" }} alt="" src={FeedbackIcon} height={10} width={10} />
                            <div className={styles.feedbackText}>
                                <p className={styles.hit}>Hit us up at</p>
                                <a className={styles.link}>admin@hustle.com</a>
                            </div>
                        </div>
                    </div>
                    <div>
                    {isSuccess ? successModal() : waitingModal()}
    </div>
                </div>
            </div>
        </div>
    );
}