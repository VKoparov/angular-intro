import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-document',
    templateUrl: '../../../app/common/base/base.component.html',
    styleUrls: ['./document.component.css']
})
export class DocumentComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'Document',
            FileSettings.URL_PATH,
            [
                {
                    location: 'components/document',
                    name: 'document.component.cy.ts',
                    discriminatorType: ''
                }
            ]
        );
    }
}
