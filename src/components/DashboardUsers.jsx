import styled from "styled-components"; 
import OpenBoxIcon from "../icons/open-box.png";
import ExampleProducct from "../icons/pepsi.png";
import MainMoreIcon from "../icons/more.png";
import ReactPaginate from "react-paginate";
import "../css/style.css";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, getUsers } from "../redux/apiCalls";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from 'react-router-dom';
import DeleteUserModal from "./DeleteUserModal";

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

const DashboardUsers = () =>{
    const [searchProduct, setSearchProduct] = useState('');

    const navigate = useNavigate();
    const {
        name = 'all',
        pageNumber = 1, 
    } = useParams();

    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.users);
    const pages = useSelector((state) => state.users.pages);

    useEffect(() => {
        dispatch( 
            getUsers({
              pageNumber,
              name: name !== 'all' ? name : '',
            })
        );  
    }, [dispatch, name, pageNumber]); 

    const handlePageClick = async (data) => {
        // setPageNumber(data.selected + 1); 
        const _page = data.selected + 1;
        navigate(`/users/name/all/pageNumber/${_page}`);
        // console.log(data.selected);
        // scroll to the top
        //window.scrollTo(0, 0)
    };
    
    const handleClickSearch = () => {
        if(searchProduct !== '' && searchProduct !== undefined){
            navigate(`/users/name/${searchProduct}/pageNumber/1`);
        }
    };
    const [userDeleteId, setUserDeleteId] = useState(null);
    
    const handleDeleteUser = (_productId) => {
        setUserDeleteId(_productId);
    }

    return (<> 
        <DashboardProductsRight>

            <DashboardProductsRightInside>
                <InfoTtt>
                    <InfoMainTtt>
                        <IconLop src={OpenBoxIcon}/>
                        <TextInfoTtt>Корисници</TextInfoTtt>
                    </InfoMainTtt>
 
                </InfoTtt> 

                <InputSearchProduct>    
                    <InputSearch placeholder="Пребарај корисник..." onChange={(e)=>setSearchProduct(e.target.value)}  defaultValue={name !=='all' ? name : '' }/>
                    <ButtonSearch onClick={handleClickSearch}>Пребарај</ButtonSearch>
                </InputSearchProduct>

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
            
                            <SingleTableHeader style={{width:"80%"}}>
                                <TableHeaderText>Број</TableHeaderText>
                            </SingleTableHeader>
                            <SingleTableHeader style={{width:"50%", marginRight:"5%"}}>
                                <TableHeaderText>Регистриран</TableHeaderText>
                            </SingleTableHeader>
                            <SingleTableHeader style={{width:"60%"}}>
                                <TableHeaderText>Име</TableHeaderText>
                            </SingleTableHeader> 
                            <SingleTableHeader style={{width:"90%"}}>
                                <TableHeaderText>Емајл</TableHeaderText>
                            </SingleTableHeader> 
                            <SingleTableHeader  style={{width:"30%"}}>  
                                <TableHeaderText>
                                </TableHeaderText>
                            </SingleTableHeader>  
                        </TableHeader>

                        {users.map((user) => (
                        <TableHeader style={{paddingTop:"10px",paddingBottom:"10px"}}>
                      
                            <SingleTableHeader style={{width:"80%"}}>
                                <TableHeaderText>{user._id}</TableHeaderText>
                            </SingleTableHeader>
                            <SingleTableHeader style={{width:"50%", marginRight:"5%"}}>
                                <TableHeaderText>23 јуни 2022 во 19:40ч</TableHeaderText>
                            </SingleTableHeader>
                            <SingleTableHeader style={{width:"60%"}}>
                                <TableHeaderText>{user.fullname}</TableHeaderText>
                            </SingleTableHeader> 
                            <SingleTableHeader style={{width:"90%"}}>
                                <TableHeaderText>{user.email}</TableHeaderText>
                            </SingleTableHeader> 
                            <SingleTableHeader  style={{width:"30%"}}>  
                                <TableHeaderText>
                                    <ButtonDelete onClick={() => handleDeleteUser(user._id)}>Избриши</ButtonDelete>
                                </TableHeaderText>
                            </SingleTableHeader>  
                        </TableHeader>
                        ))}
                        

                    </InsideProducts>
                </LoadProductsHere>
                <ReactPaginate
                    previousLabel={"<"}
                    nextLabel={">"}
                    breakLabel={"..."}
                    pageCount={pages} 
                    forcePage={pageNumber-1}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination justify-content-center"}
                    pageClassName={"page-item"}
                    pageLinkClassName={"page-link"}
                    previousClassName={"page-item prev-item-d"}
                    previousLinkClassName={"page-link"}
                    nextClassName={"page-item next-item-d"}
                    nextLinkClassName={"page-link"}
                    breakClassName={"page-item"}
                    breakLinkClassName={"page-link"}
                    activeClassName={"active"}
                /> 

            </DashboardProductsRightInside>



        </DashboardProductsRight>
        
        
        {userDeleteId && (<>
            <DeleteUserModal userDeleteId={userDeleteId} setUserDeleteId={setUserDeleteId} /> 
        </>)}

    </>)
}

export default DashboardUsers;