import React, { useState,useEffect } from 'react'


 function Pastry() {
    const[pastry, setPastry]=useState([]);
    function fetchData(){
        const url ="http://localhost:1337/api/pastries?populate=*";

        fetch(url)
        .then((response) =>{
            return response.json();
        })
        .then((obj) =>{
            let pastryData=obj.data;
            setPastry(pastryData);
        
        })
        .catch((error) =>{
            console.error("Error fetching data:",error);
        });

    }
    useEffect(() => {

        fetchData();
    },[])
  return (
    <div className='p-4 sm:p-8 md:p-12'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            {pastry.length > 0 ?(
                pastry.map((element) =>{
                return (
                    <div key={element.id}>
                       <a href={element.attributes.link}
                       target="_blank"> <img 
                        src={`http://localhost:1337${element.attributes.image.data[0].attributes.url}`}
                        alt={element.attributes.title}
                         className='flex w-full h-80 object-cover mb-8 rounded-lg'/>
                         </a>


                       <a href={element.attributes.link}
                       target="_blank">
                        <h2 className='text-center font-Cinzel italic text-2xl font-normal'>{element.attributes.title}</h2>
                       </a> 






                    </div>



                )





                })

            ):
            (
                <p className="text-center"> Loading</p>
            )














            }
          







        </div>
      





    </div>
  )
}
export default Pastry;