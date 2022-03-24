import LeftMenu from "./LeftMenu";
import DashboardHome from "./DashboardHome";
import DashboardProducts from "./DashboardProducts";
import DashboardNewProduct from "./DashboardNewProduct";
import DashboardProduct from "./DashboardProduct";
import DashboardCategories from "./DashboardCategories";

const Dashboard = ({page}) =>{
    return (<>
        <LeftMenu />
        {page === "home" && (<> <DashboardHome /> </>) }
        {page === "categories" && (<> <DashboardCategories /> </>) }
        {page === "products" && (<> <DashboardProducts /> </>) }
        {page === "newproduct" && (<> <DashboardNewProduct /> </>) }
        {page === "product" && (<> <DashboardProduct /> </>) }

    </>)
}

export default Dashboard;