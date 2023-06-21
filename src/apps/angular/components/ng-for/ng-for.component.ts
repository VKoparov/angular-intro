import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {NgIfExampleComponent} from "../ng-if/example/ng-if-example.component";
import {NgForExampleComponent} from "./example/ng-for-example.component";
import {FileSettings} from "../../const/files-settings";

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
        FileSettings.URL_PATH,
        [
          {
            location: 'ng-for/example',
            name: 'ng-for-example.component.ts',
            discriminatorType: '@Component'
          },
          {
            location: 'ng-for/example',
            name: 'ng-for-example.component.html',
            discriminatorType: '<'
          }
        ],
        NgForExampleComponent
    );
  }
}
