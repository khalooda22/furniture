
import Product from "./Product"
import Carousel from "./carousel"
// import { chlothes } from "../Data"
import { Link } from "react-router-dom"
import { products } from "../Data"
function Todayproducts() {
     console.log(products.furniture)
        
     
  return (
    <div className="">
          <Carousel slide1={products.chlothes.filter(product=>product.id<=4).map(product=>{
          return(
              <Link key={product.id} to={`productdetail/${product.category}/${product.id}`}>
               <Product color={product.color} 
               name={product.title}
               //  href={product.href}
               imageSrc={product.imageSrc}
               //  imageAlt={product.imageAlt} 
               sale={product.sale}
               percent={product.percent}
               price={product.price}
               id={product.id} 
               key={product.id}/>
               </Link>
               )
     })} slide2={products.furniture.map(product=>{
          return(
            <Link key={product.id} to={`productdetail/${product.category}/${product.id}`}>

               <Product color={product.color} 
               name={product.name}
               href={product.href}
               imageSrc={product.imageSrc}
               imageAlt={product.imageAlt} 
               price={product.price}
               id={product.id} 
               key={product.id}/>
               </Link>
               )
     })} slide3={products.furniture.map(product=>{
          return(
            <Link key={product.id} to={`productdetail/${product.category}/${product.id}`}>

               <Product color={product.color} 
               name={product.name}
               href={product.href}
               imageSrc={product.imageSrc}
               imageAlt={product.imageAlt} 
               price={product.price}
               id={product.id} 
               key={product.id}/>
               </Link>
               )
     })} />
              
    </div>
  )
}

export default Todayproducts
