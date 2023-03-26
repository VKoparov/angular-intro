import {Component, ComponentRef, Input, OnInit, ViewChild} from '@angular/core';
import {DynamicComponentDirective} from "../../../directives/dynamic-component.directive";

@Component({
    selector: 'app-demo-code-view-modal',
    templateUrl: './demo-code-view-modal.component.html',
    styleUrls: ['./demo-code-view-modal.component.css']
})
export class DemoCodeViewModalComponent implements OnInit {

    @Input() demoComponent!: any;

    @ViewChild(DynamicComponentDirective, {static: true}) templateDirective!: DynamicComponentDirective;

    componentRef!: ComponentRef<any>;

    ngOnInit(): void {
        this.loadComponent();
    }

    loadComponent() {
        const viewContainerRef = this.templateDirective.viewContainerRef;
        viewContainerRef.clear();

        this.componentRef = viewContainerRef.createComponent(this.demoComponent);
    }
}
