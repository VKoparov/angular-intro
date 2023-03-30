import { Component } from '@angular/core';
import {BaseComponent} from "../../common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {EagerExampleComponent} from "./example/eager-example.component";

@Component({
  selector: 'app-eager-loading',
  templateUrl: './eager-loading.component.html',
  styleUrls: ['./eager-loading.component.css']
})
export class EagerLoadingComponent extends BaseComponent {

  constructor(public override httpClient: HttpClient) {
    super(
        httpClient,
        'Eager Loading',
        [
          {
            location: 'components/eager-loading/example',
            name: 'eager-example-routing.module.ts',
            discriminatorType: 'const'
          },
          {
            location: 'components/eager-loading/example',
            name: 'eager-example.component.ts',
            discriminatorType: '@Component'
          },
          {
            location: 'components/eager-loading/example',
            name: 'eager-example.component.html',
            discriminatorType: '<'
          }
        ],
        EagerExampleComponent
    );
  }
}
