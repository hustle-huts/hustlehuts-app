
import styles from './bookings-bar.module.css';
import { LinearProgress, Grid } from '@mui/material';
import Link from '@mui/material/Link';

interface props {
    stepNumber: number;
    description: string;
    title: string;
    subtitle?: string;
}

const BookingsBar: React.FC<props> = (props) => {
    const colorCode = props.stepNumber == 2 ? "#D89B60" : "#138900";
    const colorCodeBackground = props.stepNumber == 2 ? "#F9E6D2" : "rgba(19, 137, 0, 0.13)";
    const value = props.stepNumber / 3 * 100;
    return (
            <div className={styles.container}>
                <div className={styles.title}>
                    <div className={styles.reward}>
                        <div style={{ height: '4px', color: colorCode, marginTop: '4px' }}>
                            <LinearProgress 
                                sx= {{
                                    height: 10,
                                    backgroundColor: colorCodeBackground ,
                                    borderRadius: 2,
                                    ["& .MuiLinearProgress-barColorPrimary"]: {
                                        borderRadius: 5,
                                        backgroundColor: colorCode,
                                    },
                                    ["& .MuiLinearProgress-colorPrimary"]: {
                                        borderRadius: 5,
                                        backgroundColor: colorCode ,
                                    },
                                }}
                                color='primary'
                                variant='determinate' value={value} />
                        </div>
                        <div className={styles.progress}>
                            <h1 style={{ fontSize: "18px", fontWeight: 600, color: colorCode, textAlign: "left" }}>{props.title}</h1>                            
                        </div>
                        <p className={styles.subtitle}>{props.subtitle}</p>
                        <p className={styles.desc}>{props.description}</p>
                        <Grid
                             container
                             direction="row"
                             justifyContent="flex-start"
                             alignItems="flex-start"   
                        >
                            <Link 
                            sx={{
                                textAlign: 'left',
                                color: "#D89B60",
                                textDecorationColor: "#D89B60"
                            }}
                            
                            href="#" color="primary">Check My reward</Link>
                        </Grid>
                    </div>
                </div>
            </div>

    );
}

export default BookingsBar;
