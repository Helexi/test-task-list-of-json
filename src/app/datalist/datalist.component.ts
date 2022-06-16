import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data-service.service';
import { Datalist } from '../types/type';
import datalistFile from '../datalist.json';

@Component({
  selector: 'app-datalist',
  templateUrl: './datalist.component.html',
  styleUrls: ['./datalist.component.css'],
})
export class DataListComponent implements OnInit {
  showMe: boolean = false;
  hideMe: boolean = true;
  datalists: Datalist[] = datalistFile;
  selectedItem: Datalist = <Datalist>{};

  // public users: Array<any>;
  public dataList: any;

  constructor(private DataService: DataService) {
    // this.users = DataService.getUsers();
  }

  ngOnInit(): void { }

  getCurrentUser(datalist: Datalist): void {
    this.toogleShowMe();
    this.selectedItem = datalist;
  }

  toogleShowMe() {
    this.showMe = true;
  }

  toogleHideMe() {
    this.showMe = false;
  }

}


