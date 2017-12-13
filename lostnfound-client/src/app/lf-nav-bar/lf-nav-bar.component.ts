import { MenuItem } from 'primeng/primeng';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-lf-nav-bar',
    templateUrl: './lf-nav-bar.component.html',
    styleUrls: ['./lf-nav-bar.component.css']
})
export class LfNavBarComponent implements OnInit {
    items: MenuItem[];

    constructor() { }

    ngOnInit() {
            this.items = [
              {
                  label: 'File',
                  items: [
                      {
                          label: 'New',
                          icon: 'fa-plus',
                          items: [
                              {label: 'Project'},
                              {label: 'Other'},
                          ]
                      },
                      {label: 'Open'},
                      {label: 'Quit'}
                  ]
              },
              {
                  label: 'Edit',
                  icon: 'fa-edit',
                  items: [
                      {label: 'Undo', icon: 'fa-mail-forward'},
                      {label: 'Redo', icon: 'fa-mail-reply'}
                  ]
              },
              {
                  label: 'About us',
                  icon: 'fa-info',
                  routerLink: './about'
              },
              {
                  label: 'About us',
                  icon: 'fa-info',
                  routerLink: './found-regist'
              }
          ];
    }

}
