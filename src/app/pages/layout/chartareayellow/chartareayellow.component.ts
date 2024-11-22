import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Label, Colors } from 'ng2-charts';


@Component({
  selector: 'app-chartareayellow',
  templateUrl: './chartareayellow.component.html',
  styleUrls: ['./chartareayellow.component.scss']
})
export class ChartareayellowComponent implements OnInit {
  @ViewChild('chartareayellow') chartareayellow!: ElementRef;


  chartareayellowOptions: ChartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    elements: {
      line: {
        //tension: 0 // disables bezier curves
      }
    },
    layout: {
      padding: {
        left: -20,
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
  chartareayellowLabels: Label[] = ['1', '2', '3', '4', '5', '7', '8'];
  chartareayellowType: ChartType = 'line';
  chartareayellowLegend = false;
  chartareayellowPlugins = [];
  chartareayellowColors: Colors[] = [
    { // red
      backgroundColor: 'rgba(240, 61, 79, 0.35)',
      borderColor: '#fdba00',
      borderWidth: 1,
      pointRadius: 1.2,
    }
  ];
  chartareayellowData: ChartDataSets[] = [
    {
      data: [45, 37, 60, 70, 46, 13, 45, 37],
      label: 'Quarterly Result',
    }
  ];

  constructor() { }

  ngOnInit(): void {

    setInterval(() => {
      this.randomize();
    }, 2000);

  }
  ngAfterViewInit(): void {
    const gradient2 = this.chartareayellow.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 65);
    gradient2.addColorStop(0, 'rgba(253, 100, 0, 0.85)');
    gradient2.addColorStop(1, 'rgba(253, 186, 0, 0)');
    this.chartareayellowColors = [
      {
        backgroundColor: gradient2
      }
    ];
  }

  randomize(): void {
    // Only Change 3 values
    this.chartareayellowData[0].data = [
      Math.round(Math.random() * 65),
      (Math.random() * 10),
      (Math.random() * 40),
      (Math.random() * 50),
      Math.round(Math.random() * 80),
      (Math.random() * 30),
      (Math.random() * 50)
    ];
  }
}
