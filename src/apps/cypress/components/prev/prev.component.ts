import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
  selector: 'app-prev',
  templateUrl: '../../../app/common/base/base.component.html',
  styleUrls: ['./prev.component.css']
})
export class PrevComponent extends BaseComponent {

  constructor(public override httpClient: HttpClient) {
    super(
        httpClient,
        'Prev',
        FileSettings.URL_PATH,
        [
          {
            location: 'components/prev',
            name: 'prev.component.cy.ts',
            discriminatorType: ''
          }
        ]
    );
  }
}
