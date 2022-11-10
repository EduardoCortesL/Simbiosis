import Head from 'next/head'
import Image from 'next/image'
import Gallery from '../components/imageGallery'
import NavBar from '../components/navbar'

const Home = () => {
  return (
    <>
      <top>
        <NavBar />
      </top>
      <div className='flex justify-center items-center pt-8'>
        < Gallery />
      </div>
    </>
  )
}

export default Home;