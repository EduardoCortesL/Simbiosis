import { useState, useEffect, use } from "react";

import AOS, { refresh } from 'aos';
import 'aos/dist/aos.css';

let one = "https://firebasestorage.googleapis.com/v0/b/bito-b4105.appspot.com/o/Simbiosis%2Filtun-huseynli-rfklsTwIYBM-unsplash.jpg?alt=media&token=25fe2d93-ca8b-4478-ac8e-7606cce81194";
let two = 'https://firebasestorage.googleapis.com/v0/b/bito-b4105.appspot.com/o/Simbiosis%2Fjoel-filipe-RFDP7_80v5A-unsplash.jpg?alt=media&token=083ed177-efb1-4706-b7d9-c3c56e3c1c16';
let tree = "https://firebasestorage.googleapis.com/v0/b/bito-b4105.appspot.com/o/Simbiosis%2Fjonas-jacobsson-FxGIEI0dWAM-unsplash.jpg?alt=media&token=2019aecb-402d-4744-be08-50b856482bf1";
let four = "https://firebasestorage.googleapis.com/v0/b/bito-b4105.appspot.com/o/Simbiosis%2Flance-anderson-QdAAasrZhdk-unsplash.jpg?alt=media&token=8dae7b3c-ab76-4ffa-8860-993d8ba1fb03";
let five = "https://firebasestorage.googleapis.com/v0/b/bito-b4105.appspot.com/o/Simbiosis%2Fricardo-gomez-angel-opFPVxMRpP8-unsplash.jpg?alt=media&token=0813af00-b0df-41ec-8a24-decb56143eea";

const images = [one, two, tree, four, five];
const descriptions = ["image 1", "picture 2", "foto 3", "pic 4", "imagen 5"]

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
    
            }, 5000)
            return () => clearInterval(intervalId);
        }, [currentIndex])
    

/*
    const [image, setImage] = useState(one);
    const [imageIndex, setImageIndex] = useState(0);
    let i = 0;
    const maxImgArray = images.length - 1;
    useEffect(() => {
        let interval = null;
        if (i !== maxImgArray) {
            interval = setInterval(() => {
                let image = images[imageIndex];
                const attr = document.getElementById("moving-image");
                attr.src = image;
                // update the img index to state
                setImageIndex((imageIndex) =>
                    imageIndex === maxImgArray ? 0 : imageIndex + 1
                );
                // update the src in state.
                setImage(attr.src);
            }, 5000);
        }
        // When our code runs and reruns for every render, useEffect also cleans up after itself using the cleanup function.
        // Here we clear the interval to remove the effects that could happen with state change while interval.
        return () => clearInterval(interval);
    }, [image, imageIndex]);
    */

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])


    return (
        <div className=""> 
                <a href="/">
                    <img className=" z-0 h-[619px] object-cover" src={images[currentIndex]} />
                    <div className="h-max-36 text-justify-left pl-12 relative -top-8 opacity-0 hover:opacity-100 z-10 text-lg text-white">{descriptions[currentIndex]}</div>
                </a>
        </div>
    )


}

export default Gallery;
