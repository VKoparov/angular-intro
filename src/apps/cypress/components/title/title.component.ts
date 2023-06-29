import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-title',
    templateUrl: '../../../app/common/base/base.component.html',
    styleUrls: ['./title.component.css']
})
export class TitleComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'Title',
            FileSettings.URL_PATH,
            [
                {
                    location: 'components/title',
                    name: 'title.component.cy.ts',
                    discriminatorType: ''
                }
            ]
        );
    }
}
