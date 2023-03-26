import {Component} from '@angular/core';
import {DynamicExampleComponent} from './example/dynamic-example.component';
import {HttpClient} from "@angular/common/http";
import {BaseComponent} from "../../common/base/base.component";

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
            DynamicExampleComponent,
            [
                {
                    location: 'components/dynamic-render/example',
                    name: 'dynamic-example.component.ts',
                    discriminatorType: '@Component'
                },
                {
                    location: 'components/dynamic-render/example',
                    name: 'dynamic-example.component.html',
                    discriminatorType: '<'
                },
                {
                    location: 'directives',
                    name: 'dynamic-component.directive.ts',
                    discriminatorType: '@Directive'
                }
            ]
        );
    }
}
