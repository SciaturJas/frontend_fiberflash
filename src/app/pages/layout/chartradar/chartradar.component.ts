import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Label, Colors } from 'ng2-charts';


@Component({
  selector: 'app-chartradar',
  templateUrl: './chartradar.component.html',
  styleUrls: ['./chartradar.component.scss']
})
export class ChartradarComponent implements OnInit {
  @ViewChild('chartradar') chartradar!: ElementRef;


  chartradarOptions: ChartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    elements: {

    },
    tooltips: {
      position: 'nearest',
    },
    layout: {
      padding: {
        //left: -10,
      }
    },
    plugins: {
      legend: {
        display: false,
        position: 'top',
      },
      title: {
        display: false,
        text: 'Chart.js Doughnut Chart'
      }
    }
  };
  chartradarLabels: Label[] = ['Kids Play', 'Tools', 'Electronics', 'Decorative', 'Other'];
  chartradarType: ChartType = 'polarArea';
  chartradarLegend = false;
  chartradarPlugins = [];
  chartradarData: ChartDataSets[] = [
    {
      data: [40, 10, 15, 25, 10],
      label: 'Quarterly Result',
      borderWidth: 0,
      backgroundColor: ['rgba(255, 193, 7, 0.50)', 'rgba(145, 195, 0, 0.50)', 'rgba(240, 61, 79, 0.50)', 'rgba(1, 94, 194, 0.50)', 'rgba(111, 66, 193, 0.50)']
    },
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
    this.chartradarData[0].data = [
      Math.round(Math.random() * 65),
      (Math.random() * 10),
      (Math.random() * 40),
      (Math.random() * 50),
      (Math.random() * 50)
    ];
  }

}
