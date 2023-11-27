import { useEffect, useState } from "react";
// import useAxiosSecure from "../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";


const AllUsers = () => {

    const [users, setUsers] = useState([]);
    
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get('/users')
    .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
    } ,[axiosSecure])


    // const handleMakeAdmin = user =>{
    //     axiosPublic.patch(`/users/${user._id}`)
    //     .then(res =>{
    //         console.log(res.data)
    //         if(res.data.modifiedCount > 0){
    //             Swal.fire({
    //                 position: "top-end",
    //                 icon: "success",
    //                 title: `${user.name} is an Admin Now!`,
    //                 showConfirmButton: false,
    //                 timer: 1500
    //               });
    //         }
    //     })
    // }


    const handleDeleteUser = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosPublic.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }


    return (
        <div>
            <div className="max-w-7xl">
                <table className="table items-center">
                    <thead>
                    <tr>
                        <th>Index</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Badge</th>
                        <th></th>
                    </tr>
                    </thead>
                    {users.map((user,index) => (
                            <tbody key={user._id}>
                            <tr>
                                <th>{index+1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{ user.role === 'admin' ? 'Admin' : <button
                                        // onClick={() => handleMakeAdmin(user)}
                                        className="glass">User</button>}
                                </td>
                                <td>{user.badge}</td>
                                <td><button onClick={() => handleDeleteUser(user)} className="btn glass">Delete</button></td>
                            </tr> 
                            </tbody>         
                    ))}    
                </table>
            </div>
        </div>
    );
};

export default AllUsers;