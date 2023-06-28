import {Link} from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai'
//Hme component is the home page of the website
//Contains the title and the get started button
//The get started button links to the lesson page
const Hme = () => {
    return (
        <div>
            <div className='flex justify-center mt-[15vh]'>
              <div>
                <h1 className='text-white text-[20px] sm:text-[40px] md:text-[50px] font-extrabold pt-20'>Learn Conversational Spanish. </h1>
                <h1 className='text-white text-[20px] sm:text-[40px]  md:text-[50px] font-extrabold pl-[20%]'>Skip the textbook.</h1>
              </div>
            </div>
      
      <div className='flex justify-center mt-[5%]'>
        <Link to="/Lesson">
          {/* // button to view the lesson page */}
        <button className='rounded-[55px] z-30 w-[150px] md:w-[250px] h-[5vh] bg-orange-700 shadow-md font-extrabold text-white text-sm md:text-lg pb-1 -tracking-tighter'>
          Beta Lesson {<AiOutlineArrowRight className='inline'/>}
        </button></Link>
        {/* <Link to="/Lesson">
        <button className='rounded-[55px] z-30 w-[150px] md:w-[250px] h-[5vh] bg-orange-700 shadow-md font-extrabold text-white text-sm md:text-lg pb-1 -tracking-tighter'>
          Get Started
        </button></Link> */}
      </div>
        </div>
    )
}

export default Hme