import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data-service.service';
import { Datalist } from '../types/type';

@Component({
  selector: 'app-datalist',
  templateUrl: './datalist.component.html',
  styleUrls: ['./datalist.component.css'],
})
export class DataListComponent implements OnInit {
  showMe: boolean = false;
  hideMe: boolean = true;
  datalists: Datalist[] = this.DataService.datalists;
  selectedItem: Datalist = <Datalist>{};

  constructor(public DataService: DataService) {
  }

  ngOnInit(): void { }

  getCurrentUser(itemDatalist: Datalist): void {
    this.toogleShowMe();
    this.selectedItem = itemDatalist;
    console.log(this.datalists)
  }

  toogleShowMe() {
    this.showMe = true;
  }

  consoleLogShow(el: any) {
    console.log(el.target);
  }

  toogleHideMe() {
    this.showMe = false;
  }

}


