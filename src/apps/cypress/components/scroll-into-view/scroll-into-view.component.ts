import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-scroll-into-view',
    templateUrl: '../../../app/common/base/base.component.html',
    styleUrls: ['./scroll-into-view.component.css']
})
export class ScrollIntoViewComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'ScrollIntoView',
            FileSettings.URL_PATH,
            [
                {
                    location: 'components/scroll-into-view',
                    name: 'scroll-into-view.component.cy.ts',
                    discriminatorType: ''
                }
            ]
        );
    }
}
