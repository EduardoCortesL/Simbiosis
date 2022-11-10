import Head from 'next/head'
import Image from 'next/image'
import Gallery from '../components/imageGallery'
import NavBar from '../components/navbar'

const Home = () => {
  return (
    <div>
      <top>
        <NavBar />
      </top>
      <body>
        < Gallery />
      </body>
    </div>
  )
}

export default Home;