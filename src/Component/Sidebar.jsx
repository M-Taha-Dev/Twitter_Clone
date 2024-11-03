import React from 'react'
import { FaSearch, FaTwitter } from "react-icons/fa";
import { MdExplore } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { IoBookmarks } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { Link } from 'react-router-dom';

const Sidebar = ({onMenuClick}) => {
  return (
    <div className='flex rounded-xl flex-row  md:flex-col gap-6 py-8 font-semibold font-sans bg-white- text-white  md:h-full'>
        {/* Twitter Icon at the top */}
        <div className='pl-4'>
          <FaTwitter size={24} className='text-white mb-8'/>
        </div>

        {/* Buttons with icons */}
        <Link to={'/'} onClick={() => onMenuClick('feed')} className='flex items-center w-64 p-4 px-6 hover:bg-white-950 cursor-pointer rounded-lg'>
          <FaSearch className='mr-4' size={24}/> 
          Search
        </Link>

        <Link to={'/users'} onClick={() => onMenuClick('following')} className='flex items-center w-64 p-4 px-6 hover:bg-white-950 cursor-pointer rounded-lg'>
          <FaUserAlt className='mr-4' size={24}/> 
          Users
        </Link>

        
    </div>
  )
}

export default Sidebar;
