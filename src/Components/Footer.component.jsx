

//Footer Component containing the footer of the website
const Footer = () => {
    return (
        <footer className="h-[18vh] sm:h-[20vh] bg-[#0a085e]  mx-[5%] pt-[5%] md:pt-[3%] flex justify-between">
            <div className='flex w-screen/3'>
                <img className='h-[40px] pr-2' src='logo.svg' width={30}
        height={30} alt='logo'></img>
            <h2 className="text-white font-bold pt-[6px]">  Learn Spanish</h2>
         </div>
         <div className='w-screen/3 flex gap-[5vw] mr-[5%]'>
            <div>
                <h5 className='text-white font-bold text-md md:text-2xl' >Contact Us</h5>
                <h6 className='text-xs pt-[3%] text-white'>Jransom113@gmail.com</h6>
                {/* <h6 className='text-sm pl-2 text-white'>Support</h6> */}
            </div>
         
         
            {/* <div>
                <a className='text-white font-bold text-md md:text-2xl tracking-widest' href='#'>Blog</a>
                <h6 className='text-xs md:text-sm pl-2 text-white'><a href='lessons'> Articles</a></h6>
                <h6 className='text-xs md:text-sm pl-2 text-white'>Support</h6>
            </div> */}
            </div>
        </footer>
    );
    }

    export default Footer;