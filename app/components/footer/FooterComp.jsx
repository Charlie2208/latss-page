import { AiOutlineInstagram, AiFillYoutube } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import styles from './footer.module.css'


const FooterComp = () =>{
    const today = new Date()
    return(
        <footer className={styles.container}>
            <div className={styles.icons}>
                <a href="https://www.instagram.com/losanimalestambiensesuicidan/" target="_blank" ><AiOutlineInstagram  size={32} /></a>
                <a href="https://www.facebook.com/losanimalestambiensesuicidan" target="_blank" ><BsFacebook size={32} /></a>
                <a href="https://www.youtube.com/@losanimalestambiensesuicidan" target="_blank" ><AiFillYoutube  size={32} />  </a> 
            </div>
            <p className={styles.year}>©{today.getFullYear()} Todos los derechos reservados</p>
        </footer>
    )
}

export default FooterComp