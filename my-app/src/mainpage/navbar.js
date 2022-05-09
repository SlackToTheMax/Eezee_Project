import React, { useState, useEffect } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabledOutlined';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


import sgFlag from "../images/Flag_of_Singapore.png";
import eezeeLogo from "../images/eezee_logo.png";


const Navbar = (props) => {

    const SearchBar = () => (
        <form style={{  position: "relative",
            height: "200px",
            width : "500px"}}>
          <TextField
            id="search-bar"
            className="text"
            label="Enter a city name"
            variant="outlined"
            placeholder="Search..."
            size="small"
            style={{width: "100%",
                    height: "100px",
                    }}
          />
          <IconButton style={{  position: "absolute", right: "0",
            top : "5px"}} type="button" aria-label="search">
            <SearchIcon style={{ fill: "blue" }} />
          </IconButton>
        </form>
      );

      const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

    return (
        <>
        <AppBar style={{ background: '#f0f0f0' }} position="static">
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                <Box component="img" style={{width:30,height:25}} sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} src={sgFlag} />

                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                        my: 2,
                        mr: 5,
                        display: { xs: 'none', md: 'flex' },
                        color: 'black',
                        textDecoration: 'none',
                        }}
                    >
                        Singapore
                    </Typography>

                    <PhoneEnabledIcon color="disabled" sx={{my: 2, mr: 1 , display: { xs: 'none', md: 'flex' } }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                        my: 2,
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        color: 'black',
                        textDecoration: 'none',
                        }}
                    >
                        +65 6797 9688
                    </Typography>
                        
                </Box>


                <Box sx={{ flexGrow: 0 , display: { xs: 'none', md: 'flex' }}}>
                <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                        my: 2,
                        mr: 8,
                        display: { xs: 'none', md: 'flex' },
                        color: 'black',
                        textDecoration: 'none',
                        }}
                    >
                        Support Center
                    </Typography>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                        my: 2,
                        mr: 1,
                        display: { xs: 'none', md: 'flex' },
                        color: 'black',
                        textDecoration: 'none',
                        }}
                    >
                        Login
                    </Typography>
                    
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                        my: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'black',
                        textDecoration: 'none',
                        }}
                    >
                        |
                    </Typography>

                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                        my: 2,
                        mr: 5,
                        display: { xs: 'none', md: 'flex' },
                        color: 'black',
                        textDecoration: 'none',
                        }}
                    >
                        Register
                    </Typography>
                </Box>
            </Toolbar>
        </Container>
        </AppBar>

        {/* Bottom half */}
        <AppBar style={{ background: '#FFFFFF' }} position="static">
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                <Grid container spacing={2} >
                    <Grid item xs={3}>
                            <Box component="img" style={{width:200,height:60}} sx={{ display: { xs: 'none', md: 'flex' }}} src={eezeeLogo} />
                    </Grid>
                    <Grid item xs={3}>
                            <SearchBar/>
                    </Grid>
                    <Grid item xs={3}>
                        <Box component="img" style={{width:50,height:60}} sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} src={eezeeLogo} />
                        <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                        my: 2,
                        mr: 5,
                        display: { xs: 'none', md: 'flex' },
                        color: 'black',
                        textDecoration: 'none',
                        }}
                    >
                        Favourites
                    </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Box component="img" style={{width:50,height:60}} sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} src={eezeeLogo} />
                        <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                        my: 2,
                        mr: 5,
                        display: { xs: 'none', md: 'flex' },
                        color: 'black',
                        textDecoration: 'none',
                        }}
                    >
                        Carts
                    </Typography>
                    </Grid>
                    <Grid item xs={12}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                        my: 2,
                        mr: 5,
                        display: { xs: 'none', md: 'flex' },
                        color: 'black',
                        textDecoration: 'none',
                        }}
                    >
                        View All Categories
                    </Typography>

                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                        my: 2,
                        mr: 5,
                        display: { xs: 'none', md: 'flex' },
                        color: 'black',
                        textDecoration: 'none',
                        }}
                    >
                        View All Brands
                    </Typography>
                    </Grid>
                    <Box sx={{ width: '100%' }}>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={8}>
                        <Item>1</Item>
                        </Grid>
                        <Grid item xs={4}>
                        <Item>2</Item>
                        </Grid>
                        <Grid item xs={6}>
                        <Item>3</Item>
                        </Grid>
                        <Grid item xs={6}>
                        <Item>4</Item>
                        </Grid>
                        </Grid>
                        </Box>
                {/* <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                
                <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                        my: 2,
                        mr: 5,
                        display: { xs: 'none', md: 'flex' },
                        color: 'black',
                        textDecoration: 'none',
                        }}
                    >
                        Singapore
                    </Typography>

                    <PhoneEnabledIcon color="disabled" sx={{my: 2, mr: 1 , display: { xs: 'none', md: 'flex' } }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                        my: 2,
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        color: 'black',
                        textDecoration: 'none',
                        }}
                    >
                        +65 6797 9688
                    </Typography>
                        
                </Box>


                <Box sx={{ flexGrow: 0 , display: { xs: 'none', md: 'flex' }}}>
                <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                        my: 2,
                        mr: 8,
                        display: { xs: 'none', md: 'flex' },
                        color: 'black',
                        textDecoration: 'none',
                        }}
                    >
                        Support Center
                    </Typography>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                        my: 2,
                        mr: 1,
                        display: { xs: 'none', md: 'flex' },
                        color: 'black',
                        textDecoration: 'none',
                        }}
                    >
                        Login
                    </Typography>
                    
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                        my: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'black',
                        textDecoration: 'none',
                        }}
                    >
                        |
                    </Typography>

                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                        my: 2,
                        mr: 5,
                        display: { xs: 'none', md: 'flex' },
                        color: 'black',
                        textDecoration: 'none',
                        }}
                    >
                        Register
                    </Typography>
                </Box> */}
                </Grid>
            </Toolbar>
        </Container>
        </AppBar>
        </>
    );
};

export { Navbar };