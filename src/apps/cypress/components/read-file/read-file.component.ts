import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-read-file',
    templateUrl: '../../../app/common/base/base.component.html',
    styleUrls: ['./read-file.component.css']
})
export class ReadFileComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'ReadFile',
            FileSettings.URL_PATH,
            [
                {
                    location: 'components/read-file',
                    name: 'read-file.component.cy.ts',
                    discriminatorType: ''
                }
            ]
        );
    }
}
