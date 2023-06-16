import { Component } from '@angular/core';
import {BaseComponent} from "../../common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {DirectiveExampleComponent} from "./example/component/directive-example.component";

@Component({
  selector: 'app-directive-event',
  templateUrl: './directive-event.component.html',
  styleUrls: ['./directive-event.component.css']
})
export class DirectiveEventComponent extends BaseComponent {

  constructor(public override httpClient: HttpClient) {
    super(
        httpClient,
        'Directive',
        [
          {
            location: 'components/directive-event/example/directive',
            name: 'scroll-event.directive.ts',
            discriminatorType: '@Directive'
          },
          {
            location: 'components/directive-event/example/component',
            name: 'directive-example.component.ts',
            discriminatorType: '@Component'
          },
          {
            location: 'components/directive-event/example/component',
            name: 'directive-example.component.html',
            discriminatorType: '<'
          }
        ],
        DirectiveExampleComponent
    );
  }
}
