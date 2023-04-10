import styles from './bookings-bar.module.css';
import { LinearProgress } from '@mui/material';
export default function BookingsBar() {
    
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <div className={styles.reward}>
                    <div className={styles.progress}>
                        <h1 style={{ fontSize:"14px", color:"#E4974E", textAlign:"left" }}>Rewards</h1>
                        <span style={{display:"flex", flexDirection:"row", flex:" 2"}}>
                            <h2 style={{ fontSize:"14px", color:"#000000", flex:"1"}}>2</h2>
                            <h2 style={{ fontSize:"14px", color:"#C4C2C0", flex:"1" }}>/3</h2>
                        </span>
                    </div>
                    <div style={{ height: '4px', color:"#D89B60", marginTop:'4px' }}>
                        <LinearProgress color='inherit' variant='determinate' value={66.67} />
                    </div>
                    <p className={styles.desc}>1 more to get a mystery reward at your favourite cafe.</p>
                </div>
            </div>
        </div>
        );
}