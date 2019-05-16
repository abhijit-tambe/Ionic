import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addworkday'
})
export class AddworkdayPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
