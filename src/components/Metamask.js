import React, { useState } from 'react';
import { Button } from '@mui/material';

function ConnectMetaMask() {
  const [account, setAccount] = useState('');

  const handleConnect = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);  // เก็บ account แรกที่เชื่อมต่อ
        console.log('Connected', accounts[0]);
      } catch (error) {
        console.error('Error connecting to MetaMask', error);
      }
    } else {
      alert('MetaMask is not installed. Please install it to use this feature.');
    }
  };

  return (
    <div>
      {account ? (
        <p>Connected as: {account}</p>
      ) : (
        <Button variant="contained" color="primary" onClick={handleConnect}>
          Connect to MetaMask
        </Button>
      )}
    </div>
  );
}

export default ConnectMetaMask;
