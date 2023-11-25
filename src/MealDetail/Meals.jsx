import { useEffect, useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";

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
    return (
        <div>
            {meals.length}
        </div>
    );
};

export default Meals;