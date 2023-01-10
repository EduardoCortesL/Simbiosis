import Link from "next/link";
import { useState, useEffect } from "react"
import {AiOutlineMenu} from 'react-icons/ai'

let logo_letras = "/simbiosis-logo.png";


const NavBar = () => {


    return (
        <div className="" >
            <div className=" flex items-center justify-center">
                <Link className="relative hover:text-black transition-colors cursor-pointer" href="/">
                    <img className="h-24" src={logo_letras} ></img>
                </Link>
                <div className="flex items-center gap-5 ">        
                    </div>
            </div>
        </div>
    )
}

export default NavBar;

/*
                      <div className="md:hidden group flex inline-block relative">
                            <button className="inline-flex items-center hover:text-black">
                                <span className="">< AiOutlineMenu/></span>
                            </button>
                            <ul className="absolute hidden pt-1 group-hover:block">
                                <li>
                                    <Link className="rounded-t hover:text-black py-2 px-4 block whitespace-no-wrap" href="/about">ABOUT</Link>
                                </li>
                                <li>
                                    <Link className=" hover:text-black py-2 px-4 block whitespace-no-wrap" href="/projects">PROJECTS</Link>
                                </li>
                                <li>
                                    <Link className="rounded-b  hover:text-black py-2 px-4 block whitespace-no-wrap" href="/contact">CONTACT</Link>
                                </li>
                            </ul>
                        </div>
                        <Link className="hidden md:flex hover:text-black transition-colors" href="/about">ABOUT</Link>
                        <Link className="hidden md:flex hover:text-black transition-colors" href="/projects">PROJECTS</Link>
                        <Link className="hidden md:flex hover:text-black transition-colors" href="/contact">CONTACT</Link>
 */