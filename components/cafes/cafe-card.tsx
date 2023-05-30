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
    name: String
    open_at: String
    close_at: String
    credit: number
    has_wifi: Boolean
    has_charging: Boolean
    has_ambience: Boolean
    image_url: string
    rating: number
}

const CafeCard: React.FC<props> = (props) => {
    // Get the current time
    const currentTime = new Date();

    // Convert the "open_at" and "close_at" props to Date objects
    const openTimeParts = props.open_at.match(/(\d+)(am|pm)/);
    const closeTimeParts = props.close_at.match(/(\d+)(am|pm)/);

    const openTime = openTimeParts
    ? new Date().setHours(
        parseInt(openTimeParts[1]) + (openTimeParts[2] === "pm" ? 12 : 0),
        0,
        0,
        0
        )
    : null;

    const closeTime = closeTimeParts
    ? new Date().setHours(
        parseInt(closeTimeParts[1]) + (closeTimeParts[2] === "pm" ? 12 : 0),
        0,
        0,
        0
        )
    : null;

    // Check if the current time is within the opening hours
    const isOpen =
    openTime && closeTime && currentTime.getTime() >= openTime && currentTime.getTime() <= closeTime;

    // Render the indicator text based on the opening status, 
    // and empty string if the opening hours are not provided
    const indicatorText = openTimeParts && closeTimeParts ? (isOpen ? "OPEN" : "CLOSE") : "N.A.";

    return (
        <Card className={styles.cafeCard}>
            <CardMedia
                className={styles.cafeImage}
                image={props.image_url}
                title="Cafe Image">
                <div className={styles.ifCafeIsOpenIndicator}>{indicatorText}</div>
                <div className={styles.cafeCredit}>{props.credit} Credit(s) /hr</div>
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
                        {props.rating}
                    </small>
                    <div className={styles.cafeName}>{props.name}</div>
                    <div className={styles.cafeInfo}>
                        <Image className={styles.clockIcon} alt="Clock Icon" src={ClockIcon} />
                        {props.open_at} To {props.close_at}
                    </div>
                    {/* to show the distance between the user and the cafe, temporarily commented off
                    <div className={styles.cafeInfo}>
                        <Image className={styles.distanceIcon} alt="Distance Icon" src={DistanceIcon} />
                        1.2 km
                    </div> */}
                </CardContent>
                <CardActions className={styles.cafeActions}>
                    <div>
                        {props.has_wifi ? (
                            <Image className={styles.wifiIcon} alt="Wifi Icon" src={WifiIcon} />
                        ) : (
                            <Image className={styles.wifiIcon} alt="No Wifi Icon" src={NoWifiIcon} />
                        )}
                        <p>Wifi</p>
                    </div>
                    <div>
                        {props.has_charging ? (
                            <Image className={styles.chargingIcon} alt="Charging Icon" src={ChargingIcon} />
                        ) : (
                            <Image className={styles.chargingIcon} alt="No Charging Icon" src={NoChargingIcon} />
                        )}
                        <p>Charging</p>
                    </div>
                    <div>
                        {props.has_ambience ? (
                            <Image className={styles.ambienceIcon} alt="Ambience Icon" src={AmbienceIcon} />
                        ) : (
                            <Image className={styles.ambienceIcon} alt="No Ambience Icon" src={NoAmbienceIcon} />
                        )}
                        <p>Ambience</p>
                    </div>
                </CardActions>
            </div>
        </Card>
    );
}

export default CafeCard;