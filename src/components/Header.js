import React, { useState, forwardRef, useImperativeHandle } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import WalletIcon from '@mui/icons-material/Wallet';
import LOGO from '../logo155.png';
import Swal from 'sweetalert2';
import { useWallet } from '../contexts/WalletContext';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Moon from '../Images/Item/MUNA.png'
const ButtonAppBar = forwardRef((props, ref) => {
  const [account, setAccount] = useState('');
  const [subAccount, setSubAccount] = useState('');
  const { setWalletConnected } = useWallet();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useImperativeHandle(ref, () => ({
    handleConnect
  }));

  const LogoImage = () => (
    <>
      {isMobile ? (
        <Link to='/'>
          <img src={Moon} style={{ height: '100%', width:'100%' }} alt="Logo" />
        </Link>
      ) : (
        <Link to='/'>
          <img src={Moon} style={{ height: '100px', marginRight: '16px' }} alt="Logo" />
        </Link>
      )}
    </>
  );

  const handleConnect = async () => {
    const confirmation = await Swal.fire({
      title: "Connect to MetaMask?",
      text: "Do you want to connect to your MetaMask wallet?",
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: "Connect",
      cancelButtonText: "Cancel",
    });

    if (confirmation.isConfirmed) {
      if (window.ethereum) {
        try {
          const chainId = await window.ethereum.request({ method: 'eth_chainId' });
          if (chainId !== '0x38') {
            Swal.fire({
              title: 'Wrong Network',
              text: 'Please switch to the Binance Smart Chain in MetaMask.',
              icon: 'warning',
              confirmButtonText: 'OK'
            });
            return;
          }

          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
          if (accounts.length > 0) {
            setAccount(accounts[0]);
            setWalletConnected(true);
            Swal.fire({
              title: "Connected!",
              text: `Connected with account: ${accounts[0]}`,
              icon: 'success',
              confirmButtonText: 'Great!'
            });
            
const account = accounts[0];

            const firstFour = account.substring(0, 4); // 4 ตัวแรก
            const lastThree = account.slice(-3); // 3 ตัวสุดท้าย
         
const sub = `${firstFour}${lastThree}`;
            setSubAccount(sub);
          }
        } catch (error) {
          console.error('Error connecting to Binance Smart Chain:', error);
          Swal.fire({
            title: 'Connection Error',
            text: 'Failed to connect to MetaMask.',
            icon: 'error',
            confirmButtonText: 'OK'
          });
        }
      } else {
        Swal.fire({
          title: 'MetaMask Not Installed',
          text: 'MetaMask is not installed. Please install it to use this feature.',
          icon: 'warning',
          confirmButtonText: 'OK'
        });
      }
    }
  };

  const Disconnect = () => {
    setAccount('');
    setWalletConnected(false);
  };

  return (
    <>
      {isMobile ? (
        <Box sx={{ display: 'flex', flexGrow: 1 }}>
          <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'none' }}>
            <Toolbar sx={{ p: 2 }}>
              <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                <LogoImage />
              </Typography>
              {account ? (
                <>
                  <Typography style={{ marginRight: '30px' }}>{subAccount}</Typography>
                  <Button sx={{ bgcolor: 'primary', color: 'white', fontSize:'1rem', borderRadius:50 }} fullWidth variant='contained' onClick={Disconnect}>Disconnect</Button>
                </>
              ) : (
                <>
                  <Button sx={{ bgcolor: 'primary', color: 'white', borderRadius:50 }} fullWidth variant='contained' startIcon={<WalletIcon />} onClick={handleConnect}>Connect Wallet</Button>
                </>
              )}
            </Toolbar>
          </AppBar>
        </Box>
      ) : (
        <Box sx={{ display: 'flex', flexGrow: 1 }}>
          <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'none' }}>
            <Toolbar sx={{ p: 3 }}>
              <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                <LogoImage />
              </Typography>
              {account ? (
                <>
                  <Typography style={{ marginRight: '10px' }}>Connected as: {subAccount}</Typography>
                  <Button sx={{ bgcolor: 'primary', color: 'white', borderRadius:50 }} size='large' variant='contained' onClick={Disconnect}>Disconnect</Button>
                </>
              ) : (
                <>
                  <Button sx={{ bgcolor: 'primary', color: 'white', borderRadius:50 }} size='large' variant='contained' startIcon={<WalletIcon />} onClick={handleConnect}>Connect Wallet</Button>
                </>
              )}
            </Toolbar>
          </AppBar>
        </Box>
      )}
    </>
  );
});

export default ButtonAppBar;
