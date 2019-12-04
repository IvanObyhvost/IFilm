import { Component, OnInit, Input } from '@angular/core';
import { Film } from 'src/app/models/film/film';
import { PieChart } from 'src/app/models/chart/pieChart';
import { ChartOptions } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  @Input() films: Film[] = [];
  public pieChart: PieChart;
  constructor() {
    this.pieChart = new PieChart();
    this.pieChart.Options = this.getChartOptions();
    this.pieChart.plugins = [pluginDataLabels];
  }

  ngOnInit() {
    this.setDataToChart();
  }

  private setDataToChart() {
    const countYearForDecade = 10;
    const decades = this.films.map(film => Math.floor(film.year / countYearForDecade) * countYearForDecade);
    decades.sort((a, b) => a - b);
    const labels = decades.filter((decade, index, arr) => index === arr.findIndex(item => item === decade));
    const data = decades.reduce((acc, el) => {
      acc[el] = (acc[el] || 0) + 1;
      return acc;
    }, {});
    this.pieChart.labels = labels.map(label => `${label}s films‎`);
    this.pieChart.data = labels.map(label => data[label]);
  }

  private getChartOptions() {
    const options: ChartOptions = {
      responsive: true,
      legend: {
        position: 'left',
      },
      plugins: {
        datalabels: {
          formatter: (value, ctx) =>  value,
        },
      }
    };
    return options;
  }
}
