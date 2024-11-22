import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Label, Colors } from 'ng2-charts';

@Component({
  selector: 'app-chartareabugresolved',
  templateUrl: './chartareabugresolved.component.html',
  styleUrls: ['./chartareabugresolved.component.scss']
})
export class ChartareabugresolvedComponent implements OnInit {
  @ViewChild('chartareabugresolved') chartareabugresolved!: ElementRef;


  chartareabugresolvedOptions: ChartOptions = {
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
  chartareabugresolvedLabels: Label[] = ['1', '2', '3', '4', '5', '7', '8'];
  chartareabugresolvedType: ChartType = 'bar';
  chartareabugresolvedLegend = false;
  chartareabugresolvedPlugins = [];
  chartareabugresolvedColors: Colors[] = [
    { // green
      backgroundColor: 'rgba(145, 195, 0, 0.95)',
      borderColor: '#91C300',
      borderWidth: 1,
      pointRadius: 1.2,
    },
    { // green
      backgroundColor: 'rgba(145, 195, 0, 0.65)',
      borderColor: '#91C300',
      borderWidth: 1,
      pointRadius: 1.2,
    }
  ];
  chartareabugresolvedData: ChartDataSets[] = [
    {
      data: [45, 37, 60, 70, 46, 13, 45, 37],
      label: 'Quarterly Result',
      barThickness: 12,
    },
    {
      data: [46, 13, 45, 37, 45, 37, 60, 70,],
      label: 'Quarterly Result',
      barThickness: 12,
    }
  ];

  constructor() { }

  ngOnInit(): void {

    setInterval(() => {
      this.randomize();
    }, 2000);

  }
  ngAfterViewInit(): void {
    const gradient2 = this.chartareabugresolved.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 150);
    gradient2.addColorStop(0, 'rgba(145, 195, 0, 0.85)');
    gradient2.addColorStop(1, 'rgba(176, 197, 0, 0)');
    this.chartareabugresolvedColors = [
      {
        backgroundColor: gradient2
      }
    ];
  }

  randomize(): void {
    // Only Change 3 values
    this.chartareabugresolvedData[0].data = [
      Math.round(Math.random() * 65),
      (Math.random() * 10),
      (Math.random() * 40),
      (Math.random() * 50),
      Math.round(Math.random() * 80),
      (Math.random() * 30),
      (Math.random() * 50)
    ];
    this.chartareabugresolvedData[1].data = [
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
