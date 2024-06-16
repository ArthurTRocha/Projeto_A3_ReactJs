import "./servico.css";
import moto from "../../assets/images/moto.png"
import petimage from "../../assets/images/petimage.png";
import patas from "../../assets/images/patas.png";
import calendar from "../../assets/images/calendar.png";
import dog from "../../assets/images/dog.png";
import medico from "../../assets/images/medico.png";
import Header from "../../pages/Header"

function Servico() {
  return (
    <div className="servico">
      <Header/>
      <section className="sectionUm">
        <section className="sectionUm_">
          <div className="textoImagemSectionUm_">
            <h1>PET DELIVERY</h1>
            <img src={moto} alt="Imagem de um motoboy" />
          </div>

          <section className="sectionFinalUm">
            <div className="imagemSectionUm">
              <img src={petimage} alt="Imagem de um cachorro" />
            </div>

            <div>
              <h2>Antes de prosseguir com o agendamento, por favor, leia atentamente as seguintes informações:</h2>
              <ul>
                <li>Certifique-se de selecionar o serviço correto ao agendar seu atendimento.</li>
                <li>Caso precise cancelar ou reagendar seu agendamento, entre em contato conosco com antecedência.</li>
                <li>Lembre-se de enviar os documentos necessários (carteira de vacinação, por exemplo) para seu tipo de serviço.</li>
              </ul>
            </div>
          </section>
        </section>
      </section>

      <section className="sectionDois">
        <div className="sectionDoisLadoE">
          <h4>NOME DO PET:</h4>
          <input type="text" />

          <h4>TIPO DE ATENDIMENTO:</h4>
          <input type="text" />

          <h4>DATA:</h4>
          <input type="text" />

          <h4>ENDEREÇO:</h4>
          <select></select>
        </div>

        <div className="sectionDoisCentro">
          <h1>AGENDAMENTO</h1>
          <img src={patas} alt="Patas" />
          <button><h1>AGENDAR</h1></button>
        </div>

        <div className="sectionDoisLadoD">
          <h4>RAÇA:</h4>
          <select></select>

          <h4>ESPÉCIE:</h4>
          <select></select>

          <h4>HORÁRIO DISPONÍVEL:</h4>
          <select></select>

          <h4>OBSERVAÇÃO</h4>
          <input type="text" />
        </div>
      </section>

      <section className="sectionUm">
        <section className="sectionUm_">
          <div className="textoImagemSectionUm_">
            <h1>AGENDAMENTO DE CONSULTAS</h1>
            <img src={calendar} alt="Imagem de um calendário" />
          </div>

          <section className="sectionFinalUm">
            <div className="imagemSectionUm">
              <img src={dog} alt="Imagem de um cachorro" />
            </div>

            <div className="textoSectionFinalUm">
              <p>Por favor, selecione abaixo a data e o horário desejados para agendar a 
                consulta do seu animal de estimação. Nossa equipe de veterinários está 
                pronta para oferecer cuidados especializados e atenciosos para garantir o 
                bem-estar do seu companheiro.</p>
            </div>
          </section>
        </section>
      </section>

      <section className="sectionDoiss">
        <div className="sectionDoisLadoE">
          <h4>SELECIONE A DATA:</h4>
          <select></select>

          <h4>HORÁRIO DISPONÍVEL:</h4>
          <select></select>

          <h4>TIPO DE CONSULTA:</h4>
          <select></select>

          <h4>MÉDICO VETERINÁRIO:</h4>
          <input type="text" />

          <div className="inputGrandeSectionDoisLadoE">
            <h4>MOTIVO DA CONSULTA</h4>
            <input type="text" />
          </div>
        </div>

        <div className="buttonSectionCentral">
          <button><h1>AGENDAR</h1></button>
        </div>

        <div className="sectionDoisLadoDD">
          <img src={medico} alt="Imagem de um médico com um cachorro" />
          <input type="text" />
        </div>
      </section>




      
    </div>
  );
}

export default Servico;
