import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-get-all-session-storage',
    templateUrl: '../../../app/common/base/base.component.html',
    styleUrls: ['./get-all-session-storage.component.css']
})
export class GetAllSessionStorageComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'GetAllSessionStorage',
            FileSettings.URL_PATH,
            [
                {
                    location: 'components/get-all-session-storage',
                    name: 'get-all-session-storage.component.cy.ts',
                    discriminatorType: ''
                }
            ]
        );
    }
}
