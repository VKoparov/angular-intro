import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
  selector: 'app-children',
  templateUrl: '../../../app/common/base/base.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent extends BaseComponent {

  constructor(public override httpClient: HttpClient) {
    super(
        httpClient,
        'Children',
        FileSettings.URL_PATH,
        [
          {
            location: 'components/children',
            name: 'children.component.cy.ts',
            discriminatorType: ''
          }
        ]
    );
  }
}
