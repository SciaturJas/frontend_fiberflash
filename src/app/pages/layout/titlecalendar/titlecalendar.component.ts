import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Moment } from 'moment';

@Component({
  selector: 'app-titlecalendar',
  templateUrl: './titlecalendar.component.html',
  styleUrls: ['./titlecalendar.component.scss']
})
export class TitlecalendarComponent implements OnInit {

  public daterange: any = {};
  public options: any = {
    "minYear": 1999,
    "maxYear": 2029,
    ranges: {
      // 'Today': [moment(), moment()],
      'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
      'Last 7 Days': [moment().subtract(6, 'days'), moment()],
      'Last 30 Days': [moment().subtract(29, 'days'), moment()],
      'This Month': [moment().startOf('month'), moment().endOf('month')],
      'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    },
    "startDate": moment().subtract(25, 'days'),
    "endDate": moment(),
    "opens": "left",
    "drops": "down",
    "applyButtonClasses": "btn-theme",
    "cancelClass": "btn-outline-secondary border",
    locale: { format: 'DD-MM-YYYY', direction: 'daterange-center shadow' },
    alwaysShowCalendars: false,
  };


  public selectedDate(value: any, datepicker?: any) {

    // any object can be passed to the selected event and it will be passed back here
    datepicker.start = value.start;
    datepicker.end = value.end;

    // use passed valuable to update state
    this.daterange.start = value.start;
    this.daterange.end = value.end;
    this.daterange.label = value.label;

  }

  constructor() { }

  ngOnInit(): void {
  }

}
