import styled from "styled-components"; 
import OpenBoxIcon from "../icons/open-box.png";
import ExampleProducct from "../icons/pepsi.png";
import MainMoreIcon from "../icons/more.png";
import ReactPaginate from "react-paginate";
import "../css/style.css";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getProducts } from "../redux/apiCalls";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from 'react-router-dom';
import DeleteProductModal from "./DeleteProductModal";

const DashboardProductsRight = styled.div`
    margin-left:60px;
`;

const DashboardProductsRightInside = styled.div`
    padding: 20px; 
`;
  
const InfoTtt = styled.div`
    display: flex;
    align-items: center;
`;


const InfoMainTtt = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
`;

const TextInfoTtt = styled.label`
    color: white;
    margin-left: 10px;  
    font-family: GilroyLight;
`;

const InfoMainTwo = styled.div` 
    margin-top: 10px;
    background-color: #e41e3f;
    padding: 10px;
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    width: 120px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
`;

const Tttext = styled.label` 
    color: white;
    font-size: 14px;
    font-family:GilroyLight;
`;

const IconLop = styled.img` 
    width: 24px;
    height: 24px;
`;

const LoadProductsHere = styled.div`
    display: flex;
    width: 100%;
    margin-top: 50px;
`;

const InsideProducts = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #242526;
    width: 100%;
    border-radius: 10px;
    border-top: 5px solid #e41e3f;
`;

const TableHeader = styled.div` 
    display: flex; 
    border-bottom:1px solid #3d3d3d;
    padding-bottom: 15px;
    padding:20px;
    align-items:center; 
`;

const SingleTableHeader = styled.div`
    width: 100%;
    display:flex; 
`;

const TableHeaderText = styled.div` 
    color: #dddddd;
    font-size: 15px;
    font-family:GilroyLight;
`;

const ProductImg = styled.img` 
    width: 50px;
    height: 50px;
`;

const ButtonDelete = styled.button`
    background-color: red;
    width: 100px;
    height: 35px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color:white;
    outline:none;
    font-family:GilroyLight;
    border:none;
    cursor:pointer;
`;

const MoreIcon = styled.img` 
    width: 24px;
    height: 24px;
    filter: brightness(0) invert(1); 
    opacity: .5;
`;

const InputSearchProduct = styled.div`
    margin-top:30px;
    display:flex;
`;

const InputSearch = styled.input`
    height:40px;
    padding-left:20px;
    padding-right:20px;
    width:200px;
    outline:none;
    border:none;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;  
    background-color: rgba(255,255,255,0.075);
    font-family: GilroyLight;
    color:white;
`;

const ButtonSearch = styled.button` 
    height: 40px;
    width: 80px;
    font-family: GilroyLight;
    font-size: 13px;
    background-color: #e41e3f;
    border: none;
    outline: none;
    color: white;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px; 
    cursor:pointer;
`;

const ButtonClickMore = styled.button`
    outline:none;
    background:transparent;
    border:none;
    cursor:pointer;
`;

const DashboardCategories = () =>{
    const dispatch = useDispatch();
 
    
    useEffect(() => {
        getCategories(dispatch);
    }, [dispatch]); 
    
    const categories = useSelector((state) => state.categories.categories); 
    const isFetching = useSelector((state) => state.categories.isFetching);
    
    const [categoryDeleteId, setCategoryDeleteId] = useState(null);
    
    const handleDeleteCategory = (_categoryId) => {
        setCategoryDeleteId(_categoryId);
    }

    return (<> 
        <DashboardProductsRight>

            <DashboardProductsRightInside>
                <InfoTtt>
                    <InfoMainTtt>
                        <IconLop src={OpenBoxIcon}/>
                        <TextInfoTtt>Производи</TextInfoTtt>
                    </InfoMainTtt>

                    <Link to="/newproduct" style={{textDecoration:"none"}}>
                        <InfoMainTwo>
                            <Tttext>Додади нов <b>+</b></Tttext>
                        </InfoMainTwo> 
                    </Link>
                </InfoTtt>  

                <LoadProductsHere>
                    <InsideProducts>    
                        {/* <TableHeader>
                            <SingleTableHeader style={{width:"300px", marginRight:"20px"}}>
                                <TableHeaderText></TableHeaderText>
                            </SingleTableHeader>
                            <SingleTableHeader style={{width:"90%"}}>
                                <TableHeaderText>Број</TableHeaderText>
                            </SingleTableHeader>
                            <SingleTableHeader style={{width:"50%", marginRight:"5%"}}>
                                <TableHeaderText>Додадена</TableHeaderText>
                            </SingleTableHeader>
                            <SingleTableHeader style={{}}>
                                <TableHeaderText>Име</TableHeaderText>
                            </SingleTableHeader>
                            <SingleTableHeader style={{width:"40%"}}>
                                <TableHeaderText>Цена</TableHeaderText>
                            </SingleTableHeader>
                            <SingleTableHeader style={{width:"30%"}}>
                                <TableHeaderText></TableHeaderText>
                            </SingleTableHeader> 
                            <SingleTableHeader style={{width:"30%"}}>
                                <TableHeaderText></TableHeaderText>
                            </SingleTableHeader>  
                        </TableHeader> */}

                        <TableHeader >
                            <SingleTableHeader style={{width:"200px", marginRight:"20px"}}>
                            </SingleTableHeader>
                            <SingleTableHeader style={{width:"80%"}}>
                                <TableHeaderText>Број</TableHeaderText>
                            </SingleTableHeader>
                            <SingleTableHeader style={{width:"50%", marginRight:"5%"}}>
                                <TableHeaderText>Додаден</TableHeaderText>
                            </SingleTableHeader>
                            <SingleTableHeader style={{width:"90%"}}>
                                <TableHeaderText>Име</TableHeaderText>
                            </SingleTableHeader>
                            <SingleTableHeader style={{width:"40%"}}>
                                <TableHeaderText>Цена</TableHeaderText>
                            </SingleTableHeader>
                            <SingleTableHeader  style={{width:"30%"}}>  
                                <TableHeaderText>
                                </TableHeaderText>
                            </SingleTableHeader> 
                            <SingleTableHeader  style={{width:"30%", justifyContent:"flex-end", alignItems:"flex-end"}}>
                                <TableHeaderText>
                                </TableHeaderText>
                            </SingleTableHeader>  
                        </TableHeader>

                        {categories.map((category) => (
                        <TableHeader style={{paddingTop:"10px",paddingBottom:"10px"}}> 
                            <SingleTableHeader style={{width:"80%"}}>
                                <TableHeaderText>{category._id}</TableHeaderText>
                            </SingleTableHeader> 
                            <SingleTableHeader style={{width:"90%"}}>
                                <TableHeaderText>{category.category_name}</TableHeaderText>
                            </SingleTableHeader> 
                            <SingleTableHeader  style={{width:"30%"}}>  
                                <TableHeaderText>
                                    <ButtonDelete onClick={() => handleDeleteCategory(category._id)}>Избриши</ButtonDelete>
                                </TableHeaderText>
                            </SingleTableHeader> 
                            <SingleTableHeader  style={{width:"30%", justifyContent:"flex-end", alignItems:"flex-end"}}>
                                <TableHeaderText>
                                    <Link to={`/product/${category._id}`}>
                                        <MoreIcon src={MainMoreIcon}/> 
                                    </Link>
                                </TableHeaderText>
                            </SingleTableHeader>  
                        </TableHeader>
                        ))}
                        

                    </InsideProducts>
                </LoadProductsHere>
               

            </DashboardProductsRightInside>



        </DashboardProductsRight>
        
        
        {/* {productDeleteId && (<>
            <DeleteProductModal productDeleteId={productDeleteId} setProductDeleteId={setProductDeleteId} /> 
        </>)} */}

    </>)
}

export default DashboardCategories;