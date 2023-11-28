
import Navbar from "./Navbar";
import Banner from "./Banner";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {motion} from "framer-motion";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Badge from "./Badge";
import { Fade } from "react-awesome-reveal";


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

            <Fade cascade>
                <motion.div initial={{ x : 200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 4 }}>
                    <h1 className="text-center font-bold text-4xl my-4">Available Menu</h1>
                </motion.div>
                
            </Fade>

            <motion.div className="text-white" style={{backgroundImage: 'url(https://media.istockphoto.com/id/1488844067/photo/old-planks-wall-and-table-with-light-empty-space-vintage-wooden-background-and-spotlight.webp?b=1&s=170667a&w=0&k=20&c=rpvX9p8zUyZPg9zkhbHxxV3BdiBlZ3UkUF0MUxGGEhw=)'}} initial={{ x : 200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>

                    {/* breakfast items */}
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
                
                                {/* lunch items */}
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
                                <Link to={`/meals/${meal._id}`} className="btn glass rounded-lg text-white" >Details</Link>
                            </TabPanel>
                            ))}
                            <TabPanel>
                            <h2>All Jobs</h2>
                            </TabPanel>
                    </Tabs>
                </div>
                                {/* dinner items */}
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
                                <Link to={`/meals/${meal._id}`} className="btn glass rounded-lg text-white" >Details</Link>
                            </TabPanel>
                            ))}
                            <TabPanel>
                            <h2>All Jobs</h2>
                            </TabPanel>
                    </Tabs>
                </div>
            </motion.div>

                                {/*  testmonial section */}
            <motion.div  initial={{ x : 200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 4 }}>
                <h1 className="text-center font-bold text-4xl my-4">Testimonials!</h1>
            </motion.div>

            <Fade cascade>
            <div className="my-10 " style={{backgroundImage: 'url(https://media.istockphoto.com/id/184933994/photo/empty-round-dinner-plate-isolated-on-white-background-clipping-path.webp?b=1&s=170667a&w=0&k=20&c=YmPOOJu4hoEeA7PciVPGgxAIn0qFR48gaZ140uxs7Tc=)' }}>
                    {meals.slice(0, 4).map((meal) => (
                        <div className="flex flex-row lg:flex-row  justify-around " key={meal._id}>
                            {meal.reviews.map((review, index) => (
                                <div className="my-2" key={index}>
                                    <p>Username: {review.username}</p>
                                    <p>Comment: {review.comment}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

            </Fade>

      

                                {/* package details */}
            <h1 className="text-center font-bold text-4xl my-4">Upgrade your membership by choosing a package!</h1>   
            <div>
                <Badge></Badge>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Home;