import React from 'react'
import style from './About2.module.css'

function About2 () {
    return (
    <>
        <div className={style.all}>
            <div className={style.top}>
                <span className={style.title}> Acerca de mi </span>
            </div>

            <div className={style.bottom}>
                <div className={style.left}>
                    Hola
                </div>
    
                <div className={style.right}>
                    Chau
                </div>
            </div>
        </div>
    </>
    )
}

export default About2