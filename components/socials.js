import { AiOutlineMail, AiOutlineInstagram, AiOutlineCalendar } from 'react-icons/ai'

let email = "/Correo.png";
let calendario = "/Calendar.png";
let instagram = "/instagram.png";

import Link from "next/link";

const Socials = () => {
    return (
        <div className='flex justify-center items-center md:mb-8'>
            <div className='flex flex-col md:flex-row gap-2 text-center text-white font-poppins text-xs md:text-sm'>
                <Link href="https://www.instagram.com/simbiosis_estudiomx/">simbiosis_estudiomx</Link>
                <Link href="mailto:info@simbiosis-estudio.com">info@simbiosis-estudio.com</Link>
            </div>
        </div>
    );
}

export default Socials;





/*
flex justify-center items-center gap-5
*/

/*
md:mt-40 mt-24
*/