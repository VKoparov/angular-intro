import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
  selector: 'app-filter',
  templateUrl: '../../../app/common/base/base.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent extends BaseComponent {

  constructor(public override httpClient: HttpClient) {
    super(
        httpClient,
        'Filter',
        FileSettings.URL_PATH,
        [
          {
            location: 'components/filter',
            name: 'filter.component.cy.ts',
            discriminatorType: ''
          }
        ]
    );
  }
}
