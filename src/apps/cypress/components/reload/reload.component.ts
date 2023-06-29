import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-reload',
    templateUrl: '../../../app/common/base/base.component.html',
    styleUrls: ['./reload.component.css']
})
export class ReloadComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'Reload',
            FileSettings.URL_PATH,
            [
                {
                    location: 'components/reload',
                    name: 'reload.component.cy.ts',
                    discriminatorType: ''
                }
            ]
        );
    }
}
