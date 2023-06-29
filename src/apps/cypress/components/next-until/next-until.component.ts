import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
  selector: 'app-next-until',
  templateUrl: '../../../app/common/base/base.component.html',
  styleUrls: ['./next-until.component.css']
})
export class NextUntilComponent extends BaseComponent {

  constructor(public override httpClient: HttpClient) {
    super(
        httpClient,
        'NextUntil',
        FileSettings.URL_PATH,
        [
          {
            location: 'components/next-until',
            name: 'next-until.component.cy.ts',
            discriminatorType: ''
          }
        ]
    );
  }
}
