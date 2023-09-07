import Choices from "../Components/Choices"
import Product from "../Components/Product"
// import Newsletter from "../Components/Newsletter"
// Accesskey:py_cvN3K89iUWdngrsiR_GBbADzu3FfOwVFX3AaTMhw
//secretkey:YqkXWQO7TVJHpJFp5srSOHKNE9GSwsuFmK7NDa6-0Jo
import { products } from "../Data"
import Dropdown from "../Components/Dropdown"
import Checkboxes from "../Components/Checkboxes"
import { Link } from "react-router-dom"
function ProductsPage() {
  return (
 <div>
     <div className="p-11"></div>
     <div className="flex flex-col-reverse  lg:flex-row md:flex-row items-center lg:items-start md:items-start justify-between container  lg:mx-auto md:mx-auto ">
          <div className="w-96 h-full  mt-7 flex flex-col items-center gap-5 "> 
          <Dropdown title={"Product Type"}>
          <Checkboxes title='T-shirt'/>
     <Checkboxes title='Sweet-shirt'/>
     <Checkboxes title='Tank-Tops'/>
     <Checkboxes title='Dress-shirts'/>
          </Dropdown>
          <Dropdown title={"price"}></Dropdown>
          <Dropdown title={"Collection"}></Dropdown>
          <Dropdown title={"Size"}></Dropdown>
          <Dropdown title={"Color"}></Dropdown>




          
          </div>
          <div className="">
          <Choices/>
          <div className="  p-5  flex justify-center lg:items-start md:items-start flex-wrap gap-10">
          { products.chlothes.map((product)=>{
               return <Link key={product.id} to={`/productdetail/${product.category}/${product.id}`}><Product sale={product.sale} percent={product.percent} color={product.color} imageSrc={product.imageSrc} key={product.id}price={product.price}name={product.name} imageAlt={product.title}/></Link>
          })}
          </div>
           </div>
     </div>
 </div>
  )
}

export default ProductsPage
