import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Hooks/AuthProvider";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import {motion} from "framer-motion";


const UserReviews = () => {
    const { user } = useContext(AuthContext);
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
    }, [axiosPublic]);

    return (
        <div>
            <motion.div className="text-white" style={{backgroundImage: 'url(https://media.istockphoto.com/id/1488844067/photo/old-planks-wall-and-table-with-light-empty-space-vintage-wooden-background-and-spotlight.webp?b=1&s=170667a&w=0&k=20&c=rpvX9p8zUyZPg9zkhbHxxV3BdiBlZ3UkUF0MUxGGEhw=)'}} initial={{ x : 200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 2 }}>
                <h2 className="text-4xl text-center font-bold">Your Reviews</h2>
                <h1 className="text-3xl text-center font-semibold"> Here you can see your reviews. Thanks for your opinion!</h1>
            </motion.div>
            <div>         
            </div>
                {meals.map((meal) => (
                    <div className="flex flex-col lg:flex-row justify-around m-9 " key={meal._id}>
                    {Array.isArray(meal.reviews) && meal.reviews.map((review, index) => {
                            if (review.username === user.displayName) {
                                return (
                                    <div className="my-2 flex justify-between" key={index}>
                                        <img className="w-80 h-80" src={meal.meal_image} alt="" />
                                        <div className="ml-2">
                                            <p> Meal Name: {meal.meal_description}</p>
                                            <p>Username: {review.username}</p>
                                            <p>Comment: {review.comment}</p>
                                        </div>
                                    </div>
                                );
                            } else {
                                return null;
                            }
                        })}
                    </div>
                ))}
        </div>
    );
};

export default UserReviews;
