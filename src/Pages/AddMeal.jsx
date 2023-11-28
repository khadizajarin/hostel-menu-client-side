import { useForm } from "react-hook-form";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
// import { useContext } from "react";
import { AuthContext } from "../Hooks/AuthProvider";
import { useContext } from "react";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddMeal = () => {
    const {user} = useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data)
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            const mealItem = {
                category: data.category,
                meal_image: res.data.data.display_url,
                admin_name: data.name,
                meal_description : data.meal_description,
                ingredients: data.ingredients,
                price: parseFloat(data.price),
                likes: data.likes,
                reviews: data.reviews,
                meal_request_button: true,
                
            }
   
            const menuRes = await axiosSecure.post('/meals', mealItem);
            console.log(menuRes.data)
            if(menuRes.data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the menu.`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
        console.log( res.data);
    };
    return (
        <div>

            <h2 style ={{backgroundImage: `url(${"https://media.istockphoto.com/id/1204032062/photo/woman-choosing-food-in-open-buffet-at-breakfast-in-hotel.jpg?s=2048x2048&w=is&k=20&c=c7OEmAJCWxNWlhUfIwkJLQ2Dlhe5ASKzSNzmyZWvRPM="})`,
          }} className="text-4xl text-center p-4 font-extrabold" >Add a Meal to the Menu</h2>
            
            <form className="justify-center items-center h-screen m-10" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Meal name*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Meal Name"
                            {...register('meal_description', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <div className="flex gap-6">
                        {/* category */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue="default" {...register('category', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select a category</option>
                                <option value="breakfast">Breakfast</option>
                                <option value="lunch">Lunch</option>
                                <option value="dinner">Dinner</option>
                            </select>
                        </div>

                        {/* price */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Price"
                                {...register('price', { required: true })}
                                className="input input-bordered w-full" />
                        </div>

                    </div>

                    <div className="flex gap-6">
                        {/* Likes */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Likes</span>
                            </label>
                            <input
                                type="number"
                                defaultValue={0}
                                {...register('likes', { required: true })}
                                className="input input-bordered w-full" />
                        </div>

                        {/* reviews */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Reviews</span>
                            </label>
                            <input
                                type="number"
                                defaultValue={0}
                                {...register('reviews', { required: true })}
                                className="input input-bordered w-full" />
                        </div>

                    </div>

                    <div className="flex gap-6">
                        {/* admin name */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Distributor name:</span>
                            </label>
                            <input
                                type="text"
                                defaultValue={user.displayName}
                                {...register('admin_name', { required: true })}
                                className="input input-bordered w-full" />
                        </div>

                        {/* admin email */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Distributor email:</span>
                            </label>
                            <input
                                type="text"
                                defaultValue={user.email}
                                {...register('admin_email', { required: true })}
                                className="input input-bordered w-full" />
                        </div>

                    </div>

                    {/*ingredients*/}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Ingredients  </span>
                        </label>
                        <textarea {...register('ingredients')} className="textarea textarea-bordered h-24" placeholder="ingredients"></textarea>
                    </div>

                    <div className="form-control w-full my-6">
                        <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <button className="btn">Add Meal </button>
                    <button className="btn">Add to Upcoming</button>
                </form>
        </div>
    );
};

export default AddMeal;