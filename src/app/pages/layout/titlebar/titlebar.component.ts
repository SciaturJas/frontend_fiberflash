import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.scss']
})
export class TitlebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (e) {
      return new bootstrap.Tooltip(e)
    });
  }

  ngAfterViewInit(): void {
    var thischosen: any = $('#titltfilterlist')
    thischosen.chosen({ no_results_text: "Oops, nothing found!", max_selected_options: 2 }).bind("chosen:maxselected", function () {
      thischosen.closest('.input-group').next('.invalid-feedback').show()
    });
  }

}
