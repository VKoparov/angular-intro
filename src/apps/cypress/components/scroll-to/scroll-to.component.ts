import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-scroll-to',
    templateUrl: '../../../app/common/base/base.component.html',
    styleUrls: ['./scroll-to.component.css']
})
export class ScrollToComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'ScrollTo',
            FileSettings.URL_PATH,
            [
                {
                    location: 'components/scroll-to',
                    name: 'scroll-to.component.cy.ts',
                    discriminatorType: ''
                }
            ]
        );
    }
}
