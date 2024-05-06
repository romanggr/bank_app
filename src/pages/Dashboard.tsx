import Balance from "../features/dashboard/Balance.tsx";
import Contacts from "../features/dashboard/Contacts.tsx";
import History from "../features/dashboard/History.tsx";
import CurrencyRate from "../features/dashboard/CurrencyRate.tsx";
import SideBar from "../ui/SideBar.tsx";



const Dashboard = () => {


    return (
        <>
            <SideBar/>
            <Balance balance={23450}/>
            <CurrencyRate/>
            <Contacts/>
            <History/>
        </>
    )
}

export default Dashboard