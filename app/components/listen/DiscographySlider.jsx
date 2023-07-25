'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './DiscographySlider.css';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const DiscographySlider = ({ albums }) => {
  return (
    <div className="swiper-container">
      {/* Botones de navegación */}
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>

      {/* Swiper */}
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="albumes-container-sw"
      >
        {albums.map((album, index) => (
          <SwiperSlide className="albumes-sl-sw" key={`albumes-${index}`}>
            <div className="album-card">
              <img className="images-albumes" src={album.cover} alt={album.title} />
              <a
                href={album.listenLink}
                target="_blank"
                rel="noopener noreferrer"
                className="listen-button"
              >
                Escucha
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DiscographySlider;



