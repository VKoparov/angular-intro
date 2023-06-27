import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
  selector: 'app-within',
  templateUrl: '../../../app/common/base/base.component.html',
  styleUrls: ['./within.component.css']
})
export class WithinComponent extends BaseComponent {

  constructor(public override httpClient: HttpClient) {
    super(
        httpClient,
        'Within',
        FileSettings.URL_PATH,
        [
          {
            location: 'components/within',
            name: 'within.component.cy.ts',
            discriminatorType: ''
          }
        ]
    );
  }
}
