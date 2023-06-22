import {Component} from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-environment-config',
    templateUrl: './environment-config.component.html',
    styleUrls: ['./environment-config.component.css']
})
export class EnvironmentConfigComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'Environment',
            FileSettings.URL_PATH,
            [
                {
                    location: 'components/environment-config/example',
                    name: 'package.json',
                    discriminatorType: ''
                },
                {
                    location: 'components/environment-config/example',
                    name: 'angular.json',
                    discriminatorType: ''
                },
                {
                    location: 'components/environment-config/example/environments',
                    name: 'environment.ts',
                    discriminatorType: ''
                },
                {
                    location: 'components/environment-config/example/environments',
                    name: 'environment.prod.ts',
                    discriminatorType: ''
                },
                {
                    location: 'components/environment-config/example/environments',
                    name: 'environment.dev.ts',
                    discriminatorType: ''
                }
            ]
        );
    }
}
