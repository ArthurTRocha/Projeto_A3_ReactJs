// import React from 'react';
// import '../styles/style.css';
import teste from '../assets/images/teste.png';
import mapa from '../assets/images/mapa.png';

const Footer = () => (
  <section className="rodape">
    <div className="containerRodape">
      <div className="boxRodape">
        <div className="trilalogo">
          <img src={teste} alt="Logo" />
        </div>
        <div>
          <img className="mapa" src={mapa} alt="Mapa" />
        </div>
        <div className="clear"></div>
      </div>
      <span>©Trabalho A3- Grupo 6 UNA Sete Lagoas</span>
    </div>
  </section>
);

export default Footer;
