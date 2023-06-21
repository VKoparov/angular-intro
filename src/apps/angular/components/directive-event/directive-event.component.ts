import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {DirectiveExampleComponent} from "./example/component/directive-example.component";
import {FileSettings} from "../../const/files-settings";

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
        FileSettings.URL_PATH,
        [
          {
            location: 'directive-event/example/directive',
            name: 'scroll-event.directive.ts',
            discriminatorType: '@Directive'
          },
          {
            location: 'directive-event/example/component',
            name: 'directive-example.component.ts',
            discriminatorType: '@Component'
          },
          {
            location: 'directive-event/example/component',
            name: 'directive-example.component.html',
            discriminatorType: '<'
          }
        ],
        DirectiveExampleComponent
    );
  }
}
