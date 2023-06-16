import {Component, Input} from '@angular/core';
import {SourceCode} from "../../../models/source-code";

@Component({
  selector: 'app-source-code-view-modal',
  templateUrl: './source-code-view-modal.component.html',
  styleUrls: ['./source-code-view-modal.component.css']
})
export class SourceCodeViewModalComponent {

  @Input() data!: SourceCode[];
}
