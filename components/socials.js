import { AiOutlineMail, AiOutlineInstagram, AiOutlineCalendar } from 'react-icons/ai'
import Link from "next/link";


const Socials = () => {

    return (
        <div className='text-simbiosis-gray text-lg rows-span-2'>
            <div className='flex justify-center items-center'>
            <Link className=" md:hidden" href="/">
                <img className="h-24" src={"https://drive.google.com/uc?export=view&id=1tuupmtxsqeWK-IgVIBHJYYlXKeN0vTgy"}></img>
            </Link>
            </div>
            <div className='flex justify-center items-center gap-5'>
                <a href=""> <AiOutlineMail /></a>
                <a href="" > <AiOutlineInstagram /></a>
                <a href=""><AiOutlineCalendar /></a>
            </div>
        </div>
    )

}

export default Socials;