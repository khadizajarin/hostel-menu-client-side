import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Hooks/AuthProvider";
import { useContext } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const Register = () => {

    const axiosPublic = useAxiosPublic();
    const { createUser,locationState, updateUserProfile } = useContext(AuthContext); 
    // console.log("location in register page ", locationState );
    const navigate = useNavigate();


    const handleRegister = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const photoURL = form.get('photoURL');
        const password = form.get('password');

    
        // const passwordRegex =  /^(?=.*[A-Z])(?=.*[\W_]).{6,}$/;

        // if (!passwordRegex.test(password)) {
        //     return (Swal.warning("Password must be at least 6 characters long, contain a capital letter and a special character."));
        // }

        createUser(email, password, name, photoURL)
        .then(result => {
            console.log(result)
            navigate(locationState? locationState : '/')
            console.log('registered withh email')
            updateUserProfile(name, photoURL)
            .then(() => {
                const userInfo = {
                    name: name,
                    email: email,
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
        .catch(error => {
            console.error(error);
            if (error.code === "auth/email-already-in-use") {
                console.log('Registered with Google!');
              } 
        
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero py-56" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://media.istockphoto.com/id/1783646681/photo/white-tea-coffee-cup-on-the-table-by-a-sofa-couch-in-hotel-room-minimalism.jpg?s=2048x2048&w=is&k=20&c=yLna8MJBDddWSvNBOzWveIQ6hrzNc07h3F6rvRmCAZU=")'}}>
                <div className="hero-content  flex-col lg:flex-row rounded-lg">
                    <div className="text-white text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register to Experience More!</h1>
                        <p className="py-6">Create Your Account and Join Our Community</p>
                    </div>
                    <div className="card flex-shrink-0 w-5/6 lg:px-32 bg-base-100 rounded-lg">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered rounded-lg" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered rounded-lg" required />
                            </div>

                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" name="photoURL" placeholder="Photo" className="input input-bordered rounded-lg" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" className="input input-bordered rounded-lg" required />
                            </div>

                            <div className="form-control mt-6">
                            <button className="btn btn-glass rounded-lg">Register</button>
                            <p className="mt-4 text-center">Registered already? Then go to <span className="font-bold"><Link to="/login">Login</Link></span></p>
                            </div>
                        </form>
                    </div>
                </div>    
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;