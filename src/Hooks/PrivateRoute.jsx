import { Navigate, useLocation } from "react-router";
import useAuth from "./useAuth";



const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if(loading){
        return (
            <div className="fixed inset-0 flex items-center justify-center">
              <span className="loading loading-ball loading-lg"></span>
              <span className="loading loading-ball loading-lg"></span>
              <span className="loading loading-ball loading-lg"></span>
              <span className="loading loading-ball loading-lg"></span>
            </div>
          );
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;