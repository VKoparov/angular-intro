import { Pipe, PipeTransform } from '@angular/core';
import {formatTextWithPlaceholders} from "../utils/string-util";

@Pipe({
  name: 'formatText',
})
export class FormatTextPipe implements PipeTransform {

  transform(textFormat: string, ...values: string[]): string {
    return formatTextWithPlaceholders(textFormat, ...values);
  }
}
