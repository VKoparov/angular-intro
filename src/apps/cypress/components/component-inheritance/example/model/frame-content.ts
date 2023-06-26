import {EventEmitter} from "@angular/core";

export interface FrameContent {

    header: string;

    description?: string;

    mainActionEvent?: EventEmitter<any>

    mainAction(): void;
}
