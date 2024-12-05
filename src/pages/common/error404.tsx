import { Box, Button, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { MainLayout } from '@src/components';
import { PATH_MAIN } from '@src/constants/index';

const Error404 = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const hasPreviousPage = window.history.length > 2;
  const handleErrorButtonClick = () => {
    if (hasPreviousPage) {
      navigate(-1);
    } else {
      navigate(PATH_MAIN.ROOT);
    }
  };
  return (
    <MainLayout>
      <Stack
        sx={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          gap: 5,
          paddingTop: 6,
          paddingBottom: 6,
          paddingLeft: 2,
          paddingRight: 2,
        }}
      >
        <Box>
          <Typography variant="h1" color="primary">
            {t('error404.header')}
          </Typography>
          <Typography variant="h4">{t('error404.subheader')}</Typography>
        </Box>
        <Box>
          <Typography variant="body1">{t('error404.description')}</Typography>
          <Typography variant="body2">
            {t(
              hasPreviousPage
                ? 'error404.pleaseGoBack'
                : 'error404.pleaseGoToHomePage',
            )}
          </Typography>
        </Box>
        <Button
          sx={{
            width: '220px',
          }}
          onClick={handleErrorButtonClick}
          variant="contained"
        >
          {t(hasPreviousPage ? 'error404.goBack' : 'error404.homePage')}
        </Button>
      </Stack>
    </MainLayout>
  );
};

export default Error404;
