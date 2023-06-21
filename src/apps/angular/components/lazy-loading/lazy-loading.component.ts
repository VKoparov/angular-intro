import {Component} from '@angular/core';
import {LazyExampleComponent} from "./example/lazy-example.component";
import {HttpClient} from "@angular/common/http";
import {BaseComponent} from "../../../app/common/base/base.component";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-lazy-loading',
    templateUrl: './lazy-loading.component.html',
    styleUrls: ['./lazy-loading.component.css']
})
export class LazyLoadingComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'Lazy Loading',
            FileSettings.URL_PATH,
            [
                {
                    location: 'lazy-loading',
                    name: 'lazy-loading-routing.module.ts',
                    discriminatorType: 'const'
                },
                {
                    location: 'lazy-loading/example',
                    name: 'lazy-example-routing.module.ts',
                    discriminatorType: 'const'
                },
                {
                    location: 'lazy-loading/example',
                    name: 'lazy-example.module.ts',
                    discriminatorType: '@NgModule'
                },
                {
                    location: 'lazy-loading/example',
                    name: 'lazy-example.component.ts',
                    discriminatorType: '@Component'
                },
                {
                    location: 'lazy-loading/example',
                    name: 'lazy-example.component.html',
                    discriminatorType: '<'
                }
            ],
            LazyExampleComponent
        );
    }
}
