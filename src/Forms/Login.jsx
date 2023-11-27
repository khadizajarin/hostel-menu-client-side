// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../AuthProvider/AuthProvider";
// import Swal from 'sweetalert2'

import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Hooks/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../Hooks/useAxiosPublic";


const Login = () => {
    const { signIn, createUserGoogle, locationState, setLocationState,updateUserProfile } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    const goToRegister = () => {
        setLocationState(location.state);
        navigate('/register');
        console.log(location.state);
    }



    const handleLogInWithGoogle = e => {
        e.preventDefault();
    
        createUserGoogle ()
        .then(result => {
            navigate(location?.state? location.state : '/');
            console.log("Logging in with Google is successful!", result.user);
            updateUserProfile(result.user.displayVame, result.user.photoURL)
            .then(() => {
                const userInfo = {
                    name: result.user.displayName,
                    email: result.user.email,
                    badge: "Bronze",
                    role: "user"
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            console.log('user added to the database')
                            Swal.fire({
                                icon: 'success',
                                title: 'Registered successfully.',
                                showConfirmButton: false,
                                timer: 1500
                            });
                            navigate('/');
                        }
                    })
            })
        })
        .catch (error => {
            console.error(error);
        })
    }

    const handleLogIn = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)  ;

        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        signIn(email, password)
        .then(result => {
            console.log(result.user)
            navigate(locationState? locationState : '/')
        })
        .catch(error => {
            console.error("Firebase Error: ", error.code);
            console.error("Firebase Error Message: ", error.message);
            Swal.fire({
                title: 'Error!',
                text: 'Invalid email or password!',
                icon: 'error',
                confirmButtonText: 'ok!'
              })
        })
    }


    return (
        <div>
           <Navbar></Navbar>
                <div className="hero py-56 " style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("https://media.istockphoto.com/id/1742493361/photo/white-tea-coffee-cup-on-the-table-by-a-sofa-couch-in-hotel-room-minimalism.jpg?s=2048x2048&w=is&k=20&c=ZWKEBfHO68n_i3x8ln_2PeAPxABciOV7he0V1FjyZbE=")'}}>
                <div className="hero-content  flex-col lg:flex-row">
                    <div className="text-white text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now! </h1>
                        <p className="py-6">Welcome Back! Please Log In to Your Account</p>
                    </div>
                    <div className="card  w-full lg:p-16 bg-base-100 rounded-lg">
                        <form onSubmit={handleLogIn}  className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered rounded-lg" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" className="input input-bordered rounded-lg" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-glass rounded-lg">Login</button>
                            </div>
                        </form>
                        <p className="text-center">Or,</p>
                        <button onClick={handleLogInWithGoogle} className="btn btn-glass mt-2 rounded-lg">Login with Google!</button>
                        <p className="mt-4 text-center">New here? Please proceed to <span className="font-bold"><Link to="/register" onClick={goToRegister}>Register</Link></span></p>
                    </div>
                </div>    
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;