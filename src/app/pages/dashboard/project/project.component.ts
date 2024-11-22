import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
declare var $: any;

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  public daterange2: any = {};
  public options2: any = {
    "singleDatePicker": true,
    "timePicker": false,
    "alwaysShowCalendars": true,
    "startDate": "01/01/2022",
    "endDate": "01/07/2022",
    "parentEl": "#calendardisplay2",
    "opens": "center",
    "applyButtonClasses": "btn-theme",
    "cancelClass": "btn-outline-secondary border",
    "autoUpdateInput": true,
    locale: {
      format: 'DD/MM/YYYY'
    }
  };

  selectedDate(value: any, datepicker2?: any) {
    // any object can be passed to the selected event and it will be passed back here
    datepicker2.start = value.start;
    datepicker2.end = value.end;

    // use passed valuable to update state
    this.daterange2.start = value.start;
    this.daterange2.end = value.end;
    this.daterange2.label = value.label;

  }
  constructor() { }

  ngOnInit(): void {
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

    $('#daterange2').click(); // this will open default
  }

}
