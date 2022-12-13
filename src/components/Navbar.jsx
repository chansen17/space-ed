import React from 'react'
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
  return (
    <div className="absolute top-5 md:top-0 lg:top-10 left-0 w-full flex items-center justify-between z-40">
        <div className="ml-5">
            <img src={Logo} />
        </div>
        <div className="hidden h-20 md:flex items-center gap-4 md:gap-6 bg-gray-100/10 backdrop-blur-xl group pl-16 pr-10">
            {items.map(item => (
                <NavLink to={item.route} className="h-full text-lg md:text-xl flex items-center hover:border-b-2 border-b-gray-200 gap-4 md:gap-6">
                    <div className="flex gap-2">
                        <span className="text-white font-semibold">{item.id}</span>
                        <span className="text-gray-300 font-light tracking-wide uppercase">{item.name}</span>
                    </div>
                </NavLink>
            ))}
        </div>
        <div className="md:hidden mr-5">
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-gray-200 w-12 h-12 md:h-16 md:w-16">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
        </div>
    </div>
  )
}
