// import React from 'react';
// import '../styles/style.css';
import alt1 from '../assets/images/alternado1.png';
import alt2 from '../assets/images/alternado2.png';
import alt3 from '../assets/images/alternado3.png';
import alt4 from '../assets/images/alternado4.png';
import alt5 from '../assets/images/alternado5.png';
import alt6 from '../assets/images/alternado6.png';

const mosaicos = [
  { img: alt1, text: "Oferecemos um atendimento veterinário especializado de alta qualidade, onde cada pet é tratado com o cuidado e a atenção que merece." },
  { img: alt2, text: "Oferecemos um atendimento veterinário especializado de alta qualidade, onde cada pet é tratado com o cuidado e a atenção que merece.", reverse: true },
  { img: alt3, text: "Oferecemos um atendimento veterinário especializado de alta qualidade, onde cada pet é tratado com o cuidado e a atenção que merece." },
  { img: alt4, text: "Explore uma variedade de brinquedos irresistíveis para o seu pet em nossa loja! De pelúcias macias a bolas saltitantes, temos opções para satisfazer até os gostos mais exigentes do seu companheiro de quatro patas" },
  { img: alt5, text: "Proporcione uma alimentação equilibrada e saborosa para o seu pet com nossa seleção premium de rações", reverse: true },
  { img: alt6, text: "Transforme a rotina de cuidados do seu pet em um momento de carinho e conforto com nossa linha de produtos de higiene." }
];

const SectionMosaicoAlternado = () => (
  <section className="MosaicoAlternadoServicoAlternado">
    <div className="containerAlternado">
      {mosaicos.map((mosaico, index) => (
        <div key={index} className="flexMosaico1" style={mosaico.reverse ? { flexDirection: 'row-reverse' } : {}}>
          <div style={{ backgroundImage: `url(${mosaico.img})` }} className="itemMosaico1"></div>
          <div className="itemMosaico2">
            <p>{mosaico.text}</p>
            <div className="botaoSaibaAqui">
              <ul className={`SaibaAqui${index > 2 ? index - 2 : ''}`}>
                <li><a href="/servico">Saiba Mais</a></li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default SectionMosaicoAlternado;
