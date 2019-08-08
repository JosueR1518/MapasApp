import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wrapText'
})
export class WrapTextPipe implements PipeTransform {

  transform(value: string, args?: any): any {

    return value.slice(0, 150) + '...';
  }

}
