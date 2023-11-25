
import Navbar from "./Navbar";
import Banner from "./Banner";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {motion} from "framer-motion";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";


const Home = () => {
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
            <Navbar></Navbar>
            <Banner></Banner>

            <motion.div className="text-white" style={{backgroundImage: 'url(https://media.istockphoto.com/id/1488844067/photo/old-planks-wall-and-table-with-light-empty-space-vintage-wooden-background-and-spotlight.webp?b=1&s=170667a&w=0&k=20&c=rpvX9p8zUyZPg9zkhbHxxV3BdiBlZ3UkUF0MUxGGEhw=)'}} initial={{ x : 200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 3 }}>
                <h1 className="font-bold text-3xl  mx-10">Breakfast </h1>
                <div className="mx-10">
                    <Tabs>
                        <TabList>
                            {meals
                            .filter((meal) => meal.category === "breakfast")
                            .slice(0, 4)
                            .map((meal) => (
                                <Tab key={meal._id}><span className="font-bold">{meal.meal_description}</span></Tab>
                            ))}
                            <Tab></Tab>
                        </TabList>

                        {meals
                            .filter((meal) => meal.category === "breakfast")
                            .slice(0, 4)
                            .map((meal) => (
                            <TabPanel key={meal._id}>
                                <h2>Item name: {meal.meal_description}</h2>
                                <p> Rating: {meal.rating}</p>
                                <p> Posted On : {meal.post_time}</p>
                                <p> Distributed By : {meal.admin_name}</p>
                                <Link to={`/meals/${meal._id}`} className="btn glass rounded-lg text-white" >Details</Link>
                            </TabPanel>
                            ))}
                            <TabPanel>
                            <h2>All Jobs</h2>
                            </TabPanel>
                    </Tabs>
                </div>
                
                <h1 className="font-bold text-3xl my-4 mx-10">Lunch </h1>
                <div className="mx-10">
                    <Tabs>
                        <TabList>
                            {meals
                            .filter((meal) => meal.category === "lunch")
                            .slice(0, 4)
                            .map((meal) => (
                                <Tab key={meal._id}><span className="font-bold">{meal.meal_description}</span></Tab>
                            ))}
                            <Tab></Tab>
                        </TabList>

                        {meals
                            .filter((meal) => meal.category === "lunch")
                            .slice(0, 4)
                            .map((meal) => (
                            <TabPanel key={meal._id}>
                                <h2>Item name: {meal.meal_description}</h2>
                                <p> Rating: {meal.rating}</p>
                                <p> Posted On : {meal.post_time}</p>
                                <p> Distributed By : {meal.admin_name}</p>
                                <button className="btn glass rounded-lg text-white"><Link to={`/meals/${meal._id}`}> Details</Link></button>
                            </TabPanel>
                            ))}
                            <TabPanel>
                            <h2>All Jobs</h2>
                            </TabPanel>
                    </Tabs>
                </div>

                <h1 className="font-bold text-3xl my-4 mx-10">Dinner </h1>
                <div className="mx-10">
                    <Tabs>
                        <TabList>
                            {meals
                            .filter((meal) => meal.category === "dinner")
                            .slice(0, 4)
                            .map((meal) => (
                                <Tab key={meal._id}><span className="font-bold">{meal.meal_description}</span></Tab>
                            ))}
                            <Tab></Tab>
                        </TabList>

                        {meals
                            .filter((meal) => meal.category === "dinner")
                            .slice(0, 4)
                            .map((meal) => (
                            <TabPanel key={meal._id}>
                                <h2>Item name: {meal.meal_description}</h2>
                                <p> Rating: {meal.rating}</p>
                                <p> Posted On : {meal.post_time}</p>
                                <p> Distributed By : {meal.admin_name}</p>
                                <button className="btn glass rounded-lg text-white"><Link to={`/meals/${meal._id}`}> Details</Link></button>
                            </TabPanel>
                            ))}
                            <TabPanel>
                            <h2>All Jobs</h2>
                            </TabPanel>
                    </Tabs>
                </div>
            </motion.div>


            <motion.div  initial={{ x : 200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 4 }}>
                <h1 className="text-center font-bold text-4xl my-4">Testimonials!</h1>
                <div className="my-10" style={{backgroundImage: 'url(https://media.istockphoto.com/id/184933994/photo/empty-round-dinner-plate-isolated-on-white-background-clipping-path.webp?b=1&s=170667a&w=0&k=20&c=YmPOOJu4hoEeA7PciVPGgxAIn0qFR48gaZ140uxs7Tc=)' }}>
                    {meals.slice(0, 4).map((meal) => (
                        <div className="flex flex-col lg:flex-row  justify-around " key={meal._id}>
                            {meal.reviews.map((review, index) => (
                                <div className="my-2" key={index}>
                                    <p>Username: {review.username}</p>
                                    <p>Comment: {review.comment}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </motion.div>


            <h1 className="text-center font-bold text-4xl my-4">Upgrade your membership by choosing a package!</h1>
            <div className="flex flex-col lg:flex-row justify-center gap-6 m-10">
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5h-4JW6bRu2wjOizrrzC_NfjdB7Iu2IgGDbIMjXno9th5wWcIjN1v009Vv50XXWo4_8M&usqp=CAU" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Silver!</h2>
                        <p>Ideal for those looking for a budget-friendly membership with basic benefits and services.</p>
                        <p className="font-extrabold">Features:</p>
                            <ul>Access to basic amenities.</ul>
                            <ul>Limited special discounts.</ul>
                            <ul>Standard customer support.</ul>
                        <div className="card-actions justify-end">
                        <button className="btn glass">Buy Now</button>
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://media.istockphoto.com/id/1205550091/vector/golden-stamp-isolated-on-white-background-luxury-seal-vector-design-element.jpg?s=612x612&w=0&k=20&c=BFwN6hURqN3ln9GQUKf6BFxxKAs5ijEbFb52Kahr6so=" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Gold!</h2>
                        <p>Perfect for individuals seeking more benefits, enhanced access, and better discounts at a reasonable price point.</p>
                        <p className="font-extrabold">Features:</p>
                            <ul>Enhanced access to facilities and services.</ul>
                            <ul>More extensive discounts and exclusive offers.</ul>
                            <ul>Priority customer support.</ul>
                        <div className="card-actions justify-end">
                        <button className="btn glass">Buy Now</button>
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5h-4JW6bRu2wjOizrrzC_NfjdB7Iu2IgGDbIMjXno9th5wWcIjN1v009Vv50XXWo4_8M&usqp=CAU" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Platinum!</h2>
                        <p>Tailored for those desiring the utmost exclusivity, comprehensive benefits, and unparalleled access to premium services and amenities.</p>
                        <p className="font-extrabold">Features:</p>
                            <ul>Full access to all facilities and services.</ul>
                            <ul>Exclusive, high-value discounts and offers.</ul>
                            <ul>VIP customer support with personalized assistance.</ul>
                        <div className="card-actions justify-end">
                        <button className="btn glass">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Home;