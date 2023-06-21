import {Directive, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
    selector: '[scrollSpy]'
})
export class ScrollEventDirective {

    @Output() scrollStart: EventEmitter<any> = new EventEmitter<void>();

    @Output() scrollEnd: EventEmitter<any> = new EventEmitter<void>();

    private scrollTimeout!: any;

    @HostListener('scroll') onScroll() {
        clearTimeout(this.scrollTimeout);

        this.scrollStart.emit();

        this.scrollTimeout = setTimeout(() => {
            this.scrollEnd.emit();
        }, 200);
    }
}
