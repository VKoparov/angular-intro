import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-select',
    templateUrl: '../../../app/common/base/base.component.html',
    styleUrls: ['./select.component.css']
})
export class SelectComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'Select',
            FileSettings.URL_PATH,
            [
                {
                    location: 'components/select',
                    name: 'select.component.cy.ts',
                    discriminatorType: ''
                }
            ]
        );
    }
}
