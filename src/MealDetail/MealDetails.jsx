import { useContext, useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import Navbar from '../Home/Navbar';
import Footer from '../Home/Footer';
import { AuthContext } from '../Hooks/AuthProvider';
import Swal from 'sweetalert2';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';


const MealDetails = () => {
    const axiosPublic = useAxiosPublic();
    const { id } = useParams();
    const [fetchedMeal, setFetchedMeal] = useState(null);
    const {user} = useContext(AuthContext);

    const [inputText, setInputText] = useState('');

    const handleInputChange = (event) => {
        setInputText(event.target.value);
      };

 
        const handleReview = () => {
            const reviewData = {
                username: user.displayName, 
                comment: inputText 
            };
  
            axiosPublic.post(`/meals/${id}/reviews`, reviewData) 
            .then((response) => {
              console.log(response.data);
              if (response.data) {
                Swal.fire({
                    icon: 'success',
                    title: 'your review was posted successfully. to see your reviews, go to My reviews.',
                    showConfirmButton: false,
                    timer: 1500
                })
        }})
            .catch((error) => {
              console.error('Error sending data:', error);
            });
        };

        const handleRequest = (object,user) => {
            const name = user.displayName;
            const email = user.email;
            const requestedMeal  = { name, email, fetchedMeal};
            console.log(requestedMeal);
            axiosPublic.post('/requests', requestedMeal)
              .then((response) => {
                console.log(response.data);
                if (response.data.insertedId) {
                  Swal.fire({
                    icon: "success",
                    title: 'Request have been sent',
                    text: 'See all requested meal in the My Request.',
                    timer: 2000
                  });
                }
              })
              .catch((error) => {
                console.error(error);
              });
        }

    useEffect(() => {
        axiosPublic.get(`/meals/${id}`)
            .then((res) => {

                setFetchedMeal(res.data); 
            })
            .catch((error) => {
                console.error(error);
            });
    }, [axiosPublic, id]);


    if (!fetchedMeal) {
        return (
            <div className="fixed inset-0 flex items-center justify-center">
              <span className="loading loading-ball loading-lg"></span>
              <span className="loading loading-ball loading-lg"></span>
              <span className="loading loading-ball loading-lg"></span>
              <span className="loading loading-ball loading-lg"></span>
            </div>
          );
    }

    const {
        meal_image,
        meal_description,
        rating,
        likes,
        post_time,
        admin_name,
        ingredients,
        reviews
    } = fetchedMeal;


    const handleLikes = () => {

        if (!user) {
          Swal.fire({
            title: 'Please login',
            text: 'You need to login to perform this action.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Login'
          })
        } else {
            console.log({likes});            
        }
    }
    return (
        <div>
            <Navbar />
            <h2 className='text-5xl font-bold text-center my-6'>Go to Meal Request Button to request meal.</h2>
            <div className="card lg:card-side bg-base-100 shadow-xl lg:mx-40">
                <figure>
                    <img className='w-96 h-96' src={meal_image} alt={meal_description} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{meal_description}</h2>
                    <h2><span className='font-extrabold'>Item name: </span>{meal_description}</h2>
                    <p><span className='font-extrabold'>Rating: </span>{rating}</p>
                    <p><span className='font-extrabold'>Posted On: </span>{post_time}</p>
                    <p><span className='font-extrabold'>Distributed By: </span>{admin_name}</p>
                    <p><span className='font-extrabold'>Ingredients: </span>{ingredients.join(', ')}</p>
                    <div>
                        <span className='font-extrabold'>Reviews: </span>
                        {reviews.map((review, index) => (
                            <div className="my-2" key={index}>
                                <p>{review.username} says: {review.comment}</p>
                            </div>
                        ))}
                    </div>
                    <div>
                        <button className='btn glass rounded-lg' onClick={handleLikes} disabled={!user}>{likes} Likes</button>
                        <button className='btn glass rounded-lg' onClick={() => handleRequest(fetchedMeal,user)} disabled={!user}>Meal Request</button>
                    </div>
                    <p className='font-extrabold text-xl'>We would love to have your opinion about this item!</p>
                    <input type="text" placeholder="Type here" className="input input-bordered input-lg w-full max-w-xs" value={inputText} onChange={handleInputChange}/>
                    <button className=" w-full max-w-xs" onClick={handleReview}>Post your review!</button>
                    <AwesomeButton type="primary">Request Meal</AwesomeButton>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MealDetails;
