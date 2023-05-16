import React  from 'react'
import { useNavigate } from "react-router-dom";
import Nav from './nav';
import Footer from '../components/footer';
import img from '../images/Screenshot3.png'
import img1 from '../images/Rectangle.png'
export default function Expirens(){
    const navigate = useNavigate();
    const shoot = () => {
navigate("/complete")
    }
    const Previous=()=>{
        navigate('/step2')
    }
    return(
        <>
       
        <Nav/>
        <div>
       
            <div className='lg:h-[42vh] w-[100%] h-[30vh] text-white  text-center lg:p-10 p-3 ' style={{backgroundImage:`url(${img1})`,backgroundSize:'100% 100%'}}>
               <h1 className='lg:text-4xl text-xl font-bold  lg:leading-[7vh] leading-[5vh]'>Step 3: Experience Information</h1>
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
                    Job City*
                    <br/>
                    <input type='name' className='h-[6vh] w-[100%] mx-auto rounded-lg  border' name='Name' placeholder='Manchester' />
                </label>
            </div>
            <div className='w-[70%] mt-4'>
                <label>
                Expected Designation*
                    <br/>
                    <input type='name' className='h-[6vh] w-[100%] mx-auto rounded-lg  border' name='phone'/>
                </label>
            </div>
            </div>
            <div className='w-[50%]'>
            <div className='w-[70%]'>
                <label>
                Experience*               
                     <br/>
                    <input type='name' className='h-[6vh] w-[100%] mx-auto rounded-lg   border' name='email' placeholder='Fress'  />
                </label>
            </div>
           
            </div>
            </div>
       
        <div className='flex justify-center'>
        </div>

            
            <div>
                 </div>
                 </div>
    </form>
                <div className='h-[390px]  w-[359.3px] absolute z-[-2] ml-[73.4%]'>
                <img src='/images/Stroke.png' className='   my-[-20vh]'/>
              </div>
              <div className='flex'>
              <button className='text-indigo-800 ml-[26%] p-[1%] w-[20%] text-semibold hover:bg-indigo-800 hover:text-white text-xl rounded-xl'style={{border:'1px solid #49478C'}} onClick={Previous}>Previous</button>
            <button className='ml-[3%] text-white p-[1%] w-[20%] text-semibold text-xl rounded-xl' style={{background: `linear-gradient(85.89deg, #49478C 7.82%, #9756FF 117.28%)`}} onClick={shoot}>Next</button>

              </div>
            </div>
        </div> 
        <Footer/>
        </>
    )
}
