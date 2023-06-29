import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-wait',
    templateUrl: '../../../app/common/base/base.component.html',
    styleUrls: ['./wait.component.css']
})
export class WaitComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'Wait',
            FileSettings.URL_PATH,
            [
                {
                    location: 'components/wait',
                    name: 'wait.component.cy.ts',
                    discriminatorType: ''
                }
            ]
        );
    }
}
