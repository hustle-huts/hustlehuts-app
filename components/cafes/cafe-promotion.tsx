import * as React from 'react';
import Container from '@mui/material/Container';
import styles from'./cafe-promotion.module.css';
import Image, { StaticImageData } from 'next/image';
import { Typography } from '@mui/material';


interface props {
    className?: string;
    image: StaticImageData;
}


const CafePromotion:React.FC<props> = (props) => {
  return (
    <React.Fragment>
      <Container className={styles.outerContainer} maxWidth="sm">
        <Container className={styles.container} sx={{  borderRadius: '16px', border: '1px solid #DADADA', bgcolor: 'white', height: '10vh' }} >
            <Container  className={styles.image}>
            <img alt="" style={{ borderRadius: '12px', maxWidth: '100%', height: '80%', objectFit:"contain" }}  height="30" width="30" src={props.image.src}  />
            </Container>
            <Container className={styles.txt}>
                <Typography fontFamily='inherit' fontSize={18} fontWeight={700}>
                    1 For 1 Drinks
                </Typography> 
                <Typography fontFamily='inherit' fontSize={14} fontWeight={400} >
                    Home Coffee Roasters
                </Typography> 
            </Container>
        </Container>
      </Container>
    </React.Fragment>
  );
}

export default CafePromotion;