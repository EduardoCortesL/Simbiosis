import { AiOutlineMail, AiOutlineInstagram, AiOutlineCalendar } from 'react-icons/ai'
import Link from "next/link";

let email = "/Correo.png";
let calendario = "/Calendar.png";
let instagram = "/instagram.png";


const Socials = () => {

    return (
        <div className=''>
            <div className=" flex items-center justify-center">
                <div className='flex gap-5'>
                    <Link href="https://www.instagram.com/simbiosis_estudiomx/"><img className="h-4" src={"https://drive.google.com/uc?export=view&id=1QOn1UXlU4IawlC20Jw5bC8vablbn90xc"} /></Link>
                    <Link href="mailto:info@simbiosis-estudio.com" > <img className="h-4" src={"https://drive.google.com/uc?export=view&id=16Zx711dwX4vGdus0DEYQELvP5ZBwhDtJ"} /></Link>
                    <Link href=""> <img className="h-4" src={"https://drive.google.com/uc?export=view&id=1EfOanJsIFQjaTEmzyjIt5UOd-Z6zLte_"} /></Link>
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