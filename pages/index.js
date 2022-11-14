import Gallery from '../components/imageGallery'
import NavBar from '../components/navbar'
import Socials from '../components/socials';

const Home = () => {
  return (
    <div>
        <NavBar />
      <div className='flex justify-center items-center pt-8'>
        < Gallery />
      </div>
      <div className='flex justify-center items-center pt-8'>
        < Socials />
      </div>
    </div>
  )
}

export default Home;