import React from 'react'

const Footer = () => {
  return (
    <div className='grid md:grid-cols-3 grid-cols-1 bg-black m-[25px] gap-10'>
        <div className='ronded-md bg-[#374151] px-[20px] py-[20px] m-[20px] h-48 rounded-md'>
             <h1 className='text-sm font-bold text-white mb-[20px]'>About Us</h1>
             <p className='text-sm text-white'> This is the footer section in the footer</p>
        </div>
        <div className='ronded-md bg-[#374151] px-[20px] py-[20px] m-[20px] h-48 rounded-md'>
             <h1 className='text-sm font-bold text-white mb-[20px]' >Quick Links</h1>
             <div className="text-white text-sm flex flex-col ">
                    <a href='#' className='mb-[10px] hover:text-[#93C5FD]'> Home</a>
                    <a href='#' className='mb-[10px] hover:text-[#93C5FD]'> About</a>
                    <a href='#' className='mb-[10px] hover:text-[#93C5FD]'> Service</a>
                    <a href='#' className='mb-[10px] hover:text-[#93C5FD]'> Contact</a>
             </div>
        </div>
        <div className='ronded-md bg-[#374151] px-[20px] py-[20px] m-[20px] h-48 rounded-md'>
             <h1 className='text-sm font-bold text-white mb-[20px]' >Contact Us</h1>
             <p className="text-white text-sm flex flex-col ">
             123 Example Street<br/>
             City, State 12345 <br/>
             Email:info@example.com<br/>
             phone:(123)456-7890
             </p>
        </div>
      
    </div>
  )
}

export default Footer
