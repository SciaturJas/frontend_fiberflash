import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Label, Colors } from 'ng2-charts';

@Component({
  selector: 'app-chartarea',
  templateUrl: './chartarea.component.html',
  styleUrls: ['./chartarea.component.scss']
})

export class ChartareaComponent implements OnInit {

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
  areaChartLabels: Label[] = ['1', '2', '3', '4', '5', '7', '8'];
  areaChartType: ChartType = 'line';
  areaChartLegend = false;
  areaChartPlugins = [];
  areaChartColors: Colors[] = [
    { // red
      backgroundColor: 'rgba(240, 61, 79, 0.35)',
      borderColor: '#f03d4f',
      borderWidth: 1,
      pointRadius: 1.2,
    }
  ];
  areaChartData: ChartDataSets[] = [
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
    const gradient2 = this.areachart.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 95);
    gradient2.addColorStop(0, 'rgba(240, 61, 79, 0.75)');
    gradient2.addColorStop(0.45, 'rgba(240, 61, 79, 0.5)');
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
      (Math.random() * 50)
    ];
  }

}
