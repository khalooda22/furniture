
import Product from "./Product"
import Carousel from "./carousel"
function ProductsView() {
     const products=[ {
          id: 1,
          name: 'green sofa',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '$300',
          color: 'green',
        },
        {
          id: 2,
          name: 'baby blue chair',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1634643836960-c345b3c3e998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '$350',
          color: 'Blue',
        },
        {
          id: 3,
          name: 'yogurt sofa',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1512212621149-107ffe572d2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '$400',
          color: 'Yogurt',
        },
        {
          id: 4     ,
          name: 'brown sofa',
          href: '#',
          imageSrc: 'https://plus.unsplash.com/premium_photo-1673548916754-aefad0c0955a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '$655',
          color: 'Brown',
        }
     ]
        
     
  return (
    <div className="">
          <Carousel slide1={products.map(product=>{
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
     })} slide2={products.map(product=>{
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
     })} slide3={products.map(product=>{
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

export default ProductsView
