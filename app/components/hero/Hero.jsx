import SwiperComponent from "../swiper/SwiperComponent"


const Hero  = () => {
    const images = [
        { name: 'latss-retrato-margan', link: 'https://imagenes-portafolio.s3.amazonaws.com/fotos-latss/retrato_margan.jpg' },
        { name: 'latss-retrato-charlie', link: 'https://imagenes-portafolio.s3.amazonaws.com/fotos-latss/retrato_charlie.jpg' },
        { name: 'latss-retrato-fernando', link: 'https://imagenes-portafolio.s3.amazonaws.com/fotos-latss/retrato_taka.jpg' },
        { name: 'latss-retrato-nacho', link: 'https://imagenes-portafolio.s3.amazonaws.com/fotos-latss/27.12_LATSS5554.jpg' },
        { name: 'latss-retrato-pau', link: 'https://imagenes-portafolio.s3.amazonaws.com/fotos-latss/retrato_pau.jpg' },
        { name: 'latss-retrato-chito', link: 'https://imagenes-portafolio.s3.amazonaws.com/fotos-latss/retrato_chito.jpg' },
      ];
    
    return(
        <>
            <SwiperComponent images={images} />
        </>
    )
}

export default Hero