import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
  selector: 'app-parents-until',
  templateUrl: '../../../app/common/base/base.component.html',
  styleUrls: ['./parents-until.component.css']
})
export class ParentsUntilComponent extends BaseComponent {

  constructor(public override httpClient: HttpClient) {
    super(
        httpClient,
        'ParentsUntil',
        FileSettings.URL_PATH,
        [
          {
            location: 'components/parents-until',
            name: 'parents-until.component.cy.ts',
            discriminatorType: ''
          }
        ]
    );
  }
}
