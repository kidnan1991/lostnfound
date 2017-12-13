import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

const LOST_REGIST_LINK = './lost-regist';
const FOUND_REGIST_LINK = './found-regist';

@Component({
  selector: 'app-lf-home',
  templateUrl: './lf-home.component.html',
  styleUrls: ['./lf-home.component.css']
})
export class LfHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClickLostItemButton(): void {
    this.router.navigate([LOST_REGIST_LINK]);
  }

  onClickFoundItemButton(): void {
    this.router.navigate([FOUND_REGIST_LINK]);
  }
}
