import './style.css'
import logo from './logo.jpg'
import voltar from './voltar.png'
export function MenuProjeto(props) {


    return (
        <section className="menuprojetolateral">
            <div className=' imagem-logo-menu-projeto logo-menulateral'>
                <img style={{ width: '60px', marginBottom: '10px' }} src={logo} />
                <label>Menu lateral</label>
            </div>
            <div className='buttos-menulateralprojeto'>
                <button className='button-menulateralprojeto ' onClick={() => props.condicao("INICIO")} ><img style={{ width: '15px' }} src={logo} /> Todos projetos</button>
                <button className='button-menulateralprojeto ' onClick={() => props.condicao("PROJETO")} ><img style={{ width: '15px' }} src={logo} /> Novo Projeto</button>
                {/* <button className='button-menulateralprojeto ' onClick={() => props.condicao('EXCLUIR')}>Excluir projeto</button> */}
                {/* <button className='button-menulateralprojeto ' onClick={() => props.condicao('GERENTE')}> gerente</button> */}
                {/* <button className='button-menulateralprojeto ' onClick={() => props.condicao('PROCURA')}>Procura Projeto</button> */}
                <button className='button-menulateralprojeto' > <img style={{ width: '25px', paddingRight: '10px' }} src={voltar} />Voltar</button>
            </div>
        </section>
    )
}