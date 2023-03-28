import { Component } from '@angular/core';
import {BaseComponent} from "../../common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {ExampleComponent} from "./example/component/example.component";

@Component({
  selector: 'app-service-promise',
  templateUrl: './service-promise.component.html',
  styleUrls: ['./service-promise.component.css']
})
export class ServicePromiseComponent extends BaseComponent {

  constructor(public override httpClient: HttpClient) {
    super(
        httpClient,
        'Observables',
        ExampleComponent,
        [
          {
            location: 'services',
            name: 'pokemon.service.ts',
            discriminatorType: '@Injectable'
          },
          {
            location: 'components/service-promise/example/component',
            name: 'example.component.ts',
            discriminatorType: '@Component'
          },
          {
            location: 'components/service-promise/example/component',
            name: 'example.component.html',
            discriminatorType: '<'
          }
        ]
    );
  }
}
