import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-screenshot',
    templateUrl: '../../../app/common/base/base.component.html',
    styleUrls: ['./screenshot.component.css']
})
export class ScreenshotComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'Screenshot',
            FileSettings.URL_PATH,
            [
                {
                    location: 'components/screenshot',
                    name: 'screenshot.component.cy.ts',
                    discriminatorType: ''
                }
            ]
        );
    }
}
