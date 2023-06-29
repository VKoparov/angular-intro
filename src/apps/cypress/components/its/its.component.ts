import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-its',
    templateUrl: '../../../app/common/base/base.component.html',
    styleUrls: ['./its.component.css']
})
export class ItsComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'Its',
            FileSettings.URL_PATH,
            [
                {
                    location: 'components/its',
                    name: 'its.component.cy.ts',
                    discriminatorType: ''
                }
            ]
        );
    }
}
