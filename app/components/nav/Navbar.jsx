import MenuMobile from './MenuMobile'
import styles from './navbar.module.css'

const NavBar = () => {
    const links = [
        {link:'/', text:'Home'},
        {link:'#shows', text:'Shows'},
        {link:'#listen', text:'Escúchanos'},
    ]
    return(
        <nav className={styles.container}>
            <div className={styles['logo-container']}>
                <img width='100px' src="https://imagenes-portafolio.s3.amazonaws.com/fotos-latss/logolatss.png" alt="" />
            </div>
            <div className={styles['links-container']}>
                {
                    links.map((link, index)=>{
                        return(
                            <div key={`links---${index}`}>
                                <a href={link.link}>{link.text}</a>
                            </div>
                        )
                    })
                }
            </div>
            <div className={styles.burger}>
                <MenuMobile links={links} />
            </div>
        </nav>
    )
}

export default NavBar