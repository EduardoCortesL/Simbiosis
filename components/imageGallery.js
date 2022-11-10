import { useState, useEffect } from "react";
import Image from "next/image";

let one = "https://firebasestorage.googleapis.com/v0/b/bito-b4105.appspot.com/o/logo_color.png?alt=media&token=bc69527a-09cf-48e5-8789-d861288f7443";
let two= 'https://firebasestorage.googleapis.com/v0/b/bito-b4105.appspot.com/o/karen.jpg?alt=media&token=b3acb614-81d1-470d-8983-a6b805b5388f';
let tree = "https://firebasestorage.googleapis.com/v0/b/bito-b4105.appspot.com/o/VBlocks_black-no_bg.png?alt=media&token=c30034e5-d515-4aa5-a21d-7a5869dbc184";

const images = [one, two, tree];

const Gallery = () => {

        /** add effects to transition and add quotes
         * add restringing sizes 
         * **/
        

    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            if(currentIndex === (images.length - 1)) {
                setCurrentIndex(0);
            } 
            else {
                 setCurrentIndex(currentIndex + 1);
            }
        
        }, 5000)
        return () => clearInterval(intervalId);
    }, [currentIndex])


    return (
        <div>
            <div className="">
                <img className="mx-auto" src={images[currentIndex]} />
            </div>
        </div>
    )
}

export default Gallery;