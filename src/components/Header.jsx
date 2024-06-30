import React from 'react'
import { Link } from 'react-router-dom';

 function Header() {
  return (
    <div>
      <div className='flex justify-center w-full  bg-[#d59d57] shadow-md '>
        <ul className='flex justify-evenly w-10/12 py-8 font-Cinzel text-lg font-bold text-white'>
        <Link to="/" className='text-custom-green hover:text-white'><li>Home</li></Link>  
          <li className='hover:text-custom-green'> <Link to="/About">About</Link></li>
          <li className='hover:text-custom-green'> <Link to="/Recipe">Recipes</Link></li>
          <li className='hover:text-custom-green'> <Link to="/Blog">Baking 101</Link></li>



        </ul>



      </div>



    </div>
  )
}
export default Header;
