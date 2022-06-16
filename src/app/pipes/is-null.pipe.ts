import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'isNull'
})
export class IsNullPipe implements PipeTransform {
  transform(value: any): string {
    return value === null ? `it's unknown` : value;
  }
};
