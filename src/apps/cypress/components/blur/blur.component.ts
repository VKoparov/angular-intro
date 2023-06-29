import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-blur',
    templateUrl: '../../../app/common/base/base.component.html',
    styleUrls: ['./blur.component.css']
})
export class BlurComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'Blur',
            FileSettings.URL_PATH,
            [
                {
                    location: 'components/blur',
                    name: 'blur.component.cy.ts',
                    discriminatorType: ''
                }
            ]
        );
    }
}
