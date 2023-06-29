import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-expect',
    templateUrl: '../../../app/common/base/base.component.html',
    styleUrls: ['./expect.component.css']
})
export class ExpectComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'Expect',
            FileSettings.URL_PATH,
            [
                {
                    location: 'components/expect',
                    name: 'expect.component.cy.ts',
                    discriminatorType: ''
                }
            ]
        );
    }
}
