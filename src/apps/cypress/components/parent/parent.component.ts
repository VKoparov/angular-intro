import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
  selector: 'app-parent',
  templateUrl: '../../../app/common/base/base.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent extends BaseComponent {

  constructor(public override httpClient: HttpClient) {
    super(
        httpClient,
        'Parent',
        FileSettings.URL_PATH,
        [
          {
            location: 'components/parent',
            name: 'parent.component.cy.ts',
            discriminatorType: ''
          }
        ]
    );
  }
}
