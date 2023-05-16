import React from 'react'
import img from '../images/Ellipse 307.png'
export default function Expoler() {
  return (
    <div>
        <div className='w-[84%] h-[50vh] ml-[8%] mt-[5%] mb-[3%] rounded-xl overflow-hidden'style={{backgroundColor:"#635EA3",}}>
            <img src='/image/Ellipse 308.png' />
      <h1 className='lg:text-5xl lg:font-bold text-3xl font-semibold text-white  lg:ml-[110px]  mt-[-60px]'>Explore New Opportunities<br/> on the GO!</h1>
      <button className='text-indigo-800  font-semibold bg-white rounded-lg p-[1.3%] w-[15%] ml-[10%] mt-[4%]'>Get Started</button>
      <div className='lg:w-[70%] lg:ml-[55%] lg:mt-[-21%] w-[65%] ml-[35%] mt-[-47%]'>
      <div  className='h-[47vh] w-[100%] ' style={{backgroundImage:`url(${img})`,position:'relative'}}>
      <div className=' lg:w-[50vh]  lg:mt-[-20%] lg:ml-[45%] mt-[-78%] ml-[55%] w-[40vh] 'style={{position :'absolute' }}  >
<div className='h-[50vh] w-[100%] border   rounded-full  ' >
       </div>
      </div>
      <div className=' lg:w-[70vh] w-[45vh] lg:mt-[15%] mt-[45%] lg:ml-[-36%] ml-[-15%]'style={{position :'absolute' }}  >
<div className='lg:h-[65vh] h-[50vh] w-[100%] border   rounded-full ' >
       </div>
      </div>
      </div>
      </div>
    </div>
    </div>
  )
}
