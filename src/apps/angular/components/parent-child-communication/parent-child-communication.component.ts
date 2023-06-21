import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {ParentExampleComponent} from "./example/parent-example/parent-example.component";
import {FileSettings} from "../../const/files-settings";

@Component({
  selector: 'app-parent-child-communication',
  templateUrl: './parent-child-communication.component.html',
  styleUrls: ['./parent-child-communication.component.css']
})
export class ParentChildCommunicationComponent extends BaseComponent {

  constructor(public override httpClient: HttpClient) {
    super(
        httpClient,
        'Parent Child Communication',
        FileSettings.URL_PATH,
        [
          {
            location: 'parent-child-communication/example/parent-example',
            name: 'parent-example.component.ts',
            discriminatorType: '@Component'
          },
          {
            location: 'parent-child-communication/example/parent-example',
            name: 'parent-example.component.html',
            discriminatorType: '<'
          },
          {
            location: 'parent-child-communication/example/child-example',
            name: 'child-example.component.ts',
            discriminatorType: '@Component'
          },
          {
            location: 'parent-child-communication/example/child-example',
            name: 'child-example.component.html',
            discriminatorType: '<'
          }
        ],
        ParentExampleComponent
    );
  }
}
