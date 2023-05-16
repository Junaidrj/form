import React from "react";
import img from '../images/Avatar (1).png'

function Nav() {
    return (
        <>
        <div className="text-gray-600 ">
            <div className="flex flex-wrap mx-auto  p-5 item-center justify-between ">
                <a className=" text-gray-900 font-medium title-font  mb-4  flex">
                    <span className="text-xl ml-3">
                        <img src='/image/image 1.png' className="h-[7vh] lg:w-[7vw] md:w-[4vw] sm:w-[2vw] "/>
                    </span>
                </a>
                <nav className="items-center text-base flex flex-wrap justify-center  mr-3 md:ml-auto ">
                <img src={img} className="h-[56px] lg:w-[30%] md:w-[40%] sm:w-[20%] "/>
                    
                    <a className=" mr-5 ">Wade Warren</a>
                </nav>
               
            </div>
        </div>
        </>
    )
}

export default Nav