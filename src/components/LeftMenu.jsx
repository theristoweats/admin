import styled from 'styled-components';
import Logo from "../icons/logo-red-2.png";
import DashboardIcon from "../icons/dashboard-white.png";
import OrdersIcon from "../icons/orders-white.png";
import PeopleIcon from "../icons/people.png";
import StructureIcon from "../icons/structure.png";
import OpenBoxIcon from "../icons/open-box.png";
import TrolleyIcon from "../icons/trolley.png";
import { Link } from 'react-router-dom';


const LeftMenuMain = styled.div`
    height: 100vh;
    position: fixed;
    width: 60px;
    border-right: 1px solid #393a3b;
`;

const LeftMenuMainInside = styled.div`
    align-items:center;
    display:flex;
    flex-direction:column;
    justify-content:center;
    padding-top:13px;
`;

const LeftMenuLogo = styled.div`
    display: flex;
    align-items: center;
`;

const LeftMenuLogoIcon = styled.img`
    width: 35px;
    height: 35px;
    border-radius: 10px;
    object-fit: contain;
`;

const DashboardLinks = styled.div` 
    display: flex;
    flex-direction: column;
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
    padding-top: 110px;
`;

const LinkSingle = styled.div` 
    margin-bottom: 30px;
    opacity: .7;
`;

const LinkSingleIcon = styled.img`
    width: 22px;
    height: 22px;
`;

const LeftMenu = () => {

    return (<>
        <LeftMenuMain>
            <LeftMenuMainInside>
                <LeftMenuLogo>
                    <Link to="/">
                        <LeftMenuLogoIcon src={Logo} />
                    </Link>
                </LeftMenuLogo>

                <DashboardLinks>
                    <Link to="/">
                        <LinkSingle>
                            <LinkSingleIcon src={DashboardIcon}/>
                        </LinkSingle>
                    </Link>
                    <Link to="/orders">
                        <LinkSingle>
                            <LinkSingleIcon src={OrdersIcon}/>
                        </LinkSingle>
                    </Link>
                    <Link to="/users">
                        <LinkSingle>
                            <LinkSingleIcon src={PeopleIcon}/>
                        </LinkSingle>
                    </Link>
                    <Link to="/categories">
                        <LinkSingle>
                            <LinkSingleIcon src={StructureIcon}/>
                        </LinkSingle>
                    </Link>
                    <Link to="/products">
                        <LinkSingle>
                            <LinkSingleIcon src={OpenBoxIcon}/>
                        </LinkSingle>
                    </Link>
                    <Link to="/carriers">
                        <LinkSingle>
                            <LinkSingleIcon src={TrolleyIcon}/>
                        </LinkSingle> 
                    </Link>
                </DashboardLinks>

            </LeftMenuMainInside>
        </LeftMenuMain>
    </>)
}

export default LeftMenu;