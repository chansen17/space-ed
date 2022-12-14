import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import Logo from '../images/shared/logo.svg';

let items = [
    {
        id: '00',
        name: 'home',
        route: '/'
    },
    {
        id: '01',
        name: 'destination',
        route: '/destination'
    },
    {
        id: '02',
        name: 'crew',
        route: '/crew'
    },
    {
        id: '03',
        name: 'technology',
        route: '/technology'
    },
]

export default function Navbar() {
    const [toggled, setToggled] = useState(false);
  return (
    <div className="absolute top-5 md:top-0 lg:top-10 left-0 w-full flex items-center justify-between z-40">
        <div className="ml-5">
            <img src={Logo} />
        </div>
        <div className="hidden h-20 md:flex items-center gap-4 md:gap-6 bg-gray-100/10 backdrop-blur-xl group pl-16 pr-10">
            {items.map(item => (
                <NavLink to={item.route} className="h-full text-md md:text-lg flex items-center hover:border-b-2 border-b-gray-200 gap-4 md:gap-6">
                    <div className="flex gap-2">
                        <span className="text-white font-semibold">{item.id}</span>
                        <span className="text-gray-300 font-light tracking-wide uppercase">{item.name}</span>
                    </div>
                </NavLink>
            ))}
        </div>
        <div className="md:hidden mr-5 z-50">
            <button onClick={() => setToggled(!toggled)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-gray-200 w-10 h-10 md:h-14 md:w-14">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
        </div>
        {toggled && (
            <div className="md:hidden animate animate__animated animate__fadeInRight animate__faster fixed h-screen w-8/12 md:w-4/12 lg:w-3/12 top-0 right-0 bg-gray-600/20 backdrop-blur-lg z-40 py-16 px-5">
                <ul className="flex flex-col">
                    {items.map(item => (
                        <li className="py-2">
                            <NavLink onClick={() => setToggled(false)} to={item.route} className="capitalize text-xl sm:text-2xl text-gray-200">{item.name}</NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        )}
    </div>
  )
}
