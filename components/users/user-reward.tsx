import styles from './user-reward.module.css';
import BadgeIcon from '../icons/badge-icon';
import { LinearProgress } from '@mui/material';
export default function UserReward() {
    
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <div className={styles.icon}>
                <BadgeIcon />
                </div>
                <div className={styles.reward}>
                    <div className={styles.progress}>
                        <h1 style={{ fontSize:"14px", color:"#E4974E", textAlign:"left" }}>Rewards</h1>
                        <span style={{display:"flex", flexDirection:"row", flex:" 2"}}>
                            <h2 style={{ fontSize:"14px", color:"#000000", flex:"1"}}>0</h2>
                            <h2 style={{ fontSize:"14px", color:"#C4C2C0", flex:"1" }}>/3</h2>
                        </span>

                    </div>
                    <div style={{ height: '4px', color:"#D89B60", marginTop:'4px' }}>
                        <LinearProgress color='inherit' variant='determinate' value={50} />
                    </div>
                    <p className={styles.desc}>Place 3 bookings by 29 March to unlock a mystery reward</p>
                </div>
            </div>
        </div>
        );
}
