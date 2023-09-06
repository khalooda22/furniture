
import Product from "./Product"
import Carousel from "./carousel"
function Todayproducts() {
     const Productsoftoday=[ {
          id: 1,
          name: 'green sofa',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '$300',
          color: 'green',
        },
        {
          id: 2,
          name: 'baby blue chair',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1987&q=80',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '$350',
          color: 'Blue',
        },
        {
          id: 3,
          name: 'yogurt sofa',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1619596662481-085e45d69762?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '$400',
          color: 'Yogurt',
        },
        {
          id: 4     ,
          name: 'brown sofa',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1598300056393-4aac492f4344?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2034&q=80',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '$655',
          color: 'Brown',
        }
     ]
        
     
  return (
    <div className="">
          <Carousel slide1={Productsoftoday.map(product=>{
          return(

               <Product color={product.color} 
               name={product.name}
               href={product.href}
               imageSrc={product.imageSrc}
               imageAlt={product.imageAlt} 
               price={product.price}
               id={product.id} 
               key={product.id}/>
               )
     })} slide2={Productsoftoday.map(product=>{
          return(

               <Product color={product.color} 
               name={product.name}
               href={product.href}
               imageSrc={product.imageSrc}
               imageAlt={product.imageAlt} 
               price={product.price}
               id={product.id} 
               key={product.id}/>
               )
     })} slide3={Productsoftoday.map(product=>{
          return(

               <Product color={product.color} 
               name={product.name}
               href={product.href}
               imageSrc={product.imageSrc}
               imageAlt={product.imageAlt} 
               price={product.price}
               id={product.id} 
               key={product.id}/>
               )
     })} />
              
    </div>
  )
}

export default Todayproducts
