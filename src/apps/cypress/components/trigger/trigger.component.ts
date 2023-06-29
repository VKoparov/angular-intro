import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-trigger',
    templateUrl: '../../../app/common/base/base.component.html',
    styleUrls: ['./trigger.component.css']
})
export class TriggerComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'Trigger',
            FileSettings.URL_PATH,
            [
                {
                    location: 'components/trigger',
                    name: 'trigger.component.cy.ts',
                    discriminatorType: ''
                }
            ]
        );
    }
}
