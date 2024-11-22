import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Label, Colors } from 'ng2-charts';



@Component({
  selector: 'app-chartsemidoughnut',
  templateUrl: './chartsemidoughnut.component.html',
  styleUrls: ['./chartsemidoughnut.component.scss']
})
export class ChartsemidoughnutComponent implements OnInit {
  @ViewChild('chartsemidoughnut') chartsemidoughnut!: ElementRef;


  chartsemidoughnutOptions: ChartOptions = {
    responsive: true,
    rotation: 1 * Math.PI,
    circumference: 1 * Math.PI,
    cutoutPercentage: 75,
    elements: {

    },
    tooltips: {
      position: 'nearest',
    },
    layout: {
      padding: {
        bottom: 0
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
  chartsemidoughnutLabels: Label[] = ['Rejection', 'Cancelled Deal', 'Delivery', 'Store', 'Cooling System'];
  chartsemidoughnutType: ChartType = 'doughnut';
  chartsemidoughnutLegend = false;
  chartsemidoughnutPlugins = [];
  chartsemidoughnutData: ChartDataSets[] = [
    {
      data: [40, 35, 15, 25, 20],
      label: 'Expense categories',
      borderWidth: 0,
      backgroundColor: ['#ffbb00', '#91c300', '#ff6f6a', '#015ec2', '#becede']
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
    this.chartsemidoughnutData[0].data = [
      Math.round(Math.random() * 65),
      (Math.random() * 10),
      (Math.random() * 40),
      (Math.random() * 50),
      (Math.random() * 50)
    ];
  }
}
