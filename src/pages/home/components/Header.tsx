import { Box, Button, Typography, useTheme } from '@mui/material';
import { t } from 'i18next';
import { useNavigate } from 'react-router';

import { SVGIcon } from '@src/components';
import { PATH_MAIN } from '@src/constants';
import { useAppDispatch } from '@src/store';
import { logout } from '@src/store/reducers/auth/actions';

const Header = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const theme = useTheme();

  const handleLogout = () => {
    dispatch(logout());
    navigate(PATH_MAIN.ROOT);
  };

  const handleAdd = () => {
    navigate(PATH_MAIN.MOVIE);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: theme.palette.common.white,
            [theme.breakpoints.down('sm')]: {
              ...theme.typography.h3,
            },
          }}
        >
          {t('profile.myMovies')}
        </Typography>
        <Button onClick={handleAdd} variant="outlined" type="button">
          <SVGIcon name="Add" height={24} width={24} />
        </Button>
      </Box>

      <Button
        variant="outlined"
        onClick={handleLogout}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
          color: theme.palette.common.white,
        }}
        type="button"
      >
        <Typography
          variant="h6"
          sx={{
            color: theme.palette.common.white,
            [theme.breakpoints.down('sm')]: {
              display: 'none',
            },
          }}
        >
          {t('profile.logout')}
        </Typography>
        <SVGIcon name="Logout" height={24} width={24} />
      </Button>
    </Box>
  );
};

export default Header;
