import React from 'react'
import style from './About2.module.css'
import photo from '../../images/programador.jpg'

function About2 () {
    return (
    <>
        <div className={style.all}>
            <div className={style.top}>
                <span className={style.title}> <span className={style.num}> 01. </span> Acerca de mi </span>
            </div>

            <div className={style.bottom}>
                <div className={style.left}>
                    <div className={style.cuadro}>
                        <img className={style.photo} src={photo} alt='Programador' />
                    </div>
                </div>
    
                <div className={style.right}>
                    <div className={style.cuadro2}>
                        <p>
                            Mi nombre es Luciano, desarrollador Full Stack. Mi objetivo es lograr mi primera oportunidad en el sector IT
                            para crecer profesional y personalmente. Me gustan los desafíos y la resolución de problemas, así
                            como también el trabajo en equipo, siempre con el objetivo de alcanzar los resultados planteados de
                            forma eficiente. Finalice el Bootcamp en SoyHenry, y continuo mi aprendizaje de forma autodidacta. 
                            Si queres saber más te invito a escribirme en la seccion de contacto.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default About2