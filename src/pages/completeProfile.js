import React from 'react'
import { Nav } from 'react-bootstrap'
import Footer from '../components/footer';
import img from '../images/Screenshot3.png'
import { useNavigate } from "react-router-dom";

import img1 from '../images/Rectangle.png'
export default function CompleteProfile() {
    const navigate = useNavigate();
    const shoot = () => {
navigate("/fromsearch")
    }
    const Previous=()=>{
        navigate('/expirens')
    }
    const Resume=()=>{
        navigate('/')
    }
  return (
    <>
    <Nav/>
    <div>
       
            <div className='lg:h-[42vh] w-[100%] h-[30vh] text-white  text-center lg:p-10 p-3 ' style={{backgroundImage:`url(${img1})`,backgroundSize:'100% 100%'}}>
               <h1 className='lg:text-4xl text-xl font-bold  lg:leading-[7vh] leading-[5vh]'>Step 4: Complete Your Profile</h1>
               <p className='lg:text-2xl  font-normal	tracking-wide'>Let’s get to know you, please fill out some basic information <br/> about yourself.</p>
            </div>
            <div>
            <form className='lg:h-[90vh] h-[60vh] lg:w-[70%] w-[80%] mx-auto my-[-10vh] rounded-xl bg-white shadow-[5px_5px_20px_gray]'>
                <div className='w-[100%] flex justify-center pt-10 items-center'>
                    <img src={img}/>
                </div>
                <div className='flex flex-wrap font-semibold mt-[5%]'>
                    <p className='ml-[21%]'>I already have a CV/Resume</p>
                    <p className='ml-[20%]'>Create profile from scratch</p>
                </div>
                <div className='flex flex-wrap mt-[15px]'>
              <button className='text-white ml-[17%] p-[1.2%] w-[29%] text-semibold  text-xl rounded-xl'style={{background: `linear-gradient(85.89deg, #49478C 7.82%, #9756FF 117.28%)`}} onClick={Resume}>Upload File</button>
            <button className='ml-[12%] text-white p-[1.2%] w-[29%] text-semibold text-xl rounded-xl' style={{background: `linear-gradient(85.89deg, #49478C 7.82%, #9756FF 117.28%)`}} onClick={shoot}>Continue</button>

              </div>
    </form>
               
              <div className='flex'>
              <button className='text-indigo-800 ml-[36%] mt-[-5%]  w-[29%] text-semibold hover:bg-indigo-800 hover:text-white text-xl rounded-xl'style={{border:'1px solid #49478C'}} onClick={Previous}>Previous</button>

              </div>
            </div>
        </div> 
        <Footer/>
    
    </>
  )
}
