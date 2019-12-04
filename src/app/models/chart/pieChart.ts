import { ChartOptions } from 'chart.js';

export class PieChart {
    labels: string[] = [];
    data: number[] = [];
    type = 'pie';
    plugins: any[] = [];
    private options: ChartOptions = {};
    constructor() { }
    set Options(options: ChartOptions) {
        this.options = options;
    }
    get Options() {
        return this.options;
    }
}
