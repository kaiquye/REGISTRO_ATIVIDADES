import './style.css'
import editar from './excluir.png'
export const ProjetoTabela = function (props) {
  return (
    props.data.map((registro) => (
      <tr>
        <td><input style={{ width: '9px', marginTop: '3px' }} type='checkbox' /></td>
        <td>{registro.assunto}</td>
        <td>{registro.email}</td>
        <td>
          {new Date(registro.inicio).getHours() < 10 ? '0' + new Date(registro.inicio).getHours() : new Date(registro.inicio).getHours()}:
          {new Date(registro.inicio).getMinutes() < 10 ? '0' + new Date(registro.inicio).getMinutes() : new Date(registro.inicio).getMinutes()}:
          {new Date(registro.inicio).getSeconds() < 10 ? '0' + new Date(registro.inicio).getSeconds() : new Date(registro.inicio).getSeconds()}{" "}
          {new Date(registro.inicio).getMonth() < 10 ? '0' + new Date(registro.inicio).getMonth() : new Date(registro.inicio).getMonth()}/
          {new Date(registro.inicio).getDay() < 10 ? '0' + new Date(registro.inicio).getDay() : new Date(registro.inicio).getDay()}/
          {new Date(registro.inicio).getFullYear() < 10 ? '0' + new Date(registro.inicio).getFullYear() : new Date(registro.inicio).getFullYear()}
        </td>
        <td>
          {new Date(registro.termino).getHours() < 10 ? '0' + new Date(registro.termino).getHours() : new Date(registro.termino).getHours()}:
          {new Date(registro.termino).getMinutes() < 10 ? '0' + new Date(registro.termino).getMinutes() : new Date(registro.termino).getMinutes()}:
          {new Date(registro.termino).getSeconds() < 10 ? '0' + new Date(registro.termino).getSeconds() : new Date(registro.termino).getSeconds()}{" "}
          {new Date(registro.termino).getMonth() < 10 ? '0' + new Date(registro.termino).getMonth() : new Date(registro.termino).getMonth()}/
          {new Date(registro.termino).getDay() < 10 ? '0' + new Date(registro.termino).getDay() : new Date(registro.termino).getDay()}/
          {new Date(registro.termino).getFullYear() < 10 ? '0' + new Date(registro.termino).getFullYear() : new Date(registro.termino).getFullYear()}
        </td>
        <td>{registro.projeto}</td>
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
