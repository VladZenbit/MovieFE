import { Box, Container } from '@mui/material';

import greenWave from '@src/assets/greenWave.png';
import whiteWave from '@src/assets/whiteWave.png';
import ScrollTop from '@src/components/ScrollTop';

export interface AuthLayoutProps {
  children: React.ReactNode;
}

export const AuthLayout = (props: AuthLayoutProps) => {
  const { children } = props;
  return (
    <ScrollTop>
      <Box
        sx={{
          minHeight: '100vh',
          width: '100%',
          backgroundImage: `url(${whiteWave}), url(${greenWave})`,
          backgroundSize: '100% 10%, 100% 10%',
          backgroundPosition: 'bottom, bottom',
          backgroundRepeat: 'no-repeat, no-repeat',
        }}
      >
        <Container
          sx={{
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
          }}
        >
          {children}
        </Container>
      </Box>
    </ScrollTop>
  );
};
