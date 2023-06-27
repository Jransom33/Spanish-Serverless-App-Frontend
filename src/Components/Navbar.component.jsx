import { useState } from 'react';
import {AiOutlineMenu} from 'react-icons/ai'
const Navbar = () => {
 const [nav,setNav] = useState(false);
 //handleClick function used to toggle the hamburger menu icon
 const handleClick = () => {
    setNav(!nav);
    }
    return (
      //Flexbox navigation bar with responsive design. first div contains the logo, second div contains the buttons and the hamburger menu icon is hidden on screens larger than 768px
        <nav className='flex justify-between mr-[5vw] ml-[2vw] align-bottom h-[10vh]'>
        
        <div>
          <img className='' src='logo.svg' width={70}
      height={70} alt='logo'></img>
        </div>
        
        {/* container for items to right side of navigation bar */}
        <div className='pt-[2.5vh] hidden md:flex'>
          <button className='rounded-[55px] z-30 w-[150px] h-[5vh] bg-transparent  font-extrabold text-slate-200 text-lg pb-1 '> We're In Beta</button>
          {/* <button className=' rounded-[55px] z-30 w-[150px] h-[5vh] bg-slate-300 shadow-md font-extrabold text-[#0a085e] text-lg pb-1 '>
            Sign Up
          </button> */}
        </div>
          {/* Hamburger Menu Icon */}
        <AiOutlineMenu className=' text-[40px] sm:text-[45px] md:hidden mt-[2.5vh] '/>
      </nav>
    )
}

export default Navbar;