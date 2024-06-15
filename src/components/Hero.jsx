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
    <div key={element.id}>
        <img 
        src={`http://localhost:1337${element.attributes.image.data[0].attributes.url}`} 
        alt="hero" 
        className='h-auto w-full object-cover'/>

    </div>

))) :(
    <p className="text-center ">Loading....</p>

)

      }

    </div>
  )
}
export default Hero;