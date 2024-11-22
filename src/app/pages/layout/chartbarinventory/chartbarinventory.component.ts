import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Label, Colors } from 'ng2-charts';


@Component({
  selector: 'app-chartbarinventory',
  templateUrl: './chartbarinventory.component.html',
  styleUrls: ['./chartbarinventory.component.scss']
})
export class ChartbarinventoryComponent implements OnInit {
  @ViewChild('chartbarinventory') chartbarinventory!: ElementRef;


  chartbarinventoryOptions: ChartOptions = {
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
  chartbarinventoryLabels: Label[] = ['Jan-15', 'Jan-30', 'Feb-15', 'Feb-30', 'Mar-15', 'Mar-30', 'Apr-15', 'Apr-30', 'May-15', 'May-30', 'Jun-15', 'Jun-30', 'Jul-15', 'Jul-30', 'Aug-15', 'Aug-30'];
  chartbarinventoryType: ChartType = 'bar';
  chartbarinventoryLegend = false;
  chartbarinventoryPlugins = [];
  chartbarinventoryColors: Colors[] = [
    { // green
      backgroundColor: 'rgba(145, 195, 0, 0.4)',
      borderColor: 'rgba(145, 195, 0, 1)',
      borderWidth: 1,
      pointRadius: 1.2,
    },
    { // yellow
      backgroundColor: 'rgba(255, 193, 7, 0.4)',
      borderColor: 'rgba(255, 193, 7, 1)',
      borderWidth: 1,
      pointRadius: 1.2,
    },
    { // red
      backgroundColor: 'rgba(240, 61, 79, 0.4)',
      borderColor: 'rgba(240, 61, 79, 1)',
      borderWidth: 1,
      pointRadius: 1.2
    }
  ];
  chartbarinventoryData: ChartDataSets[] = [
    {
      barPercentage: 0.98,
      categoryPercentage: 1.0,
      data: [70, 46, 13, 45, 37, 45, 37, 60, 70, 46, 13, 45, 37, 45, 37, 60],
      label: 'Quarterly Result',
      barThickness: 16,
    },
    {
      barPercentage: 0.98,
      categoryPercentage: 1.0,
      data: [65, 47, 55, 65, 40, 23, 55, 45, 65, 47, 55, 65, 40, 23, 55, 45],
      label: 'Quarterly Result',
      barThickness: 16,
    },
    {
      barPercentage: 0.98,
      categoryPercentage: 1.0,
      data: [32, 45, 55, 68, 54, 28, 41, 65, 32, 45, 55, 68, 54, 28, 41, 65],
      label: 'Quarterly Result',
      barThickness: 16,
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
    this.chartbarinventoryData[0].data = [
      Math.round(Math.random() * 65),
      (Math.random() * 10),
      (Math.random() * 40),
      (Math.random() * 50),
      (Math.random() * 50),
      Math.round(Math.random() * 65),
      (Math.random() * 10),
      (Math.random() * 40),
      (Math.random() * 50),
      (Math.random() * 50),
      (Math.random() * 50),
      Math.round(Math.random() * 65),
      (Math.random() * 10),
      (Math.random() * 40),
      (Math.random() * 50),
      (Math.random() * 50)
    ];
    this.chartbarinventoryData[1].data = [
      Math.round(Math.random() * 58),
      (Math.random() * 18),
      (Math.random() * 42),
      (Math.random() * 55),
      (Math.random() * 65),
      Math.round(Math.random() * 50),
      (Math.random() * 18),
      (Math.random() * 38),
      (Math.random() * 68),
      (Math.random() * 65),
      Math.round(Math.random() * 50),
      (Math.random() * 18),
      (Math.random() * 38),
      (Math.random() * 68),
      (Math.random() * 65)
    ];
    this.chartbarinventoryData[2].data = [
      Math.round(Math.random() * 65),
      (Math.random() * 15),
      (Math.random() * 45),
      (Math.random() * 35),
      (Math.random() * 50),
      Math.round(Math.random() * 65),
      (Math.random() * 25),
      (Math.random() * 65),
      (Math.random() * 48),
      (Math.random() * 34),
      Math.round(Math.random() * 65),
      (Math.random() * 25),
      (Math.random() * 65),
      (Math.random() * 48),
      (Math.random() * 34)
    ];
  }

}
