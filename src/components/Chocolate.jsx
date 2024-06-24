import React , { useState,useEffect }  from 'react'
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';

export default function Chocolate() {
    const [chocolate,SetChocolate]=useState([]);
    useEffect(() =>{
        const fetchData= async() => {
            try{
                const response= await axios.get("http://localhost:1337/api/chocolates?populate=*")
                SetChocolate(response.data.data);

            }
            catch (error){
                console.log(error)


            }

        };
       fetchData();
    },[]);

    
    
  return (
    <div>

<Header />
    
    <div className='flex items-center justify-center p-12 '>
          {chocolate.length >0? (
             chocolate.map((element) =>{
                  return(
                      <div key={element.id} className='mx-8'>
                   <h2 className='text-center font-Cinzel text-2xl font-bold'>{element.attributes.title}</h2>  
                   <br />
                   <img 
                   src={`http://localhost:1337${element.attributes.image.data[0].attributes.url}`}
                   alt="brownie"
                   className='flex h-80 object-cover m-8 rounded-md transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 mx-auto'/>

                   <h3 className='text-center font-Cinzel text-xl font-bold'>INGREDIENTS:</h3> 
                   <p>{element.attributes.ingredients}</p>   <br />
                   <h3 className='text-center font-Cinzel text-xl font-bold'>INSTRUCTIONS:</h3>  
                   <p>{element.attributes.instructions}</p>
                   <br />
                   
                 </div>

                  )
              }) ) :(
              <p className="text-center"> Loading...</p>)
            }
      
    </div>
    <Footer />


        
      
    </div>
  )
}

