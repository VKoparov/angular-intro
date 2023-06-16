import {Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild} from '@angular/core';
import {DynamicComponentDirective} from "../../../directives/dynamic-component.directive";
import {ExampleComponent} from "../../../common/example/example.component";

@Component({
  selector: 'app-dynamic-example',
  templateUrl: './dynamic-example.component.html',
  styleUrls: ['./dynamic-example.component.css']
})
export class DynamicExampleComponent implements OnInit {

  components: any[] = [ExampleComponent];

  @ViewChild(DynamicComponentDirective, {static: true}) templateDirective!: DynamicComponentDirective;

  componentRef!: ComponentRef<ExampleComponent>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit(): void {
    this.loadDynamicComponentBaseComponent(0);
  }

  loadDynamicComponentBaseComponent(index: number) {
    const componentInstance = this.componentFactoryResolver.resolveComponentFactory(this.components[index] as never);

    const viewContainerRef = this.templateDirective.viewContainerRef;
    viewContainerRef.clear();

    this.componentRef = viewContainerRef.createComponent(componentInstance as never);
    this.componentRef.instance.header = 'Example Header';
  }
}
