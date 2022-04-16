import './style.css'
import editar from './excluir.png'
export const ProjetoTabela = function (props) {
  return (
    props.data.data.map((ccusto) => (
      <tr>
        <td><input style={{ width: '9px', marginTop: '3px' }} type='checkbox' /></td>
        <td>{ccusto.setor}</td>
        <td>{ccusto.empresa}</td>
        <td>{ccusto.livres}</td>
        <td>{ccusto.gastos}</td>
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
