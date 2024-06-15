import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home"
import Login from "../components/login/Login";
// import Footer from "../pages/Footer";
// import Header from "../pages/Header";
// import SectionBlur from "../pages/SectionBlur"
// import SectionCards from "../pages/SectionCards"
// import SectionDesconto from "../pages/SectionDesconto"
// import SectionMosaicoAlternado from "../pages/SectionMosaicoAlternado";
// import SectionTresImagens from "../pages/SectionTresImagens"
import PaginaDeRegistro from "../components/paginaregistro/PaginaRegistro";
import Servico from "../components/servico/Servico";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<Home />} />
        {/* <Route path="/footer" element={<Footer />} />
        <Route path="/Header" element={<Header />} />
        <Route path="/SectionBlur" element={<SectionBlur />} />
        <Route path="/SectionCards" element={<SectionCards />} />
        <Route path="/SectionDesconto" element={<SectionDesconto />} />
        <Route path="/SectionMosaicoAlternado" element={<SectionMosaicoAlternado />} />
        <Route path="/SectionTresImagens" element={<SectionTresImagens />} /> */}
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/paginaderegistro" element={<PaginaDeRegistro/>} />
        <Route path="/Servico" element={<Servico/>} />
        <Route path="/Login" element={<Login/>} />
      </Routes>
    </Router>
  );
}

export default App;
