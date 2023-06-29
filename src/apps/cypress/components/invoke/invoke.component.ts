import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-invoke',
    templateUrl: '../../../app/common/base/base.component.html',
    styleUrls: ['./invoke.component.css']
})
export class InvokeComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'Invoke',
            FileSettings.URL_PATH,
            [
                {
                    location: 'components/invoke',
                    name: 'invoke.component.cy.ts',
                    discriminatorType: ''
                }
            ]
        );
    }
}
