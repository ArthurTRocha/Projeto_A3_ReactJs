// import React from 'react';
// import '../styles/style.css';
import imagemBlur from '../assets/images/imagemBlur.png';

const SectionBlur = () => (
  <section className="imgBlur">
    <div style={{ backgroundImage: `url(${imagemBlur})` }} className="imgBlur">
      <h1>ATENDIMENTO INDIVIDUALCOM NOSSOS PROFISSIONAIS</h1>
      <div className="boxButtonServico">
        <button className="buttonCliqueAqui">Clique Aqui</button>
      </div>
    </div>
  </section>
);

export default SectionBlur;
