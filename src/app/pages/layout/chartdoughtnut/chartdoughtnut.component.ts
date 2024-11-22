import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Label, Colors } from 'ng2-charts';


@Component({
  selector: 'app-chartdoughtnut',
  templateUrl: './chartdoughtnut.component.html',
  styleUrls: ['./chartdoughtnut.component.scss']
})
export class ChartdoughtnutComponent implements OnInit {
  @ViewChild('chartbarblue') chartbarblue!: ElementRef;


  chartbarblueOptions: ChartOptions = {
    maintainAspectRatio: false,
    cutoutPercentage: 62,
    responsive: true,
    elements: {

    },
    tooltips: {
      position: 'nearest',
    },
    layout: {
      padding: {
        //left: -10,
      }
    },
    plugins: {
      legend: {
        display: false,
        position: 'top',
      },
      title: {
        display: false,
        text: 'Chart.js Doughnut Chart'
      }
    }
  };
  chartbarblueLabels: Label[] = ['Food', 'Transport', 'Children', 'Home', 'Other'];
  chartbarblueType: ChartType = 'doughnut';
  chartbarblueLegend = false;
  chartbarbluePlugins = [];
  chartbarblueData: ChartDataSets[] = [
    {
      data: [40, 10, 15, 25, 10],
      label: 'Quarterly Result',
      borderWidth: 0,
      backgroundColor: ['#ffbb00', '#91c300', '#ff6f6a', '#015ec2', '#becede']
    },
  ];

  constructor() { }

  ngOnInit(): void {

    setInterval(() => {
      this.randomize();
    }, 2000);

  }
  ngAfterViewInit(): void {
  }

  randomize(): void {
    // Only Change 3 values
    this.chartbarblueData[0].data = [
      Math.round(Math.random() * 65),
      (Math.random() * 10),
      (Math.random() * 40),
      (Math.random() * 50),
      (Math.random() * 50)
    ];
  }

}
