import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Label, Colors } from 'ng2-charts';

@Component({
  selector: 'app-chartareanetwork',
  templateUrl: './chartareanetwork.component.html',
  styleUrls: ['./chartareanetwork.component.scss']
})

export class ChartareanetworkComponent implements OnInit {

  @ViewChild('areachart') areachart!: ElementRef;


  areaChartOptions: ChartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    elements: {
      line: {
        tension: 0 // disables bezier curves
      }
    },
    layout: {
      padding: {
        left: 0,
        bottom: -10
      }
    },
    scales: {
      yAxes: [
        {
          ticks: {
            display: true,
            beginAtZero: true,
            padding: 0,
          },
          gridLines: {
            drawBorder: true,
            display: true,
            color: 'rgba(0,0,0,0.04)',
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
            color: 'rgba(0,0,0,0.04)',
          },
        }
      ]
    }
  };
  areaChartLabels: Label[] = ['00:00', '00:05', '00:10', '00:15', '00:20', '00:25', '00:30', '00:35', '00:40', '00:45', '00:50', '00:55', '01:00', '01:05', '01:10', '01:15', '01:20', '01:25', '01:30',];
  areaChartType: ChartType = 'line';
  areaChartLegend = false;
  areaChartPlugins = [];
  areaChartColors: Colors[] = [
    { // red
      backgroundColor: 'rgba(255, 193, 7, 0.95)',
      borderColor: '#ffc107',
      borderWidth: 1,
      pointRadius: 1.2,
    }
  ];
  areaChartData: ChartDataSets[] = [
    {
      data: [45, 37, 60, 70, 46, 13, 45, 37, 45, 37, 60, 70, 46, 13, 45, 37, 13, 45, 37],
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
    const gradient2 = this.areachart.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 230);
    gradient2.addColorStop(0, 'rgba(255, 193, 7, 0.95)');
    gradient2.addColorStop(1, 'rgba(255, 193, 7, 0)');
    this.areaChartColors = [
      {
        backgroundColor: gradient2
      }
    ];
  }

  randomize(): void {
    // Only Change 3 values
    this.areaChartData[0].data = [
      Math.round(Math.random() * 100),
      (Math.random() * 10),
      (Math.random() * 40),
      (Math.random() * 50),
      Math.round(Math.random() * 100),
      (Math.random() * 30),
      (Math.random() * 50),
      Math.round(Math.random() * 100),
      (Math.random() * 10),
      (Math.random() * 40),
      (Math.random() * 50),
      Math.round(Math.random() * 100),
      (Math.random() * 30),
      (Math.random() * 40),
      (Math.random() * 50),
      Math.round(Math.random() * 100),
      (Math.random() * 30),
      (Math.random() * 50),
      (Math.random() * 30),
    ];
  }

}
