import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { BehaviorSubject } from 'rxjs';
import { Tagify, TagData, TagifySettings } from 'ngx-tagify';

@Component({
  selector: 'app-email-details',
  templateUrl: './email-details.component.html',
  styleUrls: ['./email-details.component.scss']
})
export class EmailDetailsComponent implements OnInit {
  public Editor = ClassicEditor;

  /** tags input */
  tags: TagData[] = [{ value: 'john@maxartkiller.com' }];
  tags2: TagData[] = [{ value: 'Linca' }, { value: 'Jaimini' }];
  // tags = 'foo'; -> if you want to pass as string

  settings: TagifySettings = {
    placeholder: 'Start typing...',
    blacklist: ['fucking', 'shit'],
    callbacks: {
      click: (e) => { console.log(e.detail); }
    }
  };

  whitelist$ = new BehaviorSubject<string[]>(['hello', 'world']);

  readonly = false;

  onAdd(tagify: Array<any>) {
    console.log('added a tag', tagify);
  }

  onRemove(tags: Array<any>) {
    console.log('removed a tag', tags);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
