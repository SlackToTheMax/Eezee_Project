import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import startFluo from "../images/popular_products/start_fluo.png";
import mhntd from "../images/popular_products/mhn-td.png";
import headlight from "../images/popular_products/headlight.png";
import bulb from "../images/popular_products/bulb.png";
import shoe from "../images/popular_products/shoe.png";


import { Link  } from "react-router-dom";

const PopularProducts = (props) => {

    const popularProducts = [[startFluo,"120.22","Philips S10 Starter Fluo 4-65w 220-240v 350332 product name super long"], [mhntd,"94.34",'04900008100 Philips Mhn-td 70w/842 Rx7s'], [headlight,"23.00",'Pelican 2755 3xaaa Headlight C1d1'], [bulb,"3.04",'Led Indicator Bulb Ba9s Red'], [shoe,"85.00",'Safety Jogger Safety Shoe Dakar S3'], [headlight,"23.00",'Pelican 2755 3xaaa Headlight C1d1']]

    return(
        <Grid sx={{my: 10}} style={{paddingBottom:"10%"}} container>
            <Grid xs={12}>
                <Typography
                    variant="h4"
                    sx={{
                        color: 'black',
                        fontWeight: 'bold'
                        }}
                    >
                        Our Most Popular Products
                </Typography>
                
            </Grid>
            <Grid xs={12}>
                <Typography
                    sx={{
                        color: 'black',
                        }}
                    >
                        Trusted by the best companies in Asia
                </Typography>
            </Grid>
            <Grid container xs={12}>
            {popularProducts.map(product => {
                    return <Grid item xs={2} sx={{my:2}}>
                        <Link to='/shoes' style={{ textDecoration: 'none' }}>
                            <div style={{ cursor:"pointer", width:"90%",height:"100%", backgroundColor: 'White'}} sx={{ display: { mr: 2 } }}>

                                <Box component="img" style={{width:"50%",height:"40%",}} sx={{ display: { xs: 'none', md: 'flex' },margin: 'auto',paddingTop: '10%'}} src={product[0]} />
                                
                                <Typography
                                variant="h6"
                                sx={{
                                    flexGrow: 1,
                                    my: 3,
                                    ml: 2,
                                    color: 'blue',
                                    fontWeight: 'bold',
                                    }}
                                >
                                    <sup>S$</sup> {product[1]}
                                </Typography>
                                <Typography
                                variant="h6"
                                sx={{
                                    flexGrow: 1,
                                    my: 1,
                                    ml: 2,
                                    color: 'black',
                                    }}
                                >
                                    {product[2]}
                                </Typography>
                            </div>
                        </Link>
                    </Grid>;
                })}
            </Grid>
        </Grid>
    );
};

export { PopularProducts }