import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-and',
    templateUrl: '../../../app/common/base/base.component.html',
    styleUrls: ['./and.component.css']
})
export class AndComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'And',
            FileSettings.URL_PATH,
            [
                {
                    location: 'components/and',
                    name: 'and.component.cy.ts',
                    discriminatorType: ''
                }
            ]
        );
    }
}
