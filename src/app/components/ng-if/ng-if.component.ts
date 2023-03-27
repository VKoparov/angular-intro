import { Component } from '@angular/core';
import {BaseComponent} from "../../common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {NgIfExampleComponent} from "./example/ng-if-example.component";

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'Lazy Loading',
            NgIfExampleComponent,
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
            ]
        );
    }
}
