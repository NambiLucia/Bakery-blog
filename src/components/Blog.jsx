import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function Blog() {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/blog1s?populate=*"
        );
        setBlog(response.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  return (
    <div>
      <Header />
      <div className="bg-[#ffead9]">
        {blog.length > 0 ? (
          blog.map((element) => {
            return (
              <div
                key={element.id}
                className="flex flex-wrap items-center justify-center relative"
              >
                <h2 className="text-center text-3xl text-black font-bold m-8 font-Cinzel italic">
                  {element.attributes.title}
                </h2>

                <img
                  src={`http://localhost:1337${element.attributes.image.data[0].attributes.url}`}
                  alt="image"
                  className="flex flex-wrap w-1/2 h-3/4 object-cover m-8 rounded-md justify-center items-center"
                />

                <div className="flex flex-wrap justify-center items-center mx-auto">
                  <p className="m-12 text-2xl font-Lato">{element.attributes.text}</p>
                </div>

                <div></div>
              </div>
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
    
      <h2 className="text-bold 
       font-Lato text-4xl m-4">   <FaArrowRight className="inline-block ml-5 mr-2 animate-bounce"/>You might also like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-2">
        <div>
          <Link to="/Blog2">
           
            <h5 className="text-center text-3xl text-black font-bold m-8 font-Lato hover:underline">
              Whip It, Fold It, Cream It: Conquering Mixing Methods in the
              Kitchen
            </h5>
          </Link>
          <p className="text-center font-Lato m-8">
            This article dives into the world of mixing methods, a crucial
            factor in achieving the perfect texture for your baked goods....
          </p>
        </div>
        <div>
          <Link to="/Blog2">
           
            <h5 className="text-center text-3xl text-black font-bold m-8 font-Lato hover:underline">
            The Science Behind the Heat: A Guide to Oven Temperatures
            </h5>
          </Link>
          <p className="text-center font-Lato m-8 ">
          This article focuses on understanding oven temperature and its impact on achieving perfectly baked goods.....
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default Blog;
