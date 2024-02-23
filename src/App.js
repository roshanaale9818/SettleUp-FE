
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes/routes';
import AuthProvider from './services/providers/auth.provider';
import React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './utils/http';
import {Provider} from 'react-redux';
import store from './store';
import './assets/styles/main.style.css'


function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={routes}>
          </RouterProvider>
        </AuthProvider>
      </QueryClientProvider>
      </Provider>
    </React.Fragment>

  );
}

export default App;
