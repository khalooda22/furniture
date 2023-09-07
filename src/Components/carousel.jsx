import  { useRef} from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Hero from './Hero';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



 
import '../Swiper.css'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// eslint-disable-next-line react/prop-types
function Carousel({slide1,slide2,slide3}) {
     const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className='h-[480px] mb-14'>
      <Swiper
        spaceBetween={35}
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
        className="mySwiper "
      >
        <SwiperSlide className='flex gap-5'>{slide1}</SwiperSlide>
        <SwiperSlide className='flex gap-5' >{slide2}</SwiperSlide>
        <SwiperSlide className='flex gap-5'>{slide3}</SwiperSlide>
        
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  )
}

export default Carousel
