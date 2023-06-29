import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-spy',
    templateUrl: '../../../app/common/base/base.component.html',
    styleUrls: ['./spy.component.css']
})
export class SpyComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'Spy',
            FileSettings.URL_PATH,
            [
                {
                    location: 'components/spy',
                    name: 'spy.component.cy.ts',
                    discriminatorType: ''
                }
            ]
        );
    }
}
