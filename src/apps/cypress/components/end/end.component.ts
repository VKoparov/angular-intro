import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-end',
    templateUrl: '../../../app/common/base/base.component.html',
    styleUrls: ['./end.component.css']
})
export class EndComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'End',
            FileSettings.URL_PATH,
            [
                {
                    location: 'components/end',
                    name: 'end.component.cy.ts',
                    discriminatorType: ''
                }
            ]
        );
    }
}
