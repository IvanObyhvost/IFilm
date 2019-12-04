import { Pipe, PipeTransform } from '@angular/core';
import { isArray } from 'util';

@Pipe({
  name: 'join'
})
export class JoinPipe implements PipeTransform {
  transform(values: any[], separator: string = ''): string {
    if (!isArray(values)) {
      throw new Error('JoinPipe: Invalid values. It should be Array');
    }
    if (typeof separator !== 'string') {
      throw new Error('JoinPipe: not a string');
    }
    return values.join(separator);
  }
}
