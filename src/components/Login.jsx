import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components"; 
import { login } from "../redux/apiCalls";

const FormModern = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column
`;

const Input = styled.input`
    width:250px;
    margin-bottom:10px; 
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

const Button = styled.button`

    font-family:GilroyLight; 
    width:290px;
    font-size:15px;
    height:43px;
    background-color:#e41e3f;
    border-radius:10px;
    border:none;
    color:white;
    cursor:pointer;
    font-size:14px;
`;

const TextWelcome = styled.h1`
    font-family:GilroyLight; 
    color:white;
    font-size:23px;
    margin-bottom:20px;
`;

const Login = () =>{
    const [email, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, { email, password });
    };
    return (<>
        <FormModern>
            <TextWelcome>The Ristow Eats Admin</TextWelcome>
            <Input type="text" placeholder="Admin email" onChange={(e) => setUsername(e.target.value)}/>    
            <Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>    
            <Button onClick={handleClick}>Login</Button>
        </FormModern>
    </>)
}

export default Login;