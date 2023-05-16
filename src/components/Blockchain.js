import React from 'react'
import SignUpForm from './singnup'
// import img from "./Ellipse 2.png"
// import img1 from "./Ellipse 307.png"

export default function Blockchain() {
  return (
       <>
       <div className='flex flex-wrap justify-around'>
       <div className="lg:w-[55%] md:w-[50%] sm:w-[100%] ">
                       
                       <div style={{background:`url(${"/image/Vector.png"})`,backgroundSize:"100% 100%"}} className="lg:h-[320px] lg:w-[270px] md:w-[200px] md:h-[300px] sm:w-[110px] flex ">
                        <img className='mb-12 h-[150px] w-[100px]' src="image/Ellipse 6 (Stroke).png"/>
                        <div className='lg:ml-[60px]'>
                            <h1 className='lg:w-[500px] sm:w-[400px] lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold mt-[60px]'>Find Your <span className='text-indigo-800'>Blockchain <br/> Dev</span> Job Today</h1>
                            <p className='lg:text-xl md:text-xl sm:text-md text-md mt-4'>Discover the leading companies in the blockchain industry and find job opportunities.</p>
                            
                            <button class=" py-3  lg:w-[300px] md:w-[220px] sm:w-[220px] w-[200px] focus:outline-none hover:bg-gray-200 rounded-xl  mt-5 text-white" style={{backgroundColor:"rgba(99, 94, 163, 1)"}}>Login Now
    </button>
                        </div>
                       </div>
                   </div>
                   <div className=" lg:w-[45%] md:w-[50%] sm:w-[100%]" >
                       <SignUpForm/>
                   </div>
        </div>
        </>
      
  )
}
