import Title from '../Title'
import DiscographySlider from './DiscographySlider'
import styles from './listen.module.css'

const Listen = () => {

    const albums = [
        {cover:'https://imagenes-portafolio.s3.amazonaws.com/fotos-latss/balneario_72dpi(BAJA).jpg', title:'Balneario',listenLink:'https://songwhip.com/losanimalestambiensesuicidan/balneario'},
        {cover:'https://imagenes-portafolio.s3.amazonaws.com/fotos-latss/alnorte.jpg',title:'Al norte',listenLink:'https://songwhip.com/losanimalestambiensesuicidan/al-norte'},
        {cover:'https://imagenes-portafolio.s3.amazonaws.com/fotos-latss/portada-lagrimal.jpg',title:'Lagrimal',listenLink:'https://songwhip.com/losanimalestambiensesuicidan/lagrimal'}
    ]
    return(
        <section id='listen' className={styles.container}>
            <Title title={'Escúchanos'} />
            <div>
                <DiscographySlider albums={albums} />
            </div>
        </section>
    )
}

export default Listen