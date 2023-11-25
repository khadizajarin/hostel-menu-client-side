import { NavLink } from "react-router-dom";


const Navbar = () => {

    const navlink = 
        <>
       <li> <NavLink to='/' style={({ isActive }) => ({ 
                color: isActive ? 'white' : '' })}>Home</NavLink></li>
        <li> <NavLink to='/blogs'style={({ isActive }) => ({ 
                color: isActive ? 'white' : '' })}>Meals</NavLink></li>
        <li> <NavLink to='/allJobs' style={({ isActive }) => ({ 
                color: isActive ? 'white' : '' })}>About</NavLink></li>
        </>
    
    return (
        <div className="navbar bg-base-100 " style ={{
            backgroundImage: `url(${"https://media.istockphoto.com/id/1204032062/photo/woman-choosing-food-in-open-buffet-at-breakfast-in-hotel.jpg?s=2048x2048&w=is&k=20&c=c7OEmAJCWxNWlhUfIwkJLQ2Dlhe5ASKzSNzmyZWvRPM="})`,
          }}>
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {
                        navlink
                    }
                </ul>
                </div>
            </div>
            <div className="navbar-center btn glass">
                <a className="btn btn-ghost text-xl">HostelPro</a>
                <img className="rounded-full w-5 h-5" src="https://images.unsplash.com/photo-1485962093642-5f4386e84429?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGhvc3RlbCUyMGZvb2QlMjBsb2dvfGVufDB8fDB8fHww" alt="" />
            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost glass">Join us</button>
                {/* {
                    user && <>
                    <li> <NavLink to='/appliedJobs' style={({ isActive }) => ({ 
                        color: isActive ? 'white' : '' })}>Applied Jobs</NavLink></li>
                    <li> <NavLink to='/myJobs' style={({ isActive }) => ({ 
                            color: isActive ? 'white' : '' })}>My Jobs</NavLink></li>
                    <li> <NavLink to='/addJobs' style={({ isActive }) => ({ 
                        color: isActive ? 'white' : '' })}>Add a Job</NavLink></li></>
                } */}
                <button className="btn btn-ghost btn-circle">
                <div className="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                    <span className="badge badge-xs badge-primary indicator-item"></span>
                </div>
                </button>
            </div>
        </div>
    );
};

export default Navbar;