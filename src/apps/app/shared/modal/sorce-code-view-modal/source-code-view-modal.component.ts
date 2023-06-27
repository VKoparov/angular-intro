import {Component, Inject, Input} from '@angular/core';
import {SourceCode} from "../../../models/source-code";
import {Theme, THEME_CONFIG} from "../../../models/theme";

@Component({
  selector: 'app-source-code-view-modal',
  templateUrl: './source-code-view-modal.component.html',
  styleUrls: ['./source-code-view-modal.component.css']
})
export class SourceCodeViewModalComponent {

  @Input() data!: SourceCode[];

  protected theme!: Theme;

  constructor(
      @Inject(THEME_CONFIG) theme: Theme
  ) {
    this.theme = theme;
  }
}
