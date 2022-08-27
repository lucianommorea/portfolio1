import React, {useEffect, useState} from 'react'
import style from './Header.module.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Navbar from './NavBar';

const github = 'https://github.com/lucianommorea'
const linkedIn = 'https://www.linkedin.com/in/luciano-morea/'

function Header({home, technologies, projects, about2, contact}) {

  const [burg, setBurg] = useState(false)

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('resize', () => {
        if(window.innerWidth > 740) {
          setBurg(false)
        }
        else {
          setBurg(true)
        }     
    })  
}, []);

  console.log(window.innerWidth)

  return (
  <>
    <header>
      <div className={style.header}>
        {
           !burg && window.innerWidth > 740   ? 
          <ul className={style.menu}>
            {/* <li> Inicio </li> */}
            <li onClick={() => scrollToSection(about2)}> Acerca de mí </li>
            <li onClick={() => scrollToSection(projects)}> Proyectos </li>
            <li onClick={() => scrollToSection(technologies)}> Skills </li>
            <li onClick={() => scrollToSection(contact)}> Contacto </li>
          </ul> :
        <Navbar scrollToSection={scrollToSection}
                technologies={technologies}
                projects={projects}
                about2={about2}
                contact={contact}
                home={home}
        />

        }
         {/* <ul className={style.menu}>
          <li> Inicio </li>
          <li onClick={() => scrollToSection(about2)}> Acerca de mí </li>
          <li onClick={() => scrollToSection(projects)}> Proyectos </li>
          <li onClick={() => scrollToSection(technologies)}> Skills </li>
          <li onClick={() => scrollToSection(contact)}> Contacto </li>
        </ul>  */}
            {/* <Navbar scrollToSection={scrollToSection}
                    technologies={technologies}
                    projects={projects}
                    about2={about2}
                    contact={contact}
                    /> */}
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