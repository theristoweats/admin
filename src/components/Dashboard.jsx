import LeftMenu from "./LeftMenu";
import DashboardHome from "./DashboardHome";
import DashboardProducts from "./DashboardProducts";
import DashboardNewProduct from "./DashboardNewProduct";
import DashboardProduct from "./DashboardProduct";
import DashboardCategories from "./DashboardCategories";
import DashboardNewCategory from "./DashboardNewCategory";
import DashboardCategory from "./DashboardCategory";
import DashboardUsers from "./DashboardUsers";
import DashboardCarriers from "./DashboardCarriers";
import DashboardNewCarrier from "./DashboardNewCarrier";
import DashboardCarrier from "./DashboardCarrier";
import DashboardOrders from "./DashboardOrders";
import DashboardOrder from "./DashboardOrder";

const Dashboard = ({page}) =>{
    return (<>
        <LeftMenu />
        {page === "home" && (<> <DashboardHome /> </>) }
        {page === "categories" && (<> <DashboardCategories /> </>) }
        {page === "products" && (<> <DashboardProducts /> </>) }
        {page === "newproduct" && (<> <DashboardNewProduct /> </>) }
        {page === "newcategory" && (<> <DashboardNewCategory /> </>) }
        {page === "product" && (<> <DashboardProduct /> </>) }
        {page === "category" && (<> <DashboardCategory /> </>) }
        {page === "users" && (<> <DashboardUsers /> </>) }
        {page === "carriers" && (<> <DashboardCarriers /> </>) }
        {page === "newcarrier" && (<> <DashboardNewCarrier /> </>) }
        {page === "carrier" && (<> <DashboardCarrier /> </>) }
        {page === "orders" && (<> <DashboardOrders /> </>) }
        {page === "order" && (<> <DashboardOrder /> </>) }

    </>)
}

export default Dashboard;