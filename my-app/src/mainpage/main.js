
import React from "react";


import { CarouselWidget } from "./carouselWidget"
import { FeaturedBrands } from "./featuredBrands"
import { PopularProducts } from "./popularProducts"


const Main = (props) => {
    
    return (
        <>
            <CarouselWidget />
            <FeaturedBrands />
            <PopularProducts />
        </>
    );
}

export { Main };
