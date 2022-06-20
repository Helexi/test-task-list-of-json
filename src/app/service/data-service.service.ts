import { Injectable } from '@angular/core';
import datalistFile from '../datalist.json';
import { Datalist } from '../types/type';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  datalists: Datalist[] = datalistFile;
  selectedItem: Datalist = <Datalist>{};

  constructor() { }
}
