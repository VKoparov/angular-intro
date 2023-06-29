import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-focus',
    templateUrl: '../../../app/common/base/base.component.html',
    styleUrls: ['./focus.component.css']
})
export class FocusComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'Focus',
            FileSettings.URL_PATH,
            [
                {
                    location: 'components/focus',
                    name: 'focus.component.cy.ts',
                    discriminatorType: ''
                }
            ]
        );
    }
}
