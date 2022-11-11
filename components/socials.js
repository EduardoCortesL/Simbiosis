import {AiOutlineMail,AiOutlineInstagram,AiOutlineCalendar} from 'react-icons/ai'

const Socials = () => {

return (
    <div className='text-simbiosis-gray text-lg'>
        <div className='flex items-center gap-5'>
             <a href=""> <AiOutlineMail/></a> 
             <a href=""><AiOutlineInstagram/></a> 
             <a href=""><AiOutlineCalendar/></a> 
        </div>
    </div>
)

}

export default Socials;