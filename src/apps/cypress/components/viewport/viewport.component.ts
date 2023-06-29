import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-viewport',
    templateUrl: '../../../app/common/base/base.component.html',
    styleUrls: ['./viewport.component.css']
})
export class ViewportComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'Viewport',
            FileSettings.URL_PATH,
            [
                {
                    location: 'components/viewport',
                    name: 'viewport.component.cy.ts',
                    discriminatorType: ''
                }
            ]
        );
    }
}
