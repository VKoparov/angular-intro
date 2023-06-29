import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-clear-local-storage',
    templateUrl: '../../../app/common/base/base.component.html',
    styleUrls: ['./clear-local-storage.component.css']
})
export class ClearLocalStorageComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'ClearLocalStorage',
            FileSettings.URL_PATH,
            [
                {
                    location: 'components/clear-local-storage',
                    name: 'clear-local-storage.component.cy.ts',
                    discriminatorType: ''
                }
            ]
        );
    }
}
