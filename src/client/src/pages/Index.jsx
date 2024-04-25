import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer.component';
import Header from '../components/Header.component';
import "../Style.css";

export const Index = () => {
  const [text, setText] = useState("Brindar apoyo a jóvenes recién graduados");

  const legend = [
    "Facilitar la entrada al mercado laboral",
    "Conseguir una primer experiencia laboral",
    "Ayudar a las Pymes emergentes a conseguir empleados",
    "Dar a conocer oportunidades laborales relevantes",
  ];

  useEffect(() => {
    const changeText = () => {
      const randomIndex = Math.floor(Math.random() * legend.length);
      setText(legend[randomIndex]);
    };

    // Iniciar el intervalo cuando el componente se monta
    const intervalId = setInterval(changeText, 4000);

    // Limpiar el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);

  }, []);

  return (
    <>
      <Header />

      <div className="landing">
        <article className="mx-auto p-4">
          <div className="mx-4">
            <h1
              className="text-left py-2 "
              style={{ marginLeft: "22vh" }}
            >
              ¿Quiénes somos?
            </h1>
            <p className="rounded-2 float-left w-50 text-center py-5 custom-bg">
              Job Unite es una plataforma enfocada en:<br />
              <span className='text-primary animation'>
                {text}
              </span>
            </p>

            <div className="py-4 mx-5">
              <a
                href="mas-info"
                className="btn btn-primary py-4"
                style={{ marginLeft: "28vh" }}
              >
                Más información
              </a>
            </div>
          </div>
        </article>
      </div>

      <Footer />
    </>
  );
};
