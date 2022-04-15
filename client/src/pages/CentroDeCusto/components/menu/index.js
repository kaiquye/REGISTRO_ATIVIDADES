import './style.css'
import logo from './logo.jpg'
import voltar from './voltar.png'
import { Link } from 'react'
export function MenuCcusto(props) {


    return (
        <section className="menuprojetolateral">
            <div className=' imagem-logo-menu-projeto logo-menulateral'>
                <img style={{ width: '60px', marginBottom: '10px' }} src={logo} />
                <label>Menu lateral</label>
            </div>
            <div className='buttos-menulateralprojeto'>
                <button className='button-menulateralprojeto ' onClick={() => props.openWindow("LIST")} ><img style={{ width: '15px' }} src={logo} /> Todos Centro de custos</button>
                <button className='button-menulateralprojeto ' onClick={() => props.openWindow("CREATE")} ><img style={{ width: '15px' }} src={logo} /> Novo Centro de custo</button>
                {/* <button className='button-menulateralprojeto ' onClick={() => props.condicao('EXCLUIR')}>Excluir projeto</button> */}
                {/* <button className='button-menulateralprojeto ' onClick={() => props.condicao('GERENTE')}> gerente</button> */}
                {/* <button className='button-menulateralprojeto ' onClick={() => props.condicao('PROCURA')}>Procura Projeto</button> */}
                <button className='button-menulateralprojeto' > <img style={{ width: '25px', paddingRight: '10px' }} src={voltar} /> <a style={{ color: 'white', textDecoration: 'none' }} href='/'>Voltar</a> </button>
            </div>
        </section>
    )
}