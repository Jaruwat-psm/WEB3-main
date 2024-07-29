import React, {useState} from 'react';
import ImageHeader from '../Images/ImageRegist.jpg'
import Box from '@mui/material/Box';
import { Card, CardContent, Typography, Grid, Button, Container, ButtonGroup } from '@mui/material';
import Swal from 'sweetalert2'
import TextField from '@mui/material/TextField';
import ButtonAppBar from './Header';
import { useParams } from "react-router-dom";
import { styled } from '@mui/material/styles';
import VerifiedIcon from '@mui/icons-material/Verified';
import CancelIcon from '@mui/icons-material/Cancel';
import { useWallet } from '../contexts/WalletContext';
import useMediaQuery from '@mui/material/useMediaQuery';
function Registers() {
  const { walletConnected } = useWallet();
  const [Registration, setRegistration] = useState(true);
  const [NetworkConnect, setNetworkConnect] = useState(false);
  const [AgreementSigned, setAgreementSigned] = useState(false);
  const [Balance, setBalance] = useState(false);
  const matches = useMediaQuery('(min-width:600px)');

  let { Id } = useParams();
  function StatsCard({ icon, title, value }) {
    return (
      <Card sx={{ minWidth: 275, color:'white', backgroundColor: 'rgba(71, 163, 238, 0.75)', margin: 2, border:2,borderRadius:3,borderColor:'white' }}>
        <CardContent>
          <Box display="flex" alignItems="center">
            {icon}
            <Typography> 
              {title}
            </Typography>
          </Box>
          <Typography variant="h5" component="div" sx={{mt:2}}>
            {value}
          </Typography>
        </CardContent>
      </Card>
    );
  }

  const HeaderImage = () => {
    return <img src={ImageHeader} style={{borderRadius:10}} width='100%' height='auto' alt="Header" />;
  };

  const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: '#FFFFFF',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#FFFFFF',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#FFFFFF',
      },
      '&:hover fieldset': {
        borderColor: '#FFFFFF',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#FFFFFF',
      },
    },
  });
  
  const RegisterByRef = async () => {
    const confirmation = await Swal.fire({
      title: "Connect to FLASHMOON Contract?",
      text: "Do you want",
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: "Connect",
      cancelButtonText: "Cancel",
    });
    if(confirmation.isConfirmed){
 
    try{
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      
      var raw = JSON.stringify({
        "walletId": "sd6sq6ds1qd0622",
        "refUserId": Id
      });
      
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      
     await fetch("https://api.depx.dev/api/FlashMoon/CreateBtUser", requestOptions)
        .then(response => response.json())
        .then(result => {
          console.log(result)
          if(result === true){
           Swal.fire({
            title: "Connect Success",
            text: "Your wallet is Grant",
            icon: "success"
           })
          }
        })
        .catch(error => console.log('error', error));
    }catch(error){
      console.log(error)
    }
  }
  }

  return (
    <Container maxWidth="xl" sx={{height: matches ? '100vh' : '100%'}}>
<Box sx={{color:'white'}}>
      <ButtonAppBar/>
      <Box sx={{textAlign:'center'}}>

  </Box>
  <Grid container spacing={2} justifyContent='center' alignContent='center' sx={{p:3}}>
  <Grid item xs={12} lg={4} direction='row'>
  <StatsCard 
    icon={walletConnected ? <VerifiedIcon fontSize='large' sx={{color:'green'}}/> : <CancelIcon fontSize='large' color='error'/>} 
        value="Wallet Connected" 
      />
      
      <StatsCard 
        icon={Registration ? <VerifiedIcon fontSize='large' sx={{color:'green'}}/> : <CancelIcon fontSize='large' color='error'/>} 
        value="Registration" 
      />
  
      <StatsCard 
      icon={AgreementSigned ? <VerifiedIcon fontSize='large' sx={{color:'green'}}/> : <CancelIcon fontSize='large' color='error'/>} 
        value="Agreement Signed" 
      />
          </Grid>

          <Grid item xs={12} lg={4} direction='row'>
  <StatsCard 
    icon={NetworkConnect ? <VerifiedIcon fontSize='large' sx={{color:'green'}}/> : <CancelIcon fontSize='large' color='error'/>} 
        value="Network" 
      />
      
      <StatsCard 
    icon={Balance ? <VerifiedIcon fontSize='large' sx={{color:'green'}}/> : <CancelIcon fontSize='large' color='error'/>} 
        value="Balance ( >= 0 USDT )" 
      />
          </Grid>

          <Grid item xs={12} lg={4} direction='row' justifyContent={"center"} sx={{textAlign:'center'}}>
      <Typography variant="h6" color="white">
        Registation in FLASHMOON 3.0
      </Typography>
      <Box sx={{display:'flex', alignItems:'center'}}>
      <Typography variant="h6" color="white" sx={{ m: 3 }}>
  Sponsor
</Typography>
<CssTextField id="custom-css-outlined-input" fullWidth inputProps={{
  sx:{
    color:'white'
  }
}} value={Id}/>

      </Box>
      <ButtonGroup variant="contained" color="primary" aria-label="" size='large'>
      <Button variant='contained' sx={{m:0.5}}>Approve USDT</Button>
      <Button variant='contained' sx={{m:0.5}} onClick={RegisterByRef}>Register</Button>
      <Button variant='contained' sx={{m:0.5}}>Home</Button>
    </ButtonGroup>
          </Grid>
      </Grid>
    </Box>

    </Container>
  );
}

export default Registers;
