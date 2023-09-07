// import Carousel from "./Components/carousel"
import Navbar from './Components/Navbar'
import Home from "./pages/Home"
import Footer from './Components/Footer'
import ProductsPage from './pages/ProductsPage'
import Newsletter from './Components/Newsletter'

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ProductView from './pages/ProductView'


function App() {
  

  return (
    <BrowserRouter>
   <div className="relative ">
  <Navbar/>
  <Routes>
<Route path='/' element={<Home/>}/>
<Route path='products' element={<ProductsPage/>}/>
<Route path='/productdetail/:category/:id' element={<ProductView/>}></Route>


  </Routes>

  {/* <ProductsView/> */}
   
  
   {/* <ProductsView/> */}
   <Newsletter backgroundImage={'https://images.unsplash.com/photo-1606744888344-493238951221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'}/>
   <Footer/>
   {/* <Copyright/>
   <Todayproducts/> */}

  
   </div>
    </BrowserRouter>

  )
}

export default App
