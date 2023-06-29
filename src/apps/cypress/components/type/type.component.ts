import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-type',
    templateUrl: '../../../app/common/base/base.component.html',
    styleUrls: ['./type.component.css']
})
export class TypeComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'Type',
            FileSettings.URL_PATH,
            [
                {
                    location: 'components/type',
                    name: 'type.component.cy.ts',
                    discriminatorType: ''
                }
            ]
        );
    }
}
