import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-assert',
    templateUrl: '../../../app/common/base/base.component.html',
    styleUrls: ['./assert.component.css']
})
export class AssertComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'Assert',
            FileSettings.URL_PATH,
            [
                {
                    location: 'components/assert',
                    name: 'assert.component.cy.ts',
                    discriminatorType: ''
                }
            ]
        );
    }
}
