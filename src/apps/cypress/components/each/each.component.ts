import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-each',
    templateUrl: '../../../app/common/base/base.component.html',
    styleUrls: ['./each.component.css']
})
export class EachComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'Each',
            FileSettings.URL_PATH,
            [
                {
                    location: 'components/each',
                    name: 'each.component.cy.ts',
                    discriminatorType: ''
                }
            ]
        );
    }
}
