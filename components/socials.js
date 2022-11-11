import {AiOutlineMail,AiOutlineInstagram,AiOutlineCalendar} from 'react-icons/ai'

const Socials = () => {

return (
    <div className='text-simbiosis-gray text-lg'>
        <div className='flex items-center gap-5'>
             <a href="/home"> <AiOutlineMail/></a> 
             <a href="/home"><AiOutlineInstagram/></a> 
             <a href="/home"><AiOutlineCalendar/></a> 
        </div>
    </div>
)

}

export default Socials;