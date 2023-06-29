import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-clock',
    templateUrl: '../../../app/common/base/base.component.html',
    styleUrls: ['./clock.component.css']
})
export class ClockComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'Clock',
            FileSettings.URL_PATH,
            [
                {
                    location: 'components/clock',
                    name: 'clock.component.cy.ts',
                    discriminatorType: ''
                }
            ]
        );
    }
}
