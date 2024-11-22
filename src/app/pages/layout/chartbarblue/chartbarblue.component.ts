import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Label, Colors } from 'ng2-charts';


@Component({
  selector: 'app-chartbarblue',
  templateUrl: './chartbarblue.component.html',
  styleUrls: ['./chartbarblue.component.scss']
})
export class ChartbarblueComponent implements OnInit {
  @ViewChild('chartbarblue') chartbarblue!: ElementRef;


  chartbarblueOptions: ChartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    elements: {
      line: {
        //tension: 0 // disables bezier curves
      }
    },
    layout: {
      padding: {
        left: -10,
      }
    },
    scales: {
      yAxes: [
        {
          ticks: {
            display: false,
            beginAtZero: true,
            padding: 0,
          },
          gridLines: {
            drawBorder: false,
            display: false,
          },
        }
      ],
      xAxes: [
        {
          ticks: {
            display: true,
            fontColor: '#999999',
            showLabelBackdrop: false,
            padding: 0,
          },
          gridLines: {
            drawBorder: false,
            display: false,
          },
        }
      ]
    }
  };
  chartbarblueLabels: Label[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
  chartbarblueType: ChartType = 'bar';
  chartbarblueLegend = false;
  chartbarbluePlugins = [];
  chartbarblueColors: Colors[] = [
    { // blue
      backgroundColor: '#d7e6f5',
      borderWidth: 0,
      pointRadius: 1.2,
    },
    { // light blue
      backgroundColor: '#015ec2',
      borderWidth: 0,
      pointRadius: 1.2,
    }
  ];
  chartbarblueData: ChartDataSets[] = [
    {
      data: [45, 37, 60, 70, 46, 13, 45, 37],
      label: 'Quarterly Result',
      barThickness: 8,
    },
    {
      data: [45, 37, 60, 70, 46, 13, 45, 37],
      label: 'Quarterly Result',
      barThickness: 8,
    }
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
