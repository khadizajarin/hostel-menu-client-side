import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";



const Dashboard = () => {
    
    const isAdmin =useAdmin();
    console.log(isAdmin[0]);

    return (
        <div className="flex ">
            <div className="w-96 max-h-full bg-stone-500">
                <ul className="menu ">
                    <li><NavLink to='/'>Home</NavLink></li>
                    {   isAdmin[0] === true ? <>
                            <li>
                                <NavLink to="/dashboard/profile">
                                    Admin Profile</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addMeal">
                                    Add Meal</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/meals">
                                    All Meals</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/users">
                                    Manage Users</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/reviews">
                                    All Reviews</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/serve">
                                    Serve Meal</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/upcoming">
                                    Upcoming Meal</NavLink>
                            </li>
                            </>
                            : <>
                                <li>
                                    <NavLink to="/dashboard/profile">
                                        My profile</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/userReview">
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