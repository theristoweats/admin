 
import { addCategory, addProduct } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components"; 
import { Link, useParams, useNavigate } from 'react-router-dom';

const DashboardProductsRight = styled.div`
    margin-left:60px;

`;

const NewProductAdd = styled.div`
    padding-left:50px;
    padding-top:50px;
    padding-bottom:50px;
`;

const TextNewProduct = styled.h1`
    font-family:GilroyLight;
    color:white;
    font-size:20px;
`;

const InputEtc = styled.div`
    display:flex;
    flex-direction:column;
    margin-top:30px;
`;

const SingleInputText = styled.div`
    display:flex;
    flex-direction:column;
    width:350px;
`;

const TextInput = styled.div`
    color:#9f9f9f;
    font-size:14px;
    font-family:GilroyLight; 
    margin-bottom:10px;
`;

const Input = styled.input`
    margin-bottom:35px; 
    height:45px;
    padding-left:15px;
    padding-right:15px;
    border-radius:10px;
    border:none;
    outline:none;
    padding-left:20px;
    padding-right:20px;
    outline:none;
    border:none;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;  
    background-color: rgba(255,255,255,0.075);
    font-family: GilroyLight;
    color:white;
`;

const ButtonPublishProdut = styled.button`
    font-family:GilroyLight; 
    width:350px;
    font-size:15px;
    height:45px;
    background-color:#e41e3f;
    border-radius:10px;
    border:none;
    color:white;
    font-size:14px;
    cursor:pointer;
`;
 

const DashboardNewCategory = () =>{
    const navigate = useNavigate();
    
    const dispatch = useDispatch();
     
    
    const [inputs, setInputs] = useState({});

    
    const handleChange = (e) => {
        setInputs((prev) => {
        return { ...prev, [e.target.name]: e.target.value };
        });
    };
    
    // const [filename, setFilename] = useState('Choose File');

    
    const onSubmit = async e => {
        e.preventDefault(); 
        try {
            const category = { ...inputs };
            addCategory(category, dispatch, navigate);
        }catch(err){
            console.log(err);
        }
    }

    return (<>
        <DashboardProductsRight>

            <NewProductAdd>
                <TextNewProduct>Додаи нова категорија</TextNewProduct>
                
                <InputEtc>
                    <form onSubmit={onSubmit}> 
                        <SingleInputText>
                            <TextInput>Име на категоријата <b>(печатно)</b></TextInput>
                            <Input 
                                type="text" 
                                placeholder="Овошије и зеленчук"
                                name="category_name"
                                onChange={handleChange}
                                />
                        </SingleInputText> 
                        
                        <SingleInputText>
                            <TextInput>Име на категоријата <b>(латиница, малибукви, празните места заменети со цртка)</b></TextInput>
                            <Input 
                                type="text" 
                                placeholder="ovosije-i-zelencuk"
                                name="category_url"
                                onChange={handleChange} />
                        </SingleInputText>  

                        <ButtonPublishProdut>Објави</ButtonPublishProdut>
                    </form>

                    
                </InputEtc>
            </NewProductAdd>

        </DashboardProductsRight>
    </>)
}

export default DashboardNewCategory;