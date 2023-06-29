import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
  selector: 'app-next',
  templateUrl: '../../../app/common/base/base.component.html',
  styleUrls: ['./next.component.css']
})
export class NextComponent extends BaseComponent {

  constructor(public override httpClient: HttpClient) {
    super(
        httpClient,
        'Next',
        FileSettings.URL_PATH,
        [
          {
            location: 'components/next',
            name: 'next.component.cy.ts',
            discriminatorType: ''
          }
        ]
    );
  }
}
