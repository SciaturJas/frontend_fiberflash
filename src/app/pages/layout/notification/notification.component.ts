import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Moment } from 'moment';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  public daterange: any = {};
  public options: any = {
    "minYear": 2020,
    "maxYear": 2029,
    "startDate": moment(),
    "singleDatePicker": true,
    "showCustomRangeLabel": false,
    "alwaysShowCalendars": true,
    "parentEl": "#calendardisplay",
    "opens": "center",
    "applyButtonClasses": "btn-theme",
    "cancelClass": "btn-outline-secondary border",
    locale: { format: 'DD-MM-YYYY', direction: 'daterange-center shadow' },
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
