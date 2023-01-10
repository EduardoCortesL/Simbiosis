import Gallery from '../components/imageGallery'
import NavBar from '../components/navbar'
import Socials from '../components/socials';
import Meta from '../components/head';

const Home = () => {
  return (
    <div className=''>
      <Meta></Meta>

      <NavBar />

      <div className='flex justify-center items-center  mt-8  md:-mt-24'>
        < Gallery />
      </div>

      <div className=''>
        < Socials />
      </div>
    </div>
  )
}

export default Home;