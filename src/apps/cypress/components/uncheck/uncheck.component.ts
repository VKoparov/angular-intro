import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-uncheck',
    templateUrl: '../../../app/common/base/base.component.html',
    styleUrls: ['./uncheck.component.css']
})
export class UncheckComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'Uncheck',
            FileSettings.URL_PATH,
            [
                {
                    location: 'components/uncheck',
                    name: 'uncheck.component.cy.ts',
                    discriminatorType: ''
                }
            ]
        );
    }
}
