import { AiOutlineMail, AiOutlineInstagram, AiOutlineCalendar } from 'react-icons/ai'
import Link from "next/link";


const Socials = () => {

    return (
        <div className='text-simbiosis-gray text-lg '>
            <Link  className="items-center md:hidden" href="/">
                <img className="h-24" src={"https://drive.google.com/uc?export=view&id=1tuupmtxsqeWK-IgVIBHJYYlXKeN0vTgy"}></img>
            </Link>
            <div className='flex items-center gap-5'>
                <a href=""> <AiOutlineMail /></a>
                <a href="" > <AiOutlineInstagram /></a>
                <a href=""><AiOutlineCalendar /></a>
            </div>
        </div>
    )

}

export default Socials;