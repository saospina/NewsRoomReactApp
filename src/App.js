import React from 'react';
import { AppRoutes } from './app.routes';
import { HeaderComponent } from './components/header/HeaderComponent';


function App() {
  return (
    <>
      <HeaderComponent />
      <AppRoutes />
    </>
  );
}

export default App;
