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
      <div className='pt-44'>
        < Gallery />
      </div>
    </>
  )
}

export default Home;