import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.scss']
})
export class NetworkComponent implements OnInit {

  scale = {
    drive: 4,
    ticket: 4,
    server: 12,
    secure: 12,
    devices: 6,
    internet: 6,
    wifi: 12,
    azure: 4,
    sddf: 4,
    raised: 8
  };
  structure = 'SD';

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    /* footable */
    /* table data master */
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

    $('.footable2').footable({
      "paging": {
        "enabled": true,
        "container": '#footable-pagination2',
        "countFormat": "{CP} of {TP}",
        "limit": 3,
        "position": "right",
        "size": 6
      },
      "sorting": {
        "enabled": true
      },
    }, function (ft: any) {
      $('#footablestot2').html($('#footable-pagination2 .footable-pagination-wrapper .label').html())

      $('#footable-pagination2 .footable-pagination-wrapper ul.pagination li').on('click', function () {
        setTimeout(function () {
          $('#footablestot2').html($('#footable-pagination2 .footable-pagination-wrapper .label').html());
        }, 200);
      });

    });

    $('.footable3').footable({
      "paging": {
        "enabled": true,
        "container": '#footable-pagination3',
        "countFormat": "{CP} of {TP}",
        "limit": 3,
        "position": "right",
        "size": 5
      },
      "sorting": {
        "enabled": true
      },
    }, function (ft: any) {
      $('#footablestot3').html($('#footable-pagination3 .footable-pagination-wrapper .label').html())

      $('#footable-pagination3 .footable-pagination-wrapper ul.pagination li').on('click', function () {
        setTimeout(function () {
          $('#footablestot3').html($('#footable-pagination3 .footable-pagination-wrapper .label').html());
        }, 200);
      });

    });

    var chosensimple: any = $('.chosenoptgroup')
    chosensimple.chosen().on('load change', function (event: any, el: any) {
      var textdisplay_element = $(".chosenoptgroup + .chosen-container .chosen-single > span");
      var selected_element = $(".chosenoptgroup option:selected");
      var selected_value = selected_element.val();
      if (selected_element.closest('optgroup').length > 0) {
        var parent_optgroup = selected_element.closest('optgroup').attr('label');
        textdisplay_element.text(parent_optgroup + ' ' + selected_value).trigger("chosen:updated");
      }
    });
  }

  structureChanged(scale: number, isFor: string) {
    switch (isFor) {
      case 'SERVER':
        this.scale.server = scale;
        break;
      case 'SECURE':
        this.scale.secure = scale;
        break;
      case 'DEVICES':
        this.scale.devices = scale;
        break;
      case 'INTERNET':
        this.scale.internet = scale;
        break;
      case 'WIFI':
        this.scale.wifi = scale;
        break;
      case 'TICKET':
        this.scale.ticket = scale;
        break;
      case 'AZURE':
        this.scale.azure = scale;
        break;
      case 'SDDF':
        this.scale.sddf = scale;
        break;
      case 'RAISED':
        this.scale.raised = scale;
        break;
      case 'SD':
        this.scale.drive = scale;
        break;
    }
  }

}
