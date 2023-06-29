import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
  selector: 'app-first',
  templateUrl: '../../../app/common/base/base.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent extends BaseComponent {

  constructor(public override httpClient: HttpClient) {
    super(
        httpClient,
        'First',
        FileSettings.URL_PATH,
        [
          {
            location: 'components/first',
            name: 'first.component.cy.ts',
            discriminatorType: ''
          }
        ]
    );
  }
}
