import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-spread',
    templateUrl: '../../../app/common/base/base.component.html',
    styleUrls: ['./spread.component.css']
})
export class SpreadComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'Spread',
            FileSettings.URL_PATH,
            [
                {
                    location: 'components/spread',
                    name: 'spread.component.cy.ts',
                    discriminatorType: ''
                }
            ]
        );
    }
}
