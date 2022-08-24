import React from 'react'
import style from './About.module.css'
import photo from '../../images/2.jpg'
import { motion} from "framer-motion";

function About () {
    return (
    <>
        <div className={style.all}>
            <div className={style.left}>
                <motion.div className={style.name}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01]
                }}>
                    Hola, soy Luciano!
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
                    <button className={style.btn}>
                        Curriculum
                    </button>
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