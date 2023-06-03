import styles from '@/styles/Profile.module.css';
import CafeItem from '@/components/cafes/cafe-item';
import TopBanner from '@/components/topBanner/top-banner';
import ProfileBox from '@/components/profile/profile-box';
import { Container, Grid, Avatar, Badge, LinearProgress, Typography } from '@mui/material';
import UserReward from '@/components/users/user-reward';
import Image from 'next/image';
import React from 'react';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EditIcon from '../../../public/images/profile_edit.png'
import FeedbackIcon from '../../../public/images/feedback.png'
import AvatarPicture from '../../../public/images/avatar.png'

import { useState } from 'react';
import IconInput from '@/components/ui/iconInput';
export default function ProfilePage() {
    const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);


    const handleSuccess = () => {
        setIsSuccess(true);
    };

    function handleConfirm() {
        console.log('Confirmed!');
    }

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };




    return (
        <div className={styles.container}>
            <TopBanner currentPage='profile' />
            <div className={styles.profileContainer}>
                <div className={styles.box} style={{ flexDirection: 'column', overflowY: 'auto' }}>
                    <div className={styles.items}
                    >
                        <Badge
                            overlap="circular"
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            sx={{
                                width: '120px',
                                height: '120px',
                                marginBottom: '10px'
                            }}
                            badgeContent={<img src={EditIcon.src} style={{ width: "36px", height: "36px", objectFit: "contain" }} />}
                        >
                            <Avatar
                                sx={{
                                    width: '120px',
                                    height: '120px',
                                }}
                                alt="Profile" src={AvatarPicture.src}

                            />
                        </Badge>
                        <IconInput label="Name" isRequired icon={<PersonOutlineOutlinedIcon />} />
                        <IconInput label="Email" icon={<EmailOutlinedIcon />} />
                        <IconInput password passwordVisibility={showPassword} onMouseDownEvent={handleMouseDownPassword} onClickEvent={handleClickShowPassword} label="Password" isRequired icon={<PersonOutlineOutlinedIcon />} />
                        <IconInput label="Phone Number" isRequired icon={<CheckCircleOutlineOutlinedIcon />} />
                        <IconInput formHelper='for booking reminders!' label="Telegram Handle" icon={<CheckCircleOutlineOutlinedIcon />} />
                        <div style={{ marginTop: '10px', height: "15%", display: 'flex', width: '90%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography
                                fontFamily="inherit"
                                align="left"
                                fontWeight={600}
                                fontSize={20}
                                sx={{
                                    mb: 2
                                }}
                            >
                                Need to change your details?
                            </Typography>
                            <Grid
                                container
                                columnSpacing={0}
                                rowSpacing={0}
                                justifyContent="center"
                                alignItems="center"
                                sx={{
                                    background: 'rgba(216, 169, 119, 0.2)',
                                    border: '1px solid #DDC9B5',
                                    borderRadius: "14px"
                                }}
                            >
                                <Grid
                                    container
                                    justifyContent="center"
                                    alignItems="center"
                                    xs={2}>
                                    <img style={{ width: '40px', height: '40px', objectFit: "contain" }} alt="" src={FeedbackIcon.src} height={10} width={10} />
                                </Grid>
                                <Grid
                                    container
                                    justifyContent="center"
                                    alignItems="center"
                                    item xs={10}>
                                    <div className={styles.contactText}>
                                        <p className={styles.hit}>Email us <a className={styles.link}>admin@hustlehuts.com</a> or</p>
                                        <p className={styles.hit}>Telegram us <a className={styles.link}>@hustlehuts</a> or</p>
                                    </div>
                                </Grid>

                            </Grid>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
}