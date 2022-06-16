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

  // public getUsers(): Array<any>{
  //  return [
  //   {firstName: 'Ivan', LastName: 'Ivanov'},
  //   {firstName: 'Ivan1', LastName: 'Ivano1'},
  //   {firstName: 'Ivan2', LastName: 'Ivanov2'},
  //  ]
  // }
}
