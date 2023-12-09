import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "./useAdmin";
import useAuth from "./useAuth";



const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return (
            <div className="fixed inset-0 flex items-center justify-center">
              <span className="loading loading-ball loading-lg"></span>
              <span className="loading loading-ball loading-lg"></span>
              <span className="loading loading-ball loading-lg"></span>
              <span className="loading loading-ball loading-lg"></span>
            </div>
          );// testing github
          
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/" state={{ from: location }} replace></Navigate>

};

export default AdminRoute;