import { animated, useSpring } from '@react-spring/web'

const Banner = () => {
    const nameAnimation = useSpring({
        from: {
          opacity: 0,
          transform: 'translateY(100px)',
        },
        to: {
          opacity: 1, 
          transform: 'translateY(0)', 
        },
        config: { tension: 100, friction: 20 }, 
      });
   
    return (
        <div >
            <div className="hero h-96" style={{backgroundImage: 'url(https://media.istockphoto.com/id/953140058/photo/cooking-nd-seasoning-spices-border-on-black-slate-background.webp?b=1&s=170667a&w=0&k=20&c=8Vmnl8mHhMmc2WvnEEj0RDajvg75bizccWzrTXIh2z8=)'}}>
            <div className="hero-overlay "></div>
            <div className="hero-content text-center text-neutral-content">
               
            <animated.h1 style={nameAnimation} className="glass py-8">
                    <p className="mb-5 text-5xl font-bold">HostelPro</p> 
                    <p className="mb-5 lg:mx-40 font-bold">An intuitive hostel management platform tailored for university campuses, streamlining accommodation bookings, student check-ins, and administrative tasks efficiently.</p>
                    <div className="flex lg:mx-40">
                        <input type="text" placeholder="Search here" className="p-4 h-12 w-full rounded-l-lg text-black" />
                        <button className="bg-gray-400 px-4 h-12 rounded-r-lg">Search</button>
                    </div>
             </animated.h1>
            </div>
            </div> 
        </div>
    );
};

export default Banner;