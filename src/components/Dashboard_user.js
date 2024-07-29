import React, { useState, useEffect, useCallback } from 'react';
import { Link, useParams, useNavigate  } from 'react-router-dom';
import {
  List,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Typography,
  Box,
  Grid,
  Container,
  Paper,
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import UsdtIcon from '../Images/usdt.png'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ButtonAppBar from './Header';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import StackedBarChartOutlinedIcon from '@mui/icons-material/StackedBarChartOutlined';
import SchemaOutlinedIcon from '@mui/icons-material/SchemaOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Diamond from './Diamond';
import useMediaQuery from '@mui/material/useMediaQuery';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
const DashboardUser = () => {
  let { id, Lv, tab } = useParams();
  const setrefId = localStorage.setItem('refId', id);
  const TempId = localStorage.getItem('refId');
  const navigate = useNavigate();
  const [Tabs, setTabs] = useState('');
  const [Findlevel, setFindLevel] = useState('')
  const matches = useMediaQuery('(min-width:600px)');

  const [Data, setData] = useState([]);
  const [Tabarr, setTabarr] = useState([]);
  const Getdata = useCallback(async (id) => {
    try {
      let url = `https://api.depx.dev/api/FlashMoon/UserLvlByIdAndLevel/${id}/${Lv}`;
      let response = await fetch(url);
      console.log(response)
      if (response.ok) {
        let res = await response.json();
        console.log(res)
        setData(res);
        setTabarr(res.btlvl)
        setFindLevel(res.btlvl[0].level)
      } else {
        console.error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.log(error);
    }
  }, [Lv]);

  useEffect(() => {
    if (id) {
      Getdata(id);
    }
  }, [Getdata, id]);

  const renderDiamond = (user, key, size) => {
    const color = user ? 'white' : 'blue';
    const number = user ? user.userHeadId : '';
    return (
      <Grid item xs={12} sm={6} md={6} key={key} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Diamond number={number} color={color}  size={size} />
      </Grid>
    );
  };
  const handleChange = (event) => {
    setTabs(event.target.value);
    navigate(`/DashboardUser/${id}/${Lv}/${event.target.value}`)
  };
  const renderDiamonds = (dataItem) => {
    return (
      <>
        <Grid container spacing={0} justifyContent="center">
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
            {renderDiamond(dataItem.userNextLeft, 'left', matches ? 130 : 70)}
            {renderDiamond(dataItem.userNextRight, 'right', matches ? 130 : 70)}
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
            {renderDiamond(dataItem.userNextLeft?.userNextLeft, 'left-left', matches ? 100 : 60)}
            {renderDiamond(dataItem.userNextLeft?.userNextRight, 'left-right', matches ? 100 : 60)}
            {renderDiamond(dataItem.userNextRight?.userNextLeft, 'right-left', matches ? 100 : 60)}
            {renderDiamond(dataItem.userNextRight?.userNextRight, 'right-right', matches ? 100 : 60)}
          </Grid>
        </Grid>
      </>
    );
  };
  
  const Usdticons = () => {
    return <img src={UsdtIcon} style={{width:"28px",height:"28px"}} alt="USDT" /> ;
  };

  const filteredData = Array.isArray(Data.btlvl) ? Data.btlvl.filter(item => item.tab === parseInt(tab)) : [];

  const RenderNewTab = () => {
    return(
      <>
       <Box sx={{ width: '300px', textAlign:'center' }}>
      <FormControl fullWidth sx={{bgcolor:'black',borderRadius:3, mt:5}}>
        <InputLabel id="demo-simple-select-label" sx={{color:'white',fontSize:20,textAlign:'center',alignContent:'center',alignItems:'center'}}>Reinvest Cycle - ({tab})</InputLabel>
        <Select
        sx={{color:'white', textAlign:'center'}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Tabs}
          label="Reinvest Cycle"
          onChange={handleChange}
        >

{Tabarr.map((Item, Index) => (
     <MenuItem value={Item.tab}>{Item.tab}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
      </>
    )
  }

  const NFTITEM = [{id:"1",ItemName:"FLASH 1",ItemPrice:"($10)",Level:1},
    {id:"2",ItemName:"FLASH 2",ItemPrice:"($20)",Level:2},
    {id:"3",ItemName:"FLASH 3",ItemPrice:"($40)",Level:3},
    {id:"4",ItemName:"FLASH 4",ItemPrice:"($80)",Level:4},
    {id:"5",ItemName:"FLASH 5",ItemPrice:"($150)",Level:5},
    {id:"6",ItemName:"FLASH 6",ItemPrice:"($250)",Level:6},
    {id:"7",ItemName:"FLASH 7",ItemPrice:"($450)",Level:7},
    {id:"8",ItemName:"FLASH 8",ItemPrice:"($800)",Level:8},
    {id:"9",ItemName:"FLASH 9",ItemPrice:"($1400)",Level:9},
    {id:"10",ItemName:"FLASH 10",ItemPrice:"($2500)",Level:10},
    {id:"11",ItemName:"FLASH 11",ItemPrice:"($3500)",Level:11},
    {id:"12",ItemName:"FLASH 12",ItemPrice:"($5000)",Level:12},
    {id:"13",ItemName:"FLASH 13",ItemPrice:"($10000)",Level:13}
   ]

   
   const filteredItems = NFTITEM.filter(item => item.Level === Findlevel);

   const prices = filteredItems.map(item => item.ItemPrice);

   
  

  return (
    <Container maxWidth="xl" sx={{height: matches ? '100vh' : '100%'}}>
      <ButtonAppBar />
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
            <Link to={`/Stats/${TempId}`} style={{ textDecoration: 'none', color: 'white' }}>
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
          <Typography variant="h4" sx={{color:"white"}}>TreeView Detail</Typography>
          <Paper sx={{ position: 'relative', p: 5, background: 'radial-gradient(circle, rgba(125,125,125,0.7595413165266106) 49%, rgba(49,98,255,0.6558998599439776) 92%)', boxShadow:0 }}>
          <Box sx={{ position: 'absolute', top: 14, left: 20,fontSize:25, color:'white',justifyContent:'center',alignItems:'center' }}>
         <Typography variant="h6" color="white">FLASH {Lv}</Typography>
                    </Box>
          <Box sx={{ position: 'absolute', top: 14, right:'50%',fontSize:40, color:'white',justifyContent:'center',alignItems:'center' }}>
          <Typography variant="h3" color="white">   {id} </Typography>
                    </Box>
          <Box sx={{ position: 'absolute', top: 14, right: 60, color:'white',justifyContent:'center',alignItems:'center' }}>
         <Usdticons/>
                    </Box>
                    <Box sx={{ position: 'absolute', top: 16, right: 14, color:'white',justifyContent:'center',alignItems:'center' }}>
                    <Typography variant="body1" color="white"> {prices}</Typography>
                    </Box>
{Lv > 1 &&(
                    <Box sx={{ position: 'absolute', top: '50%', left: 14, color:'white',justifyContent:'center',alignItems:'center', cursor: 'pointer', }}>
                    <ArrowBackIosIcon fontSize='large' onClick={() => window.location.href = (`/DashboardUser/${id}/${parseInt(Lv) - 1}/${tab}`)}/>
                    </Box>
)}
{Lv < 13 &&(
                    <Box sx={{ position: 'absolute', top: '50%', right: 14, color:'white',justifyContent:'center',alignItems:'center',  cursor: 'pointer', }}>
                    <ArrowForwardIosIcon fontSize='large' onClick={() => window.location.href = (`/DashboardUser/${id}/${parseInt(Lv) + 1}/${tab}`)}/>
                    </Box>
                )}
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12} sx={{ mt:10 }}>
                <div className="diamond-container" style={{ display: 'flex', justifyContent: 'center' }}>
                  <Grid container spacing={0} justifyContent="center" alignItems="center">
                    {filteredData.map((dataItem, index) => (
                      <React.Fragment key={index}>
                        {renderDiamonds(dataItem)}
                      </React.Fragment>
                    ))}
                      <RenderNewTab/>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </Paper>
          { !matches ? (
       <div className="diamond-container" style={{ display: 'flex',flexDirection:'column',textAlign:'center',alignItems:'center', justifyContent: 'center', marginTop:20, marginBottom:20 }}>
         <Diamond number={null} color={'white'}  size={'20'} /> <Typography variant="body2" color="white"> Direct Partner</Typography>
          <Diamond number={null} color={'blue'}  size={'20'} />  <Typography variant="body2" color="white"> Spillover from above</Typography>
          <Diamond number={null} color={'gold'}  size={'20'} />  <Typography variant="body2" color="white"> Spillover from below</Typography>
          <Diamond number={null} color={'green'}  size={'20'} /> <Typography variant="body2" color="white"> Gift </Typography>  
       </div>
          ) : (
          <div className="diamond-container" style={{color:'white', display: 'flex', justifyContent: 'center',marginTop:30, alignContent:'center', alignItems:'center' }}>
          <Diamond number={null} color={'white'}  size={'50'} /> <Typography variant="body1" color="white" sx={{ml:1,mr:1}}> Direct Partner</Typography>
          <Diamond number={null} color={'blue'}  size={'50'} />  <Typography variant="body1" color="white" sx={{ml:1,mr:1}}> Spillover from above</Typography>
          <Diamond number={null} color={'gold'}  size={'50'} />  <Typography variant="body1" color="white" sx={{ml:1,mr:1}}> Spillover from below</Typography>
          <Diamond number={null} color={'green'}  size={'50'} /> <Typography variant="body1" color="white" sx={{ml:1,mr:1}}> Gift </Typography>
          </div>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default DashboardUser;
