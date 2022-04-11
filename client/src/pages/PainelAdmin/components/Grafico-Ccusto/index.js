import React from "react";
import { Chart } from "react-google-charts";
import './style.css'

export const GraficoCcusto = function () {



    const dataOld = [
        ["Name", "Popularity"],
        ["Cesar", 4],
        ["Cesar", 4],
    ];

    const dataNew = [
        ["Name", "Popularity"],
        ["Cesar", 9],
        ["Cesar", 5],
    ];

    const diffdata = {
        old: dataOld,
        new: dataNew,
    };

    return (
        <section className="graficoCcusto">
            <Chart
                chartType="ColumnChart"
                width="100%"
                height="100%"
                diffdata={diffdata}
            />
        </section>
    );
}