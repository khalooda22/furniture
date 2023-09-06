// import Carousel from "./Components/carousel"
import Navbar from './Components/Navbar'
import Home from "./pages/Home"
import Footer from './Components/Footer'
import Copyright from './Components/Copyright'
import ProductsPage from './pages/ProductsPage'

import { BrowserRouter,Routes,Route } from 'react-router-dom'


function App() {
  

  return (
    <BrowserRouter>
   <div className="relative">
    {/* <Hero/> */}
  <Navbar/>
  <Routes>
<Route path='/' element={<Home/>}/>
<Route path='products' element={<ProductsPage/>}/>
  
  </Routes>

  {/* <ProductsView/> */}
   
  
   {/* <ProductsView/> */}
   {/* <Newsletter backgroundImage={'https://images.unsplash.com/photo-1606744888344-493238951221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'}/> */}
   <Footer/>
   <Copyright/>
   {/* <Todayproducts/> */}

  
   </div>
    </BrowserRouter>
  )
}

export default App
