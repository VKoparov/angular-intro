import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-window',
    templateUrl: '../../../app/common/base/base.component.html',
    styleUrls: ['./window.component.css']
})
export class WindowComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'Window',
            FileSettings.URL_PATH,
            [
                {
                    location: 'components/window',
                    name: 'window.component.cy.ts',
                    discriminatorType: ''
                }
            ]
        );
    }
}
