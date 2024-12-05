import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import router from '@src/routes';
import { persistor, store } from '@src/store';
import ThemeCustomization from '@src/themes';
import { injectStore } from '@src/utils/api';

import './locales';
import { TOAST_DURATION } from './constants';

injectStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeCustomization>
          <RouterProvider router={router} />
          <Toaster
            toastOptions={{
              duration: TOAST_DURATION,
            }}
          />
        </ThemeCustomization>
      </PersistGate>
    </Provider>
  );
};

export default App;
