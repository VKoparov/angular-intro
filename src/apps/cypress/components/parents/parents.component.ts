import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
  selector: 'app-parents',
  templateUrl: '../../../app/common/base/base.component.html',
  styleUrls: ['./parents.component.css']
})
export class ParentsComponent extends BaseComponent {

  constructor(public override httpClient: HttpClient) {
    super(
        httpClient,
        'Parents',
        FileSettings.URL_PATH,
        [
          {
            location: 'components/parents',
            name: 'parents.component.cy.ts',
            discriminatorType: ''
          }
        ]
    );
  }
}
