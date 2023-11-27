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
            <div className="m-10 " >
                    {meals.slice(0, 11).map((meal) => (
                        <div className="flex flex-col  justify-around " key={meal._id}>
                            <div className="text-xl font-bold">About {meal.meal_description}</div>
                            {meal.reviews.map((review, index) => (
                                <div className="my-2" key={index}>
                                    <p>Username: {review.username}</p>
                                    <p>Comment: {review.comment}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            
        </div>
    );
};

export default AllReviews;