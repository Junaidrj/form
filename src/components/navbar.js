// import React from 'react '

export default function Navbar() {
  return (
    <div>
      <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    
      <span class="ml-3 text-xl"><img src='/image/image 1.png' className='h-[70px] w-[70px]'/></span>
    </a>
 <nav class="md:ml-auto flex flex-wrap items-center text-base mr-3 justify-center">
      <a class="mr-5 ml-4" style={{color:"rgba(99, 94, 163, 1)"}}>Option 1</a>
      <a class="mr-5 " style={{color:"rgba(99, 94, 163, 1)"}}>Option 2</a>
    </nav>
    <button class="mr-3 ml-5 py-1 px-3 w-[140px] h-[45px] focus:outline-none  rounded rounded-lg text-base mt-4 md:mt-0 text-indigo-800 hover:bg-indigo-800 hover:text-white " style={{border:"2px solid rgba(99, 94, 163, 1)"}}>Create Profile
      
    </button>
    <button class="ml-5 py-1 px-3 focus:outline-none h-[45px] w-[130px] rounded rounded-lg text-base mt-4 md:mt-0 text-white" style={{backgroundColor:"rgba(99, 94, 163, 1)"}}>Employer
      
    </button>
  </div>
</header>
    </div>
  )
}
