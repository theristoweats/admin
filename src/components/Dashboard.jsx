import LeftMenu from "./LeftMenu";
import DashboardHome from "./DashboardHome";
import DashboardProducts from "./DashboardProducts";
import DashboardNewProduct from "./DashboardNewProduct";

const Dashboard = ({page}) =>{
    return (<>
        <LeftMenu />
        {page === "home" && (<> <DashboardHome /> </>) }
        {page === "products" && (<> <DashboardProducts /> </>) }
        {page === "newproduct" && (<> <DashboardNewProduct /> </>) }

    </>)
}

export default Dashboard;