import React, { useState } from 'react'
import styled from 'styled-components'
import BurguerButton from './BurgerButton'

function Navbar({ home, technologies, projects, about2, contact}) {

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(!clicked)
  }

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    });
    setClicked(!clicked)
  }; 
  return (
    <>
      <NavContainer>
        <div className={`links ${clicked ? 'active' : ''}`}>
          <div onClick={() => scrollToSection(home)}>Inicio</div>
          <div onClick={() => scrollToSection(about2)}>Acerca de mí</div>
          <div onClick={() => scrollToSection(projects)}> Proyectos </div>
          <div onClick={() => scrollToSection(technologies)}>Skills</div>
          <div onClick={() => scrollToSection(contact)}>Contact</div>
        </div>
        <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      </NavContainer>
    </>
  )
}

export default Navbar

const NavContainer = styled.nav`
  h2{
    color: #9bb6d1;
    font-weight: 400;
    span{
      font-weight: bold;
    }
  }
  padding: .4rem;
  background-color: #0a192f;
  display: flex;
  align-items: center;
  justify-content: space-between;
  div{
    color: white;
    text-decoration: none;
    margin-right: 0rem;
  }
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    div{
      color: #9bb6d1;
      font-size: 2rem;
      display: block;
    }
    @media(min-width: 740px){
      position: initial;
      margin: 0;
      div{
        font-size: 1rem;
        color: #9bb6d1;
        display: inline;
      }
      display: block;
    }
  }
  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 90%;
    left: 0;
    right: 0;
    text-align: center;
    div{
      font-size: 1.5rem;
      margin-top: 1.3rem;
      color: #9bb6d1;
    }
  }
  .burguer{
    background-color: #0c2852;
    position:absolute;
    top: 0;
    left: 0;
    @media(min-width: 740px){
      display: none;
    }
  }
`

const BgDiv = styled.div`
  /* background-color: #0b182c; */
  background-color: #0c2852;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all 0.6s ease ;
  
  &.active{
    border-radius: 0 0 0 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 25rem;
  }
`