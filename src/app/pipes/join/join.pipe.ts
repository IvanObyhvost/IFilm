import { Pipe, PipeTransform } from '@angular/core';
import { isArray } from 'util';

@Pipe({
  name: 'join'
})
export class JoinPipe implements PipeTransform {
  transform(values: any[], separator: string = ''): string {
    if (!isArray(values)) {
      throw new Error('It is not array');
    }
    return values.join(separator);
  }
}
