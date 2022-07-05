import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchproducts, addProduct, addCartValue} from "../app/cartSlice";
import Header from "./Header";

export function Cart(){ 

    const { value, productLength } = useSelector(state => state.cart);
    const dispatch = useDispatch();
    debugger;

    useEffect(() => {
        dispatch(fetchproducts());
        dispatch(addCartValue(0));
    }, [dispatch]);

    const getOtherProducts = () => {
        const otherProductsCount = productLength % 4;
        const index = productLength - otherProductsCount;
        const otherItems = [];
        for(var i=index; i < productLength; i++) {
            otherItems.push(value[i]);
        }
        return (
            <Row>
                {otherItems && otherItems.map(value => <Col md={3}><img src={value[index].image} alt="product" /></Col>)}
            </Row>
        )
    }
    debugger;
    const buyproduct = (index) =>{
        dispatch(addProduct(index));
    }
    
    return(
        <div>
            <Header/>            
            <Container fluid style={{backgroundColor : 'white'}} >
            {value && value.map((obj, index) => {
                return (
                    (index === 0 || index % 4 === 0) && (
                        <Row key={index}>
                            <Col md={3}>
                                <div className="productBox">
                                    <div className="imageBox">
                                        <img src={value[index].image} alt={value[index].image}/> 
                                    </div>
                                    <div>
                                        <p className="titleBox"><b>{value[index].title}</b></p>
                                        <p style={{float:'left'}}><b>Price : ${value[index].price}</b></p>
                                        <p style={{float:'right'}}>Rating : {value[index].rating.rate}</p>
                                    </div>
                                    <div>
                                        <Link to="/AddCart"><button className="buyButton" onClick={()=> buyproduct(index)}>BUY NOW</button></Link>
                                    </div>
                                    
                                </div>
                            </Col>
                            <Col md={3}>
                                <div className="productBox">
                                    <div className="imageBox">
                                        <img src={value[index + 1].image} alt={value[index + 1].image}/> 
                                    </div>
                                    <div>
                                        <p className="titleBox"><b>{value[index + 1].title}</b></p>
                                        <p style={{float:'left'}}><b>Price : ${value[index + 1].price}</b></p>
                                        <p style={{float:'right'}}>Rating : {value[index + 1].rating.rate}</p>
                                    </div>
                                    <div>
                                        <Link to="/AddCart"><button className="buyButton" onClick={()=> buyproduct(index + 1)}>BUY NOW</button></Link>
                                    </div>

                                </div>
                            </Col>
                            <Col md={3}>
                                <div className="productBox">
                                    <div className="imageBox">
                                        <img src={value[index + 2].image} alt={value[index + 2].image}/> 
                                    </div>
                                    <div>
                                        <p className="titleBox"><b>{value[index + 2].title}</b></p>
                                        <p style={{float:'left'}}><b>Price : ${value[index + 2].price}</b></p>
                                        <p style={{float:'right'}}>Rating : {value[index + 2].rating.rate}</p>
                                    </div>
                                    <div>
                                        <Link to="/AddCart"><button className="buyButton" onClick={()=> buyproduct(index + 2)}>BUY NOW</button></Link>
                                    </div>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div className="productBox">
                                    <div className="imageBox">
                                        <img src={value[index + 3].image} alt={value[index + 3].image}/> 
                                    </div>
                                    <div>
                                        <p className="titleBox"><b>{value[index + 3].title}</b></p>
                                        <p style={{float:'left'}}><b>Price : ${value[index + 3].price}</b></p>
                                        <p style={{float:'right'}}>Rating : {value[index + 3].rating.rate}</p>
                                    </div>
                                    <div>
                                        <Link to="/AddCart"><button className="buyButton" onClick={()=> buyproduct(index + 3)}>BUY NOW</button></Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    )
                )}
            )}
            {(productLength % 4) === 0 ? '' : getOtherProducts()}
            </Container>
        </div>
    )
}