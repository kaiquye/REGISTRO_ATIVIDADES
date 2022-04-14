export const RegistrosTabela = function (props) {


    return (
        props.data.data.map((registro) => (
            <tr>
                {
                    console.log('tttttttttttt',props.data)
                }
                <td>{registro.assunto}</td>
                <td>
                    {new Date(registro.inicio).getHours() < 10 ? '0' + new Date(registro.inicio).getHours() : new Date(registro.inicio).getHours()}:
                    {new Date(registro.inicio).getMinutes() < 10 ? '0' + new Date(registro.inicio).getMinutes() : new Date(registro.inicio).getMinutes()}:
                    {new Date(registro.inicio).getSeconds() < 10 ? '0' + new Date(registro.inicio).getSeconds() : new Date(registro.inicio).getSeconds()}{" "}
                    {new Date(registro.inicio).getMonth() < 10 ? '0' + new Date(registro.inicio).getMonth() : new Date(registro.inicio).getMonth()}/{" "}
                    {new Date(registro.inicio).getDay() < 10 ? '0' + new Date(registro.inicio).getDay() : new Date(registro.inicio).getDay() }/
                    {new Date(registro.inicio).getFullYear() < 10 ? '0' + new Date(registro.inicio).getFullYear() : new Date(registro.inicio).getFullYear()}
                </td>
                <td>
                    {new Date(registro.termino).getHours() < 10 ? '0' + new Date(registro.termino).getHours() : new Date(registro.termino).getHours()}:
                    {new Date(registro.termino).getMinutes() < 10 ? '0' + new Date(registro.termino).getMinutes() : new Date(registro.termino).getMinutes()}:
                    {new Date(registro.termino).getSeconds() < 10 ? '0' + new Date(registro.termino).getSeconds() : new Date(registro.termino).getSeconds()}{" "}
                    {new Date(registro.termino).getMonth() < 10 ? '0' + new Date(registro.termino).getMonth() : new Date(registro.termino).getMonth()}/
                    {new Date(registro.termino).getDay() < 10 ? '0' + new Date(registro.termino).getDay() : new Date(registro.termino).getDay() }/
                    {new Date(registro.termino).getFullYear() < 10 ? '0' + new Date(registro.termino).getFullYear() : new Date(registro.termino).getFullYear()}
                </td>
                <td>{registro.setor}</td>
                <td>{Math.ceil(registro.decorrido.toFixed(3)) > 1 ? Math.ceil(registro.decorrido.toFixed(3)) + ' Dias' : Math.ceil(registro.decorrido.toFixed(3)) + ' Dia'}</td>
                <td>{registro.email}</td>
            </tr>
        ))

    )
}