import React from 'react'
import {BiRightArrowAlt} from 'react-icons/bi'

export default function Footer() {
  return (
   <>
   <div className='flex flex-wrap'>
    <div className='lg:w-[60%] md:w-[50%] w-[100%]  flex-wrap flex lg:mt-[8%] mt-[27%]' >
        <div className=' ml-[20%] lg:w-[20%] w-[50%]'>
            <p className=''>Service</p><br/>
            <p className=''>List Item 1</p>
            <p >List Item 2</p>
            <p>List Item 3</p>
            <p >List Item 4</p>
            <p>List Item 5</p>
            <p>List Item 6</p>

        </div>
        <div className='w-[20%]  '> 
            <p className=''>Company</p><br/>
        <p className=''>List Item 1</p>
            <p >List Item 2</p>
            <p>List Item 3</p>
        </div>
        <div className='lg:w-[20%] lg:ml-[0px] lg:mt-[0px] ml-[20%] mt-[5%] w-[50%]'>
            <p>About</p><br/>
        <p className=''>List Item 1</p>
            <p >List Item 2</p>
            <p>List Item 3</p>
            <p>List Item 4</p>

        </div>
        <div className='lg:w-[20%] lg:mt-[0px] mt-[5%]'>
            <p>Links</p><br/>
        <p className=''>List Item 1</p>
            <p >List Item 2</p>
            <p>List Item 3</p>
            <p>List Item 4</p>

        </div>

    </div>
    <div className='lg:w-[40%] md:w-[50%] w-[100%] mt-[7.5%] '>
        <div className='w-[80%] bg-gray-100 ml-[40px] pt-[5px]  h-[50vh]'>
        <h4 className='text-2xl ml-[11%] mt-[30px]'>Subscrib</h4>
       <div className='flex mt-[5vh]'>
       <button className='p-[5%] w-[60%] ml-[10%]  bg-indigo-800 rounded-l-xl text-white'>Email address</button>
        <button className='text-indigo-800 bg-white p-[3%] w-[20%] rounded-r-xl '><BiRightArrowAlt className='font-extrabold text-5xl '/></button>
       </div>
              <p className='mt-[20px] ml-[10%] text-gray-400'>Hello, we are Lift Media. Our goal is to<br/> translate the positive effects from<br/> revolutionizing how companies engage with<br/> their clients & their team.</p>
        </div>
     

    </div>
   </div>
   <hr className='h-[3px] bg-gray-400 w-[90%] ml-[5%] mt-[2%]'/>
   </>
  )
}
