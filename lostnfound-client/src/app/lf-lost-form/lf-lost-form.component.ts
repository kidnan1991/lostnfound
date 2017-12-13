import { Component, OnInit } from '@angular/core';

interface ThingType {
  name: string ;
  code: string ;
}

@Component({
  selector: 'app-lf-lost-form',
  templateUrl: './lf-lost-form.component.html',
  styleUrls: ['./lf-lost-form.component.css']
})
export class LfLostFormComponent implements OnInit {
  title: String;

  types: ThingType[];

  constructor() {
    this.title = 'Laf';
   }

  ngOnInit() {
  }

}
