// import React from 'react';
// import '../styles/style.css';
import clienteSatisfeito from '../assets/images/ClienteSatisfeito.png';

const SectionDesconto = () => (
  <section className="AbaixoDoHeader">
    <div className="ClienteSatisfeito">
      <img src={clienteSatisfeito} alt="Cliente Satisfeito" />
    </div>
    <div className="tituloDesconto">
      <span>DESCONTO AMIGO</span>
      <p className="textoDesconto">
        Cadastre-se agora para desbloquear acesso exclusivo a descontos especiais em nossa ampla seleção de produtos
        e serviços! aproveite as vantagens de ser nosso cliente cadastrado hoje mesmo.
      </p>
      <div className="boxButton">
        <button className="buttonSaibaAqui">Saiba Aqui</button>
      </div>
    </div>
  </section>
);

export default SectionDesconto;
