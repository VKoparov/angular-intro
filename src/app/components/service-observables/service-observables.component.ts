import { Component } from '@angular/core';
import {BaseComponent} from "../../common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {ExampleComponent} from "./example/component/example.component";

@Component({
  selector: 'app-service-observables',
  templateUrl: './service-observables.component.html',
  styleUrls: ['./service-observables.component.css']
})
export class ServiceObservablesComponent extends BaseComponent {

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
            location: 'components/service-observables/example/component',
            name: 'example.component.ts',
            discriminatorType: '@Component'
          },
          {
            location: 'components/service-observables/example/component',
            name: 'example.component.html',
            discriminatorType: '<'
          }
        ]
    );
  }
}
