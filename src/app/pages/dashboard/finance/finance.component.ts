import { Component, OnInit } from '@angular/core';
import { PersonalizationService } from 'src/app/shared/services/personalization.service';
declare var $: any;

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss']
})
export class FinanceComponent implements OnInit {

  constructor(
    public personalizationService: PersonalizationService
  ) { }

  ngOnInit(): void {
    this.personalizationService.renderUserImage();
  }

  ngAfterViewInit() {
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
}
