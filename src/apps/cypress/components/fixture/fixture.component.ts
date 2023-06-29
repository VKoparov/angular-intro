import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-fixture',
    templateUrl: '../../../app/common/base/base.component.html',
    styleUrls: ['./fixture.component.css']
})
export class FixtureComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'Fixture',
            FileSettings.URL_PATH,
            [
                {
                    location: 'components/fixture',
                    name: 'fixture.component.cy.ts',
                    discriminatorType: ''
                }
            ]
        );
    }
}
