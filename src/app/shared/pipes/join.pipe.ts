import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join',
})
export class JoinPipe implements PipeTransform {
  transform(value: string[], separator: string): string {
    return value.length === 1 ? value[0] : value.join(separator);
  }
}
