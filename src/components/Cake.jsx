import React , { useState,useEffect }  from 'react'
import Header from "./Header";
import Footer from "./Footer";

function Cake() {
  const [cake, setCake] = useState([]);
  function fetchData() {
    const url = "http://localhost:1337/api/cakes?populate=*";

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((obj) => {
        let cakeData = obj.data;
        setCake(cakeData);
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
      <div>
            {cake.length >0? (
                cake.map((element) =>{
                    return(
                        <div key={element.id}>
                     <h2>{element.attributes.title}</h2>  
                     <br />
                     <h3>INGREDIENTS:</h3> 
                     <p>{element.attributes.ingredients}</p>   <br />
                     <h3>INSTRUCTIONS:</h3>  
                     <p>{element.attributes.instructions}</p>
                     <br />
                     <h3>Optional Glaze :</h3>
                     <p>{element.attributes.
optionalglaze}</p>

                   </div>

                    )
                })



            ) :(

                <p className="text-center"> Loading</p>

            )
            
        
        
        
        }
         
        
      </div>
    </div>
  );
}
export default Cake;
