// import React from 'react';
// import '../styles/style.css';
import atendimento from '../assets/images/atendimento.png';
import produtos from '../assets/images/produtos.png';
import servicos from '../assets/images/servicos.png';
import financeiro from '../assets/images/financeiro.png';
import suporte from '../assets/images/suporte.png';
import vacinacao from '../assets/images/vacinacao.png';

const cards = [
  { img: atendimento, text: "Tenha atendimento personalizado de acordo com as suas necessidades, presencialmente ou pelo site" },
  { img: produtos, text: "Uma variedade de produtos do seu gosto e para o seu pet" },
  { img: servicos, text: "Diversos serviços que podem ser facilmente agendados em nosso site" },
  { img: financeiro, text: "Tenha total controle do seus gastos e economize assinando um de nossos planos" },
  { img: suporte, text: "Está com dúvida ou problema? Mande mensagem via WhatsApp, Gmail ou agende uma visita em nosso site" },
  { img: vacinacao, text: "PRATICIDADE! Você pode conferir as datas de vacinação do seu pet em nosso site" }
];

const SectionCards = () => (
  <section className="sessaoCards">
    {cards.map((card, index) => (
      <div key={index} className="containerCards">
        <div className="cardsImg">
          <img src={card.img} alt="" />
        </div>
        <div className="textoCard">
          <p>{card.text}</p>
        </div>
      </div>
    ))}
  </section>
);

export default SectionCards;
