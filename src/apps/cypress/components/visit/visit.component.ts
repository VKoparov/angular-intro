import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-visit',
    templateUrl: '../../../app/common/base/base.component.html',
    styleUrls: ['./visit.component.css']
})
export class VisitComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'Visit',
            FileSettings.URL_PATH,
            [
                {
                    location: 'components/visit',
                    name: 'visit.component.cy.ts',
                    discriminatorType: ''
                }
            ]
        );
    }
}
