import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Carousel from "react-multi-carousel";

import shoe from "../images/popular_products/shoe.png";
import safetyLogo from "../images/safety_logo.png";


import carousel1 from "../images/carousel.png";
import carousel2 from "../images/carousel2.png";
import carousel3 from "../images/carousel3.png";
import carousel4 from "../images/carousel4.png";

const ViewProduct = (props) => {

    const popularProducts = [carousel1,carousel2,carousel3]

    const responsive = {
        desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 1
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 1
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 1
          }
    };

    const CustomDot = ({ onMove, index, onClick, active }) => {
        return (
          <li
            className={active ? "active" : "inactive"}
            onClick={() => onClick()}
          >
            Hi
          </li>
        );
      };
      

    return(
        <Grid sx={{my: 10}} container>
            <div  style={{ width:"50%",height:"50%", backgroundColor: 'White'}} sx={{ display: { mr: 2 } }}>
                <Typography
                    variant="h6"
                    sx={{
                        flexGrow: 1,
                        my: 3,
                        ml: 2,
                        color: 'black',
                        fontWeight: 'bold',
                        }}
                    >
                        Safety Jogger Safety Shoe Dakar S3 (if the seller input product name is long)
                </Typography>
                <hr></hr>
                <Grid sx={{my: 2}} container>
                        <Grid xs={3}>
                            <Box component="img" style={{width:"100%",height:"100%"}} sx={{ display: { xs: 'none', md: 'flex'}}} src={safetyLogo} />
                        </Grid>
                        <Grid container xs={9} sx={{ display: { md: 'flex'}}} style={{alignItems: 'center',paddingLeft: '2%'}} >
                            <Grid xs={12}>
                                <Typography
                                    sx={{
                                        color: 'black',
                                        }}
                                    >
                                        Model:
                                </Typography>
                            </Grid>
                            <Grid xs={12}>
                                <Typography
                                    sx={{
                                        color: 'black',
                                        }}
                                    >
                                        Brand: 
                                </Typography>
                            </Grid>
                        </Grid>
                </Grid>
                <Carousel
                               responsive={responsive}
                               additionalTransfrom={0}
                               arrows
                               autoPlaySpeed={3000}
                               centerMode={false}
                               className=""
                               dotListClass=""
                               draggable
                               focusOnSelect={false}
                               infinite
                               itemClass=""
                               keyBoardControl
                               minimumTouchDrag={80}
                               renderButtonGroupOutside={false}
                               renderDotsOutside={false}
                               showDots
                               sliderClass=""
                               slidesToSlide={1}
                               swipeable
                               customDot={<CustomDot />}
                >
                    
                    <div className="carousel-item active">
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                alt="First slide"
              />
            </div>
            <div className="carousel-item active ">
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1587382559340-818aa5fc7a43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                alt="Second slide"
              />
            </div>
                </Carousel>
                <Box component="img" style={{width:"50%",height:"40%",}} sx={{ display: { xs: 'none', md: 'flex' },margin: 'auto',paddingTop: '10%'}} src={shoe} />
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
                        <sup>S$</sup>
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
                     
                </Typography>
            </div>
        </Grid>
    );
};

export { ViewProduct }