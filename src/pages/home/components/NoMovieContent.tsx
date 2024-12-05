import { Box, Button, Typography, useTheme } from '@mui/material';
import { t } from 'i18next';
import { useNavigate } from 'react-router';

import { PATH_MAIN } from '@src/constants';


const NoMovieContent = () => {

  const navigate = useNavigate();
  const theme = useTheme();

  const handleAdd = () => {
    navigate(PATH_MAIN.MOVIE);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',
        gap: '40px',
      }}
    >
      <Typography variant="h2" sx={{ color: theme.palette.common.white }}>
        {t('common.noMovie')}
      </Typography>
      <Button onClick={handleAdd} variant="contained" type="button">

        <Typography variant="body1" sx={{ color: theme.palette.common.white, fontWeight:700 }}>
        {t('common.addNewMovie')}
        </Typography>
      </Button>
    </Box>
  );
};

export default NoMovieContent;
