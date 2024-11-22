import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Label, Colors } from 'ng2-charts';


@Component({
  selector: 'app-chartareaexpense',
  templateUrl: './chartareaexpense.component.html',
  styleUrls: ['./chartareaexpense.component.scss']
})
export class ChartareaexpenseComponent implements OnInit {
  @ViewChild('chartareaexpense') chartareaexpense!: ElementRef;


  chartareaexpenseOptions: ChartOptions = {
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
            drawBorder: true,
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
          display: true,
          gridLines: {
            drawBorder: true,
            display: false,
            color: 'rgba(0,0,0,0.04)',
          },
        }
      ]
    }
  };
  chartareaexpenseLabels: Label[] = ['1', '2', '3', '4', '5', '7', '8'];
  chartareaexpenseType: ChartType = 'line';
  chartareaexpenseLegend = false;
  chartareaexpensePlugins = [];
  chartareaexpenseColors: Colors[] = [
    { // red
      backgroundColor: 'rgba(240, 61, 79, 0.35)',
      borderColor: '#f03d4f',
      borderWidth: 1,
      pointRadius: 1.2,
    }
  ];
  chartareaexpenseData: ChartDataSets[] = [
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
    const gradient2 = this.chartareaexpense.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 150);
    gradient2.addColorStop(0, 'rgba(240, 61, 79, 0.85)');
    gradient2.addColorStop(1, 'rgba(255, 223, 220, 0)');
    this.chartareaexpenseColors = [
      {
        backgroundColor: gradient2
      }
    ];
  }

  randomize(): void {
    // Only Change 3 values
    this.chartareaexpenseData[0].data = [
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
