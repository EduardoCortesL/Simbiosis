const NavBar = () => {


    return (
        <div className="text-simbiosis-gray">
            <div className="h-36 mx-auto px-12 flex items-center justify-around ">
                <a className="text-2xl  hover:text-black transition-colors cursor-pointer">Logo</a>
                <div className="flex items-center gap-5 ">
                    <div className="group inline-block relative">
                        <button className="inline-flex items-center hover:text-black">
                            <span className="mr-1">ABOUT</span>
                        </button>
                        <ul className="absolute hidden pt-1 group-hover:block">
                            <li>
                                <a className="rounded-t hover:text-black py-2 px-4 block whitespace-no-wrap" href="#">PHILOSOPHY</a>
                            </li>
                            <li>
                                <a className=" hover:text-black py-2 px-4 block whitespace-no-wrap" href="#">TEAM</a>
                            </li>
                            <li>
                                <a className="rounded-b  hover:text-black py-2 px-4 block whitespace-no-wrap" href="#">AWARDS</a>
                            </li>
                        </ul>
                    </div>
                    <div><a className="hover:text-black transition-colors" href="">NEWS</a></div>
                    <div><a className="hover:text-black transition-colors" href="">STORY</a></div>
                    <div><a className="hover:text-black transition-colors" href="">DESIGN</a></div>
                    <div><a className="hover:text-black transition-colors" href="">CONTACT</a></div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;