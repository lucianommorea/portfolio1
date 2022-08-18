import React from 'react'
import style from './About.module.css'
import photo from '../../images/2.jpg'

function About () {
    return (
    <>
        <div className={style.all}>
            <div className={style.left}>
                <div className={style.name}>
                    Hola, soy Luciano!
                </div>
                <div className={style.full}>
                    Full Stack Developer
                </div>
                <div className={style.cv}>
                    <button className={style.btn}>
                        Curriculum
                    </button>
                </div>
            </div>
            <div className={style.right}>
                <div>
                    <img className={style.photo} src={photo} alt='Luciano' />
                </div>
            </div>
        </div>
    </>
    )
}

export default About