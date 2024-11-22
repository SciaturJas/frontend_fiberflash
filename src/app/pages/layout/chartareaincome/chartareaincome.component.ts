import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Label, Colors } from 'ng2-charts';

@Component({
  selector: 'app-chartareaincome',
  templateUrl: './chartareaincome.component.html',
  styleUrls: ['./chartareaincome.component.scss']
})
export class ChartareaincomeComponent implements OnInit {
  @ViewChild('chartareaincome') chartareaincome!: ElementRef;


  chartareaincomeOptions: ChartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    elements: {
      line: {
        //tension: 0 // disables bezier curves
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
          display: true,
          gridLines: {
            display: true,
            drawBorder: true,
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
          display: true,
          gridLines: {
            display: false,
            drawBorder: true,
            color: 'rgba(0,0,0,0.04)',
          },
        }
      ]
    }
  };
  chartareaincomeLabels: Label[] = ['1', '2', '3', '4', '5', '7', '8'];
  chartareaincomeType: ChartType = 'line';
  chartareaincomeLegend = false;
  chartareaincomePlugins = [];
  chartareaincomeColors: Colors[] = [
    { // green
      backgroundColor: 'rgba(145, 195, 0, 0.85)',
      borderColor: '#91C300',
      borderWidth: 1,
      pointRadius: 1.2,
    }
  ];
  chartareaincomeData: ChartDataSets[] = [
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
    const gradient2 = this.chartareaincome.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 150);
    gradient2.addColorStop(0, 'rgba(145, 195, 0, 0.85)');
    gradient2.addColorStop(1, 'rgba(176, 197, 0, 0)');
    this.chartareaincomeColors = [
      {
        backgroundColor: gradient2
      }
    ];
  }

  randomize(): void {
    // Only Change 3 values
    this.chartareaincomeData[0].data = [
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
