import { Component } from '@angular/core';
import {BaseComponent} from "../../common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {LazyExampleComponent} from "../lazy-loading/example/lazy-example.component";
import {FrameComponent} from "./example/component/frame/frame.component";

@Component({
  selector: 'app-component-inheritance',
  templateUrl: './component-inheritance.component.html',
  styleUrls: ['./component-inheritance.component.css']
})
export class ComponentInheritanceComponent extends BaseComponent {

  constructor(public override httpClient: HttpClient) {
    super(
        httpClient,
        'Component Inheritance',
        [
          {
            location: 'components/component-inheritance/example/component/frame',
            name: 'frame.component.ts',
            discriminatorType: '@Component'
          },
          {
            location: 'components/component-inheritance/example/component/information-step',
            name: 'information-step.component.ts',
            discriminatorType: '@Component'
          },
          {
            location: 'components/component-inheritance/example/component/content-load-step',
            name: 'content-load-step.component.ts',
            discriminatorType: '@Component'
          },
          {
            location: 'components/component-inheritance/example/model',
            name: 'frame-content.ts',
            discriminatorType: ''
          }
        ],
        FrameComponent
    );
  }
}
