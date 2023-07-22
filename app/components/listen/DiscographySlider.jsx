'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import './DiscographySlider.css';

const DiscographySlider = ({ albums }) => {
  return (
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
      modules={[EffectCoverflow, Pagination]}
      className="albumes-container-sw"
    >
      {albums.map((album, index) => (
        <SwiperSlide className='albumes-sl-sw' key={`albumes-${index}`}>
          <div className="album-card">
            <img className='images-albumes' src={album.cover} alt={album.title} />
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
  );
};

export default DiscographySlider;


