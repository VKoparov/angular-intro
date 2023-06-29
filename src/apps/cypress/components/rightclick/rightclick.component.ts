import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-rightclick',
    templateUrl: '../../../app/common/base/base.component.html',
    styleUrls: ['./rightclick.component.css']
})
export class RightclickComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'Rightclick',
            FileSettings.URL_PATH,
            [
                {
                    location: 'components/rightclick',
                    name: 'rightclick.component.cy.ts',
                    discriminatorType: ''
                }
            ]
        );
    }
}
