import Choices from "../Components/Choices"
import Product from "../Components/Product"
import Newsletter from "../Components/Newsletter"
// Accesskey:py_cvN3K89iUWdngrsiR_GBbADzu3FfOwVFX3AaTMhw
//secretkey:YqkXWQO7TVJHpJFp5srSOHKNE9GSwsuFmK7NDa6-0Jo
import { chlothes } from "../Data"
import Dropdown from "../Components/Dropdown"
import Checkboxes from "../Components/Checkboxes"
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
          { chlothes.map((product,index)=>{
               return <Product color={'black'} imageSrc={product.imgsrc} key={index}price={product.price}name={product.title} imageAlt={product.title}/>
          })}
          </div>
           </div>
     </div>
     <Newsletter backgroundColor={'#4361ee'} backgroundImage={'https://images.unsplash.com/photo-1606744888344-493238951221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'}/>
 </div>
  )
}

export default ProductsPage
