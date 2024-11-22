import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Label, Colors } from 'ng2-charts';


@Component({
  selector: 'app-chartareared',
  templateUrl: './chartareared.component.html',
  styleUrls: ['./chartareared.component.scss']
})
export class ChartarearedComponent implements OnInit {
  @ViewChild('chartareared') chartareared!: ElementRef;


  chartarearedOptions: ChartOptions = {
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
  chartarearedLabels: Label[] = ['1', '2', '3', '4', '5', '7', '8'];
  chartarearedType: ChartType = 'line';
  chartarearedLegend = false;
  chartarearedPlugins = [];
  chartarearedColors: Colors[] = [
    { // red
      backgroundColor: 'rgba(240, 61, 79, 0.35)',
      borderColor: '#f03d4f',
      borderWidth: 1,
      pointRadius: 1.2,
    }
  ];
  chartarearedData: ChartDataSets[] = [
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
    const gradient2 = this.chartareared.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 65);
    gradient2.addColorStop(0, 'rgba(240, 61, 79, 0.85)');
    gradient2.addColorStop(1, 'rgba(255, 223, 220, 0)');
    this.chartarearedColors = [
      {
        backgroundColor: gradient2
      }
    ];
  }

  randomize(): void {
    // Only Change 3 values
    this.chartarearedData[0].data = [
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
