
//Home2 is a component that is features directly below the Hme.component.jsx component
//Home2 contains the "Why We're Different" section of the website
//Home2 uses nested flexboxes to achieve the desired layout
const Home2 = () => {
    return (
        
        <div className="h-[150vh] md:h-[105vh] w-full bg-slate-300 ">
            <div className='h-screen/3 w-[80%] sm:w-[80%] md:w-[50%] md:min-w-[600px] border-b-2 border-slate-400 mt-[36vh] mx-[10%] sm:mx-[10%] md:mx-auto py-[2%] text-center mb-4'>
                <h1 className='text-[#0a085e] text-[20px] sm:text-[40px] md:text-[55px] font-extrabold  '>Why We're Different</h1>
            </div>
            <div className="flex flex-col w-[80%] sm:min-h-[400px] max-w-[400px] md:max-w-none md:w-[50%] md:min-w-[600px] mx-auto justify-center">
                <div className=' flex flex-col md:flex-row gap-2    md:pt-4 h-[60vh] md:h-[40vh] justify-center flex-grow'>
                    <div className='bg-[#0a085e] text-white  w-[100%] h-[50%] md:w-[50%] md:h-[100%] '>
                        <h3 className="font-bold text-center pt-[20%] md:pt-[30%] my-auto">We Focus on Verbal Spanish</h3>
                    </div>
                    <div className='bg-[#c5c5e0] text-[#0a085e]  w-[100%] h-[50%] md:w-[50%] md:h-[100%]'>
                        <h3 className="font-bold text-center pt-[20%] md:pt-[30%] my-auto">Learn by Doing</h3>
                    </div>
                </div>
                <div className=' flex flex-col md:flex-row  gap-2  md:pt-2 h-[60vh] md:h-[40vh] justify-center'>
                    <div className=' bg-[#0a085e] md:bg-[#c5c5e0] md:text-[#0a085e] font-bold text-white w-[100%] h-[50%] md:h-[100%] md:w-[50%] relative px-[5%] sm:px-0'>
                        <h3 className="text-center pt-[20%] md:pt-[30%] md:mx-[5%] my-auto">Short Lessons that are Easy to Remember</h3>
                    </div>
                    <div className=' bg-[#c5c5e0] md:bg-[#0a085e] text-[#0a085e] md:text-white w-[100%] h-[50%] md:h-[100%] md:w-[50%]'>
                        <h3 className="font-bold text-center pt-[20%] md:pt-[30%] ">A Community to Help You</h3>
                    </div>
                </div>
            </div>
      </div>
    );
}

export default Home2;