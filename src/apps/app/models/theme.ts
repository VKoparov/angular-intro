import {InjectionToken} from "@angular/core";
import {HOME_THEME} from "../themes/home-theme";

export const THEME_CONFIG: InjectionToken<Theme> = new InjectionToken<Theme>('theme.config');

export interface Theme {
    header: {
        color: string;
        textColor: string;
    }
    button: {
        color: string;
        textColor: string;
        boxShadow: string;
        border: string;
        opacity: string;
    }
    background: string;
}
