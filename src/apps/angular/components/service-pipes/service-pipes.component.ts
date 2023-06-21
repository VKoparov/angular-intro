import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {ExampleComponent} from "./example/component/example.component";
import {FileSettings} from "../../const/files-settings";

@Component({
  selector: 'app-service-pipes',
  templateUrl: './service-pipes.component.html',
  styleUrls: ['./service-pipes.component.css']
})
export class ServicePipesComponent extends BaseComponent {

  constructor(public override httpClient: HttpClient) {
    super(
        httpClient,
        'RxJS Pipes',
        FileSettings.URL_PATH,
        [
          {
            location: 'services',
            name: 'pokemon.service.ts',
            discriminatorType: '@Injectable'
          },
          {
            location: 'service-pipes/example/component',
            name: 'example.component.ts',
            discriminatorType: '@Component'
          },
          {
            location: 'service-pipes/example/component',
            name: 'example.component.html',
            discriminatorType: '<'
          }
        ],
        ExampleComponent
    );
  }
}
