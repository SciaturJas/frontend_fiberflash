import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import * as moment from 'moment';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  thisyear: any = moment().format('YYYY');
  thismonth: any = moment().format('MM');

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    // customButtons: {
    //     myCustomButton: {
    //         text: 'Create Appointment',
    //         click: function () {
    //             alert('clicked the custom button!');
    //         }
    //     }
    // },
    headerToolbar: {
      // left: 'prev,next myCustomButton',
      left: 'prev,next',
      center: 'title',
      right: 'today dayGridMonth,timeGridWeek,timeGridDay'
    },
    events: [
      {
        title: 'All Day Event',
        className: 'regular-event',
        start: this.thisyear + '-' + this.thismonth + '-01',
      },
      {
        title: 'Long Event',
        className: 'task-event',
        start: this.thisyear + '-' + this.thismonth + '-07',
        end: this.thisyear + '-' + this.thismonth + '-10'
      },
      {
        className: 'reminder-event',
        title: 'Repeating Event',
        start: this.thisyear + '-' + this.thismonth + '-09T16:00:00'
      },
      {
        title: 'Repeating Event',
        className: 'reminder-event',
        start: this.thisyear + '-' + this.thismonth + '-16T16:00:00'
      },
      {
        title: 'Conference',
        className: 'task-event',
        start: this.thisyear + '-' + this.thismonth + '-11',
        end: this.thisyear + '-' + this.thismonth + '-13'
      },
      {
        title: 'Meeting',
        className: 'meeting-event',
        start: this.thisyear + '-' + this.thismonth + '-12T10:30:00',
        end: this.thisyear + '-' + this.thismonth + '-10T12:30:00'
      },
      {
        title: 'Lunch',
        className: 'regular-event',
        start: this.thisyear + '-' + this.thismonth + '-10T12:00:00'
      },
      {
        title: 'Meeting',
        className: 'meeting-event',
        start: this.thisyear + '-' + this.thismonth + '-10T14:30:00'
      },
      {
        title: 'Happy Hour',
        className: 'freetime-event',
        start: this.thisyear + '-' + this.thismonth + '-10T17:30:00'
      },
      {
        title: 'Dinner',
        className: 'regular-event',
        start: this.thisyear + '-' + this.thismonth + '-10T20:00:00'
      },
      {
        title: "John's Birthday",
        className: 'birthday-event',
        start: this.thisyear + '-' + this.thismonth + '-13T07:00:00'
      },
      {
        title: 'Click for Google',
        className: 'external-event',
        url: 'http://google.com/',
        start: this.thisyear + '-' + this.thismonth + '-28'
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

  innermenuopen() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.toggle('innermenu-close');
  }
}
