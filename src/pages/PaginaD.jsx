import "../styles/paginad.css";
import Header from './Header';
// import developmentImage from '../assets/development.png'; // Imagem ilustrativa de "em desenvolvimento"

function PaginaD() {
    return (
        <div className="paginaD">
            <Header />
            <div className="content">
                <h1>Estamos Trabalhando Nisso!</h1>
                <p>A página que você está tentando acessar ainda está em desenvolvimento.</p>
                {/* <img src={developmentImage} alt="Em desenvolvimento" /> */}
                <p>Volte em breve para ver as novidades!</p>
            </div>
        </div>
    );
}

export default PaginaD;
