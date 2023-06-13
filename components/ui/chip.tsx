import React, { ButtonHTMLAttributes, MouseEventHandler, ReactElement, ReactNode } from "react";
import styles from './chip.module.css';
import Chip from '@mui/material/Chip';

interface Props extends ButtonHTMLAttributes<any> {
    size?: "large" | "medium";
    children?: string;
    clickEvent?: any;
    state?: boolean;
}

const CustomChip: React.FC<Props> = (Props) => {
    const handleClick = () => {
        console.info('You clicked the Chip.');
    };
    const {
        size,
        state,
        clickEvent,
        children,
        ...rest
    } = Props;
    return (
        state ? (
            <Chip
                className={`${styles.chip}`}
                sx={{
                    background: "linear-gradient(176.54deg, #6D5747 -11.89%, #B88151 64.46%)",
                    boxShadow: "0px 4px 40px rgba(160, 116, 78, 0.09)",
                    borderRadius: "12px",
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    color: 'white',
                    ["& .MuiChip-label"]: {
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontFamily: 'inherit',
                        fontSize: '14px',
                        padding: '10px 0px 10px 0px !important'
                    },
                }}
                clickable
                label={children}
                onClick={clickEvent} />
        ) : (
            <Chip
                className={`${styles.chip}`}

                sx={{
                    backgroundColor: "white",
                    borderColor: 'linear-gradient(176.54deg, #6D5747 -11.89%, #B88151 64.46%)',
                    boxShadow: "0px 4px 40px rgba(160, 116, 78, 0.09)",
                    borderRadius: "12px",
                    ["& .MuiChip-label"]: {
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'inherit',
                        fontFamily: 'inherit',
                        fontSize: '14px',
                        padding: '10px 0px 10px 0px !important'
                    },
                }}
                variant="outlined"
                clickable label={children}
                onClick={clickEvent} />
        )
    );
};

export default CustomChip;