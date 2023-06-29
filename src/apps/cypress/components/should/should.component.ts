import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-should',
    templateUrl: '../../../app/common/base/base.component.html',
    styleUrls: ['./should.component.css']
})
export class ShouldComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'Should',
            FileSettings.URL_PATH,
            [
                {
                    location: 'components/should',
                    name: 'should.component.cy.ts',
                    discriminatorType: ''
                }
            ]
        );
    }
}
