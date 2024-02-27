import React,{useState} from 'react';
import { FaLaptopHouse } from "react-icons/fa";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
   const [Nav,setNav]=useState(false);

   const handleNav=()=>{
     setNav(!Nav)
   }

  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='flex items-center justify-between bg-white py-4  px-7'>
        <div className='flex font-bold'>
        <FaLaptopHouse size={25} />
         Touchpoint
       </div>
       <ul className='hidden md:flex'>
        <li className='px-4'>Home</li>
        <li className='px-4'>About</li>
        <li className='px-4'>Services</li>
        <li className='px-4' >Contact Us</li>
       </ul>
       <span onClick={handleNav} className='block md:hidden'>
        {!Nav ? <AiOutlineClose size={20}/>:<AiOutlineMenu size={20}/> }
       </span>
      <div className={!Nav?'fixed top-0 left-0 w-[40%] h-full border-r border-r-slate-100 bg-white ease-in-out duration-500 block md:hidden':'fixed left-[-100%]'}>
       <div className='flex font-bold m-4'>
        <FaLaptopHouse size={25} />
         Touchpoint
       </div>
       <ul className='p-4 '>
        <li className='p-4 border-b border-b-slate-100'>Home</li>
        <li className='p-4 border-b border-b-slate-100'>About</li>
        <li className='p-4 border-b border-b-slate-100'>Services</li>
        <li className='p-4' >Contact Us</li>
       </ul>
       </div>
    </div>
    </div>
  );
}

export default Navbar;