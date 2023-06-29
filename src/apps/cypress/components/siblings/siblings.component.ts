import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
  selector: 'app-siblings',
  templateUrl: '../../../app/common/base/base.component.html',
  styleUrls: ['./siblings.component.css']
})
export class SiblingsComponent extends BaseComponent {

  constructor(public override httpClient: HttpClient) {
    super(
        httpClient,
        'Siblings',
        FileSettings.URL_PATH,
        [
          {
            location: 'components/siblings',
            name: 'siblings.component.cy.ts',
            discriminatorType: ''
          }
        ]
    );
  }
}
