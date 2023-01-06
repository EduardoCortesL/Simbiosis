import Gallery from '../components/imageGallery'
import NavBar from '../components/navbar'
import Socials from '../components/socials';

const Home = () => {
  return (
    <div className=''>
        <NavBar />
        <div className='flex h-screen'>
      <div className='flex justify-center items-center mx-auto my-auto  md:-mt-20'>
        < Gallery />
      </div>
      </div>
      <div className='fixed inset-x-0 bottom-8'>
        < Socials />     
      </div>
    </div>
  )
}

export default Home;