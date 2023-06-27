import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
  selector: 'app-contains',
  templateUrl: '../../../app/common/base/base.component.html',
  styleUrls: ['./contains.component.css']
})
export class ContainsComponent extends BaseComponent {

  constructor(public override httpClient: HttpClient) {
    super(
        httpClient,
        'Contains',
        FileSettings.URL_PATH,
        [
          {
            location: 'components/contains',
            name: 'contains.component.cy.ts',
            discriminatorType: ''
          }
        ]
    );
  }
}
