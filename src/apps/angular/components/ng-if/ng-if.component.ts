import {Component} from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {NgIfExampleComponent} from "./example/ng-if-example.component";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-ng-if',
    templateUrl: '../../../app/common/base/base.component.html',
    styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'Ng If',
            FileSettings.URL_PATH,
            [
                {
                    location: 'components/ng-if/example',
                    name: 'ng-if-example.component.ts',
                    discriminatorType: '@Component'
                },
                {
                    location: 'components/ng-if/example',
                    name: 'ng-if-example.component.html',
                    discriminatorType: '<'
                }
            ],
            NgIfExampleComponent
        );
    }
}
