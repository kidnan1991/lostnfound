import { Component, OnInit, Input, Output } from '@angular/core';
import {SelectItem } from 'primeng/primeng';

import { LF_ITEM_TYPE, LF_ITEM_STATUS, LfItem, LfRecord } from '../lf-model/lf-item.model';

interface ItemTypeDes {
  name: string;
  code: LF_ITEM_TYPE;
}

const itemTypeList: ItemTypeDes[] = [
  { name: 'Id Card', code: LF_ITEM_TYPE.ID_CARD },
  { name: 'Drive Lincense', code: LF_ITEM_TYPE.DRIVING_LINCENSE },
  // { name: 'Id Card', code: LF_ITEM_TYPE.ID_CARD },
  { name: 'Other', code: LF_ITEM_TYPE.OTHER_STUFF }
];

@Component({
  selector: 'app-lf-item-detail-view',
  templateUrl: './lf-item-detail-view.component.html',
  styleUrls: ['./lf-item-detail-view.component.css']
})
export class LfItemDetailViewComponent implements OnInit {

  recordModel: LfRecord;

  typeItems: ItemTypeDes[];

  selectedType: ItemTypeDes;

  @Input() isEditable: boolean;

  constructor() {
    this.recordModel = new LfRecord();
    this.recordModel.item = new LfItem();
    this.typeItems = itemTypeList;
    this.selectedType = itemTypeList[0];
  }

  ngOnInit() {
  }

  isSelectedItemAsOtherType(): boolean {
    return this.selectedType.code === LF_ITEM_TYPE.OTHER_STUFF;
  }

  isSelectedItemAsPersonalIdentifyItem(): boolean {
    return (this.selectedType.code === LF_ITEM_TYPE.ID_CARD) || (this.selectedType.code === LF_ITEM_TYPE.DRIVING_LINCENSE);
  }

  onTypeChange(event: any): void {
    console.log(event);
    this.recordModel.item.type =  event.value.code;

    if (this.recordModel.item.type === LF_ITEM_TYPE.OTHER_STUFF) {
      this.recordModel.item.IdNumber = '';
      this.recordModel.item.Name = '';
    }
  }

}
