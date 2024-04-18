import init from 'previewed';
import markdown from '@previewed/plugin-markdown-it';
import MarkdownIt from 'markdown-it';
import katex from '@vscode/markdown-it-katex';
import css from '@previewed/plugin-css';
import watch from '@previewed/plugin-watch';
import { resolve } from 'node:path';

init({
    dir: resolve('./src'),
    plugins: [
        markdown(new MarkdownIt().use(katex.default)),
        css(
            `
            .katex-html {
                display: none;
            }
            *:not(.katex *) {
                font-family: david;
                direction: rtl;
            }
            [mathvariant=double-struck] {
                text-shadow: 0.13em 0 black;
            }
            `,
            { filetypes: ['md'] }
        ),
        watch({ filetypes: ['md'] }),
    ],
});
