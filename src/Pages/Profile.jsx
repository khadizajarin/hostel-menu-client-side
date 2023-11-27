import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Hooks/AuthProvider";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const Profile = () => {
    const {user} =  useContext(AuthContext);
    console.log(user);

    const [users, setUsers] = useState([]);
    
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
    

    useEffect(() => {
        axiosSecure.get('/users')
    .then((res) => {
        const filteredUsers = res.data.filter((userData) => userData.email === user.email);
        setUsers(filteredUsers);
        console.log(filteredUsers)
      })
      .catch((error) => {
        console.error(error);
      });
    } ,[axiosSecure, user.email])

    const [meals, setMeals] = useState([]);
    
    


    useEffect(() => {
        axiosPublic.get('/meals')
    .then((res) => {
        setMeals(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
    } ,[axiosPublic])

    return (
        <div className="items-center">
            <h2 className="text-4xl text-center font-bold">About You:</h2>
            <div className="card w-96 bg-base-100 shadow-xl items-center">
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
    );
};

export default Profile;