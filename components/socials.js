import { AiOutlineMail, AiOutlineInstagram, AiOutlineCalendar } from 'react-icons/ai'
import Link from "next/link";

let email = "/Correo.png";
let calendario = "/Calendar.png";
let instagram = "/instagram.png";


const Socials = () => {
    return (
        <div className='flex flex-col md:flex-row justify-center items-center h-full md:mb-8'>
            <div className='flex flex-col md:flex-row gap-5 text-center text-white font-poppins'>
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