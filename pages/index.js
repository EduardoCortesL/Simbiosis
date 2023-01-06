import Gallery from '../components/imageGallery'
import NavBar from '../components/navbar'
import Socials from '../components/socials';

const Home = () => {
  return (
    <div>
        <NavBar />
      <div className='flex justify-center items-center'>
        < Gallery />
      </div>
      <div className='flex justify-center items-center'>
        <footer>< Socials /> </footer>
        
      </div>
    </div>
  )
}

export default Home;