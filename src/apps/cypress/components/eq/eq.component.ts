import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
  selector: 'app-eq',
  templateUrl: '../../../app/common/base/base.component.html',
  styleUrls: ['./eq.component.css']
})
export class EqComponent extends BaseComponent {

  constructor(public override httpClient: HttpClient) {
    super(
        httpClient,
        'Eq',
        FileSettings.URL_PATH,
        [
          {
            location: 'components/eq',
            name: 'eq.component.cy.ts',
            discriminatorType: ''
          }
        ]
    );
  }
}
