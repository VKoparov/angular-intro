import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
  selector: 'app-find',
  templateUrl: '../../../app/common/base/base.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent extends BaseComponent {

  constructor(public override httpClient: HttpClient) {
    super(
        httpClient,
        'Find',
        FileSettings.URL_PATH,
        [
          {
            location: 'components/find',
            name: 'find.component.cy.ts',
            discriminatorType: ''
          }
        ]
    );
  }
}
