import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-tick',
    templateUrl: '../../../app/common/base/base.component.html',
    styleUrls: ['./tick.component.css']
})
export class TickComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'Tick',
            FileSettings.URL_PATH,
            [
                {
                    location: 'components/tick',
                    name: 'tick.component.cy.ts',
                    discriminatorType: ''
                }
            ]
        );
    }
}
