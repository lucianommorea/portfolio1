import React, {useState} from 'react'
import style from './Project.module.css'
import { motion, AnimatePresence } from "framer-motion"

function Project ({name, video, description, link, github, photo, id}) {

    const [selectedId, setSelectedId] = useState(null)
    // let id = 1;

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
            <motion.div className={style.video} layoutId={id} onClick={() => setSelectedId(id)}>
                <img src={photo} alt={name} className={style.photo}/>
            </motion.div>
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

        <AnimatePresence>
            {selectedId && (
                <motion.div layoutId={selectedId} className={style.motion}
                // initial={{ opacity: 0 }}
                // animate={{ opacity: 1 }}
                // exit={{ opacity: 0 }}
                >
                    <div className={style.background} onClick={() => setSelectedId(null)} >
                        {/* <motion.button onClick={() => setSelectedId(null)} >
                            X
                        </motion.button> */}
                        <iframe  src={video}
                                title="YouTube video player" frameborder="0" className={style.youtube} 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                        </iframe>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>

    </>
    )
}

export default Project