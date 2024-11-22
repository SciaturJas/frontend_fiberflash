import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Label, Colors } from 'ng2-charts';


@Component({
  selector: 'app-chartbarred',
  templateUrl: './chartbarred.component.html',
  styleUrls: ['./chartbarred.component.scss']
})
export class ChartbarredComponent implements OnInit {
  @ViewChild('chartbarred') chartbarred!: ElementRef;


  chartbarredOptions: ChartOptions = {
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
        bottom: -10
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
            display: false,
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
  chartbarredLabels: Label[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
  chartbarredType: ChartType = 'bar';
  chartbarredLegend = false;
  chartbarredPlugins = [];
  chartbarredColors: Colors[] = [
    { // red
      backgroundColor: '#f03d4f',
      borderWidth: 0,
      pointRadius: 1.2,
    },
    { // light red
      backgroundColor: 'rgba(240, 61, 79, 0.15)',
      borderWidth: 0,
      pointRadius: 1.2,
    }
  ];
  chartbarredData: ChartDataSets[] = [
    {
      data: [45, 37, 60, 70, 46, 13, 45, 37],
      label: 'Quarterly Result',
      barThickness: 5,
    },
    {
      data: [45, 37, 60, 70, 46, 13, 45, 37],
      label: 'Quarterly Result',
      barThickness: 5,
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
    this.chartbarredData[0].data = [
      Math.round(Math.random() * 65),
      (Math.random() * 10),
      (Math.random() * 40),
      (Math.random() * 50),
      (Math.random() * 50)
    ];
  }
}
