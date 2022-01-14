import Gallery from './components/sections/home/Gallery'
import About from './components/sections/home/About'
import Banner from './components/sections/home/Banner'
import Footer from './components/sections/home/Footer'
import Services from './components/sections/home/Services'
import NavigationBar from './components/sections/NavigationBar'
import ContactUs from './components/sections/home/ContactUs'

function App() {
  return (
    <>
      <NavigationBar />
      <Banner />
      <Services />
      <About />
      <Gallery />
      <ContactUs />
      <Footer />
    </>
  )
}

export default App
