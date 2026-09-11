import './App.css'
import Banner from './components/banner/Banner'
import Footer from './components/footer/Footer'
import Nav from './components/nav/Nav'

function App() {

  return (
    <>
        <Nav></Nav>
      <div className='max-w-screen-xl mx-auto'>
        <Banner></Banner>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
