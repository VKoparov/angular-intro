import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-hash',
    templateUrl: '../../../app/common/base/base.component.html',
    styleUrls: ['./hash.component.css']
})
export class HashComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'Hash',
            FileSettings.URL_PATH,
            [
                {
                    location: 'components/hash',
                    name: 'hash.component.cy.ts',
                    discriminatorType: ''
                }
            ]
        );
    }
}
