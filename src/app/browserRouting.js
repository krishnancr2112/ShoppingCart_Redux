import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddCart from "../components/AddCart";
import { Cart } from "../components/Cart";


export default function BrowserRouting(){
    return(
            <BrowserRouter>
                <Routes>
                    <Route exact path = '/' element = {<Cart/>}></Route>
                    <Route exact path = '/AddCart' element = {<AddCart/>}></Route>
                </Routes>
            </BrowserRouter>
    )
}