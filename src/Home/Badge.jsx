
import {motion} from "framer-motion";
const Badge = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-evenly mb-20 mt-10">
            <motion.div
                    whileHover={{ scale: 1.1 }} 
                    
                    style={{
                        width: 200,
                        height: 300,
                        backgroundColor: 'lightblue',
                        borderRadius: 8,
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                        transition: 'transform 0.3s ease-in-out', 
                    }}>
                        {/* card 1 */}
                    <div className="card w-80 bg-base-100 shadow-xl image-full">
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

            </motion.div>       




            <motion.div
                    whileHover={{ scale: 1.1 }} 
                    
                    style={{
                        width: 200,
                        height: 300,
                        backgroundColor: 'lightblue',
                        borderRadius: 8,
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                        transition: 'transform 0.3s ease-in-out',
                    }}>
                   {/* card 2 */}
                   <div className="card w-80 bg-base-100 shadow-xl image-full">
                        <figure><img src="https://media.istockphoto.com/id/1205550091/vector/golden-stamp-isolated-on-white-background-luxury-seal-vector-design-element.jpg?s=612x612&w=0&k=20&c=BFwN6hURqN3ln9GQUKf6BFxxKAs5ijEbFb52Kahr6so=" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Gold!</h2>
                            <p>Perfect for individuals seeking more benefits and better discounts at a reasonable price point.</p>
                            <p className="font-extrabold">Features:</p>
                                <ul>Enhanced access to facilities.</ul>
                                <ul>More extensive exclusive offers.</ul>
                                <ul>Priority customer support.</ul>
                            <div className="card-actions justify-end">
                            <button className="btn glass">Buy Now</button>
                            </div>
                        </div>
                    </div> 

            </motion.div> 
   
    


            <motion.div
                    whileHover={{ scale: 1.1 }} 
                    
                    style={{
                        width: 200,
                        height: 300,
                        backgroundColor: 'lightblue',
                        borderRadius: 8,
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                        transition: 'transform 0.3s ease-in-out',
                    }}>
                    {/* card 3 */}
                    <div className="card w-80 bg-base-100 shadow-xl image-full">
                        <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5h-4JW6bRu2wjOizrrzC_NfjdB7Iu2IgGDbIMjXno9th5wWcIjN1v009Vv50XXWo4_8M&usqp=CAU" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Platinum!</h2>
                            <p>Tailored for those desiring and unparalleled access to premium services and amenities.</p>
                            <p className="font-extrabold">Features:</p>
                                <ul>Full access to all services.</ul>
                                <ul>Exclusive, high-value discounts.</ul>
                                <ul>VIP customer support.</ul>
                            <div className="card-actions justify-end">
                            <button className="btn glass">Buy Now</button>
                            </div>
                        </div>
                    </div>


            </motion.div> 
                    
    
                   

                
            
        </div>
    );
};

export default Badge;