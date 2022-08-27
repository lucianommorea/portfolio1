import React, { useState, useEffect } from 'react';
import style from './ScrollToTop.module.css'
import { BsArrowUpShort } from 'react-icons/bs';
 
const ScrollToTop = () => {
    const [showScrollTopButton, setShowScrollTopButton] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 300) {
                setShowScrollTopButton(true)
            }
            else {
                setShowScrollTopButton(false)
            }     
        })  
    }, []);

    const scrollTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };

    return (
        <div>
        {showScrollTopButton && <BsArrowUpShort onClick={scrollTop} className={style.btnTop}/>}
        </div>
    )
}

export default ScrollToTop