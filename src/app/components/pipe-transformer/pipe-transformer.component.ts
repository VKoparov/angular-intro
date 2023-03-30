import { Component } from '@angular/core';
import {BaseComponent} from "../../common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {PipeExampleComponent} from "./example/component/pipe-example.component";

@Component({
  selector: 'app-pipe-transformer',
  templateUrl: './pipe-transformer.component.html',
  styleUrls: ['./pipe-transformer.component.css']
})
export class PipeTransformerComponent extends BaseComponent {

  constructor(public override httpClient: HttpClient) {
    super(
        httpClient,
        'Pipe',
        [
          {
            location: 'components/pipe-transformer/example/pipe',
            name: 'format-text.pipe.ts',
            discriminatorType: '@Pipe'
          },
          {
            location: 'components/pipe-transformer/example/component',
            name: 'pipe-example.component.ts',
            discriminatorType: '@Component'
          },
          {
            location: 'components/pipe-transformer/example/component',
            name: 'pipe-example.component.html',
            discriminatorType: '<'
          }
        ],
        PipeExampleComponent
    );
  }
}
