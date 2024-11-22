import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Label, Colors } from 'ng2-charts';


@Component({
  selector: 'app-chartbarpink',
  templateUrl: './chartbarpink.component.html',
  styleUrls: ['./chartbarpink.component.scss']
})
export class ChartbarpinkComponent implements OnInit {
  @ViewChild('chartbarpink') chartbarpink!: ElementRef;


  chartbarpinkOptions: ChartOptions = {
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
  chartbarpinkLabels: Label[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
  chartbarpinkType: ChartType = 'bar';
  chartbarpinkLegend = false;
  chartbarpinkPlugins = [];
  chartbarpinkColors: Colors[] = [
    { // pink
      backgroundColor: '#E50A8E',
      borderWidth: 0,
      pointRadius: 1.2,
    },
    { // light pink
      backgroundColor: 'rgba(229, 10, 142, 0.15)',
      borderWidth: 0,
      pointRadius: 1.2,
    }
  ];
  chartbarpinkData: ChartDataSets[] = [
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
    this.chartbarpinkData[0].data = [
      Math.round(Math.random() * 65),
      (Math.random() * 10),
      (Math.random() * 40),
      (Math.random() * 50),
      (Math.random() * 50)
    ];
  }
}
