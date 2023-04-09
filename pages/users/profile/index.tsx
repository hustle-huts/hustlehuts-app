import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import styles from '../../../styles/Profile.module.css';
import CafeItem from '@/components/cafes/cafe-item';

import ProfileBox from '@/components/users/profile-box';
import { LinearProgress } from '@mui/material';
import UserReward from '@/components/users/user-reward';
import Image from 'next/image';
import FeedbackIcon from '../../../public/images/feedback.png'
import Link from 'next/link';
export default function ProfilePage() {
    return (
        <div className={styles.container}>
            <div className={styles.profileContainer}>
                <div className={styles.box}>
                    <ProfileBox />
                    <UserReward />
                    <div className={styles.cafeContainer} style={{ display:'flex', justifyContent:'center', height:'40%'}}>
                        <CafeItem isOpen />
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
 
                </div>
            </div>
        </div>
    );
}