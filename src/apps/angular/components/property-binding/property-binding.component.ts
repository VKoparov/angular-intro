import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {ExampleComponent} from "./example/example.component";
import {FileSettings} from "../../const/files-settings";

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent extends BaseComponent {

  constructor(public override httpClient: HttpClient) {
    super(
        httpClient,
        'Property Binding',
        FileSettings.URL_PATH,
        [
          {
            location: 'components/property-binding/example',
            name: 'example.component.ts',
            discriminatorType: '@Component'
          },
          {
            location: 'components/property-binding/example',
            name: 'example.component.html',
            discriminatorType: '<'
          }
        ],
        ExampleComponent
    );
  }
}
