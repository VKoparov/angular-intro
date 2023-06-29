import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-focused',
    templateUrl: '../../../app/common/base/base.component.html',
    styleUrls: ['./focused.component.css']
})
export class FocusedComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'Focused',
            FileSettings.URL_PATH,
            [
                {
                    location: 'components/focused',
                    name: 'focused.component.cy.ts',
                    discriminatorType: ''
                }
            ]
        );
    }
}
