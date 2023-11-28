import { useEffect, useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";


const AllReviews = () => {

    const [meals, setMeals] = useState([]);
    
    const axiosPublic = useAxiosPublic();
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
        <div>
            <h2 className="text-5xl text-center font-bold">Reviews from Customers</h2>
            <div className="m-10  " >
                 {meals.map((meal) => (
                    <div className="flex flex-col lg:flex-row  m-9" key={meal._id}>
                        <div className="card lg:card-side bg-base-100 lg:mx-40">
                            <figure>
                                <img className='w-96 h-96' src={meal.meal_image} alt={meal.meal_description} />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{}</h2>
                                <h2><span className='font-extrabold'>Item name : </span>{meal.meal_description} </h2>   
                                {meal && Array.isArray(meal.reviews) && meal.reviews.map((review, index) => (
                                    <div className="my-2" key={index}>
                                        <p>Username: {review.username}</p>
                                        <p>Comment: {review.comment}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                  </div>
                ))}
            </div>    
        </div>
    );
};

export default AllReviews;