import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  @Input() allData: any;

  public chartOptions: any = {};
  public xAxisData: any = [];
  public serData: any = [];

  ngOnInit(): void {
    this.getChartOptions();
  }

  getChartOptions() {
    this.chartOptions = {
      xAxis: {
        type: 'category',
        data: this.xAxisData || []
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(130, 180, 180, 0.2)'
          },
          data: this.serData || [],
        }
      ]
    };
  }

  updateChartByGender() {
    const joinedData: any = {};
    this.allData.forEach((item: any) => {
      if (joinedData[item.joiningyear]) {
        joinedData[item.joiningyear]++;
      } else {
        joinedData[item.joiningyear] = 1;
      }
    });
    this.serData = [];
    const sortedData = Object.entries(joinedData).sort(([a], [b]) => Number(a) - Number(b));
    this.xAxisData = sortedData.map(([year, count])=> year);
    this.serData = sortedData.map(([year, count])=> count);
    this.getChartOptions();
  }

  updateChartByState() {
    const stateData: Record<string, number> = {};
    this.allData.forEach((item: any) => {
      if (stateData[item.state]) {
        stateData[item.state]++;
      } else {
        stateData[item.state] = 1;
      }
    });
    this.serData = [];
    const sortedData = Object.entries(stateData).sort(([_, a], [__, b]) => a - b);
    this.xAxisData = sortedData.map(([state, count])=> state);
    this.serData = sortedData.map(([state, count])=> count);
    this.getChartOptions();
  }
}