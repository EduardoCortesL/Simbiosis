import { AiOutlineMail, AiOutlineInstagram, AiOutlineCalendar } from 'react-icons/ai'
import Link from "next/link";


const Socials = () => {

    return (
        <div className='text-simbiosis-gray text-lg rows-span-2 relative inset-x-0 '>
            <div className=' md:hidden flex justify-center items-center'>
                <Link  href="/">
                    <img className="h-24" src={"https://drive.google.com/uc?export=view&id=1tuupmtxsqeWK-IgVIBHJYYlXKeN0vTgy"}></img>
                </Link>
            </div>
            <div className="mx-auto px-12 flex items-center justify-around ">
                <div className='flex gap-5'>
                    <Link href=""> <img className="h-8" src={"https://drive.google.com/uc?export=view&id=1ErlgoUha1ic8aUaQPbAarzZxZZmR6RVX"}/></Link>
                    <Link href="" > <img className="h-8" src={"https://drive.google.com/uc?export=view&id=1zdstv4Z9K6UI1l1If7_QWO6Imw7dgh1Y"}/></Link>
                    <Link href=""><img className="h-8" src={"https://drive.google.com/uc?export=view&id=1nzZaXzutznFSO6ch7bZNM3Ga4pZG7-PT"}/></Link>
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