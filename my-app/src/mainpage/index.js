
import React, { useState} from "react";


import { Navbar } from "./navbar";
import Example from "./example"


const Mainpage = (props) => {

    
    return (
        <div className='wrapper' >
            <div className="App-Dash">
                    <Navbar  />
            </div>
            <div style={{backgroundColor:"#f0f0f0"}}>
                <Example />
            </div>
        </div>
    );
}

export { Mainpage };
