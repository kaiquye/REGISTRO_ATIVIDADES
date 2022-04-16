import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContextProvider as ContextPainelAdmin } from "../pages/PainelAdmin/Contexts";
import { AuthContextProvider as ContextProjetos } from "../pages/PainelProjetos/contexts";
import { AuthContextProvider as ContextCcusto } from "../pages/CentroDeCusto/context";
import { AuthContextProvider as ContextRegistro } from "../pages-public/Registros/context";
import { PainelProjetos } from "../pages/PainelProjetos";
import { PainelAdmin } from "../pages/PainelAdmin";
import { CentroDeCustos } from "../pages/CentroDeCusto";
import { PaginaError } from "../pages-public/Error/PaginaError";
import { MeusRegistros } from "../pages-public/Registros";

export const Router = function () {
  return (
    <BrowserRouter>
      <ContextPainelAdmin>
        <Routes>
          <Route path="/" element={<PainelAdmin />} />
        </Routes>
      </ContextPainelAdmin>
      <ContextProjetos>
        <Routes>
          <Route path='/projetos' element={<PainelProjetos />} />
        </Routes>
      </ContextProjetos>
      <ContextCcusto>
        <Routes>
          <Route path='/centrodecusto' element={<CentroDeCustos />} />
        </Routes>
      </ContextCcusto>
      <ContextRegistro>
        <Routes>
          <Route path='/meusregistros' element={<MeusRegistros />} />
        </Routes>
      </ContextRegistro>
      <Routes>
        <Route path='/error/:status' element={<PaginaError />} />
      </Routes>
    </BrowserRouter>
  )
}
