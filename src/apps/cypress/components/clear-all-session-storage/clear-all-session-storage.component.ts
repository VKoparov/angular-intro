import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-clear-all-session-storage',
    templateUrl: '../../../app/common/base/base.component.html',
    styleUrls: ['./clear-all-session-storage.component.css']
})
export class ClearAllSessionStorageComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'ClearAllSessionStorage',
            FileSettings.URL_PATH,
            [
                {
                    location: 'components/clear-all-session-storage',
                    name: 'clear-all-session-storage.component.cy.ts',
                    discriminatorType: ''
                }
            ]
        );
    }
}
