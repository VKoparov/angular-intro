import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-url',
    templateUrl: '../../../app/common/base/base.component.html',
    styleUrls: ['./url.component.css']
})
export class UrlComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'Url',
            FileSettings.URL_PATH,
            [
                {
                    location: 'components/url',
                    name: 'url.component.cy.ts',
                    discriminatorType: ''
                }
            ]
        );
    }
}
