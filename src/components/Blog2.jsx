import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import { Link } from "react-router-dom";

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
                  <p className="m-12 ">{element.attributes.text}</p>
                </div>

                <div></div>
              </div>
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-2">
        <h2 className="text-bold font-Lato text-lg">You might also like</h2>
        <div></div>
      </div>

      <Footer />
    </div>
  );
}
export default Blog2;
