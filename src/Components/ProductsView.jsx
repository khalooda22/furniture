
import { Link } from "react-router-dom"
import Product from "./Product"
import Carousel from "./carousel"
import { products } from "../Data"
function ProductsView() {
    
        
     
  return (
    <div className="">
          <Carousel slide1={products.furniture.map(product=>{
          return(
            <Link key={product.id} to={`/productdetail/${product.category}/${product.id}`} >
            <Product color={product.color} 
            name={product.name}
            href={product.href}
            sale={product.sale}
            percent={product.percent}
            imageSrc={product.imageSrc}
            imageAlt={product.imageAlt} 
            price={product.price}
            id={product.id} 
            key={product.id}/>
            </Link>
               )
     })} slide2={products.furniture.map(product=>{
          return(
            <Link key={product.id} to={`/productdetail/${product.category}/${product.id}`} >
               <Product color={product.color} 
               name={product.name}
               href={product.href}
               sale={product.sale}
               percent={product.percent}
               imageSrc={product.imageSrc}
               imageAlt={product.imageAlt} 
               price={product.price}
               id={product.id} 
               key={product.id}/>
                </Link>
               )
     })} slide3={products.furniture.map(product=>{
          return(
            <Link key={product.id} to={`/productdetail/${product.category}/${product.id}`} >
               <Product color={product.color} 
               sale={product.sale}
               percent={product.percent}
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

export default ProductsView
