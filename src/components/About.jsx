import React, { useState,useEffect } from 'react'
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';


 function About() {
    const [about,setAbout] =useState([]);
    useEffect(()=>{
        async function fetchData (){
         try{
            const response= await axios.get("http://localhost:1337/api/abouts?populate=*")
            setAbout(response.data.data);

         }
         catch(error){
            console.log(error)

         }

        }
        fetchData();

    },[])
  
  return (
    <div className='bg-[#ffead9]'>
        <Header />
       <h2 className='text-lg font-bold m-8 font-Cinzel text-center bg-[#ffead9]'>About Me and Sukari-Sana</h2> 
      <div className='flex items-center justify-center p-12 bg-[#ffead9]'>
        
        {about.length > 0 ? 
        (about.map((element)=>{
            return (
                <div key={element.id} className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 '>
                    
                    <div>
                       <p className="text-lg font-semi m-8 font-Lato">{element.attributes.intro}</p> 

                    </div>
                    <div>
                        <img 
                        src={`http://localhost:1337${element.attributes.image.data[0].attributes.url}`}
                        alt="Image" 
                        className='flex w-1/2 h- object-cover mb-8 rounded-lg ml-12   '/>
                        
                    </div>

                </div>


            )
        })):
     
        
        (<p>Loading...</p>)





        }
        



      </div>


        <Footer />

    </div>
  )
}
export default About;