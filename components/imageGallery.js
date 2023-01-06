import { useState, useEffect, use } from "react";



let one = "https://drive.google.com/uc?export=view&id=1wIGVE9l_zfutv50iW25EbEL4N_uVBBO3";
let two = 'https://drive.google.com/uc?export=view&id=1WjmfmgcQ6SibYUFy8n4ma6WvWX2xeRF-';
let tree = "https://drive.google.com/uc?export=view&id=1mlRpgS182UFnh548r8iWOaPoM5dUONfQ";


const images = [one, two, tree];

const Gallery = () => {

    /** add effects to transition and add quotes
     * add restringing sizes 
     * **/

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (currentIndex === images.length - 1) {
                setCurrentIndex(0);

            }
            else {
                setCurrentIndex(currentIndex + 1);
            }

        }, 3000)
        return () => clearInterval(intervalId);

    }, [currentIndex])



    return (
        <div className="" >
            <a href="">
                <img className=" z-0 h-[619px] max-md:h-[219px] object-cover" src={images[currentIndex]} />
            </a>
        </div>
    )


}

export default Gallery;

/*  
const descriptions = ["image 1", "picture 2", "foto 3", "pic 4", "imagen 5"]
                <div className="h-max-36 font-roboto text-justify-left pl-12 relative -top-8 opacity-0 hover:opacity-100 z-10 text-lg text-white">{descriptions[currentIndex]}</div>

*/