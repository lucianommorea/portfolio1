import React from 'react';
import style from './Projects.module.css';
import Project from './Project';
import videoCountries from '../../images/CountriesPortfolio2.mp4'
import photoCountries from '../../images/Countries.png'
import photoCodebug from '../../images/Codebug_image.png'

const project = {
    Codebug: {  name: 'Codebug',
                video: videoCountries,
                photo: photoCodebug,
                description: 'Diseño y desarrollo en equipo de una Plataforma de preguntas y respuestas entre estudiantes de programación con sistema de log-in de usuarios, valorización de respuestas, puntuación, ranking, entre otras funciones.',
                github: 'https://github.com/Codebug-Henry/Co-debug',
                link: 'https://codebug-ten.vercel.app/'
    },
    Countries: { name: 'Henry Countries',
                video: videoCountries,
                photo: photoCountries,
                description: 'Diseño y desarrollo de una Single Page Application de países que incluye: búsquedas, filtrados, ordenamientos y creación de actividades relacionadas a los mismos',
                github: 'https://github.com/lucianommorea/PICountries',
                link: 'https://pic-ountries.vercel.app/'
    }
}

function Projects ({projects}) {


    return (
    <>
        <div ref={projects} className={style.all}>
            <div className={style.top}>
                <span className={style.title}> <span className={style.num}> 02. </span> Proyectos </span>
            </div>
            <div className={style.cards}>
                <Project    name={project.Codebug.name}
                            video={project.Codebug.video}
                            photo={project.Codebug.photo}
                            description={project.Codebug.description}
                            link={project.Codebug.link}
                            github={project.Codebug.github}
                             />
                <Project    name={project.Countries.name}
                            video={project.Countries.video}
                            photo={project.Countries.photo}
                            description={project.Countries.description}
                            link={project.Countries.link}
                            github={project.Countries.github} />
            </div>     
        </div>
    </>
    )
}

export default Projects