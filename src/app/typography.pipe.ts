import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typography'
})
export class TypographyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
