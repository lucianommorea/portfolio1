import React from 'react'
import style from './Header.module.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Header() {
  return (
  <>
    <header>
      <div className={style.header}>
        <ul className={style.menu}>
          <li> Inicio </li>
          <li> Acerca de mí </li>
          <li> Proyectos </li>
          <li> Skills </li>
          <li> Contacto </li>
        </ul>
        <div className={style.menu2}>
            <div className={style.icon1}> <LinkedInIcon fontSize='large'/> </div>
            <div className={style.icon2}> <GitHubIcon fontSize='large'/> </div>
        </div>
      </div>
    </header>
   </>
  )
}

export default Header