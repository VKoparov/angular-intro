import {Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild} from '@angular/core';
import {TemplateExampleComponent} from "../../template-render/example/template-example.component";
import {DynamicComponentDirective} from "../../../directives/dynamic-component.directive";

@Component({
  selector: 'app-lazy-example',
  templateUrl: './lazy-example.component.html',
  styleUrls: ['./lazy-example.component.css']
})
export class LazyExampleComponent implements OnInit {

  components: any[] = [TemplateExampleComponent];

  @ViewChild(DynamicComponentDirective, {static: true}) templateDirective!: DynamicComponentDirective;

  componentRef!: ComponentRef<TemplateExampleComponent>;

  ngOnInit(): void {
    this.loadDynamicComponentBaseComponent(0);
  }

  loadDynamicComponentBaseComponent(index: number) {
    const viewContainerRef = this.templateDirective.viewContainerRef;
    viewContainerRef.clear();

    this.componentRef = viewContainerRef.createComponent(this.components[index]);
  }
}
