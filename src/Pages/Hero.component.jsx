import React from 'react';
import Navbar from '../Components/Navbar.component';
import Hme from '../Components/Hme.component';
import Home2 from '../Components/home2.component';
import Footer from '../Components/Footer.component';
//hero component is the home page of the website
//contains the title and the get started button
//the get started button links to the lesson page
const MyComponent = () => {
    return (
             <div className="bg-[#0a085e] w-full h-auto overflow-x-hidden scroll-p-0 scroll-m-0">
      <title>Learn Spanish. Conversational. All talk. All Spoken.</title>
      <Navbar className='my-0'/>
      <Hme className='my-0'/>

      <Home2 className='my-0'/>
      <Footer className='my-0'/>
      

      {/* <div className='flex gap-7 mt-[60vh] justify-center'>
        <div className='w-[200px] h-[250px] bg-[#bab1e7] rounded-3xl'>

        </div>
        <div className='w-[200px] h-[250px] bg-[#bab1e7] rounded-3xl'>

        </div>
        <div className='w-[200px] h-[250px] bg-[#bab1e7] rounded-3xl'>

        </div>
      </div> */}

    </div>

    );
};

export default MyComponent;