import React from 'react';
import {Link, useLocation} from 'react-router-dom';


function Navegacao () {
    const location = useLocation();

    return (
        <div className="flex justify-center items-center gap-4 mb-4">
            <Link to="/lista-pets"
            className={`text-xl font-semibold transition-colors ${location.pathname === '/lista-pets' ? "text-purple-700" : "text-gray-500"}`}
            >
                Lista de animais
            </Link>

            <span className="text-gray-500">|</span>

            <Link to="/lista-adotantes"
            className={`text-xl font-semibold transition-colors ${location.pathname === '/lista-adotantes' ? "text-purple-700" : "text-gray-500"}`}
            >
                Lista de adotantes
            </Link>

            <span className="text-gray-500">|</span>

            <Link to="/lista-adocao"
            className={`text-xl font-semibold transition-colors ${location.pathname === '/lista-adocao' ? "text-purple-700" : "text-gray-500"}`}
            >
                Lista de adoção
            </Link>
        </div>
    );
}
export default Navegacao;