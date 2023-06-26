import {AfterViewChecked, ChangeDetectorRef, Component, ComponentRef, OnInit, ViewChild} from '@angular/core';
import {ExampleComponent} from "../../../../../../app/common/example/example.component";
import {DynamicComponentDirective} from "../../../../../../app/directives/dynamic-component.directive";
import {FrameContent} from "../../model/frame-content";
import {InformationStepComponent} from "../information-step/information-step.component";
import {ContentLoadStepComponent} from "../content-load-step/content-load-step.component";

@Component({
  selector: 'app-frame',
  template: `
    <div class="frame-container">
      <ng-template dynamicComponent></ng-template>
    </div>
  `,
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnInit, AfterViewChecked {

  @ViewChild(DynamicComponentDirective, {static: true}) templateDirective!: DynamicComponentDirective;

  componentRef!: ComponentRef<FrameContent>;

  components: any[] = [InformationStepComponent, ContentLoadStepComponent];

  index: number = 0;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.loadDynamicComponentBaseComponent(this.index);
    this.handleContentAction();
  }

  ngAfterViewChecked(): void {
    this.changeDetectorRef.detectChanges();
  }

  loadDynamicComponentBaseComponent(index: number) {
    const viewContainerRef = this.templateDirective.viewContainerRef;
    viewContainerRef.clear();

    this.componentRef = viewContainerRef.createComponent<FrameContent>(this.components[index] as never);
  }

  handleContentAction() {
    this.componentRef.instance.mainActionEvent?.subscribe(event => {
      event.call(event, this);
      this.loadDynamicComponentBaseComponent(this.index);
    });
  }
}
