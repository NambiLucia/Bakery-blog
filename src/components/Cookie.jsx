import React , { useState,useEffect }  from 'react'
import Header from "./Header";
import Footer from "./Footer";

function Cookie() {
  const [cookie, setCookie] = useState([]);
  function fetchData() {
    const url = "http://localhost:1337/api/cookies?populate=*";

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((obj) => {
        let cookieData = obj.data;
        setCookie(cookieData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Header />
    
      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 p-12 bg-[#ffead9]'>
            {cookie.length >0? (
                cookie.map((element) =>{
                    return(
                        <div key={element.id} className='mx-8'>
                     <h2 className='text-center font-Cinzel text-2xl font-bold'>{element.attributes.title}</h2>  
                     <br />
                     <img 
                     src={`http://localhost:1337${element.attributes.image.data[0].attributes.url}`}
                     alt="bundtcake"
                     className='flex h-80 object-cover m-8 rounded-md transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 mx-auto'/>

                     <h3 className='text-center font-Cinzel text-xl font-bold'>INGREDIENTS:</h3> 
                     <p>{element.attributes.ingredients}</p>   <br />
                     <h3 className='text-center font-Cinzel text-xl font-bold'>INSTRUCTIONS:</h3>  
                     <p>{element.attributes.instructions}</p>
                     <br />
                     

                   </div>

                    )
                })



            ) :(

                <p className="text-center"> Loading</p>

            )
            
        
        
        
        }
         
        
      </div>
      <Footer />
    </div>
  );
}
export default Cookie;
