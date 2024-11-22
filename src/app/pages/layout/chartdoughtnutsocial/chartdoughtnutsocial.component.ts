import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Label, Colors } from 'ng2-charts';


@Component({
  selector: 'app-chartdoughtnutsocial',
  templateUrl: './chartdoughtnutsocial.component.html',
  styleUrls: ['./chartdoughtnutsocial.component.scss']
})
export class chartdoughtnutsocialComponent implements OnInit {
  @ViewChild('chartbarblue') chartbarblue!: ElementRef;


  chartbarblueOptions: ChartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    cutoutPercentage: 62,

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
  chartbarblueLabels: Label[] = ['Male', 'Female', 'Other'];
  chartbarblueType: ChartType = 'doughnut';
  chartbarblueLegend = false;
  chartbarbluePlugins = [];
  chartbarblueData: ChartDataSets[] = [
    {
      data: [55, 30, 15],
      label: 'Quarterly Result',
      borderWidth: 0,
      backgroundColor: ['#ff6f6a', '#015ec2', '#becede']
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
    ];
  }

}
