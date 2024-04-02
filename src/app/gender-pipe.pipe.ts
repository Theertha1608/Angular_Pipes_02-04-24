import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderPipe',
  standalone: true
})
export class GenderPipePipe implements PipeTransform {

  transform(name: string, gender: string): string {
    if (gender === 'male') {
      return 'Mr. ' + name;
    } else if (gender === 'female') {
      return 'Miss. ' + name;
    } else {
      return name;
    }
  }
}
