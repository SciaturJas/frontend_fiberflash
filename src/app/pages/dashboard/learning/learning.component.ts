import { Component, OnInit } from '@angular/core';
import { PersonalizationService } from 'src/app/shared/services/personalization.service';
declare var $: any;

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.scss']
})
export class LearningComponent implements OnInit {

  constructor(
    public personalizationService: PersonalizationService
  ) { }

  ngOnInit(): void {
    this.personalizationService.renderUserImage();
  }

  ngAfterViewInit() {
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
  }
}
