
import Hero from "../Components/Hero"
import Advertisment from "../Components/adverisement"
import banner_1 from '../assets/images/banner_1.png'
import banner_2 from '../assets/images/banner_2.png'
import ProductsView from "../Components/ProductsView"
import Newsletter from "../Components/Newsletter"
import Affords from "../Components/Affords"
import Todayproducts from "../Components/Todayproducts"

function Home() {
  return (
     <div className="relative  overflow-x-hidden z-0">
    
     <Hero/>
          {/* <div className="container mx-auto flex m-20 ">
               <Advertisment 
               title={`New collection available now`}
               buttonTitle={`View all`}
               background='#FBB038'
               src={banner_1}
               />
               <Advertisment 
               title={`Redefining the
               modern design`}
               buttonTitle={`Check More`}
               background='#66ccff'
               src={banner_2}
               />
          </div> */}
     <div className="flex flex-col gap-10 container mx-auto">
     <div className='flex justify-between  mt-5 p-4'>
          <h1 className='text-2xl '>Selected just for you</h1>
          <button className='capitalize rounded-full border text-black px-2 py-2'>show More</button>
      </div>
          <ProductsView/>
     
     </div>
   <Affords/>
   <div className="flex flex-col gap-10 container mx-auto">
     <div className='flex justify-center  mt-5'>
          <h1 className='text-2xl '>Products in Today</h1>
          
      </div>
          <Todayproducts/>
     
     </div>
   <Newsletter backgroundColor={'#ffb703'} backgroundImage={"https://images.unsplash.com/photo-1556740772-1a741367b93e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"}/>
   </div>
  )
}

export default Home