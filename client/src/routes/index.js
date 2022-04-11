import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContextProvider as ContextPainelAdmin } from "../pages/PainelAdmin/Contexts";
import { PainelAdmin } from "../pages/PainelAdmin";

export const Router = function () {
    return (
        <BrowserRouter>
            <ContextPainelAdmin>
                <Routes>
                    <Route path="/dahs-administrador" element={<PainelAdmin />} />
                </Routes>
            </ContextPainelAdmin>
        </BrowserRouter>
    )
}