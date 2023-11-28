import { Link } from "react-router-dom";

const ErrorRoute = () => {
    return (
        <div className="flex flex-col justify-center">
        <Link to="/" className="text-center">Back to Home</Link>
        {/* <img className="w-auto" src="https://www.shutterstock.com/image-vector/funny-404-error-page-design-260nw-2059644614.jpg" alt="" /> */}
        <img className="max-w-7xl mx-auto" src="https://cdn.pixabay.com/animation/2023/03/27/01/48/01-48-55-810_512.gif" alt="" />
        
    </div>
    );
};

export default ErrorRoute;