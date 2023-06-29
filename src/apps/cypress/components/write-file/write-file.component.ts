import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-write-file',
    templateUrl: '../../../app/common/base/base.component.html',
    styleUrls: ['./write-file.component.css']
})
export class WriteFileComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'WriteFile',
            FileSettings.URL_PATH,
            [
                {
                    location: 'components/write-file',
                    name: 'write-file.component.cy.ts',
                    discriminatorType: ''
                }
            ]
        );
    }
}
