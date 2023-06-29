import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-request',
    templateUrl: '../../../app/common/base/base.component.html',
    styleUrls: ['./request.component.css']
})
export class RequestComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'Request',
            FileSettings.URL_PATH,
            [
                {
                    location: 'components/request',
                    name: 'request.component.cy.ts',
                    discriminatorType: ''
                }
            ]
        );
    }
}
