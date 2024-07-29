import React, { useEffect, useCallback, useState } from 'react';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import { Card, Divider, Avatar, CardContent, Typography, Grid, Paper, IconButton, Button, Container } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ButtonAppBar from './Header';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import StackedBarChartOutlinedIcon from '@mui/icons-material/StackedBarChartOutlined';
import SchemaOutlinedIcon from '@mui/icons-material/SchemaOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useParams } from 'react-router-dom';
import Image1 from '../Images/Item/1.jpg';
import Image2 from '../Images/Item/2.jpg';
import Image3 from '../Images/Item/3.jpg';
import Image4 from '../Images/Item/4.jpg';
import Image5 from '../Images/Item/5.jpg';
import Image6 from '../Images/Item/6.jpg';
import Image7 from '../Images/Item/7.jpg';
import Image8 from '../Images/Item/8.jpg';
import Image9 from '../Images/Item/9.jpg';
import Image10 from '../Images/Item/10.jpg';
import Image11 from '../Images/Item/11.jpg';
import Image12 from '../Images/Item/12.jpg';
import Image13 from '../Images/Item/13.png';
import UsdtIcon from '../Images/usdt.png';
import NFTCOMPONENT from './Nftcomponent';
import Paertner from '../Images/30758.jpg'
import Stack from '@mui/material/Stack';
function Dashboard() {
  const [Data, setData] = useState([]);
  const navigate = useNavigate(); // ใช้ useNavigate hook
  let { id } = useParams();
    let refLink = `https://flashmoon.dev/register/${id}`
  const handleCopy = () => {
    navigator.clipboard.writeText(`https://flashmoon.dev/register/${id}`);
  };

  const goRegister = (id) => {
    navigate(`/Registers/${id}`)
  }
  const setrefId = localStorage.setItem('refId', id);
  const TempId = localStorage.getItem('refId');
  const [refID, setrefID] = useState('');
 const NFTITEM = [{id:"1",ItemName:"Flash 1",ItemPrice:"($10)",Level:1,imagePath:Image1},
  {id:"2",ItemName:"Flash 2",ItemPrice:"($20)",Level:2,imagePath:Image2},
  {id:"3",ItemName:"Flash 3",ItemPrice:"($40)",Level:3,imagePath:Image3},
  {id:"4",ItemName:"Flash 4",ItemPrice:"($80)",Level:4,imagePath:Image4},
  {id:"5",ItemName:"Flash 5",ItemPrice:"($150)",Level:5,imagePath:Image5},
  {id:"6",ItemName:"Flash 6",ItemPrice:"($250)",Level:6,imagePath:Image6},
  {id:"7",ItemName:"Flash 7",ItemPrice:"($450)",Level:7,imagePath:Image7},
  {id:"8",ItemName:"Flash 8",ItemPrice:"($800)",Level:8,imagePath:Image8},
  {id:"9",ItemName:"Flash 9",ItemPrice:"($1400)",Level:9,imagePath:Image9},
  {id:"10",ItemName:"Flash 10",ItemPrice:"($2500)",Level:10,imagePath:Image10},
  {id:"11",ItemName:"Flash 11",ItemPrice:"($3500)",Level:11,imagePath:Image11},
  {id:"12",ItemName:"Flash 12",ItemPrice:"($5000)",Level:12,imagePath:Image12},
  {id:"13",ItemName:"Flash 13",ItemPrice:"($10000)",Level:13,imagePath:Image13}
 ]
 const handleClick = (refID) => {
  if (refID === null || refID === '') {
    alert('Please Fill RefID');
    return;
  }
  window.location.href = (`/Dashboard/${refID}`);
}

  const Getdata = useCallback(async (id) => {
    try {
      let url = `https://api.depx.dev/api/FlashMoon/UserLvlById/${id}`;
      let response = await fetch(url);
      if (response.ok) { // หรือ response.status === 200
        let res = await response.json();
        console.log(res)
        setData(res)
      } else {
        console.error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

useEffect(() => {
  if (id) {
    Getdata(id);
  }
}, [Getdata, id]);


 const history = [
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


  function StatsCard({ icon, title, value, tile2, value2 }) {
    return (
      <Card sx={{ minWidth: 275, backgroundColor: '#82b8ff', color:'white', margin: 2, position: 'relative',   }}>
   
        <CardContent>
        <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box display="flex" alignItems="center">
        
            <Typography gutterBottom>
              {title}
            </Typography>
          </Box>
          {/* <Box sx={{ position: 'absolute', top: 10, right: 10 }}>
                  <img src={image} alt="Card graphic" style={{ width: 100, height: 100 }} />
              </Box> */}
          <Typography variant="h5" component="div">
            {value}
          </Typography>
          </Grid>

          <Grid item xs={6}>
          <Box display="flex" alignItems="center">
          
            <Typography gutterBottom >
              {tile2}
            </Typography>
          </Box>
          {/* <Box sx={{ position: 'absolute', top: 10, right: 10 }}>
                  <img src={image} alt="Card graphic" style={{ width: 100, height: 100 }} />
              </Box> */}
          <Typography variant="h5" component="div" >
            {value2}
          </Typography>
          </Grid>
          </Grid>
        </CardContent>
       
      </Card>
    );
  }

  const Usdticons = () => {
    return <img src={UsdtIcon} style={{width:"28px",height:"28px", marginRight:'100px'}} alt="USDT" />;
  };

  return (
    <Container maxWidth="xl">
<Box sx={{color:'white'}}>
      <ButtonAppBar/>
      <Box sx={{textAlign:'center'}}>
  </Box>
  <Grid container spacing={2}>
  <Grid item xs={12} lg={2}>
  <List
      sx={{ width: '100%', maxWidth: 360 }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
     <Link to={`/Dashboard/${TempId}`} style={{textDecoration:'none', color:'white'}}>
      <ListItemButton>
        <ListItemIcon>
          <HomeOutlinedIcon sx={{color:'white'}} fontSize='large'/>
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      </Link>
      <Link to={`/Partners/${TempId}`} style={{textDecoration:'none', color:'white'}}>
      <ListItemButton>
        <ListItemIcon>
          <HandshakeOutlinedIcon sx={{color:'white'}} fontSize='large'/>
        </ListItemIcon>
        <ListItemText primary="Partners" />
      </ListItemButton>
      </Link>
      <Link to={`/Stats/${TempId}`} style={{textDecoration:'none', color:'white'}}>
      <ListItemButton>
        <ListItemIcon>
          <StackedBarChartOutlinedIcon sx={{color:'white'}} fontSize='large'/>
        </ListItemIcon>
        <ListItemText primary="Stats" />
      </ListItemButton>
      </Link>
      <ListItemButton>
        <ListItemIcon>
          <SchemaOutlinedIcon sx={{color:'white'}} fontSize='large'/>
        </ListItemIcon>
        <ListItemText primary="Unilevel Income" />
      </ListItemButton>
      <Link to={`/FAQs/${TempId}`} style={{textDecoration:'none', color:'white'}}>
      <ListItemButton>
        <ListItemIcon>
          <InfoOutlinedIcon sx={{color:'white'}} fontSize='large'/>
        </ListItemIcon>
        <ListItemText primary="FAQs" />
      </ListItemButton>
      </Link>
    </List>
        </Grid>
        <Grid item xs={12} lg={4} direction="row">
      <StatsCard 
        title="Direct Partners" 
        value="999" 
        image={Paertner}
        tile2="Total Direct Income"
        value2="2.00"
      />

<StatsCard 
        title="Items Unlocked" 
        value="12" 
        tile2="Total Level Income"
        value2="3.377"
      />
    </Grid>
    <Grid item xs={12} lg={4} direction="row">
      <StatsCard 
        icon={<PersonIcon />} 
        title="Profit Ratio" 
        value="6595.00%" 
        tile2={"My Team Total Profit"}
        value2={"99999.50"}
      />

<StatsCard 
        icon={<PersonIcon />} 
        title="Profits" 
        value="$ 15151" 
        tile2={"FLASTMOON USDT"}
        value2={"9999"}
      />
    </Grid>
<Grid item xs={12} lg={2} irection="row" sx={{textAlign:'center'}}>
<Stack direction="row" justifyContent={'center'} spacing={2}>
      <Avatar sx={{height:100, width:100, fontSize:50}}>{id}</Avatar>
    </Stack>
   <h1>ID # {id}</h1>
   <h3>FLASH Level: 13</h3>
   <Box>
           <Button variant="contained" size='large'  sx={{ mr: 2, bgcolor:'rgba(55, 83, 105, 1)'}} onClick={() => goRegister(id)}>Register</Button>
          </Box>
          </Grid>

      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
        <Typography variant="h6">Not a member yet? Sign up with this upline</Typography>
        </Box>
      <Grid container spacing={2}>
      {/* <Grid item xs={12} lg={2} sx={{ padding: 2 }}></Grid> */}
      <Grid item xs={12} lg={9} sx={{ padding: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <TextField
          variant="outlined"
          value={refLink}
          fullWidth
          InputProps={{
            readOnly: true,
            endAdornment: (
              <IconButton onClick={handleCopy} color="secondary">
                <ContentCopyIcon />
              </IconButton>
            ),
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'white',
              },
            },
            input: {
              color: 'white',
            },
          }}
        />
      </Box>

        </Grid>
        <Grid item xs={12} lg={1} sx={{ padding: 2 }} container justifyContent={'center'}>
        <Box>
        <Button variant="contained" size='large' sx={{ mr: 2, bgcolor:'rgba(55, 83, 105, 0.75)'}}>Home</Button>
          </Box>
          </Grid>
          <Grid item xs={12} lg={1} sx={{ padding: 2 }} container justifyContent={'center'}>
          <Box>
           <Button variant="contained" size='large'  sx={{ mr: 2, bgcolor:'rgba(55, 83, 105, 1)'}} onClick={() => goRegister(id)}>Register</Button>
          </Box>
          </Grid>
          <Grid item xs={12} lg={1} sx={{ padding: 2 }} container justifyContent={'center'}>
          <Box>
          <Button variant="contained" size='large' sx={{bgcolor:'rgba(55, 83, 105, 0.50)'}}>Approve USDT</Button>
          </Box>
          </Grid>
        </Grid>


<NFTCOMPONENT NFTITEM={NFTITEM} Data={Data}/>

    <Grid container spacing={2}>
      <Grid item xs={12} lg={7}>
      <Typography variant="h5" sx={{ m:2 }}>Recent Activites</Typography>
        </Grid>
        <Grid item xs={12} lg={5}>
        <Typography variant="h5" sx={{ m:2 }}>FLASH MOON 3.0 Contacts</Typography>
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

<Box sx={{ padding: 1 }}>
      {history.map((item, index) => (

        <Paper key={index} sx={{ display: 'flex', alignItems: 'center', padding: 2, backgroundColor: 'rgba(71, 163, 238, 0.75)', color: 'white', mt: 2, borderRadius: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Usdticons />
            <Typography variant="body1" sx={{ marginLeft: 1, marginRight: 10, backgroundColor: '#f0a500', padding: '2px 6px', borderRadius: '4px', color: 'black' }}>
              {item.number}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.7, marginRight: 10 }}>{item.code}</Typography>
            <Typography variant="body1" sx={{ marginRight: 10 }}>{item.amount}</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
            <IconButton sx={{ color: 'white' }}>
                <ContentCopyIcon />
              </IconButton>
              <Typography variant="caption" sx={{ marginRight: 1 }}>{item.date}</Typography>
            </Box>
          </Box>
    
        </Paper>
      
      ))}
    </Box>
      </Grid>
      <Grid item xs={12} lg={5}  direction="row">
        
      <Box sx={{m:2}}>
      Look up any member account in preview mode. Enter ID to preview.
      </Box>
      <Paper sx={{ p: 1, background: 'transparent' }}>
        <Box sx={{ display: 'flex', m: 2, alignItems: 'center' }}>
          <TextField
            id="input-with-icon-textfield"
            label="Example: 99"
            fullWidth
            value={refID}
            onChange={(e) => {
              setrefID(e.target.value);
            }}
            variant="filled"
            sx={{
              borderRadius: 3,
              backgroundColor: '#FFFFFF',
              '.MuiFilledInput-input': { color: 'black' },
            }}
          />
          <Button
            variant='contained'
            sx={{
              ml: 3,
              fontSize: 16,
              height: '50px', // ตั้งค่าความสูงให้ตรงกับ TextField
              borderRadius:2
            }}
            onClick={() => handleClick(refID)}
          >
            VIEW
          </Button>
        </Box>
      </Paper>
        </Grid>
      </Grid>
    </Box>
    </Container>
  );
}

export default Dashboard;
