import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'average'
})
export class AveragePipe implements PipeTransform {

  transform(summary: any, length: number): number {
    const total = summary.reduce((sum, item) => sum + item.score, 0);
    return Math.round(total / summary.length);
  }
}



