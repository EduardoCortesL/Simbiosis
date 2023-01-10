import Gallery from '../components/imageGallery'
import NavBar from '../components/navbar'
import Socials from '../components/socials';
import Meta from '../components/head';

const Home = () => {
  return (
    <div className='flex flex-col h-screen'>
      <Meta></Meta>

      <NavBar />

      <div className='flex justify-center items-center  mt-8  md:-mt-24'>
        < Gallery />
      </div>

      <footer className=''>
        < Socials />
      </footer>
    </div>
  )
}

export default Home;