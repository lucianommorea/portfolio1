import React from 'react';
import style from './Contacto.module.css';
import FormContact from './FormContact';
import Footer from './Footer';

function Contacto({contact}) {

     return (
    <>
        <div ref={contact} className={style.all}>
            <div className={style.top}>
                <span className={style.title}> <span className={style.num}> 04. </span> Contacto </span>
            </div>
            <div className={style.form} >
               <FormContact />
            </div>
            <div className={style.footer} >
               <Footer />
            </div>
            
        </div>
    </>
    )
}

export default Contacto