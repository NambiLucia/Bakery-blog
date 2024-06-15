import React , { useState,useEffect }  from 'react'

 function Brownie() {
    const[brownie, setBrownie]=useState([]);
    function fetchData(){
        const url ="http://localhost:1337/api/brownies?populate=*";

        fetch(url)
        .then((response) =>{
            return response.json();
        })
        .then((obj) =>{
            let brownieData=obj.data;
            setBrownie(brownieData);
        
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
        <h1 className='text-2xl sm:text-3xl md:text-3xl lg:text-6xl font medium font-Cinzel text-center'> EXPLORE </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            {brownie.length > 0 ?(
                brownie.map((element) =>{
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
export default Brownie;