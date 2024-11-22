import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Label, Colors } from 'ng2-charts';
import { PersonalizationService } from 'src/app/shared/services/personalization.service';

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

@Component({
  selector: 'app-analytical',
  templateUrl: './analytical.component.html',
  styleUrls: ['./analytical.component.scss']
})
export class AnalyticalComponent implements OnInit {
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

  @ViewChild('chartareabugraised') chartareabugraised!: ElementRef;


  chartareabugraisedOptions: ChartOptions = {
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
  chartareabugraisedLabels: Label[] = ['1', '2', '3', '4', '5', '7', '8'];
  chartareabugraisedType: ChartType = 'bar';
  chartareabugraisedLegend = false;
  chartareabugraisedPlugins = [];
  chartareabugraisedColors: Colors[] = [
    { // red
      backgroundColor: 'rgba(240, 61, 79, 0.65)',
      borderColor: 'rgba(240, 61, 79, 0.35)',
      borderWidth: 1,
      pointRadius: 1.2,
    },
    { // red
      backgroundColor: 'rgba(240, 61, 79, 0.35)',
      borderColor: '#f03d4f',
      borderWidth: 1,
      pointRadius: 1.2,
    }
  ];
  chartareabugraisedData: ChartDataSets[] = [
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

  constructor(
    public personalizationService: PersonalizationService
  ) { }

  ngOnInit(): void {
    this.personalizationService.renderUserImage();
  }

}
