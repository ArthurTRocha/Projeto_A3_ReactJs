import "../paginaregistro/paginaregistro.css"
import Header from "../../pages/Header";
import patas from "../../assets/images/patas.png"
import dog from "../../assets/images/dog.png"

const PaginaDeRegistro = () => {
    return (
        <div className="paginaRegistro">
            <Header/>
            <section className="abaixoheader">
                    <div className="image-pata">
                        <img src={patas} alt="Patas" />
                    </div>
                    <div className="image-dog">
                        <img src={dog} alt="Dog" />
                    </div>
                    <div className="form-container">
                        <section>
                            <input className="Styleconteiner" type="text" name="cpf" placeholder="CPF" />
                        </section>
                        <section>
                            <input className="Styleconteiner" type="text" name="nome" placeholder="Nome completo" />
                        </section>
                        <section>
                            <input className="Styleconteiner" type="email" name="email" placeholder="Endereço de E-mail" />
                        </section>
                        <section>
                            <input className="Styleconteiner" type="date" name="data" placeholder="Data de nascimento" />
                        </section>
                        <section>
                            <input className="Styleconteiner" type="password" name="senha" placeholder="Senha" />
                        </section>
                        <section>
                            <input className="Styleconteiner" type="password" name="confirmarSenha" placeholder="Confirme a senha" />
                        </section>
                        <section>
                            <button className="button" type="button">Cadastre-se</button>
                        </section>
                    </div>
                    <div className="container">
                        <h1 className="texto">Seja muito bem-vindo!</h1>
                    </div>
                    <div className="clear"></div>
                </section>
        </div>
    );
}

export default PaginaDeRegistro;
