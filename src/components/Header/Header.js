import React from 'react'
import style from './Header.module.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const github = 'https://github.com/lucianommorea'
const linkedIn = 'https://www.linkedin.com/in/luciano-morea/'

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
            <div className={style.icon1}>
              <a href={linkedIn} className={style.link} target="_blank" rel="noreferrer">   
                <LinkedInIcon fontSize='large' />
              </a>
            </div>
            
            <div className={style.icon2}>
              <a href={github} className={style.link} target="_blank" rel="noreferrer">   
              <GitHubIcon fontSize='large'/> 
              </a>
            </div>
          </div>
           
      </div>
    </header>
   </>
  )
}

export default Header