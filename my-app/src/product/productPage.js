import React, {useEffect, useState} from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Carousel from "react-multi-carousel";
import Button from "@mui/material/Button"

import safetyLogo from "../images/safety_logo.png";


import shoe1 from "../images/shoe_product/shoe_1.png";
import shoe2 from "../images/shoe_product/shoe_2.png";
import shoe3 from "../images/shoe_product/shoe_3.png";


const ViewProduct = (props) => {

    const productShoe = [shoe1,shoe2,shoe3]
    const [quantity, setQuantity] = useState(0)

    const updateCartItems = (increment) => {
      props.updateCartItems(increment);
    }

    useEffect(() => {
      // Update the document title using the browser API
      setQuantity(props.cartItems)
    },[]);
    

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
      // onMove means if dragging or swiping in progress.
      // active is provided by this lib for checking if the item is active or not.
      return (
        <li
          style={{border: active ? "solid 1px blue" : "white"}}
          onClick={() => onClick()}
        >
          <Box component="img" style={{width:"50%",height:"100%"}} src={productShoe[index]} />
        </li>
      );
    };
      

    return(
        <Grid sx={{my: 10}} container>
          <Grid xs={6} container style={{ paddingRight:"5%"}}>
            <div  style={{ width:"100%",height:"100%", backgroundColor: 'White'}} sx={{ display: { mr: 2 } }}>
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
                               shouldResetAutoplay={false}
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
                {productShoe.map((product)=>{
                   return (
                  <div className="carousel-item active">
                    <Box component="img" style={{width:"70%",height:"50%",}} sx={{ display: { xs: 'none', md: 'flex' },margin: 'auto',paddingTop: '10%'}} src={product} />
                </div>
                   )
                })}
                </Carousel>
                <hr></hr>
                <Grid sx={{my: 2}} container>
                  <Grid xs={12} >
                    <Typography
                        variant="h6"
                        sx={{
                            flexGrow: 1,
                            my: 1,
                            ml: 2,
                            color: 'black',
                            fontWeight: 'bold'
                            }}
                        >
                        Product Description
                    </Typography>
                  </Grid>
                  <Grid xs={12} >
                    <Typography
                          variant="h9"
                          sx={{
                              flexGrow: 1,
                              my: 1,
                              ml: 2,
                              color: 'black',
                              }}
                          >
                          SAFETY JOGGER SHOE DAKAR
                      </Typography>
                  </Grid>
                  <Grid xs={12} >
                    <Typography
                          variant="h9"
                          sx={{
                              flexGrow: 1,
                              my: 1,
                              ml: 2,
                              color: 'black',
                              }}
                          >
                          Shoe size in UK ( UK-6 UK-7 UK-8 UK-9 UK-10 )
                      </Typography>
                  </Grid>
                  <Grid xs={12} >
                    <Typography
                          variant="h9"
                          sx={{
                              flexGrow: 1,
                              my: 1,
                              ml: 2,
                              color: 'black',
                              }}
                          >
                          Color : brown
                      </Typography>
                  </Grid>
                  <Grid xs={12} >
                    <Typography
                          variant="h9"
                          sx={{
                              flexGrow: 1,
                              my: 1,
                              ml: 2,
                              color: 'black',
                              }}
                          >
                          Mid cut.
                      </Typography>
                  </Grid>
                </Grid>

            </div>
        </Grid>
          <Grid xs={6} container>
          <div  style={{ width:"50%",height:"50%", backgroundColor: 'White'}} sx={{ display: { mr: 2 } }}>
                <Typography
                    variant="h6"
                    sx={{
                        flexGrow: 1,
                        my: 1,
                        ml: 2,
                        color: 'blue',
                        fontWeight: 'bold',
                        }}
                    >
                        <sup>S$</sup> 85.00
                </Typography>
                <hr></hr>
                <Grid sx={{my: 2}} container>
                        <Grid xs={3}>
                        <Typography
                            variant="h6"
                            sx={{
                                flexGrow: 1,
                                my: 1,
                                ml: 2,
                                color: 'black',
                                }}
                            >
                                Quantity: 
                        </Typography>
                        </Grid>
                        <Grid container xs={9} sx={{ display: { md: 'flex'}}} style={{alignItems: 'center',paddingLeft: '2%'}} >
                        {quantity <= 0 ? <button style={{border:'solid 1px black', height:'70%', width:'15%'}} disabled={quantity>0?'false':'true'} >-</button> 
                          :
                           <button onClick={()=>{
                            setQuantity(quantity-1)
                            props.updateCartItems(false)
                          }} style={{border:'solid 1px black', height:'70%', width:'15%'}} >-</button>}

                        <Typography
                            variant="h6"
                            sx={{
                                my: 1,
                                color: 'black',
                                }}
                            style={{border:'solid 1px black', height: '65%', width:'50%',textAlign:'center'}}
                            >
                                {quantity}
                        </Typography>

                        <button 
                          onClick={()=>{
                            setQuantity(quantity+1)
                            props.updateCartItems(true)
                          }} style={{border:'solid 1px black', height:'70%', width:'15%'}}
                          >
                            +
                        </button>
                        </Grid>
                </Grid>
                <Grid sx={{my: 2}} align='center' container>
                  <Grid xs={12}  >
                    <Button style={{width:'90%', height:'100%'}} variant="contained">Add to Cart</Button>
                  </Grid>
                  <Grid xs={12} >
                    <Button style={{width:'90%', height:'100%'}} variant="outlined">Add to Favourites</Button>
                  </Grid>
                  
                </Grid>
            </div>
          </Grid>
        </Grid>
    );
};

export { ViewProduct }