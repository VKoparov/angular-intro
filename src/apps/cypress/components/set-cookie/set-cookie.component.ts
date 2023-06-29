import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-set-cookie',
    templateUrl: '../../../app/common/base/base.component.html',
    styleUrls: ['./set-cookie.component.css']
})
export class SetCookieComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'SetCookie',
            FileSettings.URL_PATH,
            [
                {
                    location: 'components/set-cookie',
                    name: 'set-cookie.component.cy.ts',
                    discriminatorType: ''
                }
            ]
        );
    }
}
