import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-should-callback',
    templateUrl: '../../../app/common/base/base.component.html',
    styleUrls: ['./should-callback.component.css']
})
export class ShouldCallbackComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'ShouldCallback',
            FileSettings.URL_PATH,
            [
                {
                    location: 'components/should-callback',
                    name: 'should-callback.component.cy.ts',
                    discriminatorType: ''
                }
            ]
        );
    }
}
