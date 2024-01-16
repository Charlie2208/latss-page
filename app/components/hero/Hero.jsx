import SwiperComponent from "../swiper/SwiperComponent"


const Hero  = () => {
    const images = [
        { name: 'latss-retrato-margan', link: 'https://imagenes-portafolio.s3.amazonaws.com/fotos-latss/27.12_LATSS5542.jpg' },
        { name: 'latss-retrato-charlie', link: 'https://imagenes-portafolio.s3.amazonaws.com/fotos-latss/27.12_LATSS5571.jpg' },
        { name: 'latss-retrato-fernando', link: 'https://imagenes-portafolio.s3.amazonaws.com/fotos-latss/27.12_LATSS5596.jpg' },
        { name: 'latss-retrato-nacho', link: 'https://imagenes-portafolio.s3.amazonaws.com/fotos-latss/27.12_LATSS5554.jpg' },
        { name: 'latss-retrato-pau', link: 'https://imagenes-portafolio.s3.amazonaws.com/fotos-latss/27.12_LATSS5633.jpg' },
        { name: 'latss-retrato-chito', link: 'https://imagenes-portafolio.s3.amazonaws.com/fotos-latss/27.12_LATSS5531.jpg' },
      ];
    
    return(
        <>
            <SwiperComponent images={images} />
        </>
    )
}

export default Hero