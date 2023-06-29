import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-<%= dasherize(name) %>',
    templateUrl: '../../../app/common/base/base.component.html',
    styleUrls: ['./<%= dasherize(name) %>.component.css']
})
export class <%= classify(name) %>Component extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            '<%= classify(name) %>',
            FileSettings.URL_PATH,
            [
                {
                    location: 'components/<%= dasherize(name) %>',
                    name: '<%= dasherize(name) %>.component.cy.ts',
                    discriminatorType: ''
                }
            ]
        );
    }
}
