const NavBar = () => {


    return (
        <div class="bg-white text-black">
            <div class="h-36 mx-auto px-12 flex items-center justify-around ">
                <a class="text-2xl  hover:text-cyan-500 transition-colors cursor-pointer">Logo</a>
                <div class="flex items-center gap-5 ">
                    <div >
                        <button> Picale aqui</button>
                        <ul class=" absolute hidden block text-right text-gray-900">
                            <li><a href="#" class="block px-3 py-2 hover:bg-gray-200">1</a></li>
                            <li><a href="#" class="block px-3 py-2 hover:bg-gray-200">2</a></li>
                            <li><a href="#" class="block px-3 py-2 hover:bg-gray-200">3</a></li>
                            <li><a href="#" class="block px-3 py-2 hover:bg-gray-200">4</a></li>
                        </ul>
                    </div>
                    <div><a class="hover:text-cyan-500 transition-colors" href="">divnk 1</a></div>
                    <div><a class="hover:text-cyan-500 transition-colors" href="">divnk 2</a></div>
                    <div><a class="hover:text-cyan-500 transition-colors" href="">divnk 3</a></div>
                    <div><a class="hover:text-cyan-500 transition-colors" href="">divnk 4</a></div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;