// import "../styles/home.css";
import Header from "./Header";
import SectionDesconto from "../pages/SectionDesconto"
import SectionTresImagens from "../pages/SectionTresImagens"
import SectionMosaicoAlternado from "../pages/SectionMosaicoAlternado"
import SectionBlur from "../pages/SectionBlur"
import SectionCards from "../pages/SectionCards"
import Footer from "./Footer";


function Home () {

    // function enviarconsole () {
    //     console.log("Ola teste")
    // }

    return (
        <div className="home">
            {/* <button onClick={enviarconsole}>Teste</button>
            Olá Mundo */}
            <Header/>
            <SectionDesconto/>
            <SectionTresImagens/>
            <SectionMosaicoAlternado/>
            <SectionBlur/>
            <SectionCards/>
            <Footer/>
        </div>
    )
}
export default Home;