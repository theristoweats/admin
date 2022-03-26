 
import { addProduct, updateProduct } from "../redux/apiCalls";
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
    margin-top:35px;
    border-radius:10px;
    border:none;
    color:white;
    font-size:14px;
    cursor:pointer;
`;

const InputFile = styled.input `
    margin-bottom:25px;
    color:white;
    margin-top:10px;
`;

const DashboardProduct = () =>{
    const navigate = useNavigate();
    
    const {
        id = 0
    } = useParams();
    // const location = useLocation();
    // const productId = location.pathname.split("/")[2];
    
    ////////////////////////////////////////////////
    //product fetch 
    ////////////////////////////////////////////////
    const product = useSelector((state) =>
        state.product.products.find((product) => product._id === id)
    );
 
    ////////////////////////////////////////////////


    const dispatch = useDispatch();
    
    const [cat, setCategories] = useState([]); 
    
    useEffect(() => {
        const getCats = async () => {
            try {
                const res = await axios.get("https://apieats.theristow.com/api/categories");  
                setCategories(res.data);  
            } catch (err) {}
        };
        getCats();
    }, []);
    
    const [inputs, setInputs] = useState({});

    
    const handleChange = (e) => {
        setInputs((prev) => {
        return { ...prev, [e.target.name]: e.target.value };
        });
    };
    
    const [file, setFile] = useState();
    const [filename, setFilename] = useState('Choose File');

    const onChange = e => {
        setFile(e.target.files[0]);
        // setFilename(e.target.files[0].name);
    };

    const onSubmit = async e => {
        e.preventDefault();
        console.log("Submit");
        
        const formData = new FormData();
        formData.append('image', file);

        try {
            if( file != undefined ) {

                const res = await axios.post('https://files.theristow.com/eats/products/upload', formData, {
                    headers: {
                    'Content-Type': 'multipart/form-data'
                    }
                });

                const image_url = res.data.filePath;
                const _product = { ...inputs, img: image_url };
                updateProduct(id, _product, dispatch, navigate);
            }else{

                const _product = { ...inputs };
                updateProduct(id, _product, dispatch, navigate);
            }
            

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
                            <InputFile accept="image/*" type="file" placeholder="Јајца и млеко" onChange={onChange} />

                        </SingleInputText>
                        <SingleInputText>
                            <TextInput>Име на производот <b>(печатно)</b></TextInput>
                            <Input 
                                type="text" 
                                placeholder={product.title}
                                name="title"
                                onChange={handleChange}
                                />
                        </SingleInputText>
                        
                        <SingleInputText>
                            <TextInput>Име на производот <b>(латиница)</b></TextInput>
                            <Input 
                                type="text" 
                                placeholder={product.title_en}
                                name="title_en"
                                onChange={handleChange} />
                        </SingleInputText>
                        
                        <SingleInputText>
                            <TextInput>Име на производот <b>(латиница, малибукви, празните места заменети со цртка)</b></TextInput>
                            <Input 
                                type="text" 
                                placeholder={product.title_url}
                                name="title_url"
                                onChange={handleChange} />
                        </SingleInputText> 
                        
                        <SingleInputText>
                            <TextInput>Цена на производот</TextInput>
                            <Input 
                                type="number" 
                                placeholder={product.price}
                                name="price"
                                onChange={handleChange} />
                        </SingleInputText>

                        <SingleInputText>
                            <TextInput>Категорија</TextInput>
                            <select
                                // value={order}
                                // onChange={(e) => {
                                // navigate(getFilterUrl({ order: e.target.value }));
                                // }}
                                name="categories"
                                className="select-pro-bro"
                                onChange={handleChange}
                            >
                                
                            <option value="0">Избери категорија</option>
                            {cat.map((item) => (
                                <option value={item._id} selected={item._id===product.categories[0]}>{item.category_name}</option>                            
                            ))}
                            </select>
                        </SingleInputText>

                    <ButtonPublishProdut>Измени</ButtonPublishProdut>
                    </form>

                    
                </InputEtc>
            </NewProductAdd>

        </DashboardProductsRight>
    </>)
}

export default DashboardProduct;