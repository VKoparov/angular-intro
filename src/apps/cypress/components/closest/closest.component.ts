import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
  selector: 'app-closest',
  templateUrl: '../../../app/common/base/base.component.html',
  styleUrls: ['./closest.component.css']
})
export class ClosestComponent extends BaseComponent {

  constructor(public override httpClient: HttpClient) {
    super(
        httpClient,
        'Closest',
        FileSettings.URL_PATH,
        [
          {
            location: 'components/closest',
            name: 'closest.component.cy.ts',
            discriminatorType: ''
          }
        ]
    );
  }
}
