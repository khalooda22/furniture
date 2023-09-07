// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { products } from '../Data';
import Product from './Product';
import { Link } from 'react-router-dom';

import '../styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Carousel() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper text-black"
      >
        
        <SwiperSlide><div className='text-black flex  lg:flex-row md:flex-row gap-2'>{products.furniture.map(product=>{
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
     })}</div></SwiperSlide>
     <SwiperSlide><div className='text-black flex  lg:flex-row gap-2'>{products.chlothes.filter((product=>product.id<=4)).map(product=>{
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
     })}</div></SwiperSlide>
    
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
