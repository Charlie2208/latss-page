import Title from '../Title'
import Dates from './Dates'
import styles from './show.module.css'

const Show = () => {
    return(
        <section id='shows' className={styles.container}>
            <Title title={'Shows'} />
            <div className={styles['img-container']}>
                <img src="https://imagenes-portafolio.s3.amazonaws.com/fotos-latss/afichemadreA.jpg" alt="" />
            </div>
            <Dates />
        </section>
    )
}

export default Show