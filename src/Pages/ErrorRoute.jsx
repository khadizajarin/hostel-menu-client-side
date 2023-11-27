import { Link } from "react-router-dom";

const ErrorRoute = () => {
    return (
        <div className="flex flex-col justify-center">
        <Link to="/" className="text-center">Back to Home</Link>
        <img className="w-auto" src="https://www.shutterstock.com/image-vector/funny-404-error-page-design-260nw-2059644614.jpg" alt="" />
        
    </div>
    );
};

export default ErrorRoute;