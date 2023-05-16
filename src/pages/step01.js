import React  from 'react'
import { useNavigate } from "react-router-dom";
import Nav from './nav';
import Footer from '../components/footer';
import img from '../images/Screens2.png'
import img1 from '../images/Rectangle.png'
export default function Page(){
    const navigate = useNavigate();
    const shoot = () => {
navigate("/step2")
    }
    return(
        <>
       
        <Nav/>
        <div>
       
            <div className='lg:h-[42vh] w-[100%] h-[30vh] text-white  text-center lg:p-10 p-3 ' style={{backgroundImage:`url(${img1})`,backgroundSize:'100% 100%'}}>
               <h1 className='lg:text-4xl text-xl font-bold  lg:leading-[7vh] leading-[5vh]'>Step 1: Basic Information</h1>
               <p className='lg:text-2xl  font-normal	tracking-wide'>Let’s get to know you, please fill out some basic information <br/> about yourself.</p>
            </div>
            <div>
            <form className='lg:h-[90vh] h-[60vh] lg:w-[70%] w-[80%] mx-auto my-[-10vh] rounded-xl bg-white shadow-[5px_5px_20px_gray]'>
                <div className='w-[100%] flex justify-center pt-10 items-center'>
                    <img src={img}/>
                </div>
        <div className=' w-[80%] mx-auto'>
            <div className='flex  mt-10'>
            <div className='w-[50%] '>
            <div className='w-[70%]'>
                <label>
                    First Name*
                    <br/>
                    <input type='name' className='h-[6vh] w-[100%] mx-auto rounded-lg  border' name='Name' placeholder='Wade' />
                </label>
            </div>
            <div className='w-[70%] mt-4'>
                <label>
                    Last Name*
                    <br/>
                    <input type='date' className='h-[6vh] w-[100%] mx-auto rounded-lg  ' name='phone' placeholder='01/05/1990 '  />
                </label>
            </div>
            </div>
            <div className='w-[50%]'>
            <div className='w-[70%]'>
                <label>
                Date of Birth*               
                     <br/>
                    <input type='name' className='h-[6vh] w-[100%] mx-auto rounded-lg  ' name='email' placeholder='Warren'  />
                </label>
            </div>
            <div className='w-[70%] mt-4'>
                <label>
                Degree 
                    <br/>
                    <input type='level' className='h-[6vh] w-[100%] mx-auto rounded-lg  border' name='password' placeholder='Matriculation/O-Level '  />
                </label>
            </div>
            </div>
            </div>
        <div className='mt-6'>
            <h1>Gender</h1>
            <ul className=' flex m-4 '>
                <li className='p-4'>Female</li>
                <li className='p-4'>Male</li>
            </ul>
        </div>
        <div className='flex justify-center'>
        {/* <button className='btn1 h-[7vh]  w-[40%] rounded-lg text-white mt-[70px] focus:outline-none py-2 px-3 ' >Register Now</button> */}
        </div>

            
            <div>
                 </div>
                 </div>
    </form>
                <div className='h-[390px]  w-[359.3px] absolute z-[-2] ml-[73.4%]'>
                <img src='/images/Stroke.png' className='   my-[-20vh]'/>
              </div>
            <button className='bg-indigo-800 ml-[37%] mt-[-30px] text-white p-[1%] w-[20%] text-semibold text-xl rounded-xl' onClick={shoot}>Next</button>

            </div>
        </div> 
        <Footer/>
</>
)
}
