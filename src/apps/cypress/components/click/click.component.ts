import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-click',
    templateUrl: '../../../app/common/base/base.component.html',
    styleUrls: ['./click.component.css']
})
export class ClickComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'Click',
            FileSettings.URL_PATH,
            [
                {
                    location: 'components/click',
                    name: 'click.component.cy.ts',
                    discriminatorType: ''
                }
            ]
        );
    }
}
