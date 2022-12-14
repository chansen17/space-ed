import React, { useEffect, useState} from 'react'
import { motion, AnimatePresence } from "framer-motion"

import DestinationBG from '../images/destination/background-destination-desktop.jpg'
import Europa from '../images/destination/image-europa.webp';
import Mars from '../images/destination/image-mars.webp';
import Moon from '../images/destination/image-moon.webp';
import Titan from '../images/destination/image-titan.webp';

let items = [
    {
        id: 'moon',
        index: '00',
        img: Moon,
        title: 'Moon',
        text: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites",
        distance: '384,400 km',
        travelTime: '3 days'
    },
    {
        id: 'mars',
        index: '01',
        img: Mars,
        title: 'Mars',
        text: "Don't forget to pack your hiking. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of everest.",
        distance: '225 mil. km',
        travelTime: '9 months'
    },
    {
        id: 'europa',
        index: '02',
        img: Europa,
        title: 'Europa',
        text: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        distance: '628 mil. km',
        travelTime: '3 years'
    },
    {
        id: 'titan',
        index: '03',
        img: Titan,
        title: 'Titan',
        text: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        distance: '225 mil. km',
        travelTime: '7 years'
    },
]

export default function Destination() {

    const [active, setActive] = useState(items[0]);

  return (
    <div className={`relative min-h-screen bg-[url('')] bg-cover`}>
        <img className="absolute top-0 left-0 h-full w-full object-cover -z-10 animate animate__animated animate__fadeIn" src={DestinationBG} />
        <div className="max-w-[1440px] w-full px-5 mx-auto pt-32 md:pt-52">
            <div className="">
                <p className="text-gray-200 uppercase text-lg md:text-xl lg:text-2xl text-center md:text-left"><span className="font-semibold text-gray-500">01</span> pick your destination</p>
            </div>
            <section className="flex flex-col-reverse md:grid md:grid-cols-2 gap-6 md:gap-12 pt-12 md:pt-32">
                <div className="grid place-items-center">
                    <motion.div key={active.id} initial={{ opacity: 0, translateY: 20 }} exit={{ opacity: 0 }} animate={{ opacity: 1, translateY: 0}}>
                        <img src={active.img} className="w-full h-full object-cover" />
                    </motion.div>
                </div>
                <div className="">
                    <div className="w-full flex items-start justify-start  gap-2 md:gap-4 mb-2">
                        {items.map(item => (
                            <span key={item.id} onClick={() => setActive(item)} className="py-1 text-gray-400 hover:text-gray-200 duration-300 cursor-pointer text-md md:text-lg lg:text-xl hover:underline">{item.title}</span>
                        ))}
                    </div>
                    <motion.div key={active.id} initial={{ translateX: 50, opacity: 0}} exit={{ opacity: 0 }} animate={{ translateX: 0, opacity: 1 }} className="space-y-6 pb-10">
                        <h2 className="text-gray-200 text-3xl md:text-5xl lg:text-7xl">{active.title}</h2>
                        <p className="text-gray-400 text-md md:text-lg">{active.text}</p>
                        <div className="grid grid-cols-2 gap-2 md:gap-4 text-gray-400 border-t border-gray-700 pt-10">
                            <div>
                                <h3 className="uppercase">avg. distance</h3>
                                <p>{active.distance}</p>
                            </div>
                            <div>
                                <h3 className="uppercase">est. travel time</h3>
                                <p>{active.travelTime}</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    </div>
  )
}
