import React from 'react'
import { NavLink } from 'react-router-dom'
import HomeBG from '../images/home/background-home-desktop.jpg'

export default function Homepage() {
  return (
    <div className="relative h-screen grid place-items-center">
        <img className="absolute top-0 left-0 h-full w-full object-cover -z-10" src={HomeBG} />
        <div className="max-w-6xl mx-auto px-5">
            <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="text-gray-400 space-y-6 text-center md:text-left">
                    <p className="text-lg md:text-xl lg:text-2xl font-light uppercase">So, you want to travel to</p>
                    <h1 className="uppercase text-8xl xl:text-9xl font-extralight text-gray-200">space</h1>
                    <p className="text-md md:text-lg pb-8 md:mb-0">Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, relax because we'll give you a truley out of this world experience!</p>
                </div>
                <div className="grid place-items-center">
                    <NavLink to="/destination" className="h-64 w-64 grid place-items-center text-2xl md:text-3xl lg:text-4xl bg-gray-200 rounded-full cursor-pointer shadow-xl shadow-black/50 font-light relative group">
                        <div className="absolute h-full w-full bg-gray-500/20 -z-10 group-hover:scale-150 rounded-full duration-1000" />
                        <span className="font-[Cinzel]">Explore</span>
                    </NavLink>
                </div>
            </section>
        </div>
    </div>
  )
}
