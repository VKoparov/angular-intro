import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-then',
    templateUrl: '../../../app/common/base/base.component.html',
    styleUrls: ['./then.component.css']
})
export class ThenComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'Then',
            FileSettings.URL_PATH,
            [
                {
                    location: 'components/then',
                    name: 'then.component.cy.ts',
                    discriminatorType: ''
                }
            ]
        );
    }
}
