
import React, { useState} from "react";


import { Navbar } from "./navbar";
import { CarouselWidget } from "./carouselWidget"
import { FeaturedBrands } from "./featuredBrands"
import { PopularProducts } from "./popularProducts"
import { ViewProduct } from "../product/productPage"


const Mainpage = (props) => {

    
    return (
        <div className='wrapper' >
            <div className="App-Dash">
                <Navbar  />
            </div>
            <div style={{backgroundColor:"#f0f0f0",
                            minHeight: "100vh",
                            paddingRight: "5%",
                            paddingLeft: "5%",
                            paddingTop: "3%"
                        }}>
                <div>
                    <CarouselWidget />
                </div>
                <div>
                    <FeaturedBrands />
                </div>
                <div>
                    <PopularProducts />
                </div>
                <div>
                    <ViewProduct />
                </div>
            </div>
        </div>
    );
}

export { Mainpage };
