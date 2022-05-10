import Carousel from "react-multi-carousel";
import Box from '@mui/material/Box';

import carousel1 from "../images/carousel.png";
import carousel2 from "../images/carousel2.png";
import carousel3 from "../images/carousel3.png";
import carousel4 from "../images/carousel4.png";

import "react-multi-carousel/lib/styles.css";

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
const CarouselWidget = (props) => {

    return(
        <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        <Box component="img" style={{width:"100%",height:650}} sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} src={carousel1} />
        <Box component="img" style={{width:"100%",height:650}} sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} src={carousel2} />
        <Box component="img" style={{width:"100%",height:650}} sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} src={carousel3} />
        <Box component="img" style={{width:"100%",height:650}} sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} src={carousel4} />

        </Carousel>
    );
};

export { CarouselWidget }