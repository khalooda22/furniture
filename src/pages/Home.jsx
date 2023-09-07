import Hero from "../Components/Hero"
import Affords from "../Components/Affords"
import Carousel from "../Components/carousel"

function Home() {
  return (
     <div className="relative border">
     <Hero/>
     <div className="flex flex-col gap-10 lg:container md:container   lg:mx-auto md:mx-auto ">
     <div className='flex justify-between  mt-5 p-4'>
          <h1 className='text-2xl '>Selected just for you</h1>
          <button className='capitalize rounded-full border text-black px-2 py-2'>show More</button>
      </div>
      <div className=" lg:block md:flex">
          <Carousel/>    
      </div>
     </div>
   <Affords/>
   <div className="flex flex-col gap-10 container mx-auto">
     <div className='flex justify-center  mt-5'>
          <h1 className='text-2xl '>Products in Today</h1>
      </div>
          <Carousel/>
     </div>
   </div>
  )
}

export default Home
