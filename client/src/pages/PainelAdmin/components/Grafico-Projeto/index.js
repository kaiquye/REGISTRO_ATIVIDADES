import React, { useState } from 'react';
import { Chart } from 'react-google-charts';
import './style.css'

export function Graficos(props) {
    const data = [
        ['Task', 'Hours per Day'],
        ['DP', 3],
    ];

    const datas = function () {
        const newArray = [['Task', 'Hours per Day']]
        for (const valor of props.data.data) {
            newArray.push([valor.setor, valor.decorrido]);
        }
        return newArray
    }

    const options = {
        title: 'Horas Trabalhadas.',
        pieHole: 0.4,
        is3D: false,
    };

    return (
        <section className='graficoProjeto_Home'>
            <div>
                <Chart
                    chartType='PieChart'
                    width='100%'
                    height='auto'
                    data={datas()}
                    options={options}
                />
            </div>
        </section>

    );
}