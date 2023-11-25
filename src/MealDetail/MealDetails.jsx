import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import Navbar from '../Home/Navbar';
import Footer from '../Home/Footer';


const MealDetails = () => {
    const axiosPublic = useAxiosPublic();
    const { id } = useParams();
    const [meal, setMeal] = useState(null);

    useEffect(() => {
        axiosPublic.get(`/meals/${id}`)
            .then((res) => {
                setMeal(res.data); 
            })
            .catch((error) => {
                console.error(error);
            });
    }, [axiosPublic, id]);

    return (
        <div>
            <Navbar></Navbar>
            <h2 className='text-5xl font-bold text-center my-6' >Go to Meal Request Button to request meal.</h2>
            <div className="card lg:card-side bg-base-100 shadow-xl lg:mx-40">
                    <figure>
                        <img src={meal.meal_image} alt="Album" /> 
                    </figure>
                <div className="card-body">
                    <h2 className="card-title">{meal.meal_description}</h2>
                    <h2 > <span className='font-extrabold'>Item name: </span> {meal.meal_description}</h2>
                    <p > <span className='font-extrabold'>Rating: </span>  {meal.rating}</p>
                    <p > <span className='font-extrabold'>Posted On : </span>  {meal.post_time}</p>
                    <p > <span className='font-extrabold'>Distributed By :</span>  {meal.admin_name}</p>
                    <p > <span className='font-extrabold'> Ingredients : </span> {meal.ingredients.join(', ')}</p>
                    <div> <span className='font-extrabold'>Reviews : </span>
                    {meal.reviews.map((review, index) => (
                                <div className="my-2" key={index}>
                                    <p> {review.username} says : {review.comment}</p>
                                </div>
                            ))}
                    </div>
                    <div> 
                        <button className='btn glass rounded-lg'>Like</button>
                        <button className='btn glass rounded-lg'>Meal Request</button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default MealDetails;
