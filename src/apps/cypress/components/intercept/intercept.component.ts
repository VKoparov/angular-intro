import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-intercept',
    templateUrl: '../../../app/common/base/base.component.html',
    styleUrls: ['./intercept.component.css']
})
export class InterceptComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'Intercept',
            FileSettings.URL_PATH,
            [
                {
                    location: 'components/intercept',
                    name: 'intercept.component.cy.ts',
                    discriminatorType: ''
                }
            ]
        );
    }
}
