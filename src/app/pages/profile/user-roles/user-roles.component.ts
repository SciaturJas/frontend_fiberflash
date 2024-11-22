import { Component, OnInit } from '@angular/core';
declare var $: any;


@Component({
  selector: 'app-user-roles',
  templateUrl: './user-roles.component.html',
  styleUrls: ['./user-roles.component.scss']
})
export class UserRolesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewinit() {
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

  innermenuopen() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.toggle('innermenu-close');
  }

}
