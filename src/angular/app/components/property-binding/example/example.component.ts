import {AfterViewChecked, ChangeDetectorRef, Component} from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements AfterViewChecked {

  inputValue: string = '';

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewChecked(): void {
    this.cdr.detectChanges();
  }
}
