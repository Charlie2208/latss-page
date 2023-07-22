'use client'

import { useState } from 'react'

import {GiHamburgerMenu} from 'react-icons/gi'
import {GrClose } from 'react-icons/gr'

import styles from './navbar.module.css'

const MenuMobile = ({links}) => {
    const [openMenuMobile, setOpenMenuMobile] = useState(false)

    const handleClickMenu = () =>{
        setOpenMenuMobile(!openMenuMobile)
    }

    return(
        <div>
        {/* Botón del ícono */}
        <div className={styles.burger} onClick={handleClickMenu}>
          {openMenuMobile ? <GrClose size={32} />  : <GiHamburgerMenu size={32} />}
        </div>
  
        {/* Menú móvil */}
        <div onClick={handleClickMenu} className={`${styles.menuMobile} ${openMenuMobile ? styles.menuOpen : ''}`}>
          {/* Aquí coloca los elementos del menú móvil */}
          <ul className={styles.mobileLinks}>
            {
            links.map((link, index) => {
                return(
                  <a href={link.link}><li key={`link-mobile-${index}`}>{link.text}</li></a>
                    
                )
            })
            }
          </ul>
        </div>
      </div>
    )
}

export default MenuMobile