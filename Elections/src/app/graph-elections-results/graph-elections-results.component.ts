import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { UIChart } from 'primeng/chart';

@Component({
  selector: 'app-graph-elections-results',
  templateUrl: './graph-elections-results.component.html',
  styleUrls: ['./graph-elections-results.component.scss']
})
export class GraphElectionsResultsComponent implements OnInit {
  @Input() ballotState: boolean;
  @ViewChild('chart') chart: UIChart;
  graphType = 'bar';

  data: any;
  constructor() {}
  ngOnInit() {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'January', 'February', 'March', 'April', 'May'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: ['#42A5F5', '#9CCC65'],
          borderColor: '#1E88E5',
          data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56]
        }
      ]
    };
  }
  changeType() {
    this.graphType = this.graphType === 'pie' ? 'bar' : 'pie';
    this.chart.reinit();


  }
}
