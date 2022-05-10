
import React, { useState} from "react";


import { Navbar } from "./navbar";
import { CarouselWidget } from "./carouselWidget"


const Mainpage = (props) => {

    
    return (
        <div className='wrapper' >
            <div className="App-Dash">
                <Navbar  />
            </div>
            <div style={{backgroundColor:"#f0f0f0",
                            minHeight: "100vh",
                        }}>
                <CarouselWidget />

            </div>
        </div>
    );
}

export { Mainpage };
