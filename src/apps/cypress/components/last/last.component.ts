import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
  selector: 'app-last',
  templateUrl: '../../../app/common/base/base.component.html',
  styleUrls: ['./last.component.css']
})
export class LastComponent extends BaseComponent {

  constructor(public override httpClient: HttpClient) {
    super(
        httpClient,
        'Last',
        FileSettings.URL_PATH,
        [
          {
            location: 'components/last',
            name: 'last.component.cy.ts',
            discriminatorType: ''
          }
        ]
    );
  }
}
