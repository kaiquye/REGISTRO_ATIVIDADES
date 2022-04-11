// import React, { useState } from 'react';
// import { Chart } from 'react-google-charts';
// import './style.css'

// export function Graficos(props) {
//     const data = [
//         ['Task', 'Hours per Day'],
//         ['DP', 3],
//     ];

//     const datas = function () {
//         const newArray = [['Task', 'Hours per Day']]
//         console.log('array', props.data)
//         for (const valor of props.data.data) {
//             newArray.push([valor.setor, valor.decorrido]);
//         }
//         console.log('newaray', newArray);
//         console.log('newwwwww',data)
//         return newArray
//     }

//     const options = {
//         title: 'Horas decorridas.',
//         pieHole: 0.4,
//         is3D: false,
//     };

//     return (
//         <section className='graficoProjeto_Home'>
//             <Chart
//                 chartType='PieChart'
//                 width='100%'
//                 height='200px'
//                 data={datas()}
//                 options={options}
//             />
//         </section>

//     );
// }