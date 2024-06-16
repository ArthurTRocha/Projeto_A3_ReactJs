import './login.css'
import petHeart from "../../assets/images/21545.png"
import Header from '../../pages/Header';

function Login() {
  return (
    <div className="loginnnn">
        <Header/>
    <div className="conteinerLogin">
      <h1>Bem Vindo de Volta!</h1>
      <p>Estamos felizes de te ver aqui !!!</p>

      <div className="unirImagemInput">
        <div className="inputsLogin">
          <label htmlFor="inputEmailLogin">E-mail ou nome de usuário</label>
          <input type="email" id="inputEmailLogin" />

          <label htmlFor="inputPassword">Senha</label>
          <input type="password" id="inputPassword" />
          <a href="/paginad">Esqueceu a senha?</a>
        </div>

        <div className="iamgemLogin">
          <img src={petHeart} alt="Imagem de um coração com a pata de um PET" />
        </div>
      </div>

      <div className="buttonEnviarLogin">
        <p>Precisa de uma conta? <a href="/paginaderegistro">Inscreva-se</a></p>
        <button ><h1>Login</h1></button>
        {/* {mensagem && <h3>{mensagem}</h3>} */}
      </div>
    </div>
    </div>
  );
}

export default Login;
