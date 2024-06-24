import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-custom-grey">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-8 text-white font-Cinzel font-medium">
        <div>
          <ul className="my-20 ml-20">
            <li>
              <Link to="/" className="hover:underline m-8">Home</Link>
            </li>
            <li className="hover:underline m-8">About</li>
            <li className="hover:underline m-8">Recipes</li>
          </ul>
        </div>

        <div>
  
          <iframe
            width="100%"
            height="300"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            title="Sukari-Sana"
            src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Ntinda%20Kigowa+(Sukari-Sana%20Blog)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            loading="lazy"
            className="m-4"
          ></iframe>
        </div>

        <div className="flex flex-col justify-center items-start p-4">
          <h2 className="text-lg font-bold m-8 text-center">Contact Us:</h2>
          <p className="m-8 ">+256 786 256 895</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
