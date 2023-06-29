import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-get-all-local-storage',
    templateUrl: '../../../app/common/base/base.component.html',
    styleUrls: ['./get-all-local-storage.component.css']
})
export class GetAllLocalStorageComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'GetAllLocalStorage',
            FileSettings.URL_PATH,
            [
                {
                    location: 'components/get-all-local-storage',
                    name: 'get-all-local-storage.component.cy.ts',
                    discriminatorType: ''
                }
            ]
        );
    }
}
