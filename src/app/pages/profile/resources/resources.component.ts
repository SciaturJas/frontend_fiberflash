import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Label, Colors } from 'ng2-charts';


@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {
  @ViewChild('chartareablue') chartareablue!: ElementRef;


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

  ngOnInit(): void { }
  ngAfterViewInit(): void {
    const gradient2 = this.chartareablue.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 65);
    gradient2.addColorStop(0, 'rgba(1, 94, 194, 0.85)');
    gradient2.addColorStop(1, 'rgba(0, 197, 221, 0)');
    this.chartareablueColors = [
      {
        backgroundColor: gradient2
      }
    ];

    const gradient3 = this.chartareagreen.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 65);
    gradient3.addColorStop(0, 'rgba(145, 195, 0, 0.85)');
    gradient3.addColorStop(1, 'rgba(176, 197, 0, 0)');
    this.chartareagreenColors = [
      {
        backgroundColor: gradient3
      }
    ];

    const gradient4 = this.chartareared.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 65);
    gradient4.addColorStop(0, 'rgba(240, 61, 79, 0.85)');
    gradient4.addColorStop(1, 'rgba(255, 223, 220, 0)');
    this.chartarearedColors = [
      {
        backgroundColor: gradient4
      }
    ];

    const gradient5 = this.chartareayellow.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 65);
    gradient5.addColorStop(0, 'rgba(253, 100, 0, 0.85)');
    gradient5.addColorStop(1, 'rgba(253, 186, 0, 0)');
    this.chartareayellowColors = [
      {
        backgroundColor: gradient5
      }
    ];
  }

}
