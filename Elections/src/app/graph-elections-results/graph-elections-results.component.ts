import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { UIChart } from 'primeng/chart';
import { VotingCardDataService } from '../voting-card-data.service';

@Component({
  selector: 'app-graph-elections-results',
  templateUrl: './graph-elections-results.component.html',
  styleUrls: ['./graph-elections-results.component.scss']
})
export class GraphElectionsResultsComponent implements OnInit {
  @Input() ballotState: boolean;
  @ViewChild('chart') chart: UIChart;

  data: any;
  constructor(private votingCardDataService: VotingCardDataService) {}
  ngOnInit() {
    let letters: string[]=this.votingCardDataService.getLetters();
    let numberOfVotes: number[]=this.votingCardDataService.getNumberOfVotes();
    this.data = {  
      "labels":letters,
      "datasets":[  
         {  
            "label":"Election's Results",
            "data": numberOfVotes,
            "fill":false,
            "backgroundColor":[  
               "rgba(255, 99, 132, 0.2)",
               "rgba(255, 159, 64, 0.2)",
               "rgba(255, 205, 86, 0.2)",
               "rgba(75, 192, 192, 0.2)",
               "rgba(54, 162, 235, 0.2)",
               "rgba(153, 102, 255, 0.2)",
               "rgba(201, 203, 207, 0.2)",
               /**/
               "rgba(255, 70, 140, 0.2)",
               "rgba(255, 170, 70, 0.2)",
               "rgba(255, 212, 92, 0.2)",
               "rgba(75, 192, 200, 0.2)",
               "rgba(54, 162, 240, 0.2)"
            ],
            "borderColor":[  
               "rgb(255, 99, 132)",
               "rgb(255, 159, 64)",
               "rgb(255, 205, 86)",
               "rgb(75, 192, 192)",
               "rgb(54, 162, 235)",
               "rgb(153, 102, 255)",
               "rgb(201, 203, 207)",
               /**/
               "rgb(255, 70, 140)",
               "rgb(255, 170, 70)",
               "rgb(255, 212, 92)",
               "rgb(75, 192, 200)",
               "rgb(54, 162, 240)"
            ],
            "borderWidth":1
         }
      ]
   };
  }
}
