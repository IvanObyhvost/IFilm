import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join'
})
export class JoinPipe implements PipeTransform {
  transform(values: any[], separator: string = ''): any {
    return values.join(separator);
  }
}
