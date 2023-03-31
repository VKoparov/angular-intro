import { Component } from '@angular/core';
import {BaseComponent} from "../../common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {NgIfExampleComponent} from "../ng-if/example/ng-if-example.component";
import {NgForExampleComponent} from "./example/ng-for-example.component";

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent extends BaseComponent {

  constructor(public override httpClient: HttpClient) {
    super(
        httpClient,
        'Ng For',
        [
          {
            location: 'components/ng-for/example',
            name: 'ng-for-example.component.ts',
            discriminatorType: '@Component'
          },
          {
            location: 'components/ng-for/example',
            name: 'ng-for-example.component.html',
            discriminatorType: '<'
          }
        ],
        NgForExampleComponent
    );
  }
}
