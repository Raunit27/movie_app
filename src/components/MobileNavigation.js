import React from 'react'
import { mobileNavigation } from '../contacts/navigation'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const MobileNavigation = () => {
  return (
    <section className='md:hidden h-12 bg-black fixed bottom-0 w-full z-40'>
        <div className='flex items-center justify-between h-full text-neutral-400'>
            {
                mobileNavigation.map((nav,index)=>{
                    return (
                        <NavLink 
                            to={nav.href} 
                            key={index} 
                            className={({ isActive }) => 
                                `px-2 flex h-full flex-col justify-center items-center ${isActive ? "text-white" : ""}`
                            }
                        >
                            <div className='text-2xl'>
                                {nav.icon}
                            </div>
                            <p className='text-sm'>{nav.label}</p>
                        </NavLink>
                    );
                })
            }
        </div>
    </section>
  )
}

export default MobileNavigation