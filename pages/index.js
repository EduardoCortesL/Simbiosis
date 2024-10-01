import Gallery from '../components/imageGallery'
import NavBar from '../components/navbar'
import Socials from '../components/socials';
import Meta from '../components/head';
import Landing from '../components/landing';

const Home = () => {
  return (
    <div className='flex flex-col h-screen'>
      <Meta></Meta>
      
      <div className='flex justify-center items-center  mt-4  md:-mt-40'>
        <Landing />
      </div>

      <footer className=''>
        < Socials />
      </footer>
    </div>
  )
}

export default Home;