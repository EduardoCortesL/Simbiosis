import { AiOutlineMail, AiOutlineInstagram, AiOutlineCalendar } from 'react-icons/ai'
import Link from "next/link";

let email = "/Correo.png";
let calendario = "/Calendar.png";
let instagram = "/instagram.png";


const Socials = () => {

    return (
        <div className='flex-col md:mt-40 mt-40'>
            <div className=" flex items-center justify-center">
                <div className='flex gap-5'>
                    <Link href="https://www.instagram.com/simbiosis_estudiomx/"><img className="h-4" src={instagram} /></Link>
                    <Link href="mailto:info@simbiosis-estudio.com" > <img className="h-4" src={email} /></Link>
                    <Link href=""> <img className="h-4" src={calendario} /></Link>
                </div>
                <div className="flex items-center gap-5 ">
                </div>
            </div>
        </div>
    )

}

export default Socials;

/*
flex justify-center items-center gap-5
*/

/*

*/