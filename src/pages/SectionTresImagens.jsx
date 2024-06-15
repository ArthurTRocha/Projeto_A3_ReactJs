// import React from 'react';
// import '../styles/style.css';
import img1 from '../assets/images/Rectangle1.png';
import img2 from '../assets/images/Rectangle2.png';
import img3 from '../assets/images/Rectangle3.png';

const SectionTresImagens = () => (
  <section className="TresImagens">
    <div className="imagem1">
      <img src={img1} alt="Comprometimento" />
      <p className="COMPROMETIMENTO">COMPROMETIMENTO</p>
      <p className="p1">Funcionários dedicados a solucionar os seus problemas de forma rápida e eficaz</p>
    </div>
    <div className="imagem2">
      <img src={img2} alt="Confiança" />
      <p className="CONFIANÇA">CONFIANÇA</p>
      <p className="p2">Seus preciosos companheiros estão nas mãos de profissionais dedicados e compassivos</p>
    </div>
    <div className="imagem3">
      <img src={img3} alt="Suporte" />
      <p className="SUPORTE">SUPORTE</p>
      <p className="p3">Garanta o bem-estar dos seus melhores amigos com nosso suporte veterinário</p>
    </div>
  </section>
);

export default SectionTresImagens;
