import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { ISlide, slides } from '../../utils/hero-helper';

const Hero = () => {
  return (
    <section id="home" className="hidden md:block w-screen h-full relative">
      <div className="relative w-full h-full">
        <div className="z-10 absolute inset-0 flex flex-col justify-center items-center text-center gap-3">
          <h1 className="text-4xl md:text-5xl font-bold">Mundo Podcast</h1>
          <p className="text-md md:text-lg font-medium">
            Sua principal plataforma para ouvir podcast e ler artigos
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 py-3 px-4 md:py-4 md:px-5 font-bold text-white rounded-md">VER PODCAST</button>
        </div>

        <div className="bg-white opacity-40 h-full">
          <Swiper
              spaceBetween={50}
              slidesPerView={1}
              loop={true}
              centeredSlides={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: true,
              }}
              modules={[Autoplay, Pagination, Navigation]}
            >
            {slides.map((slide: ISlide, index: number) => (
              <SwiperSlide key={index}>
                <img 
                  className="w-full h-full object-cover" 
                  src={slide.src} 
                  alt={slide.alt} 
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Hero;
