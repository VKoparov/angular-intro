import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-go',
    templateUrl: '../../../app/common/base/base.component.html',
    styleUrls: ['./go.component.css']
})
export class GoComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'Go',
            FileSettings.URL_PATH,
            [
                {
                    location: 'components/go',
                    name: 'go.component.cy.ts',
                    discriminatorType: ''
                }
            ]
        );
    }
}
