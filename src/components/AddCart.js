import React, { useState } from "react";
import { Col, Container, Row, Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import emptyCart from '../emptycart.png';
import { addCartValue, incCartValue, decCartValue, clearCartValue } from "../app/cartSlice";
import Header from "./Header";



export default function AddCart(){
    debugger;
    const [show, setShow] = useState(false);
    const { productIndex, cartQty } = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const clearCart = () => {
        dispatch(clearCartValue(0));
    }

    const cartDisplay = ()=> {
        if (cartQty === 0){
            return(
                <img className = "emptyCart" src={emptyCart} alt='emptyCart' />
            )
        }else{
            return(
                <div>
                    <h6>{productIndex[0].title}</h6>
                    <p style={{fontSize:'14px'}}>Cart Qty : {cartQty}</p>
                    <h5>Total Price: ${cartQty > 1 ? (productIndex[0].price * cartQty).toFixed(2) : (productIndex[0].price).toFixed(2)}</h5>
                    <p><button className="placeOrder" onClick={handleShow}>PLACE ORDER</button></p> 
                    <p><button className="clearOrder" onClick={clearCart}>CANCEL</button></p>
                    
                    <Modal show={show}>        
                        <Modal.Body>Woohoo, Your Order Placed Successfully!</Modal.Body>
                        <Modal.Footer>
                            <Button variant="dark" onClick={handleClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            )
        }
    }

    const addCartQty = ()=>{
        dispatch(addCartValue(1));
    }

    const incrementQty = ()=>{
        dispatch(incCartValue(cartQty+1));
    }

    const decrementQty = ()=>{
        dispatch(decCartValue(cartQty-1));
    }

    const buttonDisplay = ()=> {
        if (cartQty === 0){
            return(
                <button className="addCart" onClick={addCartQty}>Add To Cart</button>
            )
        }else{
            return(
                <div style={{marginTop : '35px'}}>
                    <button className="qtyButton" style={{borderRight : '1px solid white'}} onClick={decrementQty}>-</button>
                    <button className="qtyButton">{cartQty}</button>
                    <button className="qtyButton" style={{borderLeft : '1px solid white'}} onClick={incrementQty}>+</button>              
                </div>
            )
        }
    }


    return(
        <div>
            <Header/>        
            <Container fluid style={{backgroundColor : 'white'}}>
            {
                productIndex && productIndex.map((obj,index)=>
                    <Row key={index}>
                        <Col md={4} className="productImgSec">
                            <div>
                                <img src={obj.image} alt={obj.image} />
                            </div>
                        </Col>
                        <Col md={6} className="productDetSec" style={{borderRight : '1px solid black'}}>
                            <div>
                                <h2>{obj.title}</h2>
                                <p>Rating : {obj.rating.rate}</p>
                                <h3>Price: ${(obj.price).toFixed(2)}</h3>
                                {buttonDisplay()} 
                                <p style={{marginTop : '30px', fontSize : '14px'}}>{obj.description}</p>

                            </div>
                        </Col>
                        <Col md={2} className="productCartSec">
                            {cartDisplay()}
                        </Col>
                    </Row>
                )
            }  
        </Container> 

        </div>
            
    ) 
}