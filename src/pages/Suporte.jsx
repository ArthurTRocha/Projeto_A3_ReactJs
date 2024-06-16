import "../styles/suporte.css"
import Header from "./Header";
import suportee from "../assets/images/suporte 1.png"
import suporte from "../assets/images/suportee.png"
import web from "../assets/images/web.png"

function Suporte () {
    return (
        <div className="suporte">
            <Header/>
            <div id="headerS">
                    <h1>suporte</h1>
                    <img src={suportee} alt="Imagem atendente" />
            </div>

            <div id="inputsSuporte">

                <div id="inputttSuporte">
                    <h3>Nome:</h3>
                    <input type="text" />

                    <h3>E-mail:</h3>
                    <input type="text" />

                    <h3>Telefone:</h3>
                    <input type="text" />
                </div>

                <div id="imagemSuporte">
                    <img src={suporte} alt="Imagem ilustrativa de um suporte" />
                </div>
            </div>
            <div id="finalSuporte">
            <h3>Mensagem:</h3>
            <textarea name="" id=""></textarea>
            </div>

            <div id="finallSuportee">
                <div>
                    </div>

                <div id="buttonSuporte">
                    <button><h2>Enviar</h2></button>
                    </div>
                <div id="whatSuporte">
                        <img src={web} alt="Icone do Whatsapp" />
                    </div>
            </div>


        </div>
    )
}

export default Suporte;