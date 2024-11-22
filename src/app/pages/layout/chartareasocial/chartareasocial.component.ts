import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Label, Colors } from 'ng2-charts';


@Component({
  selector: 'app-chartareasocial',
  templateUrl: './chartareasocial.component.html',
  styleUrls: ['./chartareasocial.component.scss']
})
export class ChartareasocialComponent implements OnInit {
  @ViewChild('chartareasocial') chartareasocial!: ElementRef;


  chartareasocialOptions: ChartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    elements: {
      line: {
        // tension: 0.35 // disables bezier curves
      }
    },
    layout: {
      padding: {
        left: 0,
        bottom: 0
      }
    },
    scales: {
      yAxes: [
        {
          ticks: {
            display: true,
            fontColor: '#999999',
            beginAtZero: true,
            padding: 0,
          },
          gridLines: {
            drawBorder: true,
            color: 'rgba(0, 0, 0, 0.05)',
            display: true,
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
            drawBorder: true,
            color: 'rgba(0, 0, 0, 0.05)',
            display: true,
          },
        }
      ]
    }
  };
  chartareasocialLabels: Label[] = ['Jan-15', 'Jan-30', 'Feb-15', 'Feb-30', 'Mar-15', 'Mar-30', 'Apr-15', 'Apr-30', 'May-15', 'May-30', 'Jun-15', 'Jun-30', 'Jul-15', 'Jul-30', 'Aug-15', 'Aug-30'];
  chartareasocialType: ChartType = 'line';
  chartareasocialLegend = false;
  chartareasocialPlugins = [];
  chartareasocialColors: Colors[] = [
    { // blue
      backgroundColor: 'rgba(211, 0, 24, 0.35)',
      borderColor: '#015ec2',
      borderWidth: 1,
      pointRadius: 1.2,
    },
    { // red
      backgroundColor: 'rgba(240, 61, 79, 0.35)',
      borderColor: '#f03d4f',
      borderWidth: 1,
      pointRadius: 1.2,
    },
  ];
  chartareasocialData: ChartDataSets[] = [
    {
      data: [46, 13, 45, 37, 45, 46, 13, 45, 37, 37, 36, 70, 45, 32, 60, 75],
      label: 'income',
    },
    {
      data: [45, 37, 45, 37, 60, 70, 46, 13, 45, 37, 60, 70, 46, 13, 45, 37],
      label: 'expense',
    },
  ];

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.randomize();
    }, 2000);

  }
  ngAfterViewInit(): void {
    const gradient1 = this.chartareasocial.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 200);
    gradient1.addColorStop(0, 'rgba(1, 94, 194, 0.55)');
    gradient1.addColorStop(1, 'rgba(1, 94, 193, 0)');
    const gradient2 = this.chartareasocial.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 200);
    gradient2.addColorStop(0, 'rgba(240, 61, 79, 0.85)');
    gradient2.addColorStop(1, 'rgba(255, 223, 220, 0)');

    this.chartareasocialColors = [{ backgroundColor: gradient1 }, { backgroundColor: gradient2 }];
  }

  randomize(): void {
    // Only Change 3 values
    this.chartareasocialData[0].data = [Math.round(Math.random() * 100), (Math.random() * 10), (Math.random() * 45), (Math.random() * 50), Math.round(Math.random() * 100), Math.round(Math.random() * 80), (Math.random() * 40), (Math.random() * 45), (Math.random() * 100), (Math.random() * 40), (Math.random() * 40), (Math.random() * 50), Math.round(Math.random() * 90), (Math.random() * 30), (Math.random() * 45), (Math.random() * 50)];
    this.chartareasocialData[1].data = [Math.round(Math.random() * 100), (Math.random() * 15), (Math.random() * 48), (Math.random() * 55), Math.round(Math.random() * 100), Math.round(Math.random() * 100), (Math.random() * 25), (Math.random() * 50), (Math.random() * 90), (Math.random() * 20), (Math.random() * 40), (Math.random() * 50), Math.round(Math.random() * 100), (Math.random() * 35), (Math.random() * 50), (Math.random() * 55)];

  }
}
