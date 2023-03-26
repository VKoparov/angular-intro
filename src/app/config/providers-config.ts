import {HIGHLIGHT_OPTIONS, HighlightOptions} from "ngx-highlightjs";

export const highlightConfig = {
    provide: HIGHLIGHT_OPTIONS,
    useValue: <HighlightOptions>{
        lineNumbers: true,
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        lineNumbersLoader: () => import('highlightjs-line-numbers.js' as any),
        languages: {
            typescript: () => import('highlight.js/lib/languages/typescript'),
            css: () => import('highlight.js/lib/languages/css'),
            xml: () => import('highlight.js/lib/languages/xml'),
        },
    },
};
