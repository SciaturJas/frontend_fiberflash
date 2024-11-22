import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Label, Colors } from 'ng2-charts';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  @ViewChild('chartareablue') chartareablue!: ElementRef;
  @ViewChild('chartareagreen') chartareagreen!: ElementRef;
  @ViewChild('chartareayellow') chartareayellow!: ElementRef;
  @ViewChild('chartareared') chartareared!: ElementRef;


  /* blue chart */
  chartareablueOptions: ChartOptions = {
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
  chartareablueLabels: Label[] = ['1', '2', '3', '4', '5', '7', '8'];
  chartareablueType: ChartType = 'line';
  chartareablueLegend = false;
  chartareabluePlugins = [];
  chartareablueColors: Colors[] = [
    { // red
      backgroundColor: 'rgba(240, 61, 79, 0.35)',
      borderColor: '#015EC2',
      borderWidth: 1,
      pointRadius: 1.2,
    }
  ];
  chartareablueData: ChartDataSets[] = [
    {
      data: [45, 37, 60, 70, 46, 13, 45, 37],
      label: 'Quarterly Result',
    }
  ];


  /* green chart */
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


  /* yellow chart */
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

  /* red chart */
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
    const gradientblue = this.chartareablue.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 65);
    gradientblue.addColorStop(0, 'rgba(1, 94, 194, 0.85)');
    gradientblue.addColorStop(1, 'rgba(0, 197, 221, 0)');
    this.chartareablueColors = [
      {
        backgroundColor: gradientblue
      }
    ];

    const gradientgreen = this.chartareagreen.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 65);
    gradientgreen.addColorStop(0, 'rgba(145, 195, 0, 0.85)');
    gradientgreen.addColorStop(1, 'rgba(176, 197, 0, 0)');
    this.chartareagreenColors = [
      {
        backgroundColor: gradientgreen
      }
    ];

    const gradientyellow = this.chartareayellow.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 65);
    gradientyellow.addColorStop(0, 'rgba(253, 100, 0, 0.85)');
    gradientyellow.addColorStop(1, 'rgba(253, 186, 0, 0)');
    this.chartareayellowColors = [
      {
        backgroundColor: gradientyellow
      }
    ];

    const gradientred = this.chartareared.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 65);
    gradientred.addColorStop(0, 'rgba(240, 61, 79, 0.85)');
    gradientred.addColorStop(1, 'rgba(255, 223, 220, 0)');
    this.chartarearedColors = [
      {
        backgroundColor: gradientred
      }
    ];
  }

  randomize(): void {
    // Only Change 3 values
    this.chartareablueData[0].data = [
      Math.round(Math.random() * 65),
      (Math.random() * 10),
      (Math.random() * 40),
      (Math.random() * 50),
      Math.round(Math.random() * 80),
      (Math.random() * 30),
      (Math.random() * 50)
    ];

    this.chartareagreenData[0].data = [
      Math.round(Math.random() * 65),
      (Math.random() * 10),
      (Math.random() * 40),
      (Math.random() * 50),
      Math.round(Math.random() * 80),
      (Math.random() * 30),
      (Math.random() * 50)
    ];

    this.chartareayellowData[0].data = [
      Math.round(Math.random() * 65),
      (Math.random() * 10),
      (Math.random() * 40),
      (Math.random() * 50),
      Math.round(Math.random() * 80),
      (Math.random() * 30),
      (Math.random() * 50)
    ];

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
