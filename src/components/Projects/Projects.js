import React from 'react';
import style from './Projects.module.css';
import Project from './Project';
import photoCountries from '../../images/Countries.png';
import photoCodebug from '../../images/Codebug_image.png';
import photoProde from '../../images/Prode.png';

const project = {
    Codebug: {  id: 2,
                name: 'Codebug',
                photo: photoCodebug,
                description: 'Diseño y desarrollo en equipo de una Plataforma de preguntas y respuestas entre estudiantes de programación con sistema de log-in de usuarios, valorización de respuestas, puntuación, ranking, entre otras funciones.',
                github: 'https://github.com/Codebug-Henry/Co-debug',
                link: 'https://codebug-ten.vercel.app/',
                video: "https://www.youtube.com/embed/GSEwc2vAjUI?rel=0" 
    },
    Countries: {    id: 1,
                    name: 'Henry Countries',
                    photo: photoCountries,
                    description: 'Diseño y desarrollo de una Single Page Application de países que incluye: búsquedas, filtrados, ordenamientos y creación de actividades relacionadas a los mismos',
                    github: 'https://github.com/lucianommorea/PICountries',
                    link: 'https://pic-ountries.vercel.app/',
                    video: "https://www.youtube.com/embed/o8Z07rf5hlg?rel=0" 
    },
    Prode: {    id: 1,
                name: 'Prode Mundial',
                photo: photoProde,
                description: `Diseño y desarrollo de una SPA para simular resultados del Mundial 2022, y poder crear Pronósticos tanto 
                de resultados de partidos como de Posiciones, que obtendrán puntajes para un ranking en base a los resultados que se darán 
                en el Mundial. Posee panel de configuración y página persona por usuario.`,
                github: 'https://github.com/lucianommorea/prodeMundial',
                link: 'https://prodeqatar.vercel.app/',
                video: "https://www.youtube.com/embed/o8Z07rf5hlg?rel=0" 
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
                            id={project.Codebug.id} />
                <Project    name={project.Countries.name}
                            video={project.Countries.video}
                            photo={project.Countries.photo}
                            description={project.Countries.description}
                            link={project.Countries.link}
                            github={project.Countries.github}
                            id={project.Countries.id} />
                <Project    name={project.Prode.name}
                            video={project.Prode.video}
                            photo={project.Prode.photo}
                            description={project.Prode.description}
                            link={project.Prode.link}
                            github={project.Prode.github}
                            id={project.Prode.id} />
            </div>     
        </div>
    </>
    )
}

export default Projects