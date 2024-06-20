import React from 'react'
import { Link } from 'react-router-dom';

 function Footer() {
  return (
    <div>
      <div className='flex justify-center w-full bg-custom-grey'>
        <ul className='flex justify-evenly w-6/12 py-8 text-white font-Cinzel font-medium'>
        <Link to="/"><li>Home</li></Link>  
            <li>About</li>
            <li> Recipes </li>


        </ul>



      </div>






    </div>
  )
}

export default Footer;
