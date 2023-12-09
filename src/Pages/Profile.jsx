import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Hooks/AuthProvider";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import {motion} from "framer-motion";

const Profile = () => {
    const {user} =  useContext(AuthContext);
    console.log(user);

    // const [users, setUsers] = useState([]);
    
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
    

    useEffect(() => {
        axiosPublic.get('/users')
    .then((res) => {
        // const filteredUsers = res.data.filter((userData) => userData.email === user.email);
        // setUsers(filteredUsers);
        // console.log(filteredUsers)
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
    } ,[axiosPublic])

    // const [meals, setMeals] = useState([]);
    // useEffect(() => {
    //     axiosPublic.get('/meals')
    // .then((res) => {
    //     setMeals(res.data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
    // } ,[axiosPublic])

    return (
        <div className="">

        <motion.div className="" style={{backgroundImage: 'url(https://media.istockphoto.com/id/1488844067/photo/old-planks-wall-and-table-with-light-empty-space-vintage-wooden-background-and-spotlight.webp?b=1&s=170667a&w=0&k=20&c=rpvX9p8zUyZPg9zkhbHxxV3BdiBlZ3UkUF0MUxGGEhw=)'}} initial={{ x : 200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
            <h2 className="text-4xl text-center font-bold text-white">About You:</h2>
        
            <div className="flex justify-center items-center h-screen">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                    <img src={user.photoURL} alt="" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                    <h2 className="card-title">{user.displayName}</h2>
                    <p>{user.email}</p>
                    <div className="card-actions">
                        <button className="btn glass">LogOut</button>
                    </div>
                    </div>
                </div>
            </div>

        </motion.div>    
        </div>
    );
};

export default Profile;