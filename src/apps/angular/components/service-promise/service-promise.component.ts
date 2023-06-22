import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {ExampleComponent} from "./example/component/example.component";
import {FileSettings} from "../../const/files-settings";

@Component({
  selector: 'app-service-promise',
  templateUrl: './service-promise.component.html',
  styleUrls: ['./service-promise.component.css']
})
export class ServicePromiseComponent extends BaseComponent {

  constructor(public override httpClient: HttpClient) {
    super(
        httpClient,
        'Promises',
        FileSettings.URL_PATH,
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
        ],
        ExampleComponent
    );
  }
}
