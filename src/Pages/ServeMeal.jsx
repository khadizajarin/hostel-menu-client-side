import { useEffect, useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import {motion} from "framer-motion";


const ServeMeal = () => {

    const axiosPublic = useAxiosPublic();

  const [requests, setRequests] = useState([]);

    useEffect(() => {
        axiosPublic.get('/requests')
            .then((res) => {
                setRequests(res.data);
                console.log(res.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [axiosPublic]);
    return (
        <div>
          <motion.div className="text-white " style={{backgroundImage: 'url(https://media.istockphoto.com/id/1488844067/photo/old-planks-wall-and-table-with-light-empty-space-vintage-wooden-background-and-spotlight.webp?b=1&s=170667a&w=0&k=20&c=rpvX9p8zUyZPg9zkhbHxxV3BdiBlZ3UkUF0MUxGGEhw=)'}} initial={{ x : 200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 2 }}>
                <h2 className="text-4xl p-6 text-center font-bold">All Requested Meals</h2>
          </motion.div>

          <table className="table items-center m-6">
                    <thead>
                    <tr>
                        <th>Index</th>
                        <th>Meal Title</th>
                        <th>Email</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    {requests.map((item,index) => (
                            <tbody key={item._id}>
                            <tr>
                                <th>{index+1}</th>
                                <td>{item.fetchedMeal.meal_description}</td>
                                <td>{item.email}</td>
                                <td>{item.name}</td>
                                <td>Pending / Delivered</td>
                                <td><button className="btn glass">Serve</button></td>
                            </tr> 
                            </tbody>         
                    ))}    
                </table>
        </div>
    );
};

export default ServeMeal;