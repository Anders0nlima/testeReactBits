import { Routes, Route, Navigate } from 'react-router-dom'; 

/*import { PosProducao } from "./componentes/PosProducao";
import { Producao } from "./componentes/Producao";
import Suporte from './componentes/Suporte';
import SuportePage from './componentes/SuportePage';*/

import { HomePage } from "./componentes/HomePage";


 
function AppRoutes() {
    return (
        <Routes>
          <Route path="/producao" element={<Producao/>} />
          <Route path="/pos-producao" element={<PosProducao/>} />
          <Route path="/suporte" element={<SuportePage/>} />
          
          {/* Rota padrão ou redirecionamento, o teste-selo será mudado para "home" --- Navigate to="/producao" --- /*/}
          <Route path="/teste-selo" element={<HomePage/>} />
        </Routes>
      );
  }
  
  export default AppRoutes;