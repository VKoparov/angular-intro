import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-exec',
    templateUrl: '../../../app/common/base/base.component.html',
    styleUrls: ['./exec.component.css']
})
export class ExecComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'Exec',
            FileSettings.URL_PATH,
            [
                {
                    location: 'components/exec',
                    name: 'exec.component.cy.ts',
                    discriminatorType: ''
                }
            ]
        );
    }
}
