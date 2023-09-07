
import Todayproducts from "../Components/Todayproducts";
import { products } from "../Data"
import { useParams } from "react-router-dom"
function ProductView() {
     const {id,category}=useParams();
//   
//      console.log(product)
const products2=[...products.furniture,...products.chlothes]
const product=products2.filter((product)=>{
              return (product.id==id &&product.category===category)
          })
     
  return (
     <div className="pt-28">

    <div className=" container  mx-auto flex-shrink flex lg:flex-row md:flex-col flex-col gap-28">
     
     <div className="flex gap-5 flex-shrink p-2 ">
     <img  className='w-24 hidden lg:flex h-24'src={product[0].imageSrc} alt="" />
      <img  className='lg:w-[80%] min-w-[70%] w-[100%] flex-grow h-96'src={product[0].imageSrc} alt="" />
     </div>
     <div className="flex flex-col gap-5 p-2  flex-grow ">
       {product[0].sale && <div className=" text-white bg-red-500 rounded-full w-14      py-1 px-4 capitalize">sale</div>}
          <h1 className="capitalize text-4xl">{product[0].name}</h1>
       <div className="flex gap-28 "> 
       <div className="flex gap-5 ">
       { product[0].sale && <h1 className="capitalize text-4xl text-red-500">{product[0].price}</h1>}
       {product[0].sale==false&&<h1 className="capitalize text-4xl ">{product[0].price}</h1>}
       { product[0].sale && <h1 className="capitalize text-4xl text-gray-500 line-through">{product[0].previousprice}</h1>}
        </div>
       <h1 className="text-lg font-semibold self-center">{product[0].brand}</h1>
       </div>



     </div>
    </div>
    
    <div className="container mx-auto">
    <div className='flex justify-between  mt-5 p-4'>
          <h1 className='text-2xl '>Selected just for you</h1>
          <button className='capitalize rounded-full border text-black px-2 py-2'>show More</button>
      </div>
     <Todayproducts/>

    </div>
    </div>
  )
}

export default ProductView
