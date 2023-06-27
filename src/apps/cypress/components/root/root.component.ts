import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
  selector: 'app-root',
  templateUrl: '../../../app/common/base/base.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent extends BaseComponent {

  constructor(public override httpClient: HttpClient) {
    super(
        httpClient,
        'Root',
        FileSettings.URL_PATH,
        [
          {
            location: 'components/root',
            name: 'root.component.cy.ts',
            discriminatorType: ''
          }
        ]
    );
  }
}
