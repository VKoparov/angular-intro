import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-stub',
    templateUrl: '../../../app/common/base/base.component.html',
    styleUrls: ['./stub.component.css']
})
export class StubComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'Stub',
            FileSettings.URL_PATH,
            [
                {
                    location: 'components/stub',
                    name: 'stub.component.cy.ts',
                    discriminatorType: ''
                }
            ]
        );
    }
}
