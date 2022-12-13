import React, { useEffect, useState} from 'react'
import { motion, AnimatePresence } from "framer-motion"

import TechBG from '../images/technology/background-technology-desktop.jpg';
import LaunchVehicle from '../images/technology/image-launch-vehicle-landscape.jpg';
import Spaceport from '../images/technology/image-spaceport-landscape.jpg'
import SpaceCapsule from '../images/technology/image-space-capsule-landscape.jpg';

let items = [
    {
        "name": "Launch vehicle",
        img: LaunchVehicle,
        "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
      },
      {
        "name": "Spaceport",
        img: Spaceport,
        "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
      },
      {
        "name": "Space capsule",
        img: SpaceCapsule,
        "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
      }
]

export default function Technology() {

    const [active, setActive] = useState(items[0]);

  return (
    <div className="relative min-h-screen pb-10 lg:pb-0">
        <img className="absolute top-0 left-0 h-full w-full object-cover -z-10" src={TechBG} />
        <div className="max-w-[1440px] w-full px-5 mx-auto pt-32 md:pt-52">
            <div className="">
                <p className="text-gray-200 uppercase text-lg md:text-xl lg:text-2xl text-center md:text-left"><span className="font-semibold text-gray-500">01</span> space launch 101</p>
            </div>
            <section className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-6 md:gap-12 pt-32 pb-10 md:pb-0">
                <div className="flex flex-col md:flex-row gap-2">
                    <div className="w-full flex flex-row md:flex-col justify-center md:justify-start gap-4">
                        {items.map((item, index) => (
                            <div key={index} onClick={() => setActive(item)} className={item == active ? "cursor-pointer h-10 w-10 md:h-16 md:w-16 grid place-items-center rounded-full bg-gray-200 hover:bg-gray-200 border black hover:text-black duration-500" : "cursor-pointer h-10 w-10 md:h-16 md:w-16 grid place-items-center rounded-full hover:bg-gray-200 border text-gray-200 hover:text-black duration-500"}>{index + 1}</div>
                        ))}
                    </div>
                    <motion.div key={active.name} initial={{ opacity: 0, translateX: 10}} animate={{ opacity: 1, translateX: 0}} className="space-y-6 text-center md:text-left mt-6 md:mt-0">
                        <div className="space-y-2">
                            <p className="text-gray-400 uppercase font-medium text-sm md:text-md lg:text-lg">The Terminology...</p>
                            <h1 className="text-2xl md:text-4xl lg:text-6xl text-gray-200">{active.name}</h1>  
                        </div>
                        <p className="text-md md:text-lg lg:text-xl text-gray-400 font-light">{active.description}</p>
                    </motion.div> 
                </div>
                <div className="">
                    <motion.div key={active.name} initial={{ opacity: 0, translateX: -10}} animate={{ opacity: 1, translateX: 0}}>
                        <img src={active.img} className="w-full h-full object-cover" />
                    </motion.div>
                </div>
            </section>
        </div>
    </div>
  )
}
