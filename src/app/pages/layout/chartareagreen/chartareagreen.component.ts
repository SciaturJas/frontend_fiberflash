import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Label, Colors } from 'ng2-charts';


@Component({
  selector: 'app-chartareagreen',
  templateUrl: './chartareagreen.component.html',
  styleUrls: ['./chartareagreen.component.scss']
})
export class ChartareagreenComponent implements OnInit {
  @ViewChild('chartareagreen') chartareagreen!: ElementRef;


  chartareagreenOptions: ChartOptions = {
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
  chartareagreenLabels: Label[] = ['1', '2', '3', '4', '5', '7', '8'];
  chartareagreenType: ChartType = 'line';
  chartareagreenLegend = false;
  chartareagreenPlugins = [];
  chartareagreenColors: Colors[] = [
    { // red
      backgroundColor: 'rgba(240, 61, 79, 0.35)',
      borderColor: '#91C300',
      borderWidth: 1,
      pointRadius: 1.2,
    }
  ];
  chartareagreenData: ChartDataSets[] = [
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
    const gradient2 = this.chartareagreen.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 65);
    gradient2.addColorStop(0, 'rgba(145, 195, 0, 0.85)');
    gradient2.addColorStop(1, 'rgba(176, 197, 0, 0)');
    this.chartareagreenColors = [
      {
        backgroundColor: gradient2
      }
    ];
  }

  randomize(): void {
    // Only Change 3 values
    this.chartareagreenData[0].data = [
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
