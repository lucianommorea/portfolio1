import React from 'react'
import style from './Projects.module.css'
import Project from './Project'

function Projects () {


    return (
    <>
        <div className={style.all}>
            <div className={style.top}>
                <span className={style.title}> <span className={style.num}> 02. </span> Proyectos </span>
            </div>
            <div className={style.cards}>
                <Project />
                <Project />
            </div>     
        </div>
    </>
    )
}

export default Projects