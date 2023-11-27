import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";



const Dashboard = () => {
    
    const isAdmin =useAdmin();
    console.log(isAdmin[0]);

    return (
        <div className="flex">
            <div className="w-96 min-h-full bg-stone-500">
                <ul className="menu">
                    <li><NavLink to='/'>Home</NavLink></li>
                    {   isAdmin[0] === true ? <>
                            <li>
                                <NavLink to="/dashboard/adminHome">
                                    Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addItems">
                                    Add Items</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageItems">
                                    Manage Items</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/users">
                                    All Users</NavLink>
                            </li>
                            </>
                            : <>
                                <li>
                                    <NavLink to="/dashboard/userHome">
                                        User Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/cart">
                                        My Cart </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/review">
                                        My reviews</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/requested">
                                        My Request</NavLink>
                                </li>
                            </>
                    }
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default Dashboard;