import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-dblclick',
    templateUrl: '../../../app/common/base/base.component.html',
    styleUrls: ['./dblclick.component.css']
})
export class DblclickComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'Dblclick',
            FileSettings.URL_PATH,
            [
                {
                    location: 'components/dblclick',
                    name: 'dblclick.component.cy.ts',
                    discriminatorType: ''
                }
            ]
        );
    }
}
