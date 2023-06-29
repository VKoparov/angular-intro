import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-clear',
    templateUrl: '../../../app/common/base/base.component.html',
    styleUrls: ['./clear.component.css']
})
export class ClearComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'Clear',
            FileSettings.URL_PATH,
            [
                {
                    location: 'components/clear',
                    name: 'clear.component.cy.ts',
                    discriminatorType: ''
                }
            ]
        );
    }
}
