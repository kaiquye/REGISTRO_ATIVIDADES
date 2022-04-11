import { QuantidadeProejtos } from "./components/quantidade-projetos"
import './style.css'
export function GraficoQuantidades(props) {

    return(
        <section className='quantidades-graficos' >
            <div>
                <QuantidadeProejtos data={props.qtsprojetos} />
            </div>
        </section>
    )
}