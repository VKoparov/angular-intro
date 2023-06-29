import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-location',
    templateUrl: '../../../app/common/base/base.component.html',
    styleUrls: ['./location.component.css']
})
export class LocationComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'Location',
            FileSettings.URL_PATH,
            [
                {
                    location: 'components/location',
                    name: 'location.component.cy.ts',
                    discriminatorType: ''
                }
            ]
        );
    }
}
