import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../component_pack/Navbar'

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayout
