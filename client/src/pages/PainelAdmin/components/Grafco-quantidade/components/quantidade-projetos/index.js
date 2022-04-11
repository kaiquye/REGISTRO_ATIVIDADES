import './style.css'
export function QuantidadeProejtos(props) {
    return(
        <section className='projetos-quantidades'>
            <div>
                <p>Projetos</p>
            </div>
            <div>
                {props.data && 
                    <label>{props.data}</label>
                }
            </div>
        </section>
    )
}