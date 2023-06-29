import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
  selector: 'app-next-all',
  templateUrl: '../../../app/common/base/base.component.html',
  styleUrls: ['./next-all.component.css']
})
export class NextAllComponent extends BaseComponent {

  constructor(public override httpClient: HttpClient) {
    super(
        httpClient,
        'NextAll',
        FileSettings.URL_PATH,
        [
          {
            location: 'components/next-all',
            name: 'next-all.component.cy.ts',
            discriminatorType: ''
          }
        ]
    );
  }
}
