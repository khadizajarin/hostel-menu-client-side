import { useEffect, useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";

const Meals = () => {

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


    const [searchText, setSearchText] = useState('');
    const [matchedItems, setMatchedItems] = useState([]);
    const handleSearch = () => {
        const filteredItems = meals.filter(meal => {
            return meal.category.toLowerCase().includes(searchText.toLowerCase());
        });

        setMatchedItems(filteredItems);
    };
    return (

        <div>
        <Navbar></Navbar>
        <InfiniteScroll
            dataLength={meals.length} 
            hasMore={true}
            endMessage={
                <p style={{ textAlign: 'center' }}>
                <b>End of Meau</b>
                </p>
            }>

        <div>
            

            <div className="flex justify-center my-6 ">
                <div className="flex lg:mx-40">
                    <input 
                    type="text" 
                    placeholder="Search by Category" 
                    className="p-4 h-12 w-full rounded-l-lg border text-black" 
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)} />
                    <button onClick={handleSearch} className="bg-gray-400 px-4 h-12 rounded-r-lg">Search</button>
                </div>

                <div className="flex lg:mx-40">
                    <input type="text" placeholder="Search by price" className="p-4 h-12 w-full rounded-l-lg border text-black" />
                    <button className="bg-gray-400 px-4 h-12 rounded-r-lg">Search</button>
                </div>
            </div>

            {matchedItems.length > 0 ? (
                //items showing by search
               <div className="lg:m-16">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
                        {
                             matchedItems.map((item, index) => (
                                <div key={index} className="diff aspect-[16/9] max-w-2xl h-96">
                                                <div className="diff-item-1 flex-row text-right">
                                                    <img alt="daisy" src={item.meal_image} /> 
                                                    <div className="mr-10 p-10 glass">
                                                        <h2 className="font-extrabold text-3xl">{item.meal_description}</h2>
                                                        <h2><span className='font-extrabold'>Item name: </span>{item.meal_description}</h2>
                                                        <p><span className='font-extrabold'>Rating : </span>{item.rating}</p>
                                                        <p><span className='font-extrabold'>Posted On : </span>{item.post_time}</p>
                                                        <p><span className='font-extrabold'>Distributed By : </span>{item.admin_name}</p>
                                                        <p><span className='font-extrabold'>Ingredients : </span>{item.ingredients.join(', ')}</p>
                                                        <p><span className='font-extrabold'>Price : $ </span>{item.price}</p>
                                                        <p><span className='font-extrabold'>Likes Count : </span>{item.likes}</p>
                                                        <Link to={`/meals/${item._id}`} className="btn glass rounded-lg" >Details</Link>
                                                    </div>        
                                                </div>
                                                <div className="diff-item-2">
            
                                                    <img alt="daisy" src={item.meal_image} />
                                                </div>
                                                    <div className="diff-resizer"></div>
                                            </div>
                            ))
                        }
                    </div>
               </div>
            ) : ( //item showing by default
                       <div className="lg:m-16">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">{meals.map((meal) => (
                                <div key={meal._id} className="diff aspect-[16/9] max-w-2xl h-96">
                                    <div className="diff-item-1 flex-row text-right">
                                        <img alt="daisy" src={meal.meal_image} /> 
                                        <div className="mr-10 p-10 glass">
                                            <h2 className="font-extrabold text-3xl">{meal.meal_description}</h2>
                                            <h2><span className='font-extrabold'>Item name: </span>{meal.meal_description}</h2>
                                            <p><span className='font-extrabold'>Rating : </span>{meal.rating}</p>
                                            <p><span className='font-extrabold'>Posted On : </span>{meal.post_time}</p>
                                            <p><span className='font-extrabold'>Distributed By : </span>{meal.admin_name}</p>
                                            {/* <p><span className='font-extrabold'>Ingredients : </span>{meal.ingredients.join(', ')}</p> */}
                                            <p><span className='font-extrabold'>Ingredients : </span>{meal.ingredients}</p>
                                            <p><span className='font-extrabold'>Price : $</span>{meal.price}</p>
                                            <p><span className='font-extrabold'>Likes Count : </span>{meal.likes}</p>
                                            <Link to={`/meals/${meal._id}`}  className="btn glass rounded-lg" >Details</Link>
                                        </div>        
                                    </div>
                                    <div className="diff-item-2">

                                        <img alt="daisy" src={meal.meal_image} />
                                    </div>
                                        <div className="diff-resizer"></div>
                                </div>
                                ))}
                            </div>
                        </div>               
                        )}   
                    </div>
                    </InfiniteScroll>
                    <Footer></Footer>
            </div>

        // <div>
        //     <Navbar></Navbar>

        //     <div className="flex justify-center my-6 ">
        //         <div className="flex lg:mx-40">
        //             <input 
        //             type="text" 
        //             placeholder="Search by Category" 
        //             className="p-4 h-12 w-full rounded-l-lg border text-black" 
        //             value={searchText}
        //             onChange={(e) => setSearchText(e.target.value)} />
        //             <button onClick={handleSearch} className="bg-gray-400 px-4 h-12 rounded-r-lg">Search</button>
        //         </div>

        //         <div className="flex lg:mx-40">
        //             <input type="text" placeholder="Search by price" className="p-4 h-12 w-full rounded-l-lg border text-black" />
        //             <button className="bg-gray-400 px-4 h-12 rounded-r-lg">Search</button>
        //         </div>
        //     </div>

        //     {matchedItems.length > 0 ? (
        //         //items showing by search
        //        <div className="lg:m-16">
        //             <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
        //                 {
        //                      matchedItems.map((item, index) => (
        //                         <div key={index} className="diff aspect-[16/9] max-w-2xl h-96">
        //                                         <div className="diff-item-1 flex-row text-right">
        //                                             <img alt="daisy" src={item.meal_image_image} /> 
        //                                             <div className="mr-10 p-10 glass">
        //                                                 <h2 className="font-extrabold text-3xl">{item.meal_description}</h2>
        //                                                 <h2><span className='font-extrabold'>Item name: </span>{item.meal_description}</h2>
        //                                                 <p><span className='font-extrabold'>Rating : </span>{item.rating}</p>
        //                                                 <p><span className='font-extrabold'>Posted On : </span>{item.post_time}</p>
        //                                                 <p><span className='font-extrabold'>Distributed By : </span>{item.admin_name}</p>
        //                                                 <p><span className='font-extrabold'>Ingredients : </span>{item.ingredients.join(', ')}</p>
        //                                                 <p><span className='font-extrabold'>Price : $ </span>{item.price}</p>
        //                                                 <p><span className='font-extrabold'>Likes Count : </span>{item.likes}</p>
        //                                             </div>        
        //                                         </div>
        //                                         <div className="diff-item-2">
            
        //                                             <img alt="daisy" src={item.meal_image} />
        //                                         </div>
        //                                             <div className="diff-resizer"></div>
        //                                     </div>
        //                     ))
        //                 }
        //             </div>
        //        </div>
        //     ) : ( //item showing by default
        //                <div className="lg:m-16">
        //                     <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">{meals.map((meal) => (
        //                         <div key={meal._id} className="diff aspect-[16/9] max-w-2xl h-96">
        //                             <div className="diff-item-1 flex-row text-right">
        //                                 <img alt="daisy" src={meal.meal_image} /> 
        //                                 <div className="mr-10 p-10 glass">
        //                                     <h2 className="font-extrabold text-3xl">{meal.meal_description}</h2>
        //                                     <h2><span className='font-extrabold'>Item name: </span>{meal.meal_description}</h2>
        //                                     <p><span className='font-extrabold'>Rating : </span>{meal.rating}</p>
        //                                     <p><span className='font-extrabold'>Posted On : </span>{meal.post_time}</p>
        //                                     <p><span className='font-extrabold'>Distributed By : </span>{meal.admin_name}</p>
        //                                     <p><span className='font-extrabold'>Ingredients : </span>{meal.ingredients.join(', ')}</p>
        //                                     <p><span className='font-extrabold'>Price : $</span>{meal.price}</p>
        //                                     <p><span className='font-extrabold'>Likes Count : </span>{meal.likes}</p>
        //                                 </div>        
        //                             </div>
        //                             <div className="diff-item-2">

        //                                 <img alt="daisy" src={meal.meal_image} />
        //                             </div>
        //                                 <div className="diff-resizer"></div>
        //                         </div>
        //                         ))}
        //                     </div>
        //                 </div>               
        //     )}

        //     <Footer></Footer>
        // </div>
    );
};

export default Meals;