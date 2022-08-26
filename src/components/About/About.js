import React from 'react';
import style from './About.module.css';
import photo from '../../images/2.jpg';
import { motion} from "framer-motion";
import pdf from '../../images/CV_MOREA_Luciano.pdf'

function About () {
    return (
    <>
        <div className={style.all}>
            <div className={style.left}>
                <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01]
                }}>
                    <h1 className={style.name}>Hola, soy Luciano!</h1>
                     
                    
                </motion.div>
                <motion.div className={style.full}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01]
                }}>
                    Full Stack Developer
                </motion.div>
                <motion.div className={style.cv}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01]
                }}>
                    <a href={pdf} target="_blank" rel="noopener noreferrer" download="CV_MOREA_Luciano.pdf"> 
                        <button className={style.btn} >
                            Descargar CV
                        </button>
                    </a>    
                </motion.div>
            </div>
            <motion.div className={style.right}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01]
            }}>
                <div>
                    <img className={style.photo} src={photo} alt='Luciano' />
                </div>
            </motion.div>
        </div>
    </>
    )
}

export default About