import {Component} from '@angular/core';
import {TemplateExampleComponent} from "./example/template-example.component";
import {HttpClient} from "@angular/common/http";
import {BaseComponent} from "../../../app/common/base/base.component";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-template-render',
    templateUrl: './template-render.component.html',
    styleUrls: ['./template-render.component.css']
})
export class TemplateRenderComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'Template Render',
            FileSettings.URL_PATH,
            [
                {
                    location: 'components/template-render/example',
                    name: 'template-example.component.ts',
                    discriminatorType: '@Component'
                },
                {
                    location: 'components/template-render/example',
                    name: 'template-example.component.html',
                    discriminatorType: '<'
                }
            ],
            TemplateExampleComponent
        );
    }
}
