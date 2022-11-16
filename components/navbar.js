import { useState, useEffect } from "react"
import {AiOutlineMenu} from 'react-icons/ai'


const NavBar = () => {


    return (
        <div className="text-simbiosis-gray text-xs font-Roboto" >
            <div className="h-36 mx-auto px-12 flex items-center justify-around ">
                <a className="relative hover:text-black transition-colors cursor-pointer" href="/">
                    <img className="h-5" src={"https://firebasestorage.googleapis.com/v0/b/bito-b4105.appspot.com/o/Simbiosis%2FLogo-removebg-preview.png?alt=media&token=d3294d5c-571f-4bef-a907-2ac6fd987d31"}></img>
                </a>
                    <div className="flex items-center gap-5 ">
                        <div className="md:hidden group flex inline-block relative">
                            <button className="inline-flex items-center hover:text-black">
                                <span className="">< AiOutlineMenu/></span>
                            </button>
                            <ul className="absolute hidden pt-1 group-hover:block">
                                <li>
                                    <a className="rounded-t hover:text-black py-2 px-4 block whitespace-no-wrap" href="/about">ABOUT</a>
                                </li>
                                <li>
                                    <a className=" hover:text-black py-2 px-4 block whitespace-no-wrap" href="/projects">PROJECTS</a>
                                </li>
                                <li>
                                    <a className="rounded-b  hover:text-black py-2 px-4 block whitespace-no-wrap" href="/contact">CONTACT</a>
                                </li>
                            </ul>
                        </div>
                        <a className="hidden md:flex hover:text-black transition-colors" href="/about">ABOUT</a>
                        <a className="hidden md:flex hover:text-black transition-colors" href="/projects">PROJECTS</a>
                        <a className="hidden md:flex hover:text-black transition-colors" href="/contact">CONTACT</a>
                    </div>
            </div>
        </div>
    )
}

export default NavBar;