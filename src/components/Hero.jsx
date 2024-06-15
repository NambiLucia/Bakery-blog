import React, { useState,useEffect } from 'react'

 function Hero() {
    const [hero, setHero] = useState([]);
    function fetchdata(){
    const url = "http://localhost:1337/api/heroes?populate=*";
    fetch(url)
    .then((response) =>{
        return response.json();
    })
    .then((obj) =>{
        let heroObj = obj.data;
        setHero(heroObj);

    })
     .catch((error) =>{
        console.error ("Error fetching hero data:", error);

     });   

    }
    useEffect(() =>{
        fetchdata();
    },[]);
    
  return (
    <div>
        {hero.length > 0?
(hero.map((element) =>(  
    <div key={element.id}  className='relative'>
        <img 
        src={`http://localhost:1337${element.attributes.image.data[0].attributes.url}`} 
        alt="hero" 
        className='h-auto w-full object-cover opacity-80'/>

        <div className='absolute inset-0  flex items-center justify-center mb-20'>
            <h1 className='text-2xl sm:text-4xl md:text-6xl lg:text-8xl font medium font-Cinzel text-white text-center '>SUKARI-SANA
           
            </h1>
            
        
        </div>
          

        
    </div>
    

))) :(
    <p className="text-center ">Loading....</p>

)

      }

    </div>
  )
}
export default Hero;