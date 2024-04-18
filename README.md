# previewed.js+markdown-it+katex+hebrew

Hey you! Have you ever wanted to write mathematical documents using markdown and latex, but also in hebrew so there was practically no tooling for it? Probably not - because I made this template mainly for myself - but if you do, you can follow the following steps:

-   **step 1:** Clone this repo and install all the stuff:
    ```bash
    git clone https://github.com/danielFHcode/previewed.js-markdown-it-katex-hebrew-template.git
    cd previewed.js-markdown-it-katex-hebrew-template
    pnpm install
    ```
    Or if you're a looser that uses npm:
    ```bash
    git clone https://github.com/danielFHcode/previewed.js-markdown-it-katex-hebrew-template.git
    cd previewed.js-markdown-it-katex-hebrew-template
    npm install
    ```
    Or if you already have a folder open (this one is mainly for me so I don't have to tweak the commands every time I copy and paste them):
    ```bash
    git clone https://github.com/danielFHcode/previewed.js-markdown-it-katex-hebrew-template.git .
    pnpm install
    ```
-   **step 2:** Start the dev server:
    ```bash
    node preview
    ```
    and open it in your browser.
-   **step 3:** Write and edit your markdown in the `src` directory and watch the browser reload.
-   **bonus step:** Once you're done you can print to pdf in you're browser to get a final pdf.
