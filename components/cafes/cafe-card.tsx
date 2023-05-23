import styles from './cafe-card.module.css';
import Image from 'next/image';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import HeartIcon from '../../public/images/heart.svg'
import HeartEmptyIcon from '../../public/images/heart-empty.svg'
import RatingIcon from '../../public/images/rating.svg'
import ClockIcon from '../../public/images/clock.svg'
import DistanceIcon from '../../public/images/distance.svg'
import WifiIcon from '../../public/images/wifi.svg'
import NoWifiIcon from '../../public/images/wifi-no.svg'
import ChargingIcon from '../../public/images/charging.svg'
import NoChargingIcon from '../../public/images/charging-no.svg'
import AmbienceIcon from '../../public/images/ambience.svg'
import NoAmbienceIcon from '../../public/images/ambience-no.svg'

interface props {
    cafe_name: String
}

const CafeCard: React.FC<props> = (props) => {
    return (
        <Card className={styles.cafeCard}>
            <CardMedia
                className={styles.cafeImage}
                image="./images/booking-image.png"
                title="Cafe Image" >
                <Button className={styles.cafeOpenButton}
                    onClick={() => console.log("Open Cafe")}
                    variant="text"
                >OPEN</Button>
                <div className={styles.cafeCredit}>1 Credit /hr</div>
                <Button className={styles.cafeLike}
                    onClick={() => console.log("Like Cafe")}
                    variant="text">
                    {/* <Image className={styles.likeIcon} alt="Like Icon" src={HeartIcon} /> */}
                    <Image className={styles.unlikeIcon} alt="Unlike Icon" src={HeartEmptyIcon} />
                </Button>

            </CardMedia>
            <div style={{ height: 'auto' }}>
                <CardContent sx={{ padding: '4px' }}>
                    <small className={styles.rating}>
                        <Image className={styles.ratingIcon} alt="Rating Icon" src={RatingIcon} />
                        5.0
                    </small>
                    <div className={styles.cafeName}>{props.cafe_name}</div>
                    <div className={styles.cafeInfo}>
                        <Image className={styles.clockIcon} alt="Clock Icon" src={ClockIcon} />
                        11am To 6pm
                    </div>
                    <div className={styles.cafeInfo}>
                        <Image className={styles.distanceIcon} alt="Distance Icon" src={DistanceIcon} />
                        1.2 km
                    </div>
                </CardContent>
                <CardActions className={styles.cafeActions}>
                    <div>
                        <Image className={styles.wifiIcon} alt="Wifi Icon" src={WifiIcon} />
                        {/* <Image className={styles.wifiIcon} alt="No Wifi Icon" src={NoWifiIcon} /> */}
                        <p>Wifi</p>
                    </div>
                    <div>
                        <Image className={styles.chargingIcon} alt="Charging Icon" src={ChargingIcon} />
                        {/* <Image className={styles.chargingIcon} alt="No Charging Icon" src={NoChargingIcon} /> */}
                        <p>Charging</p>
                    </div>
                    <div>
                        {/* <Image className={styles.ambienceIcon} alt="Ambience Icon" src={AmbienceIcon} /> */}
                        <Image className={styles.ambienceIcon} alt="No Ambience Icon" src={NoAmbienceIcon} />
                        <p>Ambience</p>
                    </div>
                </CardActions>
            </div>
        </Card>
    );
}

export default CafeCard;