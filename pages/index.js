import Gallery from '../components/imageGallery'
import NavBar from '../components/navbar'
import Socials from '../components/socials';

const Home = () => {
  return (
    <div className=''>
      <NavBar />
        <div className='flex justify-center items-center  mt-12  md:-mt-24'>
          < Gallery />
        </div>
        <div className=''>
          < Socials />
        </div>
      </div>
  )
}

export default Home;