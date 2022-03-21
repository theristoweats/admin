 
import { useState } from "react";
import axios from "axios";
import styled from "styled-components"; 

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
    margin-top:35px;
    border-radius:10px;
    border:none;
    color:white;
    cursor:pointer;
`;

const InputFile = styled.input `
    margin-bottom:25px;
    color:white;
    margin-top:10px;
`;

const DashboardNewProduct = () =>{

    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('Choose File');
    const onChange = e => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
    };

    const onSubmit = async e => {
        e.preventDefault();
        console.log("Submit");
        
        const formData = new FormData();
        formData.append('file', file);

        try {

            const res = await axios.post('https://files.theristow.com/eats/products/upload', formData, {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              });

            console.log(res.data);

        }catch(err){
            console.log(err);
        }
    }

    return (<>
        <DashboardProductsRight>

            <NewProductAdd>
                <TextNewProduct>Додаи нов производ</TextNewProduct>
                
                <InputEtc>
                    <form onSubmit={onSubmit}>
                        <SingleInputText>
                            <TextInput>Слика на производот</TextInput>
                            <InputFile type="file" placeholder="Јајца и млеко" onChange={onChange} />
                        </SingleInputText>
                        <SingleInputText>
                            <TextInput>Име на производот <b>(печатно)</b></TextInput>
                            <Input type="text" placeholder="Јајца и млеко" />
                        </SingleInputText>
                        
                        <SingleInputText>
                            <TextInput>Име на производот <b>(латиница)</b></TextInput>
                            <Input type="text" placeholder="Jajca i mleko" />
                        </SingleInputText>
                        
                        <SingleInputText>
                            <TextInput>Име на производот <b>(латиница, малибукви, празните места заменети со цртка)</b></TextInput>
                            <Input type="text" placeholder="jajca-i-mleko" />
                        </SingleInputText> 
                        
                        <SingleInputText>
                            <TextInput>Цена на производот</TextInput>
                            <Input type="number" placeholder="485" />
                        </SingleInputText>

                        <SingleInputText>
                            <TextInput>Категорија</TextInput>
                            <select
                                // value={order}
                                // onChange={(e) => {
                                // navigate(getFilterUrl({ order: e.target.value }));
                                // }}
                                className="select-pro-bro"
                            >
                                <option value="0">Избери категорија</option>
                                <option value="1">Млеко и млечни производи</option>
                            </select>
                        </SingleInputText>

                    <ButtonPublishProdut>Објави</ButtonPublishProdut>
                    </form>

                    
                </InputEtc>
            </NewProductAdd>

        </DashboardProductsRight>
    </>)
}

export default DashboardNewProduct;