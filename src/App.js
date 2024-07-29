import React from 'react';
import Contents from './components/Content';
import Dashboard from './components/Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FAQs from './components/FAQs';
import Registers from './components/Register';
import { WalletProvider } from './contexts/WalletContext';
import BackgroundImage from './Images/Background.jpg'
import ButtonNav from './components/BottomNav';
import DashboardUser from './components/Dashboard_user';
import theme from './components/Theme';
import { ThemeProvider } from '@mui/material';
import Partners from './components/Partner';
import Stats from './components/Stats';

function App() {
  return (
    <div style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>

   <BrowserRouter>
   <ThemeProvider theme={theme}>
   <WalletProvider>
      <Routes>
        <Route path="/" element={<Contents />}></Route>
        <Route path="/Stats/:id" element={<Stats />}></Route>
        <Route path="/Partners/:id" element={<Partners />}></Route>
        <Route path="/Dashboard/:id" element={<Dashboard />}></Route>
        <Route path="/Dashboard" element={<Dashboard />}></Route>
        <Route path="/FAQs/:id" element={<FAQs />}></Route>
        <Route path="/FAQs" element={<FAQs />}></Route>
        <Route path="/Registers/:Id" element={<Registers />}></Route>
        <Route path="/DashboardUser/:id/:Lv/:tab" element={<DashboardUser />}></Route>
        <Route path="/Registers" element={<Registers />} /> {/* Add this line to handle /Registers without params */}
      </Routes>
      </WalletProvider>
      </ThemeProvider>
      <ButtonNav/>
    </BrowserRouter>

  </div>

  );
}

export default App;
