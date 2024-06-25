import React, { useEffect, useState } from 'react'
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import { Link } from 'react-router-dom';

 function Recipe() {
  const [recipe,setRecipe] =useState([]);
  useEffect(()=>{
    async function fetchData() {
      try{
        const response= await axios.get("http://localhost:1337/api/recipes?populate=*")
        setRecipe(response.data.data);
      }
      catch(error){
        console.log(error)
      }
    }
    fetchData()
  },[])
  return (
    <div>
      <Header />
      <div>
         <h1 className='text-lg font-bold m-8 font-Cinzel text-center'>Recipes</h1>
         {recipe.length >0? (
          recipe.map((element) =>{
            return(
              <div key={element.id} className='flex flex-wrap '>
                <img 
                        src={`http://localhost:1337${element.attributes.image.data[0].attributes.url}`}
                        alt="image"
                        className='flex w-1/2 h-80 object-cover m-8 rounded-md transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300'
                />
                <div className='flex flex-wrap justify-center items-center mx-auto'>    
                  <Link to={element.attributes.link}><h2 className='hover:underline text-center text-lg font-bold m-8 font-Cinzel '>{element.attributes.type}</h2>
                          </Link> 
                          </div>
            




              </div>

            )
          })
         )
         
         
         
         
         
         :(<p>Loading...</p>)





         }
           


        
    




      </div>


      <Footer />
    </div>
  )
}
export default Recipe;