import './style.css'
import logo from './logo.jpg'
export function MenuProjeto(props) {


    return (
        <section className="menuprojetolateral">
            <div className=' imagem-logo-menu-projeto logo-menulateral'>
                <img style={{ width: '90px' }} src={logo} />
                <label>Menu lateral</label>
            </div>
            <div className='buttos-menulateralprojeto'>
                <button className='button-menulateralprojeto ' onClick={() => props.condicao("INICIO")} >Inicio</button>
                <button className='button-menulateralprojeto ' onClick={() => props.condicao("PROJETO")} >Novo Projeto</button>
                <button className='button-menulateralprojeto ' onClick={() => props.condicao('EXCLUIR')}>Excluir projeto</button>
                <button className='button-menulateralprojeto ' onClick={() => props.condicao('GERENTE')}>Trocar gerente</button>
                <button className='button-menulateralprojeto ' onClick={() => props.condicao('PROCURA')}>Procura Projeto</button>
            </div>
        </section>
    )
}