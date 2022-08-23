import React from 'react'
import style from './Project.module.css'
import videoCountries from '../../images/CountriesPortfolio2.mp4'


function Project () {

    return (
    <>
        <div className={style.card}>
            <div className={style.video}>
                <video width="300" height="250">
                    <source src={videoCountries} type="video/mp4"/>
                </video>
                {/* <video source={videoCountries} alt='Countries' autoPlay width='350px' height='200px' /> */}
            </div>
            <div className={style.description}>
                <div>
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

        </div>

    </>
    )
}

export default Project