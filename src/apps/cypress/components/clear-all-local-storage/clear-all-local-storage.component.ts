import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-clear-all-local-storage',
    templateUrl: '../../../app/common/base/base.component.html',
    styleUrls: ['./clear-all-local-storage.component.css']
})
export class ClearAllLocalStorageComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'ClearAllLocalStorage',
            FileSettings.URL_PATH,
            [
                {
                    location: 'components/clear-all-local-storage',
                    name: 'clear-all-local-storage.component.cy.ts',
                    discriminatorType: ''
                }
            ]
        );
    }
}
