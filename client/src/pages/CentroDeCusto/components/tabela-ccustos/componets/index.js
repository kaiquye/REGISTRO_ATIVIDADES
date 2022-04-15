import './style.css'
import editar from './excluir.png'
export const ProjetoTabela = function (props) {
    return (
        props.data.data.map((ccusto) => (
            <tr>
                {
                    console.log('tested')
                }
                <td><input style={{ width: '9px', marginTop: '3px' }} type='checkbox' /></td>
                <td>{ccusto.setor}</td>
                {/* <td>
                    {new Date(ccusto.inicio).getHours() < 10 ? '0' + new Date(ccusto.inicio).getHours() : new Date(ccusto.inicio).getHours()}:
                    {new Date(ccusto.inicio).getMinutes() < 10 ? '0' + new Date(ccusto.inicio).getMinutes() : new Date(ccusto.inicio).getMinutes()}:
                    {new Date(ccusto.inicio).getSeconds() < 10 ? '0' + new Date(ccusto.inicio).getSeconds() : new Date(ccusto.inicio).getSeconds()}{" "}
                    {new Date(ccusto.inicio).getMonth() < 10 ? '0' + new Date(ccusto.inicio).getMonth() : new Date(ccusto.inicio).getMonth()}/
                    {new Date(ccusto.inicio).getDay() < 10 ? '0' + new Date(ccusto.inicio).getDay() : new Date(ccusto.inicio).getDay()}/
                    {new Date(ccusto.inicio).getFullYear() < 10 ? '0' + new Date(ccusto.inicio).getFullYear() : new Date(ccusto.inicio).getFullYear()}
                </td> */}
                <td>{ccusto.setor_ccusto}</td>
                <td>{ccusto.gerente}</td>
                <td>{Math.ceil(ccusto.Decorrido.toFixed(3)) > 1 ? Math.ceil(ccusto.Decorrido.toFixed(3)) + ' Dias' : Math.ceil(ccusto.Decorrido.toFixed(3)) + ' Dia'}</td>
                <td className='acoes-tabela-projeto'>
                    <button className='button-apagar-projeto' onClick={async () => await props.apagar(ccusto.id)} >
                        <img style={{ width: '10px' }} src={editar} />
                    </button>
                </td>
            </tr>
        ))
    )
}