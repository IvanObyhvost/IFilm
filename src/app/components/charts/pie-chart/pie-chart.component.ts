import { Component, OnInit, Input } from '@angular/core';
import { Film } from 'src/app/models/film/film';
import { PieChart } from 'src/app/models/chart/pieChart';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  @Input() films: Film[] = [];
  public pieChart: PieChart;
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'left',
    }
  }
  constructor() {
    this.pieChart = new PieChart();
  }

  ngOnInit() {
    let decades = this.films.map(film => {
      return Math.floor(film.year/10) * 10;
    })
    decades.sort((a, b) => a - b);
    const labels = decades.filter((decade, index, arr) => index === arr.findIndex(item => item === decade))
    const data = decades.reduce((acc, el) => {
      acc[el] = (acc[el] || 0) +1;
      return acc;
    }, {});
    this.pieChart.labels = labels.map(label => `${label}s films‎`);
    this.pieChart.data = labels.map(label => data[label]);
  }

}
