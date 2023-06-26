import {Theme} from "../../app/models/theme";

export const CYPRESS_THEME: Theme = {
    header: {
        color: 'transparent',
        textColor: 'slategray'
    },
    button: {
        color: 'white',
        textColor: 'darkslategrey',
        boxShadow: 'darkgrey 0 1px 30px',
        border: 'solid lightslategrey',
        opacity: '.6'
    },
    background: 'url(/assets/cypress-background.jpg)'
};
