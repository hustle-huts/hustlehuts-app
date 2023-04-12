import React, { useState } from 'react';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import styles from './SwipeToConfirmButton.module.css'
import { SwipeableDrawer, Box, Typography, Container } from '@mui/material';

type BottomSheetProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

function BottomSheet({ isOpen, onClose, children }: BottomSheetProps) {
  const [swipePosition, setSwipePosition] = useState<number>(0);
  const [isSwiping, setIsSwiping] = useState<boolean>(false);

  const handleSwipeStart = () => {
    setIsSwiping(true);
  };

  const handleSwipeEnd = () => {
    setIsSwiping(false);
    if (swipePosition > 50) {
      onClose();
    }
    setSwipePosition(0);
  };

  const handleSwipeMove = (event: any, delta: any) => {
    if (isSwiping) {
      setSwipePosition(delta.y);
    }
  };

  const Puller = styled(Box)(({ theme }) => ({
    width: 130,
    height: 6,
    display: 'flex',
    position: 'absolute',
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: ' center',
    backgroundColor: theme.palette.mode === 'light' ? 'black' : grey[900],
    borderRadius: 3,
    top: 8,
  }));

  return (
    <SwipeableDrawer
      anchor="bottom"
      open={isOpen}
      PaperProps={{
        sx: {
          borderTopLeftRadius: 24, 
          borderTopRightRadius: 24,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: ' center'
        }
        }}
        SwipeAreaProps={{
          sx: {
            borderTopLeftRadius: 24, 
            borderTopRightRadius: 24,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: ' center'
          }
          }}
      elevation={10}
      onClose={() => onClose()}
      swipeAreaWidth={100}
      disableSwipeToOpen={false}
      ModalProps={{
        sx: {
          borderTopLeftRadius: 24, 
          borderTopRightRadius: 24,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignContent: ' center'
        },
        BackdropProps: {
          sx: {
            backdropFilter: 'blur(4px)',
            zIndex: 1,
          },
          onClick: () => onClose(),
        },
        hideBackdrop: false,
        style: { backdropFilter: 'blur(5px)' },
        keepMounted: true,
      }}
      onOpen={handleSwipeStart}
    >
      <Container 
      sx={{
        display: 'flex',
        height: '100%',
        position:' relative',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: ' center'
      }}
      className={styles.slider}>
      <Box sx={{ height: '80vh', maxWidth: '724px', paddingTop: '30px', display:'flex', flexDirection: 'column' }} >
      <Puller />
        {children}
      </Box>
      </Container>
      
    </SwipeableDrawer>
  );
}

export default BottomSheet;
