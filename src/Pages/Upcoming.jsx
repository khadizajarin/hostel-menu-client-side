import { useEffect, useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';


const Upcoming = () => {
    const axiosPublic = useAxiosPublic();
    const [upcomings, setUpcomings] = useState([]);

    useEffect(() => {
            axiosPublic.get('/upcomings')
            .then((res) => {
                setUpcomings(res.data);
                console.log(res.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [axiosPublic]);
    return (
        <div>
            <div>
            <h2 className="text-5xl text-center font-bold p-5">Upcoming Meals to be served:</h2>
            <div className="m-10  " >
                 {upcomings.map((meal) => (
                    <div className="flex flex-col lg:flex-row  m-9" key={meal._id}>
                        <div className="card lg:card-side bg-base-100 lg:mx-40">
                            <figure>
                                <img className='w-96 h-96' src={meal.meal_image} alt={meal.meal_description} />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{meal.meal_description}</h2>
                                <h2><span className='font-extrabold'>Item name : </span>{meal.meal_description} </h2> 
                                <p><span className='font-extrabold'>Ingredients : </span>{meal.ingredients.join(',')}</p>
                                <p><span className='font-extrabold'>Distributed by : </span>{meal.admin_name}</p>  
                                <p><span className='font-extrabold'>Category : </span>{meal.category}</p>
                                <p>Reviews : {meal.reviews.length}</p>
                                <p>Likes: {meal.likes}</p>
                                <p>Rating: {meal.rating}</p>
                                <p>Price : {meal.price}</p>
                                <AwesomeButton type="primary">Publish in menu</AwesomeButton>
                            </div>
                        </div>
                  </div>
                ))}
            </div>    
            </div>
        </div>
    );
};

export default Upcoming;