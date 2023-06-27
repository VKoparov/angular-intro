import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {NgIfExampleComponent} from "../../../angular/components/ng-if/example/ng-if-example.component";
import {FileSettings} from "../../const/files-settings";

@Component({
  selector: 'app-get',
  templateUrl: '../../../app/common/base/base.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent extends BaseComponent {

  constructor(public override httpClient: HttpClient) {
    super(
        httpClient,
        'Get',
        FileSettings.URL_PATH,
        [
          {
            location: 'components/get',
            name: 'get.component.cy.ts',
            discriminatorType: ''
          }
        ]
    );
  }
}
