import {Theme} from "../../app/models/theme";

export const CYPRESS_THEME: Theme = {
    header: {
        color: 'rgba(255, 255, 255, 0.9)',
        textColor: 'slategray'
    },
    button: {
        color: 'linear-gradient(315deg, #b3cdd1 0%, #9fa4c4 74%)',
        textColor: 'white',
        boxShadow: 'darkgrey 0 1px 20px',
        border: 'none',
        opacity: '.6'
    },
    background: 'url(/assets/cypress-background.jpg)'
};
