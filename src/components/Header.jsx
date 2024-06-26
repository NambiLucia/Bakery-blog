import React from 'react'
import { Link } from 'react-router-dom';

 function Header() {
  return (
    <div>
      <div className='flex justify-center w-full  bg-white shadow-md'>
        <ul className='flex justify-evenly w-10/12 py-8 font-Cinzel text-lg font-bold'>
        <Link to="/"><li>Home</li></Link>  
          <li> <Link to="/About">About</Link></li>
          <li> <Link to="/Recipe">Recipes</Link></li>
          <li>Baking 101</li>



        </ul>



      </div>



    </div>
  )
}
export default Header;
