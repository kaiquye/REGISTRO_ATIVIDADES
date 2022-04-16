import './style.css'
import editar from './excluir.png'
export const ProjetoTabela = function (props) {
  return (
    props.data.projeto.map((registro) => (
      <tr>
        <td><input style={{ width: '9px', marginTop: '3px' }} type='checkbox' /></td>
        <td>{registro.setor}</td>
        <td>{registro.descricao}</td>
        <td>
          {new Date(registro.inicio).getHours() < 10 ? '0' + new Date(registro.inicio).getHours() : new Date(registro.inicio).getHours()}:
          {new Date(registro.inicio).getMinutes() < 10 ? '0' + new Date(registro.inicio).getMinutes() : new Date(registro.inicio).getMinutes()}:
          {new Date(registro.inicio).getSeconds() < 10 ? '0' + new Date(registro.inicio).getSeconds() : new Date(registro.inicio).getSeconds()}{" "}
          {new Date(registro.inicio).getMonth() < 10 ? '0' + new Date(registro.inicio).getMonth() : new Date(registro.inicio).getMonth()}/
          {new Date(registro.inicio).getDay() < 10 ? '0' + new Date(registro.inicio).getDay() : new Date(registro.inicio).getDay()}/
          {new Date(registro.inicio).getFullYear() < 10 ? '0' + new Date(registro.inicio).getFullYear() : new Date(registro.inicio).getFullYear()}
        </td>
        <td>{registro.setor_ccusto}</td>
        <td>{registro.gerente}</td>
        <td>{Math.ceil(registro.decorrido.toFixed(3)) > 1 ? Math.ceil(registro.decorrido.toFixed(3)) + ' Dias' : Math.ceil(registro.decorrido.toFixed(3)) + ' Dia'}</td>
        <td className='acoes-tabela-projeto'>
          <button className='button-apagar-projeto' onClick={async () => await props.apagar(registro.id)} >
            <img style={{ width: '10px' }} src={editar} />
          </button>
        </td>
      </tr>
    ))
  )
}
