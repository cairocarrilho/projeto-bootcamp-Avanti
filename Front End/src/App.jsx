import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import ListaPets from "./pages/ListaPets";
import CadastroPet from "./pages/CasdastroPet";
import DetalhesPet from "./pages/DetalhesPet";
import LayoutLogin from "./layout/LoginLayout.jsx";
import Login from "./pages/Login.jsx";
import CadastroAdotante from "./pages/CadastroAdotante.jsx";
import DetalhesAdotante from "./pages/DetalhesAdotante.jsx";
import TelaInicial from "./pages/TelaInicial.jsx";
import Navbar from "./pages/Navbar.jsx";


import ListaAdocoes from "./pages/ListaAdocao";


function App() {

  return (
    <Router>
        <Routes>
                
        {/* Usa o Layout padrão  */}
        {/* Criei esse layout pra facilitar a criacao das páginas sem a necessidade de add os detalhes de fundo */}
                <Route path="/" element={<LayoutLogin><Navbar /> <TelaInicial /></LayoutLogin>} />
                <Route path="/login" element={<LayoutLogin><Login /></LayoutLogin>} />
                <Route path="/cadastrar-pet" element={<Layout><CadastroPet /></Layout>} />
                <Route path="/lista-pets" element={<Layout><ListaPets /></Layout>} />
                <Route path="/lista-adocao" element={<Layout><ListaAdocoes /></Layout>} />
                <Route path="/detalhes-pet/:id" element={<Layout><DetalhesPet /></Layout>} />
                <Route path="/adotante" element={<Layout><CadastroAdotante /></Layout>} />
                <Route path="/detalhes-adotante" element={<Layout><DetalhesAdotante /></Layout>} />

                {/*<Route path="/adotante" element={<Layout><Adotante /></Layout>} />*/}

                {/* Usa o Layout do Login */}
                {/* <Route path="/login" element={<LoginLayout><Admin /></LoginLayout>} /> */}
        </Routes>
    </Router>
  )
}

export default App
