import React from 'react'
import style from './Project.module.css'
import videoCountries from '../../images/CountriesPortfolio2.mp4'
import { motion} from "framer-motion";

function Project () {

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
                <video width="300" height="250">
                    <source src={videoCountries} type="video/mp4"/>
                </video>
            </div>
            <div className={style.description}>
                <div className=''>
                    <h2>
                        Henry Countries
                    </h2>
                </div>
                <div>
                    <p>
                    Diseño y desarrollo en equipo de una Plataforma de preguntas y respuestas entre estudiantes de programación
                    con sistema de log-in de usuarios, valorización de respuestas, puntuación, ranking, entre otras
                    funciones.
                    </p>
                </div>
               
            </div>
            <div className={style.buttons}>
                <button className={style.btn1}>Link</button>
                <button className={style.btn1}>Repo</button>
            </div>

        </motion.div>

    </>
    )
}

export default Project