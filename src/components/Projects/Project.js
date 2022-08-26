import React from 'react'
import style from './Project.module.css'
import videoCountries from '../../images/CountriesPortfolio2.mp4'
import { motion} from "framer-motion";

// const github = 'https://github.com/lucianommorea/PICountries'
// const link = 'https://pic-ountries.vercel.app/'

function Project ({name, video, description, link, github, photo}) {

    return (
    <>
        <motion.div className={style.card}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}>
            <div className={style.video}>
                <img src={photo} width="310" height="180" alt={name} className={style.photo}/>
            </div>
            <div className={style.description}>
                <div className=''>
                    <h2>
                        {name}
                    </h2>
                </div>
                <div>
                    <p>
                        {description}
                    </p>
                </div>
               
            </div>
            <div className={style.buttons}>
                <a href={link} className={style.link} target="_blank" rel="noreferrer"> 
                    <button className={style.btn1}>
                        Deploy
                    </button>
                </a>
                
                <a href={github} className={style.link} target="_blank" rel="noreferrer"> 
                    <button className={style.btn1}>
                        GitHub
                    </button>
                </a>
            </div>

        </motion.div>

    </>
    )
}

export default Project