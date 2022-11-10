const NavBar = () => {


    return (
        <div className="text-simbiosis-gray">
            <div className="h-36 mx-auto px-12 flex items-center justify-around ">
                <a className="flex relative hover:text-black transition-colors cursor-pointer">
                    <img className="h-4" src={"https://firebasestorage.googleapis.com/v0/b/bito-b4105.appspot.com/o/Simbiosis%2FLogo-removebg-preview.png?alt=media&token=d3294d5c-571f-4bef-a907-2ac6fd987d31"}></img>
                </a>
                <div className="flex items-center gap-5 ">
                    <div className="group inline-block relative">
                        <button className="inline-flex items-center hover:text-black">
                            <span className="">ABOUT</span>
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