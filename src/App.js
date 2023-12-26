
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes/routes';
import AuthProvider from './services/providers/auth.provider';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <AuthProvider>
        <RouterProvider router={routes}>
        </RouterProvider>
      </AuthProvider>
    </React.Fragment>

  );
}

export default App;
