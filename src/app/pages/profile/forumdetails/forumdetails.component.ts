import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-forumdetails',
  templateUrl: './forumdetails.component.html',
  styleUrls: ['./forumdetails.component.scss']
})
export class ForumdetailsComponent implements OnInit {
  public Editor = ClassicEditor;

  constructor() { }

  ngOnInit(): void {
  }

}
