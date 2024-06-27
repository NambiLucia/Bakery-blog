import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function Blog2() {
  const [blog2, setBlog2] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/blog2s?populate=*"
        );
        setBlog2(response.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  return (
    <div>
      <Header />
      <div>
        {blog2.length > 0 ? (
          blog2.map((element) => {
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
       font-Lato text-4xl m-4"> <FaArrowRight className="inline-block ml-5 mr-2 animate-bounce"/>You might also like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-2">
        <div>
          <Link to="/Blog">
           
            <h5 className="text-center text-3xl text-black font-bold m-8 font-Lato hover:underline">
            Baking Essentials: A Beginner Baker's Guide
            </h5>
          </Link>
          <p className="text-center font-Lato m-8">
          This blog post targets beginner bakers or those wanting a refresher. It highlights ten essential ingredients to keep on hand for spontaneous baking adventures....
          </p>
        </div>
        <div>
          <Link to="/Blog">
           
            <h5 className="text-center text-3xl text-black font-bold m-8 font-Lato hover:underline">
            Ditch the Guesswork: Baking 101's Guide to Measuring Mastery
            </h5>
          </Link>
          <p className="text-center font-Lato m-8 ">
          Today, we'll tackle a fundamental skill that separates baking beginners from pros: Measuring Accurately. Precise measurement is the secret weapon behind consistent, delicious bakes. Fear not, baking buddies! This guide will equip you.....
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default Blog2;
