import React, { useEffect, useState} from 'react'
import { motion, AnimatePresence } from "framer-motion"

import CrewBG from '../images/crew/background-crew-desktop.jpg'
import Douglous from '../images/crew/image-douglas-hurley.png';
import Mark from '../images/crew/image-mark-shuttleworth.png';
import Victor from '../images/crew/image-victor-glover.png';
import Anousheh from '../images/crew/image-anousheh-ansari.png';

let items = [
    {
        "name": "Douglas Hurley",
        "img": Douglous,
        "role": "Commander",
        "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
      },
      {
        "name": "Mark Shuttleworth",
        "img": Mark,
        "role": "Mission Specialist",
        "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
      },
      {
        "name": "Victor Glover",
        "img": Victor,
        "role": "Pilot",
        "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
      },
      {
        "name": "Anousheh Ansari",
        "img": Anousheh,
        "role": "Flight Engineer",
        "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
      }
]

export default function Crew() {

    const [active, setActive] = useState(items[0]);

  return (
    <div className="relative min-h-screen">
        <img className="absolute top-0 left-0 h-full w-full object-cover -z-10 animate animate__animated animate__fadeIn" src={CrewBG} />
        <div className="max-w-[1440px] w-full px-5 mx-auto pt-32 md:pt-52">
            <div className="">
                <p className="text-gray-200 uppercase text-lg md:text-xl lg:text-2xl text-center md:text-left"><span className="font-semibold text-gray-500">01</span> meet your crew</p>
            </div>
            <section className="flex flex-col-reverse md:grid md:grid-cols-2 gap-6 md:gap-12 pt-12 md:pt-32 pb-10 md:pb-0">
                <motion.div key={active.name} initial={{ opacity: 0, translateX: 10}} animate={{ opacity: 1, translateX: 0}} className="space-y-6">
                    <div className="space-y-2">
                        <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-500">{active.role}</h2>
                        <h1 className="text-2xl md:text-4xl lg:text-6xl text-gray-200">{active.name}</h1>
                    </div>
                    <p className="text-md md:text-lg lg:text-xl text-gray-400 font-light">{active.bio}</p>
                    <div className="pt-6 w-full flex gap-4 md:gap-6">  
                        {items.map(item => (
                            <div onClick={() => setActive(item)} className="cursor-pointer h-4 w-4 rounded-full bg-gray-600 p-2"/>
                        ))}
                    </div>  
                </motion.div>
                <div className="border-b border-b-gray-700 md:border-b-0">
                    <motion.div key={active.name} initial={{ opacity: 0, translateX: -10}} animate={{ opacity: 1, translateX: 0}}>
                        <img src={active.img} className="max-w-xs mx-auto w-full md:max-w-lg" />
                    </motion.div>
                </div>
            </section>
        </div>
    </div>
  )
}
