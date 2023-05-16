import React from 'react'
import Nav from './nav';
import img from '../images/Avatar (1).png'
import img2 from '../images/Screenshot7.png'
import { useNavigate } from 'react-router-dom';
import {BsFacebook,BsInstagram,BsTwitter,BsLinkedin,BsYoutube,BsFillEnvelopeFill,BsBrowserChrome} from 'react-icons/bs'
import {MdSportsBasketball} from 'react-icons/md'
import img1 from '../images/Rectangle.png'
import {VscMortarBoard} from 'react-icons/vsc'
import {FiLink} from 'react-icons/fi'
import {FcInspection} from 'react-icons/fc'
import {GiTrophyCup} from 'react-icons/gi'
import {GrHistory,GrCertificate} from 'react-icons/gr'
import {AiFillFileText,AiFillFolder} from 'react-icons/ai'
import {TfiBarChart} from 'react-icons/tfi'
import {CiLocationOn} from 'react-icons/ci'
import {RiFootballLine} from 'react-icons/ri'
import {TbPackages} from 'react-icons/tb'
import {IoPerson} from 'react-icons/io5'
export default function FromSearch() {
    const navigate = useNavigate();
    const Previous = () => {
navigate("/complete")
    }
  return (
   <>
   <Nav/>
   <div className='lg:h-[42vh] w-[100%] h-[30vh] text-white  text-center lg:p-10 p-3 ' style={{backgroundImage:`url(${img1})`,backgroundSize:'100% 100%'}}>
               <h1 className='lg:text-4xl text-xl font-bold  lg:leading-[7vh] leading-[5vh]'>Review: Complete Your Profile</h1>
               <p className='lg:text-2xl  font-normal	tracking-wide'>You are just few steps away from you professional CV. Complete<br/> your profile</p>
            </div>
   <div >
    <div className='flex flex-wrap bg-white  rounded-xl w-[80%]  ml-[10%] my-[-10vh]  shadow-[5px_5px_20px_gray]'>
    <div className='border lg:h-[110vh] h-[80vh] md:h-[60vh] w-[80%] ml-[10%]  lg:w-[24%] md:w-[80%]  md:ml-[%] rounded-xl mt-[60px]  shadow-[5px_5px_20px_gray]'>
    <nav className="text-center">
                <img src={img} className="h-[120px] lg:w-[49%]  md:w-[40%] sm:w-[20%] ml-[25%] mt-[60px] rounded-xl  "/>
                    
                    <a className=" mt-[2%] ">Wade Warren</a>
                    <p>Front End Develpoer</p>
                </nav>
                <div className='flex justify-between w-[90%] ml-[5%] mt-[20px]'>
                <BsFacebook className='text-indigo-800 text-2xl'/>
                <BsInstagram className='text-indigo-800 text-2xl'/>
                <BsTwitter className='text-indigo-800 text-2xl'/>
                <BsLinkedin className='text-indigo-800 text-2xl'/>
                <BsYoutube className='text-indigo-800 text-2xl'/>
                <MdSportsBasketball className='text-indigo-800 text-2xl'/>
                </div>
                <hr className='w-[80%] h-[1px] ml-[10%] mt-[30px]'/>
                <div className='flex justify-evenly mt-[15px]'>
                    <IoPerson className='text-2xl'/>
                    <p>Basic Information</p>
                    <button style={{color:'#2961CD'}}>Edit</button>
                </div>
                <div className='flex justify-around mt-[15px]'>
                    <BsFillEnvelopeFill className='text-2xl'/>
                    <p>Credentials</p>
                    <button style={{color:'#2961CD'}}>Edit</button>
                </div>
                <div className='flex flex-wrap justify-around mt-[15px]'>
                    <FiLink className='text-2xl'/>
                    <p>Public Link</p>
                    <button style={{color:'#2961CD'}}>Edit</button>
                    <p className=' mt-[15px] text-gray-400'>http://website.com/profile/</p>
                </div>
                <div className='flex justify-center mt-[15px]'>
                <BsFacebook classname='text-2xl' style={{color:'#2961CD',fontWeight:'bold'}}/>
                <p>Share on Facebook</p>
                </div>
                <div className='flex justify-around mt-[15px]'>
                    <VscMortarBoard className='text-2xl'/>
                    <p>Education</p>
                    <button style={{color:'#2961CD'}}>Add</button>
                </div>
                <div className='flex flex-wrap justify-around mt-[15px]'>
                    <FcInspection className='text-2xl'/>
                    <p>Industry</p>
                    <button style={{color:'#2961CD'}}>Add</button>
                    
                </div><p className='text-gray-400 text-center mt-[15px] '>Accounting/Taxation</p>
                <div className='flex justify-around mt-[15px]'>
                    <GiTrophyCup className='text-2xl'/>
                    <p>Awards</p>
                    <button style={{color:'#2961CD'}}>Add</button>
                </div>
    </div>
    <div className='border lg:w-[40%] mt-[60px] w-[100%]'>
        <p className='text-center text-2xl mt-[20px] font-semiboldbold'>Already Have a Resume?</p>
    <button className='text-white ml-[15%] mt-[30px]  w-[70%] p-[2%] text-semibold  text-xl rounded-xl 'style={{background: `linear-gradient(85.89deg, #49478C 7.82%, #9756FF 117.28%)`}} onClick={Previous}>Upload File</button>
    <div className='flex justify-around mt-[50px]'>
                    <AiFillFileText className='text-2xl'/>
                    <p>Summary</p>
                    <button style={{color:'#2961CD'}}>Edit</button>
                </div>
                <div className='flex justify-around mt-[15px]'>
                    <GrHistory className='text-2xl'/>
                    <p>Work History</p>
                    <button style={{color:'#2961CD'}}>Add</button>
                </div>
                <div className='flex justify-around mt-[15px]'>
                    <AiFillFolder className='text-2xl'/>
                    <p>Work History</p>
                    <button style={{color:'#2961CD'}}>Add</button>
                </div>
                <div className='flex justify-around mt-[15px]'>
                    <GrCertificate className='text-2xl'/>
                    <p>Certificationsy</p>
                    <button style={{color:'#2961CD'}}>Add</button>
                </div>
                <div className='flex justify-around mt-[15px]'>
                <TfiBarChart className='text-2xl'/>
                    <p>Skills</p>
                    <button style={{color:'#2961CD'}}>Add</button>
                </div>
                <div className='flex justify-around mt-[15px]'>
                <CiLocationOn className='text-2xl'/>
                    <p>Preferred Job City</p>
                    <button style={{color:'#2961CD'}}>Add</button>
                </div>
                <div className='flex justify-around mt-[15px]'>
                <RiFootballLine className='text-2xl'/>
                    <p>Hobbies/Activites</p>
                    <button style={{color:'#2961CD'}}>Add</button>
                </div>
                <div className='flex justify-around mt-[15px]'>
                <BsBrowserChrome className='text-2xl'/>
                    <p>Languages</p>
                    <button style={{color:'#2961CD'}}>Add</button>
                </div>
                <div className='flex justify-around mt-[15px]'>
                <TbPackages className='text-2xl'/>
                    <p>Refrence</p>
                    <button style={{color:'#2961CD'}}>Add</button>
                </div>
    </div>
    <div className='border w-[28%] h-[65vh] mt-[60px] shadow-[5px_5px_20px_gray] rounded-xl '>
        <div className='flex flex-wrap ml-[21%] mt-[40px]'>
            <IoPerson className='text-2xl font-bold'/>
            <h4>Profile Strength</h4>
        </div>
        <img src={img2} className='mt-[30px] ml-[20%]'/>
        <button className='text-indigo-800 ml-[5%] p-[1.3%] mt-[40px] w-[90%] text-semibold hover:bg-indigo-800 hover:text-white text-xl rounded-xl'style={{border:'1px solid #49478C'}} >Download Cv</button>

    </div>


    </div>
    
   </div>
   </>
  )
}
