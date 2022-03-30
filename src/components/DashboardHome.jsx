import styled from "styled-components"; 
import OpenBoxIcon from "../icons/open-box.png";
import StructureIcon from "../icons/structure.png";
import ExampleProducct from "../icons/pepsi.png";
import MainMoreIcon from "../icons/more.png";
import ReactPaginate from "react-paginate";
import "../css/style.css";
import { useDispatch, useSelector } from "react-redux";
import { getCarriers, getCategories, getOrders, getProducts } from "../redux/apiCalls";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from 'react-router-dom';
import DeleteCarrierModal from "./DeleteCarrierModal";
import TrolleyIcon from "../icons/trolley.png";
import iconSelMenu from "../icons/down.png";
import "../css/style.css";
import DashboardIcon from "../icons/dashboard-white.png";
import ShoppingBag from "../icons/shopping-bag-delivered.png";
import DollarIcon from "../icons/dollar.png";
import PeopleIcon from "../icons/people.png";
import { publicRequest, userRequest } from "../requestMethods";

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

const SelectedMenuPro = styled.div`
    position:relative;
    width:160px;
`;

const IconsFlexPr = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background-color: #353637;
    cursor:pointer;
    position:absolute;
    right:0;
    top:0;
    height: 45px;
    border-bottom-right-radius: 10px;
    width: 45px;
    border-top-right-radius: 10px;
`;


const ChooseProductsType = styled.div`
    display:flex;
    align-items:center;
`;

const ChooseSpan = styled.span` 
    color: #d1d1d1;
    font-size: 14px;
    font-family: GilroyLight; 
    margin-right:10px; 
`;
const IconSelectMenu = styled.img`
    width:16px;
    height:16px;
    opacity: .7;
    cursor:pointer;
    outline:none;
`;

const Input = styled.input`
    margin-left:10px;
    font-family: GilroyLight; 
    height:44px;
    border-radius:10px;
    outline:none;
    border:none;
    padding-left:13px;
    padding-right:13px;
    color:white;
    background-color: #353637;
`;

const DashboardStatisticLoad = styled.div`
    display:flex;
    margin-top:50px;
`;

const DashboardStatisticLeft = styled.div`
    width: 100%;
    display: flex; 
    flex-direction:column;
`;

const DashboardFirstStatistic = styled.div`
    display:flex;
`;

const DashboardStatisticRight = styled.div`
    // width: 50%;
    display: flex;
    flex-direction: column;
`;



const SingleBoxStatistics = styled.div`
    width: 100%;
    border-radius: 10px;
    background-color: #242526;
    margin-right: 10px;
`;

const BoxInsideStatisitc = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column; 
`;

const IconBoxStatistic = styled.div`
    width: 25px;
    height: 25px;
    padding: 10px;
    border-radius: 50%;
`;

const IconStatistic = styled.img`
    width: 24px;
    height: 24px;
`;

const CountStatisticHere = styled.div`
    display: flex;
    flex-direction: column;  
    flex: 1;
    margin-top: 15px;
`;

const StatisticNumber = styled.span`
    color: white;
    font-weight: bold;
    font-size: 35px;
    font-family:GilroyLight;
`;


const StatisticText = styled.span`
    font-size: 15px;
    color: #acacac;
    margin-top: 5px;
    font-family:GilroyLight;
`;

const DashboarHome = () =>{

    const [statistics, setStatistics] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();
 
    const {
        filter = 'today', 
        date = '', 
    } = useParams();

    useEffect(() => {
        const getStatistics = async (___filter, ___date) => { 
            console.log("hii");
            try {
              const res = await userRequest.get(`/admin/statisitc?filter=${___filter}&date=${___date}`);
              setStatistics(res.data);
            } catch (err) {
              // console.log(err)
            }
        };
        getStatistics(filter, date);
    }, [dispatch, filter, date]); 
     

    return (<> 
        <DashboardProductsRight>

            <DashboardProductsRightInside>
                <InfoTtt>
                    <InfoMainTtt>
                        <IconLop src={DashboardIcon}/>
                        <TextInfoTtt>Админ панел</TextInfoTtt>
                    </InfoMainTtt>

                    <ChooseProductsType>
                        <ChooseSpan>Статистика:</ChooseSpan>                                              
                        <SelectedMenuPro>
                            <select 
                                value={filter}
                                onChange={(e) => {
                                    navigate(`/filter/${e.target.value}`);
                                }}
                                className="select-pro-bro"
                            >
                                <option value="today">Денешна</option>
                                <option value="lastday">Синоќешна</option>
                                <option value="choose_date">Избери дата</option>
                                <option value="all">Севкупна</option>
                            </select>
                            <IconsFlexPr>
                                <IconSelectMenu src={iconSelMenu}></IconSelectMenu>
                            </IconsFlexPr>
                        </SelectedMenuPro>
                    </ChooseProductsType>
                    {filter === "choose_date" &&
                    <ChooseProductsType> 
                        <Input type="date" value={date} onChange={(e) => {
                                    navigate(`/filter/choose_date/date/${e.target.value}`);
                                }}/>
                    </ChooseProductsType> }
                    {/* <Link to="/newcarrier" style={{textDecoration:"none"}}>
                        <InfoMainTwo>
                            <Tttext>Додади нов <b>+</b></Tttext>
                        </InfoMainTwo> 
                    </Link> */}
                </InfoTtt>  
   
               
                <DashboardStatisticLoad>

                    <DashboardStatisticLeft>
                        <DashboardFirstStatistic>
                            <SingleBoxStatistics style={{borderTop:"5px solid #e41e3f"}}>
                                <BoxInsideStatisitc>
                                    <IconBoxStatistic style={{backgroundColor:"#e41e3f"}}>
                                        <IconStatistic src={ShoppingBag}/>
                                    </IconBoxStatistic>
                                    <CountStatisticHere>
                                        <StatisticNumber>{statistics && statistics.orders}</StatisticNumber>
                                        <StatisticText>Нарачки</StatisticText>
                                    </CountStatisticHere>
                                </BoxInsideStatisitc>
                            </SingleBoxStatistics>

                            
                            <SingleBoxStatistics style={{borderTop:"5px solid #16783f"}}>
                                <BoxInsideStatisitc>
                                    <IconBoxStatistic style={{backgroundColor:"#16783f"}}>
                                        <IconStatistic src={DollarIcon}/>
                                    </IconBoxStatistic>
                                    <CountStatisticHere>
                                        <StatisticNumber>{statistics && statistics.revenue} ден.</StatisticNumber>
                                        <StatisticText>Заработка</StatisticText>
                                    </CountStatisticHere>
                                </BoxInsideStatisitc>
                            </SingleBoxStatistics>
                            
                            <SingleBoxStatistics style={{borderTop:"5px solid #4151d9"}}>
                                <BoxInsideStatisitc>
                                    <IconBoxStatistic style={{backgroundColor:"#4151d9"}}>
                                        <IconStatistic src={PeopleIcon}/>
                                    </IconBoxStatistic>
                                    <CountStatisticHere>
                                        <StatisticNumber>{statistics && statistics.users}</StatisticNumber>
                                        <StatisticText>Нови корисници</StatisticText>
                                    </CountStatisticHere>
                                </BoxInsideStatisitc>
                            </SingleBoxStatistics>
                        </DashboardFirstStatistic>


                    </DashboardStatisticLeft>

                    <DashboardStatisticRight></DashboardStatisticRight>

                </DashboardStatisticLoad>

            </DashboardProductsRightInside>



        </DashboardProductsRight>
         

    </>)
}

export default DashboarHome;