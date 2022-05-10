import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import ABB from "../images/featured_brands_logo/ABB_logo.png";
import AURALIGHT from "../images/featured_brands_logo/AURALIGHT_logo.png";
import PELICAN from "../images/featured_brands_logo/PELICAN_logo.png";
import EATON from "../images/featured_brands_logo/EATON_logo.png";
import LYSAGHT from "../images/featured_brands_logo/LYSAGHT_logo.png";
import MK from "../images/featured_brands_logo/MK_logo.png";

const FeaturedBrands = (props) => {

    const featuredBrands = [[ABB,"ABB",'230'], [AURALIGHT,"AURALIGHT",'230'], [PELICAN,"PELICAN",'230'], [MK,"MK",'230'], [LYSAGHT,"LYSAGHT",'230'], [EATON,"EATON",'230']]

    return(
        <Grid sx={{my: 10}} container>
            <Grid xs={12}>
                <Typography
                    variant="h4"
                    sx={{
                        color: 'black',
                        fontWeight: 'bold'
                        }}
                    >
                        Featured Brands
                </Typography>
                
            </Grid>
            <Grid container xs={12}>
                <Grid xs={6}>
                    <Typography
                        sx={{
                            color: 'black',
                            }}
                        >
                            Browse the full catalog of brands today
                    </Typography>
                </Grid>
                <Grid xs={6} >
                    <Typography
                        style={{float: "right",cursor:"pointer"}}
                        sx={{
                            color: 'blue',
                            }}
                        >
                            View All {'>'}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container xs={12}>
                {featuredBrands.map(brand => {
                    return <Grid item xs={2} sx={{my:2}}>
                        <div style={{ cursor:"pointer", width:"90%",height:"90%", backgroundColor: 'White'}} sx={{ display: { mr: 2 } }}>
                            <Box component="img" style={{width:"50%",height:"40%",}} sx={{ display: { xs: 'none', md: 'flex' },margin: 'auto',paddingTop: '10%'}} src={brand[0]} />
                            <Typography
                            variant="h5"
                            sx={{
                                flexGrow: 1,
                                textAlign: "center",
                                my: 3,
                                color: 'black',
                                fontWeight: 'bold',
                                }}
                            >
                                {brand[1]}
                            </Typography>
                            <Typography
                            variant="h6"
                            sx={{
                                flexGrow: 1,
                                textAlign: "center",
                                my: 1,
                                color: 'black',
                                }}
                            >
                                {brand[2]} Products
                            </Typography>
                        </div>
                    </Grid>;
                })}
                
            </Grid>
        </Grid>
    );
};

export { FeaturedBrands }