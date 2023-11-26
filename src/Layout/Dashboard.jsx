import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-96 min-h-full bg-stone-700">
                <ul className="menu">
                    <li><NavLink to='/dashboard/userHome'>Home</NavLink></li>
                    <li><NavLink to='/dashboard/cart'>My Cart</NavLink></li>
                    <li><NavLink to='/dashboard/requested'>Requested Meals</NavLink></li>
                    <li><NavLink to='/dashboard/reviews'>My Reviews</NavLink></li>
                </ul>
            </div>
            <div className="flex">
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default Dashboard;