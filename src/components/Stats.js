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
import { DataGrid } from '@mui/x-data-grid';
const Stats = () => {
  let { id, Lv, tab } = useParams();
  const setrefId = localStorage.setItem('refId', id);
  const TempId = localStorage.getItem('refId');
  const navigate = useNavigate();
  const [Tabs, setTabs] = useState('');

  const matches = useMediaQuery('(min-width:600px)');

  const [Data, setData] = useState([]);
  const [Tabarr, setTabarr] = useState([]);
  const Getdata = useCallback(async (id) => {
    try {
      let url = `https://api.depx.dev/api/FlashMoon/UserLvlByIdAndLevel/${id}/${Lv}`;
      let response = await fetch(url);
      if (response.ok) {
        let res = await response.json();
        setData(res);
        setTabarr(res.btlvl)
        console.log(res)
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

  const rows = [{ id: 1, Date : "Sun Jun 29 2024", Wallet : "x20v..y113", userHeadId : "3", ReferralEarning : "99 USDT", Level : 1 },
    { id: 2, Date : "Mon Nov 30 2024", Wallet : "x77..v653", userHeadId : "4", ReferralEarning : "99 USDT", Level : 1},
    { id: 3, Date : "Tue Jun 31 2024", Wallet : "x20v..n103", userHeadId : "5", ReferralEarning : "99 USDT", Level : 1 },
    { id: 4, Date : "Wed Jun 1 2024", Wallet : "x20v..c993", userHeadId : "100", ReferralEarning : "99 USDT", Level : 1 },
    { id: 5, Date : "Thu Jun 2 2024", Wallet : "x20v..b553", userHeadId : "150", ReferralEarning : "99 USDT", Level : 1 },
    { id: 6, Date : "Fri Jun 3 2024", Wallet : "x20v..a113", userHeadId : "122", ReferralEarning : "99 USDT", Level : 1 },
    { id: 7, Date : "Sat Jun 4 2024", Wallet : "x20v..h113", userHeadId : "71", ReferralEarning : "99 USDT", Level : 1 }
]

const columns = [
    { field: 'Date', headerName: 'Date', flex: 1},
    { field: 'Wallet', headerName: 'Tx Hash', flex: 1, align:'center', headerAlign:'center' },
    {
      field: 'userHeadId',
      headerName: 'ID',
      type: 'number',
      flex: 1,
      align:'center', headerAlign:'center' 
    },
    {
      field: 'ReferralEarning',
      headerName: 'Referral Earning',
      sortable: false,
      flex: 1,
      align:'center', headerAlign:'center' 
    },
    { field: 'Level', headerName: 'Level', flex: 1, align:'center', headerAlign:'center' }
  ];

  

  

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
          <Typography variant="h4" sx={{color:"white"}}>Partners</Typography>
          <Paper sx={{ p: 3, mt:3, background: 'radial-gradient(circle, rgba(125,125,125,0.7595413165266106) 49%, rgba(49,98,255,0.6558998599439776) 92%)', boxShadow:0 }}>
          <Grid container spacing={2}>
      <Grid item lg={3} >
      <Typography variant="h6" sx={{color:"white"}}>Level</Typography>
      </Grid>
      <Grid item lg={3}>
      <Typography variant="h6" sx={{color:"white"}}>Date</Typography>
      </Grid>
      <Grid item lg={2}>
      <Typography variant="h6" sx={{color:"white"}}>ID</Typography>
      </Grid>
      <Grid item lg={2}>
      <Typography variant="h6" sx={{color:"white"}}>Hash</Typography>
      </Grid>
      <Grid item lg={2} sx={{textAlign:'center'}}>
      <Typography variant="h6" sx={{color:"white"}}>Earing</Typography>
      </Grid>
      </Grid>
          </Paper>

{rows.map((item) => (
          <Grid item xs={12} lg={12} sx={{mt:2}}>
          <Paper sx={{ p: 3, background: 'radial-gradient(circle, rgba(125,125,125,0.7595413165266106) 49%, rgba(49,98,255,0.6558998599439776) 92%)', boxShadow:0 }}>
          <Grid container spacing={2}>
          <Grid item lg={2}>
      <Typography variant="body1" sx={{color:"white"}}>   {item.Level}</Typography>
      </Grid>
      <Grid item lg={3} sx={{textAlign:'center'}}>
      <Typography variant="body1" sx={{color:"white"}}> {item.Date}</Typography>
      </Grid>
  
      <Grid item lg={2} sx={{textAlign:'center'}}>
      <Typography variant="body1" sx={{color:"white"}}>  {item.userHeadId}</Typography>
      </Grid>

      <Grid item lg={3} sx={{textAlign:'center'}}>
      <Typography variant="body1" sx={{color:"white"}}> {item.Wallet}</Typography>
      </Grid>
      <Grid item lg={2} sx={{textAlign:'center'}}>
      <Typography variant="body1" sx={{color:"white"}}>   {item.ReferralEarning}</Typography>
      </Grid>
  
      </Grid>
          </Paper>
        </Grid>
        ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Stats;
