import React from 'react'
import img from '../images/Screenshot1.png' 
import Contantus from './contantus'
export default function Lettalk() {
  return (
    <>
    <div className='flex flex-wrap'>
        <div className='lg:w-[50%] w-[100%]'>
            <img src={img} className='w-[80%] ml-[10%]'/>
        </div>
        <div className='lg:w-[50%] w-[100%]'>
            <Contantus/>
        </div>
    </div>

    </>
  )
}
