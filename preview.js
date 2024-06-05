import init from 'previewed';
import markdown from '@previewed/plugin-markdown-it';
import MarkdownIt from 'markdown-it';
import katex from '@vscode/markdown-it-katex';
import highlight from 'highlight.js';
import css from '@previewed/plugin-css';
import watch from '@previewed/plugin-watch';
import { resolve } from 'node:path';

init({
    dir: resolve('./src'),
    plugins: [
        markdown(
            new MarkdownIt({
                html: true,
                highlight(code, language) {
                    return highlight.highlight(code, { language }).value;
                },
            }).use(katex.default)
        ),
        css(
            `
            .katex-html {
                display: none;
            }
            *:not(.katex *, pre, code, code *) {
                font-family: david;
                direction: rtl;
            }
            code, code *, pre {
                direction: ltr;
            }
            [mathvariant=double-struck] {
                text-shadow: 0.05em 0 white, 0.1em 0 black;
            }
            `,
            { filetypes: ['md'] }
        ),
        watch({ filetypes: ['md'] }),
    ],
});
