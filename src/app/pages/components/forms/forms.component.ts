import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  files: File[] = [];


  //dropzone = new Dropzone(".dropzone", { url: "/file/post" })

  constructor() { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
  }


  onSelect(event: any) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

}
