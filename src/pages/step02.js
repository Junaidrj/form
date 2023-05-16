import React from 'react'
import { Nav } from 'react-bootstrap'
import Footer from '../components/footer'
import img1 from '../images/Rectangle.png'
import img from '../images/Screenshot2.png'
import { useNavigate } from 'react-router-dom'

export default function Step2() {
  const navigate = useNavigate();
  const shoot = () => {
navigate("/expirens")
}
const Previous=()=>{
  navigate("/page")
}
  return (
   <>
   <Nav/>
     <div className='border-2 h-[auto]'>
            <div className='lg:h-[42vh] w-[100%] h-[25vh] text-white  text-center lg:p-10 p-3  ' style={{backgroundImage:`url(${img1})`,backgroundSize:'100% 100%'}}>
               <h1 className='lg:text-4xl text-xl font-bold  lg:leading-[7vh] leading-[5vh] '>Step 2: Contact Information</h1>
               <p className='lg:text-2xl  font-normal	tracking-wide '>Let’s get to know you, please fill out some basic information <br/> about yourself.</p>
            </div>
            <div>
            <form className='lg:h-[90vh] h-[85vh] lg:w-[70%] w-[80%] mx-auto my-[-10vh] rounded-xl bg-white shadow-[5px_5px_20px_gray]'>
                <div className='w-[100%] flex justify-center pt-10 items-center'>
                    <img src={img}/>
                </div>
        <div className=' w-[80%] mx-auto'>
            <div className='flex  mt-10'>
            <div className='w-[50%] '>
            <div className='w-[70%]'>
                <label>
                    Email*
                    <br/>
                    <input type='name' className='h-[6vh] w-[100%] mx-auto rounded-lg  border' name='Name' placeholder='Wade' />
                </label>
            </div>
            <div className='w-[70%] mt-4'>
                <label>
                    Home Contact No*
                    <br/>
                    <input type='date' className='h-[6vh] w-[100%] mx-auto rounded-lg  border' name='phone' placeholder='01/05/1990 '  />
                </label>
            </div>
            </div>
            <div className='w-[50%]'>
            <div className='w-[70%]'>
                <label>
                Mobile*               
                     <br/>
                    <input type='name' className='h-[6vh] w-[100%] mx-auto rounded-lg   border' name='email' placeholder='Warren'  />
                </label>
            </div>
            <div className='w-[70%] mt-4'>
                <label>
                Cuntry* 
                    <br/>
                    <input type='level' className='h-[6vh] w-[100%] mx-auto rounded-lg  border' name='password' placeholder='Matriculation/O-Level '  />
                </label>
            </div>
            </div>
            
            </div>
            <div className='flex  mt-4'>
            <div className='w-[50%] '>
            <div className='w-[70%]'>
                <label>
                    Address Line 1*
                    <br/>
                    <input type='name' className='h-[6vh] w-[100%] mx-auto rounded-lg  border' name='Name' placeholder='Wade' />
                </label>
            </div>
            <div className='w-[70%] mt-4'>
                <label>
                    City*
                    <br/>
                    <input type='date' className='h-[6vh] w-[100%] mx-auto rounded-lg  border' name='phone' placeholder='01/05/1990 '  />
                </label>
            </div>
            </div>
            <div className='w-[50%]'>
            <div className='w-[70%]'>
                <label>
                Address Line 2*               
                     <br/>
                    <input type='name' className='h-[6vh] w-[100%] mx-auto rounded-lg   border' name='email' placeholder='Warren'  />
                </label>
            </div>
            <div className='w-[70%] mt-4'>
                <label>
                Zip Postal Code* 
                    <br/>
                    <input type='level' className='h-[6vh] w-[100%] mx-auto rounded-lg  border' name='password' placeholder='Matriculation/O-Level '  />
                </label>
            </div>
            </div>
            
            </div>
      
<div>
                 </div>
                 </div>
    </form>
                
              <div className='flex'>
              <button className='text-indigo-800 ml-[26%] p-[1%] w-[20%] text-semibold hover:bg-indigo-800 hover:text-white text-xl rounded-xl'style={{border:'1px solid #49478C'}} onClick={Previous}>Previous</button>
            <button className='ml-[3%] text-white p-[1%] w-[20%] text-semibold text-xl rounded-xl' style={{background: `linear-gradient(85.89deg, #49478C 7.82%, #9756FF 117.28%)`}} onClick={shoot}>Next</button>

              </div>
             
            </div>
        </div> 
        <Footer />
   </>

  )
}
