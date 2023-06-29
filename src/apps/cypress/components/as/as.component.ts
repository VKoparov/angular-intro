import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-as',
    templateUrl: '../../../app/common/base/base.component.html',
    styleUrls: ['./as.component.css']
})
export class AsComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'As',
            FileSettings.URL_PATH,
            [
                {
                    location: 'components/as',
                    name: 'as.component.cy.ts',
                    discriminatorType: ''
                }
            ]
        );
    }
}
