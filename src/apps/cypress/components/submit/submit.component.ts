import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-submit',
    templateUrl: '../../../app/common/base/base.component.html',
    styleUrls: ['./submit.component.css']
})
export class SubmitComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'Submit',
            FileSettings.URL_PATH,
            [
                {
                    location: 'components/submit',
                    name: 'submit.component.cy.ts',
                    discriminatorType: ''
                }
            ]
        );
    }
}
