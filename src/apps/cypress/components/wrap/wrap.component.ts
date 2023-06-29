import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-wrap',
    templateUrl: '../../../app/common/base/base.component.html',
    styleUrls: ['./wrap.component.css']
})
export class WrapComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'Wrap',
            FileSettings.URL_PATH,
            [
                {
                    location: 'components/wrap',
                    name: 'wrap.component.cy.ts',
                    discriminatorType: ''
                }
            ]
        );
    }
}
