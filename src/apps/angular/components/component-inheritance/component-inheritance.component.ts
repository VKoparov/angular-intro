import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FrameComponent} from "./example/component/frame/frame.component";
import {FileSettings} from "../../const/files-settings";

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
        FileSettings.URL_PATH,
        [
          {
            location: 'component-inheritance/example/component/frame',
            name: 'frame.component.ts',
            discriminatorType: '@Component'
          },
          {
            location: 'component-inheritance/example/component/information-step',
            name: 'information-step.component.ts',
            discriminatorType: '@Component'
          },
          {
            location: 'component-inheritance/example/component/content-load-step',
            name: 'content-load-step.component.ts',
            discriminatorType: '@Component'
          },
          {
            location: 'component-inheritance/example/model',
            name: 'frame-content.ts',
            discriminatorType: ''
          }
        ],
        FrameComponent
    );
  }
}
