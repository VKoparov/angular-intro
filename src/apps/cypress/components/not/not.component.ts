import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
  selector: 'app-not',
  templateUrl: '../../../app/common/base/base.component.html',
  styleUrls: ['./not.component.css']
})
export class NotComponent extends BaseComponent {

  constructor(public override httpClient: HttpClient) {
    super(
        httpClient,
        'Not',
        FileSettings.URL_PATH,
        [
          {
            location: 'components/not',
            name: 'not.component.cy.ts',
            discriminatorType: ''
          }
        ]
    );
  }
}
