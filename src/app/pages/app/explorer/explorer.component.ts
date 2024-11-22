import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Label, Colors } from 'ng2-charts';
declare var $: any;

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.scss']
})
export class ExplorerComponent implements OnInit {
  @ViewChild('areachart') areachart!: ElementRef;


  areaChartOptions: ChartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    elements: {
      line: {
        // tension: 0.35 // disables bezier curves
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
  areaChartLabels: Label[] = ['Jan-15', 'Jan-30', 'Feb-15', 'Feb-30', 'Mar-15', 'Mar-30', 'Apr-15', 'Apr-30', 'May-15', 'May-30', 'Jun-15', 'Jun-30', 'Jul-15', 'Jul-30', 'Aug-15', 'Aug-30'];
  areaChartType: ChartType = 'line';
  areaChartLegend = false;
  areaChartPlugins = [];
  areaChartColors: Colors[] = [
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
    { // red
      backgroundColor: 'rgba(255, 193, 7, 0.35)',
      borderColor: '#ffc107',
      borderWidth: 1,
      pointRadius: 1.2,
    }
  ];
  areaChartData: ChartDataSets[] = [
    {
      data: [46, 13, 45, 37, 45, 46, 13, 45, 37, 37, 36, 70, 45, 32, 60, 75],
      label: 'income',
    },
    {
      data: [45, 37, 45, 37, 60, 70, 46, 13, 45, 37, 60, 70, 46, 13, 45, 37],
      label: 'expense',
    },
    {
      data: [45, 37, 60, 70, 46, 13, 45, 37, 45, 37, 60, 70, 46, 13, 45, 37],
      label: 'saving',
    }
  ];

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.randomize();
    }, 2000);

  }
  ngAfterViewInit(): void {
    /* footable */
    $('.footable').footable({
      "paging": {
        "enabled": true,
        "container": '#footable-pagination',
        "countFormat": "{CP} of {TP}",
        "limit": 3,
        "position": "right",
        "size": 5
      },
      "sorting": {
        "enabled": true
      },
    }, function (ft: any) {
      $('#footablestot').html($('.footable-pagination-wrapper .label').html())

      $('.footable-pagination-wrapper ul.pagination li').on('click', function () {
        setTimeout(function () {
          $('#footablestot').html($('.footable-pagination-wrapper .label').html());
        }, 200);
      });
    });

    const gradient1 = this.areachart.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 240);
    gradient1.addColorStop(0, 'rgba(1, 94, 194, 0.55)');
    gradient1.addColorStop(1, 'rgba(1, 94, 193, 0)');
    const gradient2 = this.areachart.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 240);
    gradient2.addColorStop(0, 'rgba(240, 61, 79, 0.85)');
    gradient2.addColorStop(1, 'rgba(255, 223, 220, 0)');
    const gradient3 = this.areachart.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 240);
    gradient3.addColorStop(0, 'rgba(255, 193, 7, 0.5)');
    gradient3.addColorStop(1, 'rgba(255, 193, 7, 0)');

    this.areaChartColors = [{ backgroundColor: gradient1 }, { backgroundColor: gradient2 }, { backgroundColor: gradient3 }];


    /* chosen select */
    var chosensimple: any = $('.chosenoptgroup')
    chosensimple.chosen().on('change', function (event: any, el: any) {
      var textdisplay_element = $(".chosenoptgroup + .chosen-container .chosen-single > span");
      var selected_element = $(".chosenoptgroup option:selected");
      var selected_value = selected_element.val();
      if (selected_element.closest('optgroup').length > 0) {
        var parent_optgroup = selected_element.closest('optgroup').attr('label');
        textdisplay_element.text(parent_optgroup + ' ' + selected_value).trigger("chosen:updated");
      }
    });
  }

  randomize(): void {
    // Only Change 3 values
    this.areaChartData[0].data = [Math.round(Math.random() * 100), (Math.random() * 10), (Math.random() * 45), (Math.random() * 50), Math.round(Math.random() * 100), Math.round(Math.random() * 80), (Math.random() * 40), (Math.random() * 45), (Math.random() * 100), (Math.random() * 40), (Math.random() * 40), (Math.random() * 50), Math.round(Math.random() * 90), (Math.random() * 30), (Math.random() * 45), (Math.random() * 50)];
    this.areaChartData[1].data = [Math.round(Math.random() * 100), (Math.random() * 15), (Math.random() * 48), (Math.random() * 55), Math.round(Math.random() * 100), Math.round(Math.random() * 100), (Math.random() * 25), (Math.random() * 50), (Math.random() * 90), (Math.random() * 20), (Math.random() * 40), (Math.random() * 50), Math.round(Math.random() * 100), (Math.random() * 35), (Math.random() * 50), (Math.random() * 55)];
    this.areaChartData[2].data = [Math.round(Math.random() * 100), (Math.random() * 18), (Math.random() * 40), (Math.random() * 59), Math.round(Math.random() * 100), Math.round(Math.random() * 80), (Math.random() * 35), (Math.random() * 25), (Math.random() * 85), (Math.random() * 50), (Math.random() * 40), (Math.random() * 50), Math.round(Math.random() * 80), (Math.random() * 40), (Math.random() * 55), (Math.random() * 65)];

  }

  innermenuopen() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.toggle('innermenu-close');
  }

}
