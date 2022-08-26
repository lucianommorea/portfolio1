import React, { useState } from "react";
import style from './FormContact.module.css';

const FormContact = () => {

  const [input, setInput] = useState({
    title: "",
    text: "",
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

//   const textAlerta = "Mensaje enviado";

  return (
    <div id={style.all}>
      <div id={style.contenedor}>
        <form id={style.form}>
          <div id={style.div1}>
            {/* <p> Título: </p> */}
            <input
              type="text"
              value={input.title}
              name="title"
              placeholder="Asunto"
              autoComplete="off"
              onChange={handleChange}
            />
          </div>
          <div id={style.div2}>
            {/* <p> Mensaje </p> */}
            <textarea
              type="text"
              value={input.text}
              name="text"
              placeholder="Mensaje"
              autoComplete="off"
              className={style.tarea}
              onChange={handleChange}
            />
          </div>
            <a href={`mailto:lucianommorea@gmail.com?subject=${input.title}&body=${input.text}`} target="_blank" rel="noreferrer" className={style.btn1}>
              <button
                  type="submit"
                  className={style.btn}>
                  Enviar mensaje
              </button>
            </a>
        </form>
      </div>
    </div>
  );
};

export default FormContact;
