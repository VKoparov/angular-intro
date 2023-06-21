import {Component} from '@angular/core';
import {DynamicExampleComponent} from './example/component/dynamic-example.component';
import {HttpClient} from "@angular/common/http";
import {BaseComponent} from "../../../app/common/base/base.component";
import {FileSettings} from "../../const/files-settings";

@Component({
  selector: 'app-dynamic-render',
  templateUrl: './dynamic-render.component.html',
  styleUrls: ['./dynamic-render.component.css']
})
export class DynamicRenderComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'Dynamic Render',
            FileSettings.URL_PATH,
            [
                {
                    location: 'dynamic-render/example/component',
                    name: 'dynamic-example.component.ts',
                    discriminatorType: '@Component'
                },
                {
                    location: 'dynamic-render/example/component',
                    name: 'dynamic-example.component.html',
                    discriminatorType: '<'
                },
                {
                    location: 'dynamic-render/example/directives',
                    name: 'dynamic-component.directive.ts',
                    discriminatorType: '@Directive'
                }
            ],
            DynamicExampleComponent
        );
    }
}
