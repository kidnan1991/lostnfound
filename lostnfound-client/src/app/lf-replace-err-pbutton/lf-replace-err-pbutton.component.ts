import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lf-replace-err-pbutton',
  templateUrl: './lf-replace-err-pbutton.component.html',
  styleUrls: ['./lf-replace-err-pbutton.component.css']
})
export class LfReplaceErrPbuttonComponent implements OnInit {

  @Input() label: string;

  @Output() click: EventEmitter<object>;

  constructor() {
    this.click = new EventEmitter();
  }

  ngOnInit() {
  }

  onInnerButtonClick(eventObj: object) {
    this.click.emit(eventObj);
  }

}
