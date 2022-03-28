 
import { addProduct, updateProduct } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components"; 
import { Link, useParams, useNavigate } from 'react-router-dom';
import { productSlice } from "../redux/productRedux";

const DashboardProductsRight = styled.div`
    margin-left:60px;
    margin-bottom:40px;
`; 

const InsideOrder = styled.div`
    display:flex;
    margin-left:20px;
    margin-right:20px;
    padding-top:50px
`;

const Left = styled.div`
    width:40%;
    margin-right:15px;
    background-color: #242526;
    // min-height:300px;
    border-radius:10px;
    height:fit-content;
`;

const Right = styled.div`
    width:60%;
    background-color: #242526;
    min-height:300px;
    border-radius:10px;
`;

const TextNewProduct = styled.h1`
    font-family:GilroyLight;
    color:white;
    font-size:20px;
    margin-left:20px;
    padding-top:30px;
`;

const InsideSide = styled.div`
    padding:20px;
`;

const SingleRow = styled.div`
    display:flex; 
    flex-direction:column;
    margin-bottom:15px;
`;

const NameRow = styled.div`
    font-family:GilroyLight;
    color:#a7a7a7;
    font-size:15px;
`;

const ValueRow = styled.div`
    font-family:GilroyLight;
    color:white;
    font-size:16px;
    margin-top:5px;
    font-weight:bold;
`;

const ProductsList = styled.div`
    display:flex;
    flex-direction:column;
`;

const ProductSingle = styled.div`
    display:flex;
    margin-bottom:10px;
`;

const ProductImage = styled.div`
    width:80px;
    height:80px;
    background-color: #161616;
    border-radius:10px;
    display:flex;
    justify-content:center;
    align-items:center;
`;

const ProductDetails = styled.div`
    display:flex;
    flex-direction:column;
    margin-left:10px;
`;

const Image = styled.img`
    width:60px;
    height:60px;
`;

const ProductName = styled.label`
    font-family:GilroyLight;
    font-size:17px;
    color:white;
    font-weight:bold;
`;

const ProductQuantity = styled.div`
    color:#a7a7a7;
    font-family:GilroyLight;
    margin-top:6px;
    font-size:15px;
`;

const DashboardOrder = () =>{
    const navigate = useNavigate();
    
    const {
        id = 0
    } = useParams();
    // const location = useLocation();
    // const productId = location.pathname.split("/")[2];
    
    ////////////////////////////////////////////////
    //product fetch 
    ////////////////////////////////////////////////
    const order = useSelector((state) =>
        state.orders.orders.find((order) => order._id === id)
    );

    console.log(order);
 
    ////////////////////////////////////////////////
        
    return (<>
        <DashboardProductsRight>
            <TextNewProduct>Нарачка #{order._id}</TextNewProduct>

            <InsideOrder>

                <Left>
                    <InsideSide>
                        <SingleRow>
                            <NameRow>Корисник:</NameRow>
                            <ValueRow>{order.user_info[0].fullname}</ValueRow>
                        </SingleRow>
                        <SingleRow>
                            <NameRow>Телефонски број:</NameRow>
                            <ValueRow>{order.user_info[0].phonenumber}</ValueRow>
                        </SingleRow>
                        <SingleRow>
                            <NameRow>Нарачано:</NameRow>
                            <ValueRow>{order.createdAt}</ValueRow>
                        </SingleRow>
                        <SingleRow>
                            <NameRow>Адреса:</NameRow>
                            <ValueRow>{order.address_info[0].addressLocation}</ValueRow>
                        </SingleRow>
                        <SingleRow>
                            <NameRow>Сума:</NameRow>
                            <ValueRow>{order.amount} ден.</ValueRow>
                        </SingleRow>
                        <SingleRow>
                            <NameRow>Статус:</NameRow>
                            <ValueRow>{order.orderStatus}</ValueRow>
                        </SingleRow>
                        <SingleRow>
                            <NameRow>Доставувач:</NameRow>
                            <ValueRow>{order.carrierName}</ValueRow>
                        </SingleRow>
                    </InsideSide>
                </Left>

                <Right>
                    <InsideSide>
                        <ProductsList>
                        {order.products.map((product) => (

                            <ProductSingle>
                                <ProductImage>
                                    <Image src={product.img}/>
                                </ProductImage>
                                <ProductDetails>
                                    <ProductName>{product.title}</ProductName>
                                    <ProductQuantity>Количина: <b>{product.quantity}</b></ProductQuantity>
                                    <ProductQuantity>Цена: <b>{product.price/product.quantity} ден.</b></ProductQuantity>
                                </ProductDetails> 
                            </ProductSingle>
                        ))}
                        </ProductsList>
                    </InsideSide>
                </Right>
            </InsideOrder>
        </DashboardProductsRight>
    </>)
}

export default DashboardOrder;