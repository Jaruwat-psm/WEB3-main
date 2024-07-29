import React, {useState} from 'react';
import ImageHeader from '../headerimage.png'
import Box from '@mui/material/Box';
import { Card, CardContent, Typography, Grid, Paper, IconButton, Button, Accordion, AccordionSummary, AccordionDetails, Container, Alert } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import TimelineIcon from '@mui/icons-material/Timeline'; 
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ButtonAppBar from './Header';
import { useNavigate } from "react-router-dom";
function Contents() {
  const [refID, setrefID] = useState('');
  const navigate = useNavigate();
  function StatsCard({ icon, title, value }) {
    return (
      <Card sx={{ minWidth: 275, backgroundColor: 'rgba(27, 129, 211, 0.95)',color:'white', margin: 2 }}>
        <CardContent>
          <Box display="flex" alignItems="center">
            {icon}
            <Typography gutterBottom>
              {title}
            </Typography>
          </Box>
          <Typography variant="h5" component="div">
            {value}
          </Typography>
        </CardContent>
      </Card>
    );
  }

  const HeaderImage = () => {
    return <img src={ImageHeader} style={{borderRadius:10}} width='100%' height='100%' alt="Header" />;
  };

  const data = [
    { id: 1, number: 306, code: "x1AB..C482", amount: "+ 40 USDT", date: "Sun Jun 23 2024" },
    { id: 2, number: 307, code: "x1AC..E492", amount: "+ 50 USDT", date: "Mon Jun 24 2024" },
    { id: 3, number: 308, code: "x1AD..F502", amount: "+ 60 USDT", date: "Tue Jun 25 2024" },
    { id: 1, number: 306, code: "x1AB..C482", amount: "+ 40 USDT", date: "Sun Jun 23 2024" },
    { id: 2, number: 307, code: "x1AC..E492", amount: "+ 50 USDT", date: "Mon Jun 24 2024" },
    { id: 3, number: 308, code: "x1AD..F502", amount: "+ 60 USDT", date: "Tue Jun 25 2024" },
    { id: 1, number: 306, code: "x1AB..C482", amount: "+ 40 USDT", date: "Sun Jun 23 2024" },
    { id: 2, number: 307, code: "x1AC..E492", amount: "+ 50 USDT", date: "Mon Jun 24 2024" },
    { id: 3, number: 308, code: "x1AD..F502", amount: "+ 60 USDT", date: "Tue Jun 25 2024" },
    { id: 1, number: 306, code: "x1AB..C482", amount: "+ 40 USDT", date: "Sun Jun 23 2024" },
    { id: 2, number: 307, code: "x1AC..E492", amount: "+ 50 USDT", date: "Mon Jun 24 2024" },
    { id: 3, number: 308, code: "x1AD..F502", amount: "+ 60 USDT", date: "Tue Jun 25 2024" },
  ];

  const handleClick = (refID) => {
    if (refID === null || refID === '') {
      alert('Please Fill RefID');
      return;
    }
    navigate(`/Dashboard/${refID}`);
    
  }

  return (
    <Container maxWidth="xl">
<Box sx={{color:'white'}}>
      <ButtonAppBar/>
 
  <Grid container spacing={0}>
    <Grid item xs={9} container>
    <Box sx={{textAlign:'center'}}>
  <HeaderImage/>
  </Box>
    </Grid>
  <Grid item xs={12} lg={3} direction='row'>
  <StatsCard 
        icon={<PersonIcon />} 
        title="Members in last 24 hours" 
        value="888" 
      />
   
      <StatsCard 
        title="Income in last 24 hours, USDT" 
        value="$ 9999999" 
      />
 

      <StatsCard 
        icon={<PersonIcon />} 
        title="Total Members" 
        value="9999" 
      />

      <StatsCard 
        title="Total USDT Invested"
        value={"$ 99999999999"} 
      />
          </Grid>
      </Grid>

      <Grid container spacing={2}>
      <Grid item xs={12} lg={7}>
      <Typography variant="h5" sx={{ m:2, mt:5 }}>Recent Activites</Typography>
        </Grid>
        <Grid item xs={12} lg={5}>
        <Typography variant="h5" sx={{ m:2, mt:5 }}>Account preview</Typography>
        </Grid>
      <Grid item xs={12} lg={7} sx={{ height: 400, overflowY: 'auto', padding: 2, '&::-webkit-scrollbar': {
        width: '10px'
      },
      '&::-webkit-scrollbar-track': {
        backgroundColor: '#f1f1f1'
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'grey',
        '&:hover': {
          backgroundColor: '#555'
        }
      }
 }}>

    {data.map((item, index) => (
      <Paper sx={{ display: 'flex', alignItems: 'center', padding: 2, backgroundColor: 'rgba(71, 163, 238, 0.3)', color: 'white', mt:2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', marginRight: 2 }}>
        <IconButton color="inherit">
        <TimelineIcon />
            </IconButton>
            <Typography variant="body1" sx={{ marginRight: 1 }}>{item.number}</Typography>
            <Typography variant="body2" sx={{ opacity: 0.7 }}>{item.code}</Typography>
            <Typography variant="body1" sx={{ marginLeft: 1 }}>{item.amount}</Typography>
          </Box>
          <Typography variant="caption" sx={{ marginLeft: 'auto' }}>{item.date}</Typography>
        </Paper>
          
        ))}
      </Grid>
      <Grid item xs={12} lg={5}  direction="row">
      <Box sx={{m:2}}>
      Look up any Baby Troll 3.0 member account in preview mode. Enter ID to preview.
      </Box>
      <Box sx={{m:2}}>
      <TextField
      id="input-with-icon-textfield"
      label="Example 18"
      fullWidth
      value={refID}
      onChange={(e) => {
        setrefID(e.target.value);
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Button  sx={{backgroundColor: 'rgba(55, 83, 105, 0.95)', color: 'white'}} onClick={() => handleClick(refID)}>VIEW</Button>
          </InputAdornment>
        )
      }}
      variant="filled"  // ใช้ variant นี้เพื่อให้ตรงกับสไตล์ในภาพ
      sx={{ backgroundColor: '#FFFFFF', color: 'white', '.MuiFilledInput-input': { color: 'black' } }}  // กำหนดสไตล์ด้วย sx prop
    />
    </Box>
        </Grid>
      </Grid>
      <Typography variant="h5" sx={{ m:2 }}>FAQ's</Typography>

      <>
      <Accordion sx={{ mt: 2, backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'white', borderRadius: 2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ fontWeight: 'bold' }}>What is Baby Troll WEB3.0?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Baby Troll WEB3.0 is the international community of the global decentralized ecosystem and the first ever Binance Smart Contract marketing matrix. Please note, here when you pay to the platform, you are paying to buy nfts, while the matrix plan is an add on which is free to join once you purchase an nft. Once you have purchased an nft you are automatically a part of self-executing software algorithm that performs the function of distributing partner rewards between community members, subject to certain conditions (matrix marketing plan).
            <br/><br/>
            The contract code is publicly available. Information about transactions can always be viewed at the link bscscan.com. Once you have purchased an nft, you are the owner of the nft & you can find that nft in your dapp wallet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ mt: 2, backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'white', borderRadius: 2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{ fontWeight: 'bold' }}>Who Manages The Platform?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The Baby Troll WEB3.0 platform consists of self-executing trades, which do not permit anyone to interfere with the course of the transactions.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ mt: 2, backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'white', borderRadius: 2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography sx={{ fontWeight: 'bold' }}>Who Created Baby Troll WEB3.0?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Information about the creators of Baby Troll WEB3.0 will be available soon.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ mt: 2, backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'white', borderRadius: 2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography sx={{ fontWeight: 'bold' }}>What is an NFT?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            An NFT is a Non-Fungible Token, which is a unique digital asset that represents ownership of real-world or digital items such as art, music, videos, or other content.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ mt: 2, backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'white', borderRadius: 2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
          aria-controls="panel5a-content"
          id="panel5a-header"
        >
          <Typography sx={{ fontWeight: 'bold' }}>Which wallet should I use?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You should use a wallet that supports NFTs such as MetaMask, Trust Wallet, or other compatible wallets.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ mt: 2, backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'white', borderRadius: 2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
          aria-controls="panel6a-content"
          id="panel6a-header"
        >
          <Typography sx={{ fontWeight: 'bold' }}>How to Buy an NFT if I have never done it before?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can buy an NFT by following these steps: 1. Set up a compatible wallet. 2. Purchase some cryptocurrency (e.g., Ethereum). 3. Connect your wallet to an NFT marketplace. 4. Browse and purchase the NFT you like.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
    </Box>
    </Container>
  );
}

export default Contents;
