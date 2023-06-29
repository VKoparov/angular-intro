import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
  selector: 'app-prev-all',
  templateUrl: '../../../app/common/base/base.component.html',
  styleUrls: ['./prev-all.component.css']
})
export class PrevAllComponent extends BaseComponent {

  constructor(public override httpClient: HttpClient) {
    super(
        httpClient,
        'PrevAll',
        FileSettings.URL_PATH,
        [
          {
            location: 'components/prev-all',
            name: 'prev-all.component.cy.ts',
            discriminatorType: ''
          }
        ]
    );
  }
}
