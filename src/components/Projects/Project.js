import React from 'react'
import style from './Project.module.css'
import videoCountries from '../../images/CountriesPortfolio.mp4'


function Project () {

    return (
    <>
        <div className={style.card}>
            <div>
            <video width="750" height="500" controls >
                <source src={videoCountries} type="video/mp4"/>
            </video>
                {/* <video source={videoCountries} alt='Countries' autoplay width='350px' height='200px' /> */}
            </div>
            <div>
                
            </div>

        </div>

    </>
    )
}

export default Project