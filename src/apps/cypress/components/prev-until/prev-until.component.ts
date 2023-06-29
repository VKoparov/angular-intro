import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
  selector: 'app-prev-until',
  templateUrl: '../../../app/common/base/base.component.html',
  styleUrls: ['./prev-until.component.css']
})
export class PrevUntilComponent extends BaseComponent {

  constructor(public override httpClient: HttpClient) {
    super(
        httpClient,
        'PrevUntil',
        FileSettings.URL_PATH,
        [
          {
            location: 'components/prev-until',
            name: 'prev-until.component.cy.ts',
            discriminatorType: ''
          }
        ]
    );
  }
}
