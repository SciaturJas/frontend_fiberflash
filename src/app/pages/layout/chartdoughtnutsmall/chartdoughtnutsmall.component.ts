import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Label, Colors } from 'ng2-charts';


@Component({
  selector: 'app-chartdoughnutsmall',
  templateUrl: './chartdoughtnutsmall.component.html',
  styleUrls: ['./chartdoughtnutsmall.component.scss']
})
export class chartdoughnutsmallComponent implements OnInit {
  @ViewChild('chartdoughnutsmall') chartdoughnutsmall!: ElementRef;


  chartdoughnutsmallOptions: ChartOptions = {
    maintainAspectRatio: false,
    cutoutPercentage: 62,
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
  chartdoughnutsmallLabels: Label[] = ['Food', 'Transport', 'Children', 'Home', 'Other'];
  chartdoughnutsmallType: ChartType = 'doughnut';
  chartdoughnutsmallLegend = false;
  chartdoughnutsmallPlugins = [];
  chartdoughnutsmallData: ChartDataSets[] = [
    {
      data: [40, 10, 15, 25, 10],
      label: 'Quarterly Result',
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
    this.chartdoughnutsmallData[0].data = [
      Math.round(Math.random() * 65),
      (Math.random() * 10),
      (Math.random() * 40),
      (Math.random() * 50),
      (Math.random() * 50)
    ];
  }

}
