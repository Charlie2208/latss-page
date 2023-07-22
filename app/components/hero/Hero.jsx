import SwiperComponent from "../swiper/SwiperComponent"


const Hero  = () => {
    const images = [
        { name: 'latss-en-vivo-mexico', link: 'https://imagenes-portafolio.s3.amazonaws.com/fotos-latss/_MG_4818.jpg' },
        { name: 'latss-foto-estudio', link: 'https://imagenes-portafolio.s3.amazonaws.com/fotos-latss/foto+latss+2.JPG' },
        { name: 'latss-en-vivo-cdmx', link: 'https://imagenes-portafolio.s3.amazonaws.com/fotos-latss/_MG_5380-2.jpg' },
      ];
    
    return(
        <>
            <SwiperComponent images={images} />
        </>
    )
}

export default Hero