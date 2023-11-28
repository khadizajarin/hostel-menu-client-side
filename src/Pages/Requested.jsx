import { useContext, useEffect, useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { AuthContext } from "../Hooks/AuthProvider";
import {motion} from "framer-motion";

const Requested = () => {
  const axiosPublic = useAxiosPublic();

  const { user } = useContext(AuthContext);
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
          <motion.div className="text-white" style={{backgroundImage: 'url(https://media.istockphoto.com/id/1488844067/photo/old-planks-wall-and-table-with-light-empty-space-vintage-wooden-background-and-spotlight.webp?b=1&s=170667a&w=0&k=20&c=rpvX9p8zUyZPg9zkhbHxxV3BdiBlZ3UkUF0MUxGGEhw=)'}} initial={{ x : 200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 2 }}>
                <h2 className="text-4xl text-center font-bold">Your Requested Meals</h2>
                <h1 className="text-3xl text-center font-semibold"> Here you can see your requests! </h1>
          </motion.div>
          <div className="justify-center items-center h-screen">
            {requests.map((item) => {
              if (item.email === user.email) {
                return (
                  <div className="flex flex-col lg:flex-row  m-9" key={item._id}>
                    <div className="card lg:card-side bg-base-100 lg:mx-40">
                        <figure>
                            <img className='w-96 h-96' src={item.fetchedMeal.meal_image} alt={item.meal_description} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{item.fetchedMeal.meal_description}</h2>
                            <h2><span className='font-extrabold'>Item name: </span>{item.fetchedMeal.meal_description}</h2>
                            <h2><span className='font-extrabold'>Item category: </span>{item.fetchedMeal.category}</h2>
                            <p><span className='font-extrabold'>Rating: </span>{item.fetchedMeal.rating}</p>
                            <p><span className='font-extrabold'>Likes: </span>{item.fetchedMeal.likes}</p>
                            <p><span className='font-extrabold'>Posted On: </span>{item.fetchedMeal.post_time}</p>
                            <p><span className='font-extrabold'>Distributed By: </span>{item.fetchedMeal.admin_name}</p>
                            {/* <p><span className='font-extrabold'>Ingredients: </span>{item.ingredients.join(', ')}</p> */}
                            <p><span className='font-extrabold'>Ingredients: </span>{item.fetchedMeal.ingredients}</p>
                            <button className='btn glass rounded-lg'  disabled={!user}>Delete </button>
                        </div>
                    </div>
                  </div>
                );
              }            
            })}
          </div>
        </div>
    );
};

export default Requested;