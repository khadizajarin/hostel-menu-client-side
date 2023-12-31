import { useEffect, useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';


const AdminMeal = () => {

    const [meals, setMeals] = useState([]);
    
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axiosPublic.get('/meals')
    .then((res) => {
        setMeals(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
    } ,[axiosPublic])

    // const handleDelete= (id)=> {
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, delete it!"
    //     }).then((result) => {
    //         if (result.isConfirmed) {

    //             axiosSecure.delete(`/meals/${meal._id}`)
    //                 .then(res => {
    //                     if (res.data.deletedCount > 0) {
    //                         Swal.fire({
    //                             title: "Deleted!",
    //                             text: "Your file has been deleted.",
    //                             icon: "success"
    //                         });
    //                     }
    //                 })
    //         }
    //     });

    // }

    // const handleUpdate= {

    // }

    return (
        <div>
             <div className="lg:m-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        {
                             meals.map((meal) => (
                                <>
                                <div key={meal._id} className="diff aspect-[16/9] max-w-4xl h-96">
                                    <div className="diff-item-1 flex-row text-right">
                                        <img alt="daisy" src={meal.meal_image} /> 
                                        <div className="mr-10 p-10 glass">
                                            <h2 className="font-extrabold text-3xl">{meal.meal_description}</h2>
                                            <h2><span className='font-extrabold'>Item name: </span>{meal.meal_description}</h2>
                                            <p><span className='font-extrabold'>Rating : </span>{meal.rating}</p>
                                            <p><span className='font-extrabold'>Posted On : </span>{meal.post_time}</p>
                                            <p><span className='font-extrabold'>Distributed By : </span>{meal.admin_name}</p>
                                            <p><span className='font-extrabold'>Ingredients : </span>{meal.ingredients}</p>
                                            <p><span className='font-extrabold'>Price : $ </span>{meal.price}</p>
                                            <p><span className='font-extrabold'>Likes Count : </span>{meal.likes}</p>            
                                        </div>        
                                    </div>
                                    <div className="diff-item-2">
                                        <img alt="daisy" src={meal.meal_image} />
                                    </div>
                                    <div className="diff-resizer"></div>
                                </div>
                                <div className="grid grid-rows-3 justify-center items-center">
                                    <Link to={`/meals/${meal._id}`}><AwesomeButton type="primary">Meal Details About {meal.meal_description}</AwesomeButton></Link>
                                    <Link to={`/meals/${meal._id}`}><AwesomeButton type="primary">Update info About {meal.meal_description}</AwesomeButton></Link>
                                    <Link to={`/meals/${meal._id}`}><AwesomeButton type="primary">Delete {meal.meal_description} From Menu</AwesomeButton></Link>
                                </div>
                                </>
                            ))
                        }
                    </div>
               </div>
        </div>
    );
};

export default AdminMeal;