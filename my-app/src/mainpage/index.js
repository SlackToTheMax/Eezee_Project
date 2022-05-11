
import React, { useState} from "react";


import { Navbar } from "./navbar";
import { Main } from "./main"
import { ViewProduct } from "../product/productPage"

import { BrowserRouter, Route, Routes  } from "react-router-dom";


const Mainpage = (props) => {


    const [cartItems, setCartItems] = useState(0)

    const updateCartItems = (increment) => {

        if(increment == true){
            setCartItems(cartItems+1)
        }else{
            setCartItems(cartItems-1)
        }
    }
    
    return (
        <div className='wrapper' >
            <div className="App-Dash">
                <Navbar cartItems={cartItems} />
            </div>
            <div style={{backgroundColor:"#f0f0f0",
                            minHeight: "100vh",
                            paddingRight: "5%",
                            paddingLeft: "5%",
                            paddingTop: "3%"
                        }}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/shoes' element={ <ViewProduct updateCartItems={updateCartItems} cartItems={cartItems} /> } />
                </Routes >
            </BrowserRouter>
            </div>
        </div>
    );
}

export { Mainpage };
