import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Tab, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

import { AuthLayout, CenteredLayout } from '@src/components';
import { PATH_AUTH } from '@src/constants';

import { LoginForm, RegisterForm } from './components';

interface AuthPageProps {
  variant: '/login' | '/register';
}

export const AuthPage = ({ variant }: AuthPageProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const theme = useTheme();

  const onChangeTab = (_event: React.SyntheticEvent, value: string) => {
    navigate(`${PATH_AUTH.ROOT}${value}`);
  };

  return (
    <AuthLayout>
      <CenteredLayout>
        <TabContext value={variant}>
          <TabList
            TabIndicatorProps={{ sx: { color: theme.palette.text.primary } }}
            onChange={onChangeTab}
            sx={{ mb: 4 }}
            variant="fullWidth"
          >
            <Tab
              label={t('auth.login')}
              sx={{
                fontSize: theme.typography.h5.fontSize,
                color: theme.palette.text.white,
              }}
              value="/login"
            />
            <Tab
              label={t('auth.signUp')}
              sx={{
                fontSize: theme.typography.h5.fontSize,
                color: theme.palette.text.white,
              }}
              value="/register"
            />
          </TabList>
          <TabPanel value="/register" sx={{ p: 0 }}>
            <RegisterForm />
          </TabPanel>
          <TabPanel value="/login" sx={{ p: 0 }}>
            <LoginForm />
          </TabPanel>
        </TabContext>
      </CenteredLayout>
    </AuthLayout>
  );
};
