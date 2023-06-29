import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-check',
    templateUrl: '../../../app/common/base/base.component.html',
    styleUrls: ['./check.component.css']
})
export class CheckComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'Check',
            FileSettings.URL_PATH,
            [
                {
                    location: 'components/check',
                    name: 'check.component.cy.ts',
                    discriminatorType: ''
                }
            ]
        );
    }
}
