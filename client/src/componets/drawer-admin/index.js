import { useRef } from "react";
import './style.css'

export const DrawerAdmin = function (props) {

    const mySidenav = useRef();
    const main = useRef();
    const DrawerAdmin = useRef();
    const myServices = useRef();

    function openNav() {
        mySidenav.current.style.width = "200px";
        main.current.style.marginLeft = "200px";
    }

    function closeNav() {
        mySidenav.current.style.width = "0";
        main.current.style.marginLeft = "0";
        props.current.style.backgroundColor = 'black';
    }

    function openServices() {
       return myServices.current.style.height = 'auto';
    }

    return (
        <section ref={DrawerAdmin} className="draweradmin">
            <div ref={mySidenav} className="sidenav">
                <a href="#" className="closebtn" onClick={() => closeNav()}>x</a>
                <a  onClick={() => openServices()} href="#">Serviços</a>
                <div ref={myServices} className='myServices' >
                    <div>
                        <ul>
                            <li><a href="#" >Projeto</a></li>
                            <li><a href="#" >Centro de Custos</a></li>
                        </ul>
                    </div>
                </div>
                <a href="#">Funcionarios</a>
                <a href="#">Registros</a>
                <a href="#">Usuarios Admin</a>
                <a href="#">Contato</a>
            </div>

            <div ref={main}>
                <div className="navbar">
                    <a href="#" onClick={() => openNav()}><i className="button-navbar search"></i>Menu</a>
                    <a href="#"> Suporte</a>
                    <a href="#"> Novo registro</a>
                    <input className="input-pesquisa-home" placeholder="Pesquisar por registro"/>
                    
                </div>
            </div>
        </section >
    )
}