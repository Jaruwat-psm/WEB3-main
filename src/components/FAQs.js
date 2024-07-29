import React, {useState} from 'react';
import ImageHeader from '../headerimage.png'
import Box from '@mui/material/Box';
import { Typography, Grid, Accordion, AccordionSummary, AccordionDetails, Container } from '@mui/material';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ButtonAppBar from './Header';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import StackedBarChartOutlinedIcon from '@mui/icons-material/StackedBarChartOutlined';
import SchemaOutlinedIcon from '@mui/icons-material/SchemaOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Link, useParams } from 'react-router-dom';
function FAQs() {
  const [account, setAccount] = useState('');
  const [open, setOpen] = React.useState(true);
  let { id } = useParams();
  const setrefId = localStorage.setItem('refId', id);
  const TempId = localStorage.getItem('refId');

  return (
    <Container maxWidth="xl" sx={{color:'white', height:'100vh'}}>
      <ButtonAppBar/>

      <Grid container spacing={2}>
        <Grid item xs={12} lg={2}>
          <List
            sx={{ width: '100%', maxWidth: 360 }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <Link to={`/Dashboard/${TempId}`} style={{ textDecoration: 'none', color: 'white' }}>
              <ListItemButton>
                <ListItemIcon>
                  <HomeOutlinedIcon sx={{ color: 'white' }} fontSize='large' />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </Link>
            <Link to={`/Partners/${TempId}`} style={{ textDecoration: 'none', color: 'white' }}>
              <ListItemButton>
                <ListItemIcon>
                  <HandshakeOutlinedIcon sx={{ color: 'white' }} fontSize='large' />
                </ListItemIcon>
                <ListItemText primary="Partners" />
              </ListItemButton>
            </Link>
            <Link to={`/Dashboard/${TempId}`} style={{ textDecoration: 'none', color: 'white' }}>
              <ListItemButton>
                <ListItemIcon>
                  <StackedBarChartOutlinedIcon sx={{ color: 'white' }} fontSize='large' />
                </ListItemIcon>
                <ListItemText primary="Stats" />
              </ListItemButton>
            </Link>
            <Link to={`/Dashboard/${TempId}`} style={{ textDecoration: 'none', color: 'white' }}>
              <ListItemButton>
                <ListItemIcon>
                  <SchemaOutlinedIcon sx={{ color: 'white' }} fontSize='large' />
                </ListItemIcon>
                <ListItemText primary="Unilevel Income" />
              </ListItemButton>
            </Link>
            <Link to={`/FAQs/${TempId}`} style={{ textDecoration: 'none', color: 'white' }}>
              <ListItemButton>
                <ListItemIcon>
                  <InfoOutlinedIcon sx={{ color: 'white' }} fontSize='large' />
                </ListItemIcon>
                <ListItemText primary="FAQs" />
              </ListItemButton>
            </Link>
          </List>
        </Grid>
        <Grid item xs={12} lg={10}>
        <Box sx={{color:'white'}}>
 
 <Typography variant="h5" sx={{ m:2 }}>FAQ's</Typography>

 <>
 <Accordion sx={{ mt: 2, backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'white', borderRadius: 2 }}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
     aria-controls="panel1a-content"
     id="panel1a-header"
   >
     <Typography sx={{ fontWeight: 'bold' }}>What is FLASHMOON WEB3.0?</Typography>
   </AccordionSummary>
   <AccordionDetails>
     <Typography>
       FLASHMOON WEB3.0 is the international community of the global decentralized ecosystem and the first ever Binance Smart Contract marketing matrix. Please note, here when you pay to the platform, you are paying to buy nfts, while the matrix plan is an add on which is free to join once you purchase an nft. Once you have purchased an nft you are automatically a part of self-executing software algorithm that performs the function of distributing partner rewards between community members, subject to certain conditions (matrix marketing plan).
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
       The FLASHMOON WEB3.0 platform consists of self-executing trades, which do not permit anyone to interfere with the course of the transactions.
     </Typography>
   </AccordionDetails>
 </Accordion>
 <Accordion sx={{ mt: 2, backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'white', borderRadius: 2 }}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
     aria-controls="panel3a-content"
     id="panel3a-header"
   >
     <Typography sx={{ fontWeight: 'bold' }}>Who Created FLASHMOON WEB3.0?</Typography>
   </AccordionSummary>
   <AccordionDetails>
     <Typography>
       Information about the creators of FLASHMOON WEB3.0 will be available soon.
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

        </Grid>
        </Grid>
  
    </Container>
  );
}

export default FAQs;
