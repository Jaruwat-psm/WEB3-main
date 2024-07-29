import React from 'react';
import { Box, Grid, Card, CardActionArea, CardMedia, CardContent, Typography, Avatar, Divider } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import Diamond from './Diamond'; // Assuming Diamond is a component
import UsdtIcon from '../Images/usdt.png'
import Image13 from '../Images/Item/13.png';
import useMediaQuery from '@mui/material/useMediaQuery';
const NFTCOMPONENT = ({ NFTITEM, Data }) => {
  let { id } = useParams();
  const matches = useMediaQuery('(min-width:600px)');

  // Ensure Data.btlvl is an array
  const dataArray = Array.isArray(Data.btlvl) ? Data.btlvl : [];

  const getDataByLevelAndTab = (level, tab) => {
    return dataArray.filter(item => item.level === level && item.tab === tab);
  };

  const renderDiamond = (user, key, size) => {
    const color = user ? 'gold' : 'white';
    const number = user ? user.userHeadId : '';
    return (
      <Grid item xs={12} sm={6} md={6} key={key} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Diamond number={null} color={color} size={size}/>
      </Grid>
    );
  };

  const renderDiamonds = (dataItem, level) => {
    let diamondSize = 0;
    let diamondBelow = 40;
    if (dataItem.level === 13) {
      diamondSize = matches ? 100 : 50;
      diamondBelow = matches ? 100 : 50;
    } else {
      diamondSize = 50;
    }
    return (
      <>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
          {renderDiamond(dataItem.userNextLeft, 'left', diamondSize)}
          {renderDiamond(dataItem.userNextRight, 'right', diamondSize)}
        </Grid>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
          {renderDiamond(dataItem.userNextLeft?.userNextLeft, 'left-left', diamondBelow)}
          {renderDiamond(dataItem.userNextLeft?.userNextRight, 'left-right', diamondBelow)}
          {renderDiamond(dataItem.userNextRight?.userNextLeft, 'right-left', diamondBelow)}
          {renderDiamond(dataItem.userNextRight?.userNextRight, 'right-right', diamondBelow)}
        </Grid>
      </>
    );
  };

  // Sort the NFTITEM array so that items with Level 13 appear first
  const sortedNFTITEM = NFTITEM.slice().sort((a, b) => a.Level - b.Level);

  return (
    <Box>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {sortedNFTITEM.map((item, index) => {
          const dataItems = getDataByLevelAndTab(item.Level, 1);
          const showBuyNow = dataItems.every(dataItem => dataItem.level !== item.Level);

          return (
            <Grid item xs={12} sm={6} md={4} lg={item.Level === 13 ? 12 : 3} key={index} container justifyContent="center">
              <Link to={`/DashboardUser/${id}/${item.Level}/1`} style={{ textDecoration: 'none' }}>
                <Card sx={{ maxWidth: matches ? 700 : 300, backgroundColor: 'rgba(71, 163, 238, 0.75)', color: 'white', borderRadius: '15px' }}>
                  <CardActionArea>
                    <Box sx={{ position: 'absolute', top: 16, right: 14 }}>
                      <Avatar src={item.Avatar} sx={{ width: 30, height: 30 }} />
                      <Typography variant="body2" sx={{ color: 'white', mt: 1 }}>
                        {item.ItemPrice}
                      </Typography>
                    </Box>
                    <Box sx={{ padding: 2 }}>
                      <Typography variant="h6" sx={{ color: 'white' }}>
                        {item.ItemName}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'white' }}>
                        {item.Level}
                      </Typography>
                    </Box>

                    <Grid container spacing={0} justifyContent="center">
                      <Grid item xs={12} sx={{ textAlign: 'center' }}>
                        <Grid container spacing={0} justifyContent="center" alignItems="center">
                          {dataItems.map(dataItem => (
                            <React.Fragment key={dataItem.btLvlId}>
                              {renderDiamonds(dataItem, item.Level)}
                            </React.Fragment>
                          ))}
                        </Grid>
                      </Grid>
                    </Grid>
                    <CardMedia component="img" height={item.Level === 13 ? 500 : 300 && (matches ? 300 : 500)} image={item.imagePath} alt={item.ItemName} />
                    <CardContent sx={{ textAlign: 'center' }}>
                      {showBuyNow && (
                        <Box sx={{ marginTop: 2 }}>
                          <button
                            style={{
                              backgroundColor: 'gold',
                              border: 'none',
                              borderRadius: '10px',
                              padding: '10px 20px',
                              cursor: 'pointer',
                            }}
                          >
                            Buy Now
                          </button>
                        </Box>
                      )}
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default NFTCOMPONENT;
