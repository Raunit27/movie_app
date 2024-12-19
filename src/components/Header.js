import React, { useEffect } from 'react'
import { useState } from 'react'
import logo from "../assets/logo.png"
import usericon from "../assets/user.png"
import { IoSearchOutline } from "react-icons/io5";
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { navigation } from '../contacts/navigation';
const Header = () => {
    const location=useLocation()
    const removeSpace=location?.search?.slice(3).split("%20").join(" ");
    const [searchInput,setSearchInput]=useState(removeSpace);
    const navigate=useNavigate()

    
    useEffect(() => {
        if (searchInput) {
            navigate(`/search?q=${searchInput}`);
        }
    }, [searchInput, navigate]);

    const handleSubmit=(e)=>{
        e.preventDefault()
    }

    return (
        <header className='fixed top-0 w-full h-16 bg-black bg-opacity-75 z-40'>
            <nav className='flex  items-center h-full p-4 mx-auto max-w-7xl'>
                <div className='flex'>
                    <Link to={"/"}>
                        <img src={logo} alt="logo" width={120} />
                        </Link>
                    <div className=' hidden md:block k ml-5'>
                        <ul className='flex space-x-4'>
                            {navigation.map((item) => (
                                <li key={item.href} className={({ isActive }) => `text-white hover:text-neutral-200 ${isActive && "text-neutral-900"}`}>
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='flex ml-auto items-center gap-4'>
                    <form action="" className='flex items-center gap-2' onSubmit={handleSubmit}>
                        <input type="text" name="search" id="search" placeholder='search here' className='hidden md:block bg-neutral-600 text-white rounded-md p-1 outline-none border-none' 
                        onChange={(e)=>{
                            setSearchInput(e.target.value)
                        }}
                        value={searchInput}
                        />
                        <button  className='text-2xl'>
                        <IoSearchOutline />
                        </button>
                    </form>
                   
                    <div className='  w-8 h-8 rounded-full overflow-hidden active:scale-50 transition-all'>
                        <img src={usericon} alt="user" width={40} />
                    </div>
                </div>
            </nav>

        </header>
    )
}

export default Header